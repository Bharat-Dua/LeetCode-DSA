//* QuickSort--> Recursively QS call on lower sized
//* middle -> pivot
function swap(array, start, middle) {
  let temp = array[start];
  array[start] = array[middle];
  array[middle] = temp;
}
function parittion(array, start = 0, end = array.length - 1) {
  let middle = Math.floor((start + end) / 2);
  swap(array, start, middle);
  let pivot = array[start];
  let i = start + 1;
  let j = end;
  while (i <= j) {
    while (i <= j && array[i] <= pivot) {
      i++;
    }
    while (array[j] >= pivot) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
    }
  }
  swap(array, start, j);
  return j;
}

function quickSort(array, start = 0, end = array.length - 1) {
  while (start < end) {
    let pivotIdx = parittion(array, start, end);
    // Recursively call quick sort on lower sized subarray
    if (pivotIdx - start < end - pivotIdx) {
      quickSort(array, start, pivotIdx - 1);
      start = pivotIdx + 1;
    } else {
      quickSort(array, pivotIdx + 1, end);
      end = pivotIdx - 1;
    }
  }
}

function quickSort(array, start = 0, end = array.length) {
  if (start < end) {
    let pivotIdx = parittion(array, start, end);
    quickSort(array, start, pivotIdx - 1);
    quickSort(array, pivotIdx + 1, end);
  }
  return array;
}

let array = [3, 1, 2, 4];
console.log(quickSort(array));
console.log(array);

//* Recursively call quick sort on lower sized subarray, Sc- O(log n);
//* Recursively call quick sort on both side subarray, Sc- O(n)
