// ONLY NODEJS FOR BETTER TIMING

const shellSort = arr => {
  let hrstart = process.hrtime();
  let swaps = 0;
  for (let a = arr.length; a > 0; a = parseInt(a / 2)) {
    for (let i = a; i < arr.length; i++) {
      let b = arr[i];
      let j;
      for (j = i; j >= a && b < arr[j - a]; j -= a) {
        arr[j] = arr[j - a];
        swaps++;
      }
      arr[j] = b;
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
console.log(shellSort(arr));

let arr1 = [];
for (let i = 0; i < 128; i++) {
  arr1.push(i);
}
console.log(shellSort(arr1));

let arr2 = [];
for (let i = 0; i < 128; i++) {
  arr2.push(128 - i);
}
console.log(shellSort(arr2));
