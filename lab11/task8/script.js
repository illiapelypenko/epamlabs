const n = Number(prompt("Enter the height of array"));
const m = Number(prompt("Enter the width of array"));

const array = new Array(n);
for (let i = 0; i < n; i++) {
    array[i] = new Array(m);
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        array[i][j] = Math.round(Math.random() * 9);
    }
}

let output = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        output += array[i][j] + " ";
    }
    output += "\n";
}

alert(output);

let d = [];

for (let i = 0; i < m; i++) {
    let min = Infinity;
    for (let j = 0; j < n; j++) {
        if (array[j][i] < min) {
            min = array[j][i];
        }
    }
    d.push(min);
}

alert(d.toString());
