//* Approach 1

var sortedSquares = function (nums) {
  return nums.map((ele) => Math.pow(ele, 2)).sort((a, b) => a - b);
};

//* Approach 2

function sortedSquarredArray(array) {
  let newArray = new Array(array.length).fill(0);
  for (let i = 0; i < array.length; i++) {
    newArray[i] = Math.pow(array[i], 2);
  }
  return newArray.sort(function (a, b) {
    return a - b;
  });
}

let a = [2, 13, 4, 5];
console.log(sortedSquarredArray(a));

//* Approach 3

function sortedSquares(nums) {
  let start = 0;
  let end = nums.length - 1;
  let result = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[start] >= Math.abs(nums[end]))) {
      result[i] = nums[start] * nums[start];
      start++;
    } else {
      return ([i] = nums[end] * nums[end]);
      end--;
    }
  }
  return result;
}
sortedSquares();

//* Approach 1 (map + sort)	    O(n log n)	O(n)
//* Approach 2 (loop + sort)	O(n log n)	O(n)
//* Approach 3 (two-pointer)	O(n)	    O(n)
