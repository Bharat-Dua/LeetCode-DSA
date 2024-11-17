//* T - O(log n)
//* S-O(1) - iteratively updating the value of the node, no extra space is used.
//* S- O(log n) - in case of recursion, space complexity is O(log n) due to the call stack.

// iteratively approach
function searchRotatedArray(num, target) {
  let left = 0;
  let right = num.length - 1;
  let middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (target === num[middle]) return middle;
    if (num[left] <= num[middle]) {
      //left is sorted
      if (target >= num[left] && target < num[middle]) {
        //explore left part
        right = middle - 1;
      } else {
        //explore right part
        left = middle + 1;
      }
    } else {
      //right is sorted
      if (target <= num[right] && target > num[middle]) {
        // explore right part
        left = middle + 1;
      } else {
        //explore left part
        right = middle - 1;
      }
    }
  }
  return -1;
}
console.log(searchRotatedArray([1, 2, 3, 4, 5, 6, 7], 3));
