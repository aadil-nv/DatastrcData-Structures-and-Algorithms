class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
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

        return words;ch
    }

    
    
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("app");
trie.insert("apples");
console.log(trie.search("app"));

console.log(trie.findWordsWithPrefix("a")); // Output: [ 'app', 'apple', 'apples' ]

