//* TC- O(n)
//* SC- O(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node("a");
head.next.next.next.next.next = new Node("a");

//* Output linked list: 1-> 2-> 2-> 3-> 'a'-> 'a'->null

function removeDuplicate(head) {
  let current = head;
  while (current) {
    let nextDistinctValue = current.next;
    while (nextDistinctValue.value === current.value && nextDistinctValue) {
      nextDistinctValue = nextDistinctValue.next;
    }
    current.next = nextDistinctValue;
    current = current.next;
  }
  return head;
}

//* Approach 2
var deleteDuplicates = function (head) {
  let current = head;
  while (current !== null && current.next !== null) {
    if (current.next.val === current.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};

//* optimised approach
var deleteDuplicates = function (head) {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};
