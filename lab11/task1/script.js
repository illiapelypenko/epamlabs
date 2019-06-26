const x = Number(prompt("Enter a number"));

let result =
    x /
    (Math.pow(x, 3) + 0.1 / (Math.pow(x, 3) + 0.01 / (Math.pow(x, 3) + 0.001)));

alert(result);
