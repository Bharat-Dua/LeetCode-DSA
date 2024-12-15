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
    if (!this.root) {
      if (array[0] === null) return;
      else {
        let node = new Node(array[0]);
        this.root = node;
        i++;
        if (i === array.length) return;
      }
    }
  }
}

const levelOrderTraversal = function (root) {
  if (!root) return [];
  const output = [];
  //write code here
  return output;
};

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
levelOrderTraversal(tree.root);
