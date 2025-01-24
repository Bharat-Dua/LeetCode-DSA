//? find missing number
//* Concept:- array
//* TC,SC - O(n)

//* Approach 1 - Brute force approach
function findMissingNumber(num) {
  let n = num.length + 1;
  let hash = new Array(n + 1).fill(0);
  for (let i = 0; i < num.length; i++) {
    hash[num[i]]++;
  }
  for (let i = 1; i <= n; i++) {
    if (hash[i] === 0) {
      return 1;
    }
  }
  return -1;
}
const n = 10;
const arr = [1, 2, 4, 6, 3, 7, 8, 10, 5];

console.log(findMissingNumber(arr)); // 9

//* Approach - 2 using sum of n terms formula
//* TC-O(n) , SC-O(1)
//* sum of n terms = n*(n+1)/2
function findMissingNumber(num) {
  let n = num.length + 1;
  let sum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < num.length; i++) {
    actualSum += num[i];
  }
  return sum - actualSum;
}
const n1 = 10;
const arr1 = [1, 2, 4, 6, 3, 7, 8, 10, 5];
console.log(findMissingNumber(arr)); // 9

// easy syntex using ES6

function findMissingNumber(num, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  const missingNumber = expectedSum - actualSum;
  return missingNumber;
}
const n = 10;
const arr = [1, 2, 4, 6, 3, 7, 8, 10, 5];
console.log(findMissingNumber(arr, n)); // 9
