class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insertArray(values) {
        values.forEach(value => this.insert(value));
    }

    insert(value) {
        if (value === null) return; // Skip null values
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    // ... (other methods remain unchanged)

    preOrder(root) {
        if (root) {
            this.preOrder(root.left);
            console.log(root.value);
            this.preOrder(root.right);
        }
    }

    findDepth(root) {
        if (root === null) {
            return 0;
        }

        let leftDepth = this.findDepth(root.left);
        let rightDepth = this.findDepth(root.right);

        return Math.max(leftDepth, rightDepth) + 1;
    }
}

const bst = new BinarySearchTree();
bst.insertArray([-10,-3,0,5,9]);
bst.preOrder(bst.root);
console.log("min node is :>", bst.findDepth(bst.root));
