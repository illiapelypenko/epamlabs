let n = Number(prompt("Enter the length of array"));
let array = [];
for (let i = 0; i < n; i++) {
    array[i] = Number(prompt(`Enter the ${i} element`));
}
let min = Infinity;
let max = -Infinity;

array.forEach(i => {
    if (i < min) {
        min = i;
    }
    if (i > max) {
        max = i;
    }
});

if (array.indexOf(min) % 2 === 0 && array.indexOf(max) % 2 === 0) {
    if (array.indexOf(max) != 0) {
        let indexMax = array.indexOf(max);
        [array[indexMax], array[indexMax - 1]] = [
            array[indexMax - 1],
            array[indexMax]
        ];
    }
} else {
    for (let i = 0; i < array.length / 2; i++) {
        [array[i], array[array.length - i - 1]] = [
            array[array.length - i - 1],
            array[i]
        ];
    }
}

alert(array);
