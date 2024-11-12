//* Approach 1

//brute force approach
//* T- O(n^2) S-O(1)

var firstUniqChar = function (s) {
  let repeat;
  for (let i = 0; i < s.length; i++) {
    repeat = false;
    for (let j = 0; j < s.length; j++) {
      if (s[i] === s[j] && i !== j) {
        repeat = true;
        break;
      }
    }
    if (!repeat) {
      return i;
    }
  }
  return -1;
};
console.log(firstUniqChar("leetcode"));

//* Approach 2

// using hash table
//* T-O(n) S-O(1)
function firstUniqChar(str) {
  let hashTable = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in hashTable) {
      hashTable[str[i]]++;
    } else {
      hashTable[str[i]] = 1;
    }
  }
  console.log(hashTable);
  for (let i = 0; i < str.length; i++) {
    if (hashTable[str[i]] === 1) {
      return i;
    }
  }
  return -1;
}
console.log(firstUniqChar("1a2a1"));
console.log(firstUniqChar("leetcode"));
