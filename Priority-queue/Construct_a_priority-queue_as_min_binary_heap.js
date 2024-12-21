//* TC - O(log n), SC - O(1)
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.data = [];
  }
  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.data.push(node);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.data.length - 1;
    let element = this.data[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentValue = this.data[parentIndex];
      if (element.priority >= parentValue.priority) break;
      this.data[parentIndex] = element;
      this.data[index] = parentValue;
      index = parentIndex;
    }
  }
  dequeue() {
    if (this.data.length === 1) return this.data.pop();
    const min = this.data[0];
    const lastElement = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = lastElement;
      this.bubbleDown();
    }
    return min;
  }
  bubbleDown() {
    let index = 0;
    let length = this.data.length;
    let element = this.data[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let smallest = null;
      if (leftChildIndex < length) {
        leftChild = this.data[leftChildIndex];
        if (leftChild.priority < element.priority) smallest = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.data[rightChildIndex];
        if (
          (rightChild.priority < element.priority && smallest === null) ||
          (smallest !== null && rightChild.priority < leftChild.priority)
        ) {
          smallest = rightChildIndex;
        }
      }
      if (smallest === null) break;
      this.data[index] = this.data[smallest];
      this.data[smallest] = element;
      index = smallest;
    }
  }
}
let priorQueue = new PriorityQueue();
priorQueue.enqueue("Job1", 3);
priorQueue.enqueue("Job2", 2);
priorQueue.enqueue("Job3", 1);
console.log(priorQueue);
