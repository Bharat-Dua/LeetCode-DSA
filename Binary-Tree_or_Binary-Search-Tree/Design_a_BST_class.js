//? Construct Binary Search Tree

//*Construct BST:-Design a Binary Search Tree class that supports the following:

// 1.Insert a value

// 2.Remove a value. This method should remove the first occurrence of a value.

// 3.Find a value. If the value is found it should return the node with the value else return false.
//* TC (avg,best) - O(log n) -> if the tree is balanced tree ,here log n is the height of the tree, worst-O(n) -> if it's unbalanced BT i.e. linked list
//* SC -O(1)
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
  insert(value) {
    //return this once you are done
    //write your code here
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let tree = this.root;
    while (true) {
      if (value < tree.value) {
        // move left
        if (!tree.left) {
          tree.left = node;
          return this;
        }
        tree = tree.left;
      } else {
        // move right
        if (!tree.right) {
          tree.right = node;
          return this;
        }
        tree = tree.right;
      }
    }
  }

  find(value) {
    //write your code here
    if (!this.root) return false;
    while (true) {
      if (value < this.root) tree = tree.left;
      else if (value > this.root) tree = tree.right;
      else if (value === tree.value) return tree;
    }
    return false;
  }

  remove(value, current = this.root, parent = null) {
    //write your code here
    if (!this.root) return false;
    while (current) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      } else if (value > current.value) {
        parent = current;
        current = current.right;
      } else {
        // found the element
        // check if that has two child or not
        if (current.left !== null && current.right !== null) {
          // find the smallest element in the right subtree
          current.value = this.getMin(current.right);
          this.remove(current.value, current.right, current);
          // if deleting the root node
        } else if (parent === null) {
          if (current.left !== null) {
            current.value = current.left.value;
            current.left = current.left.left;
            current.right = current.left.right;
          } else if (current.right !== null) {
            current.value = current.right.value;
            current.left = current.right.left;
            current.right = current.right.right;
          } else {
            // if this is a single root node
            this.root = null;
          }
        } else if (current === parent.left) {
          parent.left = current.left !== null ? current.left : current.right;
        } else if (current === parent.right) {
          parent.right = current.left !== null ? current.left : current.right;
        }
        break;
      }
    }
    return this;
  }

  getMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node.value;
  }
}

//For you to test on your own

//                      20
//                    /   \
//                    6    35
//                   / \   /  \
//                   3  8  27  55
//                  / \    / \   \
//                  1  3   25 29  60

let bst = new BinarySearchTree();

bst.insert(20);
bst.insert(6);
bst.insert(35);
bst.insert(3);
bst.insert(8);
bst.insert(27);
bst.insert(55);
bst.insert(1);
bst.insert(3);
bst.insert(25);
bst.insert(29);
bst.insert(60);
