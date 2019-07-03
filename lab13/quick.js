let swaps = 0;
let hrstart = process.hrtime();

const swap = (arr, leftIndex, rightIndex) => {
  let temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
  swaps++;
};
const partition = (arr, left, right) => {
  let a = arr[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (arr[i] < a) {
      i++;
    }
    while (arr[j] > a) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
};

const quickSort = (arr, left, right) => {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  let hrend = process.hrtime(hrstart);
  return { arr, time: hrend[1] / 1000000, swaps };
};
// let arr = [];
// for (let i = 0; i < 75000; i++) {
//   arr.push(Math.round(Math.random() * 10));
// }
// console.log(quickSort(arr, 0, arr.length - 1));

// let arr1 = [];
// for (let i = 0; i < 75000; i++) {
//   arr1.push(i);
// }
// console.log(quickSort(arr1, 0, arr1.length - 1));

let arr2 = [];
for (let i = 0; i < 75000; i++) {
  arr2.push(75000 - i);
}
console.log(quickSort(arr2, 0, arr2.length - 1));
