//* Approach 1
// brute force approach : works file but not efficient  for large inputs

//*  Time complexity: O(n^2)
//*  Space complexity: O(1)

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j] && t[i] !== t[j]) return false;
      if (s[i] !== s[j] && t[i] === t[j]) return false;
    }
  }
  return true;
}

const s1 = "egg";
const t1 = "add";
console.log(isIsomorphic(s1, t1));

//* Approach 2
// optimal  solution
//* T - O(n) S-O(1)

function checkIsIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  let sHash = {};
  let tHash = {};

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if (!sHash[charS]) sHash[charS] = charT;
    if (!tHash[charT]) tHash[charT] = charS;
    if (sHash[charS] !== charT || tHash[charT] !== charS) return false;
  }
  return true;
}
console.log(checkIsIsomorphic("aa", "bb"));
