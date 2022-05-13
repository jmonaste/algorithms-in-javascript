/**
 * We know of Insertion Sort, and we also know of Binary Search. 
 * What if we put the two together? Could we create something more efficient?
 * 
 * We can use binary search to reduce the number of comparisons in normal insertion 
 * sort. 
 * Binary Insertion Sort uses binary search to find the proper location to insert 
 * the selected item at each iteration. 
 * 
 * In normal insertion sort, it takes O(n) comparisons (at nth iteration) in the 
 * worst case. We can reduce it to O(log n) by using binary search.
 */

import Sort from '../Sort.js';

export default class BinaryInsertionSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];

    // Go through all array elements...
    for (let i = 1; i < array.length; i++) {
      let highIndex = i - 1;
      let element = array[i];
      
      // Find location to insert using binary search
      let bsPosition = Math.abs(binarySearch(array, element, 0, highIndex));
      
      // Shifting array to one location right
      while (highIndex >= bsPosition) {
        array[highIndex + 1] = array[highIndex];
        highIndex--;
      }
      
      // Placing element at its correct location
      array[highIndex+1] = element;
    }

    return array;

    /** //Original Insertion Sort code...
    for (let i = 0; i < array.length-1; i += 1) {
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
    */

  } 

}





/**
 * The Binary Search function wich calls itself recursively in order to 
 * find and return de position of the element in the array
 * @param {*} array 
 * @param {*} item 
 * @param {*} low 
 * @param {*} high 
 * @returns 
 */
function binarySearch(array, item, low, high)
{
  //In case of no more iterations will be reached, means, last binarySearch call
  //For example, first element in the array...
  if (high <= low)
  return (item > array[low]) ? (low + 1) : low;
  
  //Calculate the middle position of the sub-array
  let mid = Math.floor((low + high) / 2);
  
  //In case of equality, insertion will be made at the right in the array
  if(item == array[mid])
  return mid + 1;
  
  //If item need to be place in the upper part of the sub-array, we call binarySearch again
  if(item > array[mid])
  return binarySearch(array, item, mid + 1, high);
  
  //If item need to be place in the lower part of the sub-array, we call binarySearch again
  return binarySearch(array, item, low, mid - 1);
} 