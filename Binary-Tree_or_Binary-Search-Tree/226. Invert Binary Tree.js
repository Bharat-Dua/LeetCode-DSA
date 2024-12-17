class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(array) {
    if (!array.length) return;
    let i = 0;
    // if root is null
    if (!this.root) {
      if (array[0] === null) return;
      else {
        let node = new Node(array[0]);
        this.root = node;
        i++;
        if (i === array.length) return this;
      }
    }
    // insert remaining elements in queue
    let queue = [this.root];
    while (queue.length) {
      let current = queue.shift();
      // left
      if (!current.left) {
        if (array[i] !== null) {
          let node = new Node(array[i]);
          current.left = node;
        }
        i++;
        if (i === array.length) return this;
      }
      if (current.left) {
        queue.push(current.left);
      }
      // Right
      if (!current.right) {
        if (array[i] !== null) {
          let node = new Node(array[i]);
          current.right = node;
        }
        i++;
        if (i === array.length) return this;
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
}
//* approach 1 - iterative
//* TC -O(n) ,SC-O(n)

function invertBTIteratively(root) {
  if (!root) return null;
  let queue = [root];
  while (queue.length) {
    const current = queue.shift();
    [current.left, current.right] = [current.right, current.left];
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return root;
}
//* approach 2 - recursively
//* TC -O(n), SC - O(max depth) -> O(height of tree) -> recursive call stack , O(log n) -> balanced binary tree , O(n) -> skewed tree

function invertBTRecursively(node) {
  if (node === null) return;
  //swap
  [node.left, node.right] = [node.right, node.left];
  //left
  invertBTRecursively(node.left);
  //right
  invertBTRecursively(node.right);
  return node;
}
const tree = new BinaryTree();
tree.insert([
  7,
  11,
  1,
  null,
  7,
  2,
  8,
  null,
  null,
  null,
  3,
  null,
  null,
  5,
  null,
]);
invertBTIteratively(tree.root);
invertBTRecursively(tree.root);
