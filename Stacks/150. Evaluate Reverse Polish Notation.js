//* TC,SC - O(n)
const revPolNot = function (tokens) {
  const stack = [];
  const validOperators = {
    "+": (n1, n2) => n1 + n2,
    "-": (n1, n2) => n1 - n2,
    "*": (n1, n2) => n1 * n2,
    "/": (n1, n2) => Math.trunc(n1 / n2),
  };
  for (const token of tokens) {
    if (validOperators[token]) {
      const number2 = stack.pop();
      const number1 = stack.pop();
      let result = validOperators[token](number1, number2);
      stack.push(result);
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack.pop();
};

revPolNot(["4", "13", "5", "/", "+"]);
