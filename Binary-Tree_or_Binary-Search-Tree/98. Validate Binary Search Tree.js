//* TC,SC - O(h) -> height of the BST , worst case - O(n) -> when tree is skewed where tree looks like LL
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

// function to check whether the tree is valid BST or not
function validBST(root) {
  return isBST(root, -Infinity, Infinity);
}

function isBST(node, min, max) {
  if (node == null) return true;
  let value = node.value;
  if (value <= min || value >= max) return false; // min<value<max
  //set the max and min for left and right child
  const isLeft = isBST(node.left, min, value);
  const isRight = isBST(node.right, value, max);
  return isLeft && isRight;
}
const tree = new BinaryTree();

tree.insert([
  10,
  5,
  20,
  3,
  7,
  15,
  30,
  null,
  4,
  null,
  null,
  null,
  17,
  null,
  null,
  null,
  null,
  null,
  18,
]);

// Test the function
console.log(validBST(tree.root)); // Output: true
