// brute force - using hashtable but not efficient
//* TC-O(n) SC-O(n)

// optimised approach by using - floyd tortoise and hare algorithm
//* TC-O(n) SC-O(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const checkLoop = function (head) {
  if (!head) return null;
  if (!head.next) return null;
  let fastHare = head;
  let slowTortoise = head;
  while (slowTortoise && fastHare && fastHare.next) {
    slowTortoise = slowTortoise.next;
    fastHare = fastHare.next.next;
    if (slowTortoise === fastHare) break;
  }
  if (slowTortoise !== fastHare) return null;
  // find where cycle starts
  let pointer = head;
  while (slowTortoise !== pointer) {
    slowTortoise = slowTortoise.next;
    pointer = pointer.next;
  }
  return slowTortoise;
};

//For Testing
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
//make a loop
six.next = three;

let head = one;

checkLoop(head);
