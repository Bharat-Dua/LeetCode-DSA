//* Approach 1

//brute force approach
//* T- o(n^2) s-o(n)
function isPalindrome(string) {
  let newStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }
  if (string === newStr) return true;
  else return false;
}
console.log(isPalindrome("aba"));

//* Approach 2

//* t- o(n) s- o(n)
function isPalindrome(string) {
  let array = [];
  for (let i = string.length - 1; i >= 0; i--) {
    array.push(string[i]);
  }
  if (string === array.join("")) return true;
  else return false;
}
console.log(isPalindrome("aba"));

//* Approach 3

// optimized approach

//* t-o(n) s-o(1)
function isPalindrome(string) {
  let i = 0;
  let j = string.length - 1;
  while (i <= j) {
    if (string[i] !== string[j]) return false;
    else {
      i++;
      j--;
    }
  }
  return true;
}
console.log(isPalindrome("12321"));

//* Approach 4

//* T- O(n) S-O(n)

var isPalindrome = function (s) {
  let normalizedString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let reversedString = normalizedString.split("").reverse().join("");

  return normalizedString === reversedString;
};
console.log(isPalindrome("aba"));
// console.log(checkIsPal("A man, a plan, a canal: Panama"));
// console.log(checkIsPal(" "))
