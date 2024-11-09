//* Approach 1

// Brute Force Approach
//* T -O(n^2) S- o(n)

function fibonacci(num) {
  if (num < 2) return num;
  else num = fibonacci(num - 1) + fibonacci(num - 2);
}

//* Approach 2

// Dynamic Programming Approach - memoization
//* T- O(n) S- O(n)
let hashTable = { 0: 0, 1: 1 };
function fibonacci(num) {
  if (num in hashTable) return hashTable[num];
  else hashTable[num] = fibonacci(num - 1) + fibonacci(num - 2);
}

//* Approach 3

// Dynamic Programming Approach - Tabulation /iterative
//* T-O(n) S-O(1)
function fibonacci(num) {
  if (num < 2) return num;
  let counter = 1;
  let prev = 0;
  let curr = 1;
  let next;
  while (counter < num) {
    next = prev + curr;
    prev = curr;
    curr = next;
    counter++;
  }
  return curr;
}
console.log(fibonacci(6));
