import Node from "./node.js";

export default class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a node into the BST
    insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }
}