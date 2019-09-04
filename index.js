'use strict';

/**
 * Creates a simple queue with properties similar to a linked list.
 * @param {any} data 
 */

const Node = require('./Node.js');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
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

    this.rear = newNode;
    return this.rear;
  }

  dequeue() {
    if (this.front) {
      let current = this.front;
      this.front = current.next;
      if (!current.next) {
        this.rear = this.front;
      }
      return current;
    } else {
      return 'Queue is empty';
    }
  }

}
module.exports = Queue;
