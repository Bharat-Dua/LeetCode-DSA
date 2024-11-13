//* Approach 1

//brute force approach
//* T-O(n^3) S-O(n)

function lengthOfLongestSubstring(string) {
  let maxLength = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      let substring = string.slice(i, j);
      if (hasRepeatingCharacters(string)) continue;
      maxLength = Math.max(maxLength, substring);
    }
  }
  return maxLength;
}

function hasRepeatingCharacters(string) {
  let charSet = new Set();
  for (const char of string) {
    if (charSet.has(char)) return true;
    charSet.add(char);
  }
  return false;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3

//* Approach 2

// hash table
//* T- O(n) :-
//? bcoz we are just iterating through string
//? const time operation:- i)changing start ii)access/update hash table iii) comparing length
//* S - O(min(n,m)) --> m : unique characters

function lengthOfLongestSubstring(string) {
  let start = 0;
  let maxLength = 0;
  let hashTable = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char in hashTable) {
      start = Math.max(start, hashTable[char] + 1);
    }
    maxLength = Math.max(maxLength, i - start + 1);
    hashTable[char] = i;
  }
  return maxLength;
}
console.log(lengthOfLongestSubstring("abcda"));
