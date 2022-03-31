/**
 * Counting sort is useful when the range of values each item can take is very small.
 * For example, you can use if if you want to sort 10,000 people according to their age.  
 * We can safely assume (for now) that no human is older than 199 years old, so the 
 * range of values is very small in this case.
 * 
 * To ilustrate this example, lets assume the following array
 * [1,0,3,1,3,1]
 * 
 * 1. First step is to know the number of occurences of each number
 *    in this case:
 *    [0,1,2,3] --> Elements
 *    [1,3,0,2] --> Occurences
 * 
 * 2. Second step is to add each number to the right of it, accumulative
 *    in this case:
 *    [0,1,2,3] --> Elements
 *    [1,3,0,2] --> Occurences
 *    [1,4,4,6] --> Add accumulative
 * 
 * 3. Shift the array to the right one step
 *    [0,1,2,3] --> Elements
 *    [1,4,4,6] --> Add accumulative
 *    [0,1,4,4] --> Shifted numbers
 * 
 * This shifted numbers are the starting indexes for the range of numbers we have
 * 
 * 4. Once we have the starting indexes, we initialize a new array, same length than the original
 *    And map de elements of the original array to the new array based on the shifted numbers
 * 
 */

import Sort from '../Sort';

export default class CountingSort extends Sort {
  /**
   * @param {number[]} originalArray
   * @param {number} [smallestElement]
   * @param {number} [biggestElement]
   */
  sort(originalArray, smallestElement = undefined, biggestElement = undefined) {
    // Init biggest and smallest elements in array in order to build number bucket array later.
    let detectedSmallestElement = smallestElement || 0;
    let detectedBiggestElement = biggestElement || 0;

    //If we dont know the biggest and smallest element, we callculate them
    if (smallestElement === undefined || biggestElement === undefined) {
      originalArray.forEach((element) => {
        // Visit element.
        this.callbacks.visitingCallback(element);

        // Detect biggest element.
        if (this.comparator.greaterThan(element, detectedBiggestElement)) {
          detectedBiggestElement = element;
        }

        // Detect smallest element.
        if (this.comparator.lessThan(element, detectedSmallestElement)) {
          detectedSmallestElement = element;
        }
      });
    }


    // Init buckets array.
    // This array will hold frequency of each number from originalArray.
    const buckets = Array(detectedBiggestElement - detectedSmallestElement + 1).fill(0);

    originalArray.forEach((element) => {
      // Visit element.
      this.callbacks.visitingCallback(element);

      //Increment the number of the ocurrence. 
      //As the SmallestElement may not be 0, we need to calculate the index
      //in orden to incremenet the element ocurrence correctly
      buckets[element - detectedSmallestElement] += 1;
    });

    // Add previous frequencies to the current one for each number in bucket
    // to detect how many numbers less then current one should be standing to
    // the left of current one.
    // This would be our second step as depicted above
    for (let bucketIndex = 1; bucketIndex < buckets.length; bucketIndex += 1) {
      buckets[bucketIndex] += buckets[bucketIndex - 1];
    }

    // Now let's shift frequencies to the right so that they show correct numbers.
    // I.e. if we won't shift right than the value of buckets[5] will display how many
    // elements less than 5 should be placed to the left of 5 in sorted array
    // INCLUDING 5th. After shifting though this number will not include 5th anymore.
    // This would be our third step
    buckets.pop();
    buckets.unshift(0);

    // Now let's assemble sorted array.
    const sortedArray = Array(originalArray.length).fill(null);
    
    for (let elementIndex = 0; elementIndex < originalArray.length; elementIndex += 1) {
      // Get the element that we want to put into correct sorted position.
      const element = originalArray[elementIndex];

      // Visit element.
      this.callbacks.visitingCallback(element);

      // Get correct position of this element in sorted array.
      const elementSortedPosition = buckets[element - detectedSmallestElement];

      // Put element into correct position in sorted array.
      sortedArray[elementSortedPosition] = element;

      // Increase position of current element in the bucket for future correct placements.
      buckets[element - detectedSmallestElement] += 1;
    }

    // Return sorted array.
    return sortedArray;
  }
}
