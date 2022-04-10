/**
 * Merge sort (also commonly spelled as mergesort) is an efficient, general-purpose, 
 * and comparison-based sorting algorithm. 
 * Most implementations produce a stable sort, which means that the order of equal elements 
 * is the same in the input and output. 
 * 
 * Merge sort is a divide-and-conquer algorithm that was invented by John von Neumann in 1945.
 */

import Sort from '../Sort.js';

export default class MergeSort extends Sort {
  sort(originalArray) {

    // Call visiting callback.
    this.callbacks.visitingCallback(null);

    // If array is empty or consists of one element then return this array since it is sorted.
    if (originalArray.length <= 1) {
      return originalArray;
    }

    // Split array on two halves.
    //If the length of the array is odd, a rounding down will be done in order to make the division of the data.
    const middleIndex = Math.floor(originalArray.length / 2);
    const leftArray = originalArray.slice(0, middleIndex);
    const rightArray = originalArray.slice(middleIndex, originalArray.length);

    // Sort two halves of split array
    //function is called recursively
    const leftSortedArray = this.sort(leftArray);
    const rightSortedArray = this.sort(rightArray);

    // Merge two sorted arrays into one.
    return this.mergeSortedArrays(leftSortedArray, rightSortedArray);
  }



  /**
   * Merge two independent sorted arrays
   * @param {*} leftArray 
   * @param {*} rightArray 
   * @returns 
   */
  mergeSortedArrays(leftArray, rightArray) {
    const sortedArray = [];

    // Use array pointers to exclude old elements after they have been added to the sorted array.
    // You can imagine that there are two columns, and that you go through them with your two 
    // index fingers from the bottom to the top.
    let leftIndex = 0;
    let rightIndex = 0;

    // as long as we have not completely traversed the two columns from the bottom to the top 
    // with our fingers...
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      let minElement = null;

      // Find the minimum element between the left and right array.
      if (this.comparator.lessThanOrEqual(leftArray[leftIndex], rightArray[rightIndex])) {
        minElement = leftArray[leftIndex];
        // Increment index pointer to the right
        leftIndex += 1;
      } else {
        minElement = rightArray[rightIndex];
        // Increment index pointer to the right
        rightIndex += 1;
      }

      // Add the minimum element to the sorted array.
      sortedArray.push(minElement);

      // Call visiting callback.
      this.callbacks.visitingCallback(minElement);
    }

    // There will be elements remaining from either the left OR the right
    // Concatenate the remaining elements into the sorted array
    // Thats because the length of the original array may be odd...
    return sortedArray
      .concat(leftArray.slice(leftIndex))
      .concat(rightArray.slice(rightIndex));
  }
}
