//* Approach 1

// brute force approach
//* T - o(n*n) S - o(1)

function findIndicesSum(array, targetValue) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      let value = array[i] + array[j];
      if (value === targetValue) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(findIndicesSum([2, 3, 4, 6], 6));

//* Approach 2

// optimal approach:- hashmap
//* T-O(n),S-O(n)

function twoSum(num, target) {
  let map = new Map();
  for (let i = 0; i < num.length; i++) {
    let complement = target - num[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(num[i], i);
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9));

//* Approach 3

// using hashtable
//* T - o(n);
//* S - o(n)

function findIndicesSum(array, targetValue) {
  let hashTable = {};
  let needValue;
  for (let i = 0; i < array.length; i++) {
    needValue = targetValue - array[i];
    if (needValue in hashTable) {
      return [i, hashTable[needValue]];
    } else {
      hashTable[array[i]] = i;
    }
  }
  return [];
}
console.log(findIndicesSum([2, 3, 8, 1, 9], 3));

//* Approach 4

//* T-o(n), S-o(n)

function findIndicesSum(array, targetValue) {
  const hashTable = {};

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    const neededValue = targetValue - currentValue;

    // Check if the needed value exists in the hash table
    if (hashTable.hasOwnProperty(neededValue)) {
      return [hashTable[neededValue], i]; // Return the indices of the two numbers
    }

    // Store the current value and its index in the hash table
    hashTable[currentValue] = i;
  }

  // Return an empty array if no pair is found
  return [];
}

console.log(findIndicesSum([2, 3, 8, 1, 9], 3)); // Output: [0, 1]
