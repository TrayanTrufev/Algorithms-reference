import Node from "./node.js";

const dfsPreOrder = (root) => {
  if (root === null) return;

  console.log(`preOrder ${root.value}`);
  dfsPreOrder(root.left);
  dfsPreOrder(root.right);
};

const dfsPostOrder = (root) => {
  if (root === null) return;

  dfsPostOrder(root.left);
  dfsPostOrder(root.right);
  console.log(`postOrder ${root.value}`);
};

const dfsInOrder = (root) => {
  if (root === null) return;

  dfsInOrder(root.left);
  console.log(`inOrder ${root.value}`);
  dfsInOrder(root.right);
};

// Example tree:
//       1
//      / \
//     2   3
//    / \   \
//   4   5   6

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

dfsInOrder(root);

dfsPostOrder(root);

dfsPreOrder(root);
