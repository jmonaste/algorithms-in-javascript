/**
 * Heap Sort
 * heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: 
 * like selection sort, heapsort divides its input into a sorted and an unsorted region, and it iteratively shrinks 
 * the unsorted region by extracting the largest element from it and inserting it into the sorted region. 
 * Unlike selection sort, heapsort does not waste time with a linear-time scan of the unsorted region; rather, 
 * heap sort maintains the unsorted region in a heap data structure to more quickly find the largest element 
 * in each step.
 * 
 * Although somewhat slower in practice on most machines than a well-implemented quicksort, it has the advantage 
 * of a more favorable worst-case O(n log n) runtime. Heapsort is an in-place algorithm, but it is not a stable sort.
 * 
 * Heapsort was invented by J. W. J. Williams in 1964.
 * This was also the birth of the heap, presented already by Williams as a useful data structure in its own right.
 * In the same year, R. W. Floyd published an improved version that could sort an array in-place, 
 * continuing his earlier research into the treesort algorithm.
 * 
 * [https://en.wikipedia.org/wiki/Heapsort]
 * 
 * 
 */
import Sort from '../Sort.js';
import MinHeap from '../../../data-structures/heap/MinHeap.js';

export default class HeapSort extends Sort {
  sort(originalArray) {
    const sortedArray = [];
    const minHeap = new MinHeap(this.callbacks.compareCallback);

    // Insert all array elements to the heap.
    originalArray.forEach((element) => {
      // Call visiting callback.
      this.callbacks.visitingCallback(element);

      minHeap.add(element);
    });

    // Now we have min heap with minimal element always on top.
    // Let's poll that minimal element one by one and thus form the sorted array.
    while (!minHeap.isEmpty()) {
      const nextMinElement = minHeap.poll();

      // Call visiting callback.
      this.callbacks.visitingCallback(nextMinElement);

      sortedArray.push(nextMinElement);
    }
    return sortedArray;
  }
}
