//* Approach 1

//brute force
//* T- O(m*n) S-O(1)
function isElementInMatrix(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; i++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const target1 = 5;
const target2 = 10;

console.log(isElementInMatrix(matrix, target1));
console.log(isElementInMatrix(matrix, target2));

//* Approach 2

//binary search

function searchInMatrix(matrix, target) {
  let column = matrix[0].length;
  let row = matrix.length;
  let top = 0;
  let bottom = row - 1;
  let middle;
  while (top <= bottom) {
    middle = Math.floor((top + bottom) / 2);
    if (target < matrix[middle][0]) bottom = middle - 1;
    else if (target > matrix[middle][column - 1]) top = middle + 1;
    else break;
  }
  let left = 0;
  let right = column - 1;
  let midValue;
  while (left <= right) {
    midValue = Math.floor((left + right) / 2);
    if (target === matrix[middle][midValue]) return true;
    else if (target < matrix[middle][midValue]) right = midValue - 1;
    else left = midValue + 1;
  }
  return false;
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [20, 30, 40, 50],
];
console.log(searchInMatrix(matrix, 12));
