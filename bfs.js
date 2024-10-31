import Node from "./node.js";

// BFS with queue

function bfs(root) {
    if (root === null) return;
  
    const queue = [root];
  
    while (queue.length > 0) {
      const node = queue.shift(); 
  
      console.log(node.value);
  
      if (node.left !== null) queue.push(node.left);
  
      if (node.right !== null) queue.push(node.right);
    }
  }
  
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
  

  bfs(root);
