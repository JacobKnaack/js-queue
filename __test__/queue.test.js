'use strict';

const Queue = require('../');
const Node = require('../lib/node.js');

describe("Testing Queue structure", () => {
  describe("Checking Queue properties", () => {
    it('should have a front and a rear', () => {
      const queue = new Queue();
      expect(queue).toMatchObject({front: null, back: null});
    });
  });

  describe('Checking methods', () => {
    const queue = new Queue();
    const firstNode = new Node(10);
    const secondNode = new Node(11);
    const thirdNode = new Node(12);
    it('should be able to enqueue a value', () => {
      expect(queue.enqueue(10)).toMatchObject(firstNode);
      expect(queue.enqueue(11)).toMatchObject(secondNode);
      expect(queue.enqueue(12)).toMatchObject(thirdNode);
      expect(queue.front.value).toEqual(10);
      expect(queue.front.next.value).toEqual(secondNode.value);
      expect(queue.front.next.next.value).toEqual(queue.back.value);
    });
    it('should be able to dequeue from the front', () => {
      expect(queue.dequeue().value).toBe(10);
      expect(queue.front.value).toEqual(secondNode.value);
      expect(queue.back.value).toEqual(thirdNode.value);
    });
  });
});
