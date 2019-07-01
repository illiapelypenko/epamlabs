module("Balls");

/* В одній комп'ютерній грі гравець виставляє в лінію кульки різних кольорів.
Коли утворюється безперервний ланцюжок з трьох і більше кульок одного кольору,
вона видаляється з лінії. Всі кульки при цьому зсуваються один до одного, і
ситуація може повторитися.

Напишіть функцію, яка по даній ситуації визначає, скільки кульок буде
"знищено". Природно, безперервних ланцюжків з трьох і більше одноколірних куль в
початковий момент може бути не більше одного.  */

function countDel(arr) {
  let isThreeBalls = true;
  let deleted = 0;

  while (isThreeBalls) {
    isThreeBalls = false;
    let count = 1;
    let n = 0;
    for (let i = 1; i <= arr.length; i++) {
      if (arr[i] === arr[n]) {
        count++;
      } else if (count < 3) {
        n = i;
        count = 1;
      }
    }
    if (count >= 3) {
      arr.splice(n, count);
      deleted += count;
      isThreeBalls = true;
    }
  }

  return deleted;
}

test("Balls", function() {
  equal(countDel([5, 1, 3, 3, 3, 2]), 3, "");
  equal(countDel([5, 1, 2, 3, 3, 3]), 3, "");
  equal(countDel([3, 3, 3, 2]), 3, "");
  equal(countDel([5, 1, 3, 4, 3, 3]), 0, "");
  equal(countDel([5, 1, 3, 3, 3, 1, 1, 2]), 6, "");
  equal(countDel([9, 5, 5, 1, 3, 3, 3, 1, 1, 5, 5]), 10, "");
});
