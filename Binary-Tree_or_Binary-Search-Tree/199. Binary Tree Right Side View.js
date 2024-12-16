//* TC,SC-O(n)

//* TC,SC- O(n)
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

const rightView = function (root) {
  if (!root) return [];
  const right = [];
  let queue = [root];
  while (queue.length) {
    let length = queue.length;
    const count = 0;
    while (count < length) {
      count++;
      const current = queue.shift();
      if (count === length) right.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
  return right;
};

console.log(rightView(tree.root));

const leftView = function (root) {
  if (!root) return [];
  const left = [];
  let queue = [root];
  while (queue.length) {
    let length = queue.length;
    const count = 0;
    while (count < length) {
      count++;
      const current = queue.shift();
      if (count === 1) left.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
  return left;
};
console.log(leftView(tree.root));
