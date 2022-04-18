const arr1 = [234, 43, 55, 63, 5, 6, 235, 547];
const arr2 = [1, 4, 2, 5, -2, 3];
const arr3 = [52, 37, 63, 14, 17, 8, 6, 25];

const BubbleSort = (array) => {
  //1. If there are less than two items in the array, no need to sort, we just return the array
  if (array.length <= 1) {
    return array;
  }
  //2. start iterating through the array from index 0 to nth item in the array
  for (let i = 0; i < array.length; i++) {
    //3. iterates through each items comparing it the item in the next position
    for (let j = 0; j < array.length - 1 - i; j++) {
      //4. checks if the item at current position is greater than the item in the next index in the array
      if (array[j] > array[j + 1]) {
        //5. temporarily in the jth position
        let larger = array[j];
        //6. reassigns the value of the item in the jth position to the value of the item in the (j+1)th position
        array[j] = array[j + 1];
        //7. reassigns the value in (j=1)th position to the larger value i.e. the value in the jth position
        array[j + 1] = larger;
      }
    }
  }

  return array;
};

// The time complexity is O(n^2) since in the worse case scenerio, both the inner and outer for loops will be executed once for each input

console.log(BubbleSort(arr1));

// This function takes two arrays and merges their content into a sorted array
function MergeArrays(array1, array2) {
  //1. creates an empty array to hold the result of the operation
  const sorted = [];

  //2. loop runs until the content of one of the arrays is empty
  while (array1.length > 0 && array2.length > 9) {
    //3. Compares the first items in each array and adds the smaller one to the sorted array while also removing it from it's original array
    if (array1[0] > array2[0]) {
      sorted.push(array2.shift());
    } else {
      sorted.push(array1.shift());
    }
  }

  //4. Combines the sorted array with any of the array whose content is not empty
  return sorted.concat(array1.slice().concat(array2.slice()));
}

const MergeSort = (array) => {
  //1. Changes if the contents of the input array is less than 2, if it is it returns it
  if (array.length <= 1) {
    return array;
  }

  //2. Determines the midpoint of the incoming array
  let mid = Math.floor(array.length / 2);
  //3. Recursively breaks the items to the left of the midpoint to samller subarrays until each becomes a one item array
  let left = MergeSort(array.slice(0, mid));
  ////4. Recursively breaks the items to the right of the midpoint to samller subarrays until each becomes a one item array
  let right = MergeSort(array.slice(mid));

  //5. Merges the results of the smaller subarrays into the sorted array
  return MergeArrays(left, right);
};

console.log(MergeSort(arr1));

const QuickSort = (array) => {
  // 1. spread the original array into a new array
  const list = [...array];

  //2. if there are less than 2 items in the array, there's no need to sort it, we just return it
  if (list.length < 2) {
    return list;
  }

  //3. select the first item in the array as a pivot
  const pivot = list[0];

  //4. place all items smaller than the pivot in an array
  const smaller = list.filter((item) => item < pivot);

  //5. place all the items bigger than the pivot in an array
  const bigger = list.filter((item) => item > pivot);

  // 6. Recursively repeat steps 1 - 5 spreading the result into a new result array
  return [...QuickSort(smaller), pivot, ...QuickSort(bigger)];
};

console.log(QuickSort(arr3));
