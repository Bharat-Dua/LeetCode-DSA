//* Approach 1

// Brute force approach
//*  Time complexity: O(n^2)
//* Space complexity:  O(1)
//* For larger arrays, this O(n²) solution is too slow. In the worst-case scenario, the time complexity could approach O(10⁶) or even higher for large n, which is typically where the time limit exceeds.

function findArea(arr) {
  let area = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let height = Math.min(arr[i], arr[j]);
      let width = Math.abs(j - i);
      area = Math.max(area, height * width);
    }
  }
  return area;
}
findArea([3, 7, 5, 6, 8, 4]);

//* Approach 2

// Optimized approach :- Two pointer
//* Time complexity: o(n) space complexity: o(1)

function findArea(arr) {
  let area = 0;
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let height = Math.min(arr[i], arr[j]);
    let width = Math.abs(j - i);
    let newArea = height * width;
    area = Math.max(area, newArea);
    if (arr[i] < arr[j]) i++;
    else j--;
  }
  return area;
}
console.log(findArea([9, 1, 2, 3, 10]));
