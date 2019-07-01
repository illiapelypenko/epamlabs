module("Deep comparison");

/*
Напишіть функцію, яка приймає два значення і повертає true, 
тільки якщо це два однакових значення або це об'єкти, властивості 
яких мають однакові значення 
*/

function deepEqual(a, b) {
  if (typeof a === "object" && typeof b === "object") {
    for (key in a) {
      return deepEqual(a[key], b[key]);
    }
  }
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

test("Deep comparison", function() {
  var obj = { here: { is: "an" }, object: 2 };
  equal(deepEqual(obj, obj), true, "один об'єкт");

  equal(deepEqual(obj, { here: 1, object: 2 }), false, "різні об'єкти");

  equal(
    deepEqual(obj, { here: { is: "an" }, object: 2 }),
    true,
    "два однакових об'єкти"
  );

  equal(deepEqual(13, 13), true, "прості типи");

  equal(deepEqual(13, "13"), false, "прості типи");
});
