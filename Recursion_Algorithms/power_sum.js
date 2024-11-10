//* Recursive approach
//* T-O(n),S-O(d) d-> max depth of tree,recursive call stack at once

function powerSum(arr, power = 1) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += powerSum(arr[i], power + 1);
    } else {
      sum += arr[i];
    }
  }
  return Math.pow(sum, power);
}
console.log(powerSum([1, 2, [3, 4], [[2]]]));
