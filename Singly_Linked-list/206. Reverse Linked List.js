//* TC- O(n)
//* SC- O(1)

// sample input
// 1->2->3->4->null
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

// expected output - 4->3->2->1->null

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
console.log(reverseLinkedList(head));
