//* Approach 1

const checkMonotonic = function (array) {
  //write code here to return either true or false
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      increasing = false;
    }
    if (array[i] > array[i - 1]) {
      decreasing = false;
    }
  }

  return increasing || decreasing;
};

console.log(checkMonotonic([1, 2, 3, 4]));

//*  Approach 2

function monotonic(arr) {
  let start = 0;
  let end = arr.length - 1;
  let isIncreasing = true;
  let isDecreasing = true;
  while (start < end) {
    if (arr[start] < arr[start + 1]) {
      isIncreasing = false;
    }
    if (arr[start] > arr[start + 1]) {
      isDecreasing = false;
    }
    start++;
  }
  return isIncreasing || isDecreasing;
}

//* Approach 3
const isMonotonic = function (array) {
  const first = array[0];
  const last = array[array.length - 1];
  // 1.......10
  if (first === last) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] !== array[i]) return false;
    }
  } else if (first < last) {
    // non decreasing
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] < array[i]) return false;
    }
  } else {
    // non increasing
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] > array[i]) return false;
    }
  }
  return true;
};

isMonotonic([9]);

//* Approach	Time Complexity	Space Complexity
//* Approach 1	    O(n)	        O(1)
//* Approach 2	    O(n)	        O(1)
//* Approach 3	    O(n)	        O(1)
