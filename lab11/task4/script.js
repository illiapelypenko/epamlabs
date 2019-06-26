const n = Number(prompt("Enter a number of rows"));
let output = "";

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
        output += "\xa0\xa0";
    }

    for (let j = 1; j <= i; j++) {
        output += "#";
    }

    // ----

    output += "\xa0\xa0\xa0\xa0";

    for (let j = 1; j <= i; j++) {
        output += "#";
    }

    output += "\n";
}

alert(output);
