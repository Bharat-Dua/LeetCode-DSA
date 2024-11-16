//* Approach 1

// iteratively
//* T- O(log n) S-(1)
function binarySearchIterative(num, target) {
  let left = 0;
  let right = num.length - 1;
  let middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (target === num[middle]) return middle;
    if (target < num[middle]) right = middle - 1;
    else left = middle + 1;
  }
  return -1;
}
console.log(binarySearchIterative([1, 2, 3, 4, 5], 3));

//* Approach 2

// recursively
//* T- O(log n) S - O(log n)
function binarySearchRecursive(num, target) {
  function helper(num, target, left, right) {
    if (left > right) return -1;
    let middle = Math.floor((left + right) / 2);
    if (target === num[middle]) return middle;
    else if (target < num[middle]) return helper(num, target, left, middle - 1);
    else return helper(num, target, middle + 1, right);
  }
  return helper(num, target, 0, num.length - 1);
}
console.log(binarySearchRecursive([2, 3, 4, 5, 6, 7], 4));
