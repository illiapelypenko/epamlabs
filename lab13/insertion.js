// ONLY NODEJS FOR BETTER TIMING
const insertionSort = arr => {
  let hrstart = process.hrtime();
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > a; j--) {
      arr[j + 1] = arr[j];
      swaps++;
    }
    arr[j + 1] = a;
    swaps++;
  }
  let hrend = process.hrtime(hrstart);
  return { arr, time: hrend[1] / 1000000, swaps };
};

let arr = [];
for (let i = 0; i < 128; i++) {
  arr.push(Math.round(Math.random() * 10));
}
console.log(insertionSort(arr));

let arr1 = [];
for (let i = 0; i < 128; i++) {
  arr1.push(i);
}
console.log(insertionSort(arr1));

let arr2 = [];
for (let i = 0; i < 128; i++) {
  arr2.push(128 - i);
}
console.log(insertionSort(arr2));
