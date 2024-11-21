//* T- O(n^2) || S- O(1)

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }
    if (i !== smallest) {
      [array[i], array[smallest]] = [array[smallest], array[i]];
      // or
      //   let temp= array[i];
      //   array[i] = array[smallest];
      //   array[smallest] = temp;
    }
  }
  return array;
}
console.log(selectionSort([2, 3, 5, 1]));
