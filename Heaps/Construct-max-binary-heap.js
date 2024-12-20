class buildBinaryHeap {
  constructor() {
    this.heap = [];
  }
  buildHeap(array) {
    let length = array.length;
    let lastParent = Math.floor(length / 2 - 1);
    for (let i = lastParent; i >= 0; i--) {
      this.bubbleDown(array, i);
    } // heapify the array
    this.heap = array;
    return this;
  }
  bubbleDown(array, idx) {
    let current = array[idx];
    let length = array.length;
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let largest = null;
      if (leftChildIdx < length) {
        leftChild = array[leftChildIdx];
        if (leftChild > current) {
          largest = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = array[rightChildIdx];
        if (
          (largest === null && rightChild > current) ||
          (largest !== null && rightChild > leftChild)
        ) {
          largest = rightChildIdx;
        }
      }
      if (largest === null) break;
      // else swap
      array[idx] = array[largest];
      array[largest] = current;
      idx = largest;
    }
  }
  extractMax() {
    let maximumValue = this.heap[0];
    let last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(this.heap, 0);
    }
    return maximumValue;
  }
}

let binaryHeap = new buildBinaryHeap();
binaryHeap.buildHeap([10, 20, 5, 6, 12, 3, 8, 1, 9, 2]);
binaryHeap.extractMax(); // returns 20
