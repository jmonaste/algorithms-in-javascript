/**
 * Quicksort is an in-place sorting algorithm. Developed by British computer scientist Tony Hoare in 1959
 * and published in 1961, it is still a commonly used algorithm for sorting. 
 * When implemented well, it can be somewhat faster than merge sort and about two or three times faster 
 * than heapsort.
 * 
 * Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array 
 * and partitioning the other elements into two sub-arrays, according to whether they are less than or 
 * greater than the pivot. For this reason, it is sometimes called partition-exchange sort.
 * The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional 
 * amounts of memory to perform the sorting.
 * 
 * Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than" 
 * relation (formally, a total order) is defined. Efficient implementations of Quicksort are not a s
 * table sort, meaning that the relative order of equal sort items is not preserved.
 */


import Sort from '../Sort.js';

export default class QuickSort extends Sort {
  /**
   * @param {*[]} originalArray
   * @return {*[]}
   */
  sort(originalArray) {
    // Clone original array to prevent it from modification.
    const array = [...originalArray];

    // If array has less than or equal to one elements then it is already sorted.
    // We are going to call this method recursively, so this es going to be
    // executed at the end of the algorithm
    if (array.length <= 1) {
      return array;
    }

    // Init left and right arrays.
    const leftArray = [];
    const rightArray = [];

    // Take the first element of array as a pivot.
    const pivotElement = array.shift();
    const centerArray = [pivotElement];

    // Split all array elements between left, center and right arrays.
    while (array.length) {
      const currentElement = array.shift();

      // Call visiting callback.
      this.callbacks.visitingCallback(currentElement);

      if (this.comparator.equal(currentElement, pivotElement)) {
        centerArray.push(currentElement);
      } else if (this.comparator.lessThan(currentElement, pivotElement)) {
        leftArray.push(currentElement);
      } else {
        rightArray.push(currentElement);
      }
    }

    // Sort left and right arrays.
    const leftArraySorted = this.sort(leftArray);
    const rightArraySorted = this.sort(rightArray);

    // Let's now join sorted left array with center array and with sorted right array.
    return leftArraySorted.concat(centerArray, rightArraySorted);
  }
}
