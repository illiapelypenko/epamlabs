const sort = arr => {
  let hrstart = process.hrtime();
  let swaps = 0;
  arr = arr.sort((a, b) => {
    swaps++;
    return a - b;
  });
  let hrend = process.hrtime(hrstart);
  return { arr, time: hrend[1] / 1000000, swaps };
};

// let arr = [];
// for (let i = 0; i < 75000; i++) {
//   arr.push(Math.round(Math.random() * 10));
// }
// console.log(sort(arr));

// let arr1 = [];
// for (let i = 0; i < 75000; i++) {
//   arr1.push(i);
// }
// console.log(sort(arr1));

let arr2 = [];
for (let i = 0; i < 75000; i++) {
  arr2.push(75000 - i);
}
console.log(sort(arr2));
