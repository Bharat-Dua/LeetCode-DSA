//* TC,SC-O(n)

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
var sortedArrayToBST = function (nums) {
  if (!nums || nums.length === 0) return null;
  function sortedArrayToBinaryTree(array, left = 0, right = array.length - 1) {
    //base case
    if (left > right) return null;
    let middle = Math.floor((left + right) / 2);
    let node = new Node(array[middle]);
    //recursive call
    node.left = sortedArrayToBinaryTree(array, left, middle - 1);
    node.right = sortedArrayToBinaryTree(array, middle + 1, right);
    return node;
  }

  return sortedArrayToBinaryTree([1, 2, 3, 4, 5]);
};
