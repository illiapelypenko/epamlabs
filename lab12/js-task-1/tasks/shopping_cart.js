module("Shopping cart");

/*
Write a function that calculates total value of goods in a shopping cart,
taking discounts into account.

goods in an array of objects like { name: 'Milk', value: 10, amount: 2 }
discounts is an array of objects like { name: 'Milk', discount: '10%' }
*/

function totalCost(goods, discounts) {
  let resultGoods = [];
  for (good of goods) {
    resultGoods.push({
      name: good.name,
      price: good.value * good.amount
    });
  }
  let nocopies = false;
  while (!nocopies) {
    for (good of resultGoods) {
      let similiarGoodIndex = resultGoods.findIndex(
        (good2, index, array) => good.name === good2.name && good2 !== good
      );
      if (similiarGoodIndex > -1) {
        good.price += resultGoods[similiarGoodIndex].price;
        resultGoods.splice(similiarGoodIndex, 1);
      } else {
        nocopies = true;
      }
    }
  }
  for (discount of discounts) {
    let discountGoodIndex = resultGoods.findIndex(
      good => good.name === discount.name
    );
    if (discountGoodIndex > -1) {
      resultGoods[discountGoodIndex].price =
        resultGoods[discountGoodIndex].price -
        resultGoods[discountGoodIndex].price *
          Number(`0.${discount.discount[0]}`);
    }
  }

  let result = 0;
  for (good of resultGoods) {
    result += good.price;
  }
  return result;
}

test("Shopping cart", function() {
  equal(
    totalCost(
      [
        { name: "Milk", value: 10, amount: 1 },
        { name: "Vegetables", value: 20, amount: 1 },
        { name: "Meat", value: 50, amount: 2 }
      ],
      []
    ),
    130,
    "Without discounts, simple case"
  );
  // 10 + 20 + 50 * 2 = 130

  equal(
    totalCost(
      [
        { name: "Milk", value: 10, amount: 1 },
        { name: "Vegetables", value: 20, amount: 1 },
        { name: "Meat", value: 50, amount: 2 },
        { name: "Milk", value: 10, amount: 5 }
      ],
      []
    ),
    180,
    "Without discounts, repeated names"
  );
  // 10 + 20 + 50 * 2 + 10 * 5 = 180

  equal(
    totalCost(
      [
        { name: "Milk", value: 10, amount: 1 },
        { name: "Vegetables", value: 20, amount: 1 },
        { name: "Meat", value: 50, amount: 1 }
      ],
      [{ name: "Vegetables", discount: "50%" }]
    ),
    70,
    "With discounts, simple case"
  );
  // 10 + 10 + 50 = 70

  equal(
    totalCost(
      [
        { name: "Milk", value: 10, amount: 1 },
        { name: "Vegetables", value: 20, amount: 1 },
        { name: "Meat", value: 50, amount: 1 },
        { name: "Salt", value: 5, amount: 3 },
        { name: "Milk", value: 10, amount: 5 }
      ],
      [
        { name: "Vegetables", discount: "50%" },
        { name: "Milk", discount: "10%" }
      ]
    ),
    129,
    "With discounts, repeated names"
  );
  // 9 + 10 + 50 + 5 * 3 + 9 * 5 = 129
});
