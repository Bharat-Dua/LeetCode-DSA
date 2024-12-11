//* TC-O(1)
//* SC-O(n)

class MyQueue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }
  push(val) {
    this.inStack.push(val);
  }
  pop() {
    if (!this.outStack.length) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }

  peek() {
    if (!this.outStack.length) {
      while (!this.inStack.length) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack[this.outStack.length - 1];
  }
  empty() {
    let inStackLength = this.inStack.length;
    let outStackLength = this.outStack.length;
    return inStackLength === 0 && outStackLength === 0;
  }
}

const q = new MyQueue();
q.push(1);
q.push(11);
q.push(111);
q.pop();
q.peek();
q.empty();
