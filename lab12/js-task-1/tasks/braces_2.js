module("Braces");

/*
Write a function that validates a series of braces.
*/

function validSequence(braces) {
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

test("Simple valid cases", function() {
  equal(validSequence(""), true, "empty string validates");
  equal(validSequence("[]"), true, "square braces");
  equal(validSequence("()"), true, "round braces");
  equal(validSequence("{}"), true, "figure braces");
  equal(validSequence("<>"), true, "brackets");
});

test("Simple invalid cases", function() {
  equal(validSequence("}"), false, "invalid case");
  equal(validSequence("({"), false, "invalid case");
  equal(validSequence("[<]"), false, "invalid case");
  equal(validSequence("({)}"), false, "invalid case");
});

test("Final cases", function() {
  equal(validSequence("([](<{}>))"), true, "valid case");
  equal(validSequence("({[](<{}>}))"), false, "invalid case");
});
