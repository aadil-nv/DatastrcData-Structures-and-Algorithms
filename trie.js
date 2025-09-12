class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
        this.suffixRoot = new TrieNode(); // extra root for suffix trie
    }

    insert(word) {
        // Normal Trie for prefix
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;

        // Reversed Trie for suffix
        let revNode = this.suffixRoot;
        for (let i = word.length - 1; i >= 0; i--) {
            let char = word[i];
            if (!revNode.children[char]) {
                revNode.children[char] = new TrieNode();
            }
            revNode = revNode.children[char];
        }
        revNode.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    findWordsWithPrefix(prefix) {
        const words = [];
        let node = this.root;

        for (let char of prefix) {
            if (!(char in node.children)) return words;
            node = node.children[char];
        }

        const collectWords = (node, currentWord) => {
            if (node.isEndOfWord) words.push(currentWord);
            for (let char in node.children) {
                collectWords(node.children[char], currentWord + char);
            }
        };
        collectWords(node, prefix);

        return words;
    }

    findWordsWithSuffix(suffix) {
        const words = [];
        let node = this.suffixRoot;

        for (let i = suffix.length - 1; i >= 0; i--) {
            let char = suffix[i];
            if (!(char in node.children)) return words;
            node = node.children[char];
        }

        const collectWords = (node, currentWord) => {
            if (node.isEndOfWord) words.push(currentWord.split("").reverse().join(""));
            for (let char in node.children) {
                collectWords(node.children[char], currentWord + char);
            }
        };
        collectWords(node, suffix.split("").reverse().join(""));

        return words;
    }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("app");
trie.insert("apples");
trie.insert("pineapple");

console.log("Search 'app':", trie.search("app")); // true

console.log("Prefix 'app':", trie.findWordsWithPrefix("app")); 
// [ 'app', 'apple', 'apples' ]

console.log("Suffix 'ple':", trie.findWordsWithSuffix("ple")); 
// [ 'apple', 'apples', 'pineapple' ]

console.log("Suffix 'ana':", trie.findWordsWithSuffix("ana")); 
// [ 'banana' ]
