// ONLY NODEJS FOR BETTER TIMING
const selectionSort = arr => {
  let hrstart = process.hrtime();
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
      swaps++;
    }
  }
  let hrend = process.hrtime(hrstart);
  return { arr, time: hrend[1] / 1000000, swaps };
};

let arr = [];
for (let i = 0; i < 128; i++) {
  arr.push(Math.round(Math.random() * 10));
}
console.log(selectionSort(arr));

let arr1 = [];
for (let i = 0; i < 128; i++) {
  arr1.push(i);
}
console.log(selectionSort(arr1));

let arr2 = [];
for (let i = 0; i < 128; i++) {
  arr2.push(128 - i);
}
console.log(selectionSort(arr2));
