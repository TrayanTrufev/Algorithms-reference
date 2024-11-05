import Node from "./node.js";

class AVLTree {
    constructor() {
        this.root = null;
    }

    // Helper function to get the height of a node
    getHeight(node) {
        return node ? node.height : 0;
    }

    // Right rotation
    rightRotate(y) {
        const x = y.left;
        const T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        // Return new root
        return x;
    }

    // Left rotation
    leftRotate(x) {
        const y = x.right;
        const T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        // Return new root
        return y;
    }

    // Get balance factor of a node
    getBalance(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    // Insert a node with a given value
    insert(value) {
        this.root = this._insertNode(this.root, value);
    }

    // Recursive function to insert a node and balance the tree
    _insertNode(node, value) {
        // Perform normal BST insertion
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this._insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertNode(node.right, value);
        } else {
            // Duplicate values are not allowed in the AVL Tree
            return node;
        }

        // Update the height of the ancestor node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // Get the balance factor of this ancestor node to check if it's unbalanced
        const balance = this.getBalance(node);

        // Perform rotations based on the balance factor

        // Left Left Case
        if (balance > 1 && value < node.left.value) {
            return this.rightRotate(node);
        }

        // Right Right Case
        if (balance < -1 && value > node.right.value) {
            return this.leftRotate(node);
        }

        // Left Right Case
        if (balance > 1 && value > node.left.value) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // Right Left Case
        if (balance < -1 && value < node.right.value) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        // Return the (unchanged) node pointer
        return node;
    }

    // In-order traversal to print the tree
    inOrder() {
        this._inOrder(this.root);
    }

    _inOrder(node) {
        if (node !== null) {
            this._inOrder(node.left);
            console.log(node.value);
            this._inOrder(node.right);
        }
    }
}

// Example usage:
const avl = new AVLTree();
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(40);
avl.insert(50);
avl.insert(25);

console.log("In-order traversal of the constructed AVL tree:");
avl.inOrder();
