// ONLY NODEJS FOR BETTER TIMING
const bubbleSort = arr => {
  let hrstart = process.hrtime();
  let swaps = 0;
  let len = arr.length;
  let wasSorted;
  do {
    wasSorted = false;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        wasSorted = true;
        swaps++;
      }
    }
  } while (wasSorted);
  let hrend = process.hrtime(hrstart);
  return { arr, swaps, time: hrend[1] / 1000000 };
};

let arr = [];
for (let i = 0; i < 128; i++) {
  arr.push(Math.round(Math.random() * 10));
}
console.log(bubbleSort(arr));

let arr1 = [];
for (let i = 0; i < 128; i++) {
  arr1.push(i);
}
console.log(bubbleSort(arr1));

let arr2 = [];
for (let i = 0; i < 128; i++) {
  arr2.push(128 - i);
}
console.log(bubbleSort(arr2));
