module("Braces simple");

/*
Write a function that validates a series of braces.
*/

function validSequence1(braces) {
  braces = braces.split("");
  const stack = [];
  while (braces.length !== 0) {
    let brace = braces.shift();
    switch (brace) {
      case "(":
        stack.push(brace);
        break;
      case "{":
        stack.push(brace);
        break;
      case "[":
        stack.push(brace);
        break;
      case "<":
        stack.push(brace);
        break;
      case ")":
        if (stack.pop() !== "(") return false;
        break;
      case "}":
        if (stack.pop() !== "{") return false;
        break;
      case "]":
        if (stack.pop() !== "[") return false;
        break;
      case ">":
        if (stack.pop() !== "<") return false;
        break;
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

test("Valid cases", function() {
  equal(validSequence1(""), true, "empty string validates");
  equal(validSequence1("()"), true, "valid case");
  equal(validSequence1("()()"), true, "valid case");
  equal(validSequence1("(())"), true, "valid case");
  equal(validSequence1("(()())"), true, "valid case");
});

test("Invalid cases", function() {
  equal(validSequence1(")"), false, "invalid case");
  equal(validSequence1("("), false, "invalid case");
  equal(validSequence1(")("), false, "invalid case");
  equal(validSequence1("(()"), false, "invalid case");
  equal(validSequence1("())"), false, "invalid case");
  equal(validSequence1("())()("), false, "invalid case");
});
