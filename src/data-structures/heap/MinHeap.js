import Heap from './Heap.js';

export default class MinHeap extends Heap {


  /**
   * Here we implement the pairIsInCorrectOrder method
   * in the MinHeap class wich extends Heap class
   */


  /**
   * Checks if pair of heap elements is in correct order.
   * For MinHeap the first element must be always smaller or equal.
   * For MaxHeap the first element must be always bigger or equal.
   *
   * @param {*} firstElement
   * @param {*} secondElement
   * @return {boolean}
   */
  pairIsInCorrectOrder(firstElement, secondElement) {
    return this.compare.lessThanOrEqual(firstElement, secondElement);
  }
}
