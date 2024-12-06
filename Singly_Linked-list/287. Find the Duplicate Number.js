//* TC- O(n)
//* SC- O(1)
function getDuplicate(array) {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    if (array[i] < 0 || array[i] >= n) {
      throw new Error(
        "Array values must be in the range [0, n-1] for Floyd's algorithm to work."
      );
    }
  }
  let fastHare = 0;
  let slowTortoise = 0;
  while (true) {
    fastHare = array[array[fastHare]];
    slowTortoise = array[slowTortoise];
    if (fastHare === slowTortoise) {
      let pointer = 0;
      while (pointer !== slowTortoise) {
        pointer = num[pointer];
        slowTortoise = num[slowTortoise];
      }
      return pointer;
    }
  }
}
console.log(getDuplicate([5, 4, 3, 1, 5, 7]));

// ---------  OR

function getDuplicate(array) {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    if (array[i] < 0 || array[i] >= n) {
      throw new Error(
        "Array values must be in the range [0, n-1] for Floyd's algorithm to work."
      );
    }
  }
  let fastHare = 0;
  let slowTortoise = 0;
  while (true) {
    fastHare = array[array[fastHare]];
    slowTortoise = array[slowTortoise];
    if (fastHare === slowTortoise) break;
  }
  let pointer = 0;
  while (pointer !== slowTortoise) {
    pointer = num[pointer];
    slowTortoise = num[slowTortoise];
  }
  return pointer;
}
console.log(getDuplicate([5, 4, 3, 1, 5, 7]));
