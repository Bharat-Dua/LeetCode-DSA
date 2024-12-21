//* Time Complexity:
/*
->buildHeap: The buildHeap method uses the input array and modifies it in place.

->The space complexity is 𝑂(1) for additional space, but 𝑂(𝑛) for the input array.
𝑂(𝑛)

bubbleDown: 
𝑂(log 𝑛)

extractMax: 
𝑂(log 𝑛)

insert: 
𝑂(log𝑛)

bubbleUp: 
𝑂(log 𝑛)

peek: 
𝑂(1)
*/
//* Space Complexity:
/*
buildHeap: 
𝑂(𝑛)
(for the input array)

bubbleDown: 
𝑂(1)

extractMax: 
𝑂(1)

insert: 
𝑂(1)

bubbleUp: 
𝑂(1)

peek:
𝑂(1)
*/
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
  insert(value) {
    this.heap.push(value);
    // this.bubbleUp();
    this.bubbleUp(this.heap, this.heap.length - 1);
    return this;
  }
  bubbleUp(array, lastIdx) {
    let idx = lastIdx;
    const value = array[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parentValue = this.heap[parentIdx];
      if (value <= parentValue) break;
      this.heap[parentIdx] = value;
      this.heap[idx] = parentValue;
      idx = parentIdx;
    }
  }
  peek() {
    return this.heap[0];
  }
}

let binaryHeap = new buildBinaryHeap();
binaryHeap.buildHeap([10, 20, 5, 6, 12, 3, 8, 1, 9, 2]);
binaryHeap.extractMax(); // returns 20
binaryHeap.insert(30);
binaryHeap.peek();
