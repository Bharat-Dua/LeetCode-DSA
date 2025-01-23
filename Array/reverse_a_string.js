// reverse a string
// concept :- Array,recursion

//* TC,SC- O(n),O(n)
function reverseString(str) {
  if (str.length === 0) {
    return str;
  } else {
    return reverseString(str.slice(1)) + str[0];
  }
}

const result = reverseString("hello");
console.log(result); // Output: 'olleh'
