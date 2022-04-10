/**
 * Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. 
 * It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge 
 * sort. However, insertion sort provides several advantages:
 * 
 * Simple implementation
 * Efficient for (quite) small data sets, much like other quadratic sorting algorithms
 * More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms such as selection sort or 
 * bubble sort
 * Adaptive, i.e., efficient for data sets that are already substantially sorted: the time complexity is O(kn) 
 * when each element in the input is no more than k places away from its sorted position
 * Stable; i.e., does not change the relative order of elements with equal keys
 * In-place; i.e., only requires a constant amount O(1) of additional memory space
 * Online; i.e., can sort a list as it receives it
 * 
 * When people manually sort cards in a bridge hand, most use a method that is similar to insertion sort.
 */

import Sort from '../Sort';

export default class InsertionSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];

    // Go through all array elements...
    for (let i = 1; i < array.length; i += 1) {
      let currentIndex = i;

      // Call visiting callback.
      this.callbacks.visitingCallback(array[i]);

      // Check if previous element is greater than current element.
      // If so, swap the two elements.
      while (
        array[currentIndex - 1] !== undefined
        && this.comparator.lessThan(array[currentIndex], array[currentIndex - 1])
      ) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[currentIndex - 1]);

        // Swap the elements.
        [
          array[currentIndex - 1],
          array[currentIndex],
        ] = [
          array[currentIndex],
          array[currentIndex - 1],
        ];

        // Shift current index left.
        currentIndex -= 1;
      }
    }

    return array;
  }
}
