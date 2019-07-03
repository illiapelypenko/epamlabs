// ONLY NODEJS FOR BETTER TIMING
const combSort = arr => {
  let hrstart = process.hrtime();
  let swaps = 0;
  let interval = Math.floor(arr.length / 1.3);
  while (interval > 0) {
    for (let i = 0; i + interval < arr.length; i += 1) {
      if (arr[i] > arr[i + interval]) {
        let small = arr[i + interval];
        arr[i + interval] = arr[i];
        swaps++;
        arr[i] = small;
      }
    }
    interval = Math.floor(interval / 1.3);
  }
  let hrend = process.hrtime(hrstart);
  return { arr, time: hrend[1] / 1000000, swaps };
};

let arr = [];
for (let i = 0; i < 128; i++) {
  arr.push(Math.round(Math.random() * 10));
}
console.log(combSort(arr));

let arr1 = [];
for (let i = 0; i < 128; i++) {
  arr1.push(i);
}
console.log(combSort(arr1));

let arr2 = [];
for (let i = 0; i < 128; i++) {
  arr2.push(128 - i);
}
console.log(combSort(arr2));
