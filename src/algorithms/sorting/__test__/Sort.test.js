import BubbleSort from '../bubble-sort/BubbleSort.js';
import HeapSort from '../heap-sort/HeapSort.js';
import InsertionSort from '../insertion-sort/InsertionSort.js';
import MergeSort from '../merge-sort/MergeSort.js';
import QuickSort from '../quick-sort/QuickSort.js';
import RadixSort from '../radix-sort/RadixSort.js';
import SelectionSort from '../selection-sort/SelectionSort.js';


//Declare some random arrays
export const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
export const reverseArr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
export const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
export const equalArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
export const negativeArr = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
export const negativeArrSorted = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20];

//log the original array
console.log('Original array...')
console.log(notSortedArr.toString());

//SelectionSort
console.log('Performing Selection-Sort');
const SelectionSorter = new SelectionSort();
console.log(SelectionSorter.sort(notSortedArr).toString());

//RadixSort
console.log('Performing Radix-Sort');
const RadixSorter = new RadixSort();
console.log(RadixSorter.sort(notSortedArr).toString());

//QuickSort
console.log('Performing Quick-Sort');
const QuickSorter = new QuickSort();
console.log(QuickSorter.sort(notSortedArr).toString());

//MergeSort
console.log('Performing Merge-Sort');
const MergeSorter = new MergeSort();
console.log(MergeSorter.sort(notSortedArr).toString());


//Insertion-Sort
console.log('Performing Insertion-Sort');
const InsertionSorter = new InsertionSort();
console.log(InsertionSorter.sort(notSortedArr).toString());

//Heap Sort
console.log('Performing HeapSort')
const HeapSorter = new HeapSort();
console.log(HeapSorter.sort(notSortedArr).toString());

//We now sort the array
const sorter = new BubbleSort();
console.log(sorter.sort(reverseArr));


