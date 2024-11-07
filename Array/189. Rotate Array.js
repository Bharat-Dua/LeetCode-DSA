//* Approach 1

// brute force approach
//* T-o(n),S-o(k) beats:100%,runtime:0ms
function rotateArray(array, k) {
  let length = array.length;
  k = k % length;
  let temp = array.slice(length - k);
  for (let i = length - k - 1; i >= 0; i--) {
    array[i + k] = array[i];
  }
  for (let i = 0; i < k; i++) {
    array[i] = temp[i];
  }
  return array;
}

const arr = [2, 3, 4, 5, 6];
console.log(rotateArray(arr, 2));

//* Approach 2

// optimal approach
//* T-o(n)  , S-o(1)

// helper function

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

function rotateArray(arr, k) {
  k = k % length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  return arr;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6], 2));
