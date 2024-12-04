//* TC- O(d * (n+k))    //  k-> range (0-9)
//* SC- O(n+k)

//* TC- O(d * (n+10))  // for decimal system (where log10) here 10 is constant so it's not included in space complexity so we can say O(d*n)

//* SC- O(n+10) // here 10 is constant so it's not included in space complexity so we can say O(n)
function radixSort(array) {
  if (!array) return "array is empty";
  let greatestNumber = Math.max(...array);
  let NumberOfDigits = Math.floor(Math.log10(greatestNumber)) + 1;
  // counting sort has to be done x times, where x is the number of digits in the greatest number
  for (let i = 0; i < NumberOfDigits; i++) {
    countingSort(array, i);
  }
  return array;
}

function countingSort(array, digit) {
  const output = new Array(array.length).fill(0);
  //temp array fill with zeros(0)
  const temp = new Array(10).fill(0);
  const digitPlace = Math.pow(10, digit);
  // fill the temp array with no of occurences of each digit
  for (const number of array) {
    let digit = Math.floor(number / digitPlace) % 10;
    temp[digit]++;
  }
  // cumulative sum
  for (let i = 1; i < 10; i++) {
    temp[i] += temp[i - 1];
  }
  // start traversing from backward of array to place the element at right index in the output array
  for (let j = array.length - 1; j >= 0; j--) {
    const curDigit = Math.floor(array[j] / digitPlace) % 10; // get the digit at the current place
    temp[curDigit]--;
    let insertPosition = temp[curDigit];
    output[insertPosition] = array[j]; // place the element at correct position
  }
  // change the original array with the output array
  for (let i = 0; i < output.length; i++) {
    array[i] = output[i];
  }
}

console.log(radixSort([384, 73, 374, 184, 321, 34, 185]));
