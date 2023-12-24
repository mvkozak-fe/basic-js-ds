const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = {}
    this.size = 0
  }
  push(element) {
    this.size++;
    this.stack[this.size] = element;
  }

  pop() {
    let popElem = this.stack[this.size];
    delete this.stack[this.size];
    this.size--;
    return popElem;
  }

  peek() {
    return this.stack[this.size];
  }
}

module.exports = {
  Stack
};
