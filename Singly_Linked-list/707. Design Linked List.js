class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  get(index) {
    if (index < 0 || index >= this.size) return -1;
    let counter = 0;
    let currentNode = this.head;
    while (index !== counter) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode.value;
  }
  addAtHead(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
    return this;
  }
  addAtTail(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return this;
  }
  addAtIndex(index, value) {
    if (index < 0 || index > this.size) return "invalid index";
    if (index === 0) return this.addAtHead(value);
    if (index === this.size) return this.addAtTail(value);
    const node = new Node(value);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = node;
    node.next = temp;
    this.size++;
    return this;
  }
  deleteAtIndex(index) {
    // at head
    if (index < 0 || index >= this.size) return "invalid index";
    if (index === 0) {
      let temp = this.head;
      this.head = temp.next;
      this.size--;
      if (this.size === 0) {
        this.tail = null;
      }
      return temp;
    }
    // at tail
    if (index === this.size - 1) {
      let oldTail = this.tail;
      let newTail = this.get(index - 1);
      this.tail = newTail;
      newTail.next = null;
      this.size--;
      return oldTail;
    }
    // at random index
    let prev = this.get(index - 1);
    let deletedNode = prev.next;
    prev.next = deletedNode.next;
    this.size--;
    return deletedNode;
  }
}

const sl = new SinglyLinkedList();
sl.addAtTail(1);
console.log(sl);

//* Approach 2 :- optimised

class MyLinkedList {
  data = [];

  get(index) {
    return this.data[index] == null ? -1 : this.data[index];
  }

  addAtHead(val) {
    this.data.unshift(val);
  }

  addAtTail(val) {
    this.data.push(val);
  }

  addAtIndex(index, val) {
    if (index < 0) return this.addAtHead(val);
    if (index > this.data.length) return;

    this.data.splice(index, 0, val);
  }

  deleteAtIndex(index) {
    if (index >= this.data.length || index < 0) return;
    this.data.splice(index, 1);
  }
}
