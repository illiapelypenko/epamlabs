const input = Number(prompt("Enter the amount"));
let result = 0;
let rest = 0;
const monets = [25, 10, 5, 1];
let money = Math.round(input * 100);

for (let i = 0; i < monets.length; i++) {
    let monet = monets[i];
    if (monet <= money) {
        rest = money % monet;
        result += (money - rest) / monet;
        money = rest;
    } else {
        continue;
    }
}

alert(result);
