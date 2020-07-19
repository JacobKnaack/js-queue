'use strict';

/**
 * Creates a simple queue with properties similar to a linked list.
 * @param {any} data
 */

const Node = require('./lib/node.js');

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(data) {
    const newNode = new Node(data);

    if (this.front) {
      let current = this.front;
      while (current.next) {
        current = current.next
      }
      current.next = newNode;
    } else {
      this.front = newNode;
    }

    this.back = newNode;
    return this.back;
  }

  dequeue() {
    if (this.front) {
      let remove = this.front;
      console.log(remove);
      if (remove.next) {
        this.front = remove.next;
      } else {
        this.front = null;
        this.back = null;
      }
      return remove;
    } else {
      return 'Queue is empty';
    }
  }

}
module.exports = Queue;
