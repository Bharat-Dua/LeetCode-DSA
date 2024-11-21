//* T-O(n^2) S- O(1)

function sortArray(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}
console.log(sortArray([3, 4, 2, 1]));

//* Note:- Inserstion sort algorithm is a stable sorting algorithm now what does that mean is when two elements have the same value, their order will not be changed after sorting. For example, if we have a list of students with their names and ages, and we sort them by age, the insertion sort algorithm will keep the order of students with the same age. This is because it compares elements one by one and inserts them into the correct position in the sorted part of the array. This makes it a good choice for sorting small lists or lists that are almost sorted. However, it has a time complexity of O(n^2) which makes it less efficient for large lists.  */
//* e.g. [1,3,1] --> [1,1,3]  */ so the order will keep same
