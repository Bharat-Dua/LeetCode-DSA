//* Approach 1

// recursively
//* T-O(log n) S-O(log n)

function searchArrayRange(arr, target) {
  const range = [-1, -1];
  findLeftExtreme(arr, target, range);
  findRightExtreme(arr, target, range);
  return range;
}
function findLeftExtreme(arr, target, range, left = 0, right = arr.length - 1) {
  if (left > right) return;
  const middle = Math.floor((left + right) / 2);
  if (arr[middle] === target) {
    if (middle === 0) {
      range[0] = 0;
    } else if (arr[middle - 1] === target) {
      findLeftExtreme(arr, target, range, left, middle - 1);
    } else {
      range[0] = middle;
    }
  } else if (target < arr[middle]) {
    findLeftExtreme(arr, target, range, left, middle - 1);
  } else {
    findLeftExtreme(arr, target, range, middle + 1, right);
  }
}

function findRightExtreme(
  arr,
  target,
  range,
  left = 0,
  right = arr.length - 1
) {
  if (left > right) return;
  const middle = Math.floor((left + right) / 2);
  if (arr[middle] === target) {
    if (middle === arr.length - 1) {
      range[1] = middle;
    } else if (arr[middle + 1] === target) {
      findRightExtreme(arr, target, range, middle + 1, right);
    } else {
      range[1] = middle;
    }
  } else if (target < arr[middle]) {
    findRightExtreme(arr, target, range, (left = 0), middle - 1);
  } else {
    findRightExtreme(arr, target, range, middle + 1, right);
  }
}

console.log(searchArrayRange([1, 1, 2, 2, 2, 3, 4], 2));

//* Approach 2
//iteratively
//* T-O(log n) S-O(1)
function searchArrayRange(arr, target) {
  let leftExtreme = findLeftExtreme(arr, target);
  let rightExtreme = findRightExtreme(arr, target);
  return [leftExtreme, rightExtreme];
}

function findLeftExtreme(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (target === arr[middle]) {
      if (middle === 0) return 0;
      if (arr[middle - 1] === target) {
        right = middle - 1;
      } else {
        return middle;
      }
    } else if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

function findRightExtreme(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (target === arr[middle]) {
      if (middle === arr.length - 1) return middle;
      if (arr[middle + 1] === target) {
        left = middle + 1;
      } else {
        return middle;
      }
    } else if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

console.log(searchArrayRange([1, 2, 3, 3, 3, 3, 4, 5], 3));
