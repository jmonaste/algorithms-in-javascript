/**
 * Shell sort is a generalized version of the insertion sort algorithm. 
 * It first sorts elements that are far apart from each other and successively 
 * reduces the interval between the elements to be sorted. 
 * 
 * The interval between the elements is reduced based on the sequence used.
 */

import Sort from '../Sort.js';

export default class ShellSort extends Sort {
  sort(originalArray) {
    // Prevent original array from mutations.
    const array = [...originalArray];

    // Define a gap distance. Usually half the length of the array
    let gap = Math.floor(array.length / 2);

    // Until gap is bigger then zero do elements comparisons and swaps.
    while (gap > 0) {

      // Go and compare all distant element pairs.
      for (let i = 0; i < (array.length - gap); i += 1) {
        let currentIndex = i;
        let gapShiftedIndex = i + gap;

        while (currentIndex >= 0) {
          // Call visiting callback.
          this.callbacks.visitingCallback(array[currentIndex]);

          // Compare and swap array elements if needed.
          if (this.comparator.lessThan(array[gapShiftedIndex], array[currentIndex])) {
            //If array[gapShiftedIndex] < array[currentIndex]
            const tmp = array[currentIndex];
            array[currentIndex] = array[gapShiftedIndex];
            array[gapShiftedIndex] = tmp;
          }

          gapShiftedIndex = currentIndex;
          currentIndex -= gap;
        }
      }

      // Shrink the gap. Half the gap
      gap = Math.floor(gap / 2);
    }

    // Return sorted copy of an original array.
    return array;
  }
}
