'use strict';

const Queue = require('../');
const Node = require('../Node.js');

describe("Testing Queue structure", () => {
  describe("Checking Queue properties", () => {
    it('should have a front and a rear', () => {
      const queue = new Queue();
      expect(queue).toMatchObject({front: null, rear: null});
    });
  });

  describe('Checking methods', () => {
    const queue = new Queue();
    const firstNode = new Node(10);
    const secondNode = new Node(11);
    it('should be able to enqueue a value', () => {
      expect(queue.enqueue(10)).toMatchObject(firstNode);
      expect(queue.enqueue(11)).toMatchObject(secondNode);
      expect(queue.front.value).toEqual(10);
      expect(queue.front.next).toMatchObject(secondNode);
    });
    it('should be able to dequeue from the front', () => {
      expect(queue.dequeue().value).toEqual(10);
      expect(queue).toMatchObject({front: secondNode, rear: secondNode});
    });
  });
});