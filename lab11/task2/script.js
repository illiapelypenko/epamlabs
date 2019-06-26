const a = Number(prompt("Enter a first number"));
const b = Number(prompt("Enter a second number"));
const c = Number(prompt("Enter a third number"));

let res;

if ((b <= a && a <= c) || (c <= a && a <= b)) {
    res = a;
}

if ((a <= b && b <= c) || (c <= b && b <= a)) {
    res = b;
}

if ((b <= c && c <= a) || (a <= c && c <= b)) {
    res = c;
}

alert(`Answer ${res}`);
