//? Design a Queue (with a Linked List)
//* TC,SC - O(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//FIFO
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (!this.first) return null;
    const temp = this.first;
    this.first = this.first.next;
    this.size--;
    if (this.size === 0) this.last = null;
    return temp;
  }
}

const queue = new Queue();
// adding at last
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
// removing the first
queue.dequeue();
