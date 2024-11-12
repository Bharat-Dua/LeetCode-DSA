//* Two pointer approach
//* T- o(n) S-o(1)

function isPalindrome(string) {
  let checkString = string.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let i = 0;
  let j = checkString.length - 1;
  while (i <= j) {
    if (checkString[i] !== checkString[j]) return false;
    else {
      i++;
      j--;
    }
  }
  return true;
}
console.log(isPalindrome("aba"));
