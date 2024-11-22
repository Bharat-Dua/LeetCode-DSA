//* T- O(nlog n) || S- O(n)
function mergeSortedArray(array1, array2) {
  let i = 0;
  let j = 0;
  let mergedArray = [];
  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    mergeArray.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    mergeArray.push(array2[j]);
    j++;
  }
  return mergedArray;
}
function mergeArray(array) {
  if (array.length === 0) return array;
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  return mergeSortedArray(left, right);
}
console.log(mergeArray([5, 3, 7, 2, 8, 9, 12, 10]));
