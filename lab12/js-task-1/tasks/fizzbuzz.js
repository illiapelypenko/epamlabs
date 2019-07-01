module("FizzBuzz");

/*
Write a function, that takes a number of elements N.
It must create a string filled with consecutive numbers from 1 to N, with exceptions:

Replace any numbers that are divisible by 3 with string 'Fizz'
Replace any numbers that are divisible by 5 with string 'Buzz'
Replace numbers that are divisible by both 3 and 5 with string 'FizzBuzz'

fizzBuzz(1) == '1'
fizzBuzz(2) == '1 2'
fizzBuzz(3) == '1 2 Fizz'
fizzBuzz(5) == '1 2 Fizz 4 Buzz'
fizzBuzz(15) == '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz'
*/

function fizzBuzz(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    i % 3 === 0 && i % 5 === 0
      ? arr.push("FizzBuzz")
      : i % 3 === 0
      ? arr.push("Fizz")
      : i % 5 === 0
      ? arr.push("Buzz")
      : arr.push(i);
  }
  return arr.join(" ");
}

test("FizzBuzz", function() {
  equal(fizzBuzz(1), "1", "correct fizzBuzz(1)");
  equal(fizzBuzz(2), "1 2", "correct fizzBuzz(2)");
  equal(fizzBuzz(3), "1 2 Fizz", "correct fizzBuzz(3)");
  equal(fizzBuzz(5), "1 2 Fizz 4 Buzz", "correct fizzBuzz(5)");
  equal(
    fizzBuzz(15),
    "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz",
    "correct fizzBuzz(15)"
  );
});
