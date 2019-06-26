const input = prompt("Enter the card number");

let manufacturer = "";

const cards = [
    {
        name: "AMEX",
        numbers: ["34", "37"],
        digitsCount: [15]
    },
    {
        name: "MASTERCARD",
        numbers: ["51", "52", "53", "54", "55"],
        digitsCount: [16]
    },
    {
        name: "VISA",
        numbers: ["4"],
        digitsCount: [13, 16]
    }
];

let digits = [];
for (let i = 0; i < input.length; i++) {
    digits.unshift(Number(input[i]));
}

for (let i = 1; i < digits.length; i += 2) {
    digits[i] = digits[i] * 2;
    if (digits[i] > 9) {
        digits[i] = digits[i] - 9;
    }
}

let sum = 0;

for (let i = 0; i < digits.length; i++) {
    sum += digits[i];
}

// Manufacturer
cards.forEach(card => {
    if (card.digitsCount.indexOf(input.length) > -1) {
        card.numbers.forEach(number => {
            if (input.indexOf(number) === 0) {
                manufacturer = card.name;
            }
        });
    }
});

if (sum % 10 === 0 && manufacturer) {
    alert(manufacturer);
} else {
    alert("INVALID");
}
