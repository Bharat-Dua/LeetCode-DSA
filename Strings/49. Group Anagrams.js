//* optimal approach

//hash table
//* T- O(s*nlogn) S- O(s*n)

function groupAnagram(arrOfStr) {
  let ht = {};
  let sortedArray = arrOfStr.map((str) => str.split("").sort().join(""));
  for (let i = 0; i < sortedArray.length; i++) {
    if (ht[sortedArray[i]]) {
      ht[sortedArray[i]].push(arrOfStr[i]);
    } else {
      ht[sortedArray[i]] = [arrOfStr[i]];
    }
  }
  return Object.values(ht);
}
let str = ["eat", "tea", "tan", "ate", "nat", "bat", "tab"];
console.log(groupAnagram(str));
