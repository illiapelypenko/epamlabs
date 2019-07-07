function Product(name, price, amount) {
  this.name = name;
  this.price = price;
  this.amount = amount;
}

function Basket() {
  this.products = [];
}

Basket.prototype.AddProduct = function(product) {
  this.products.push(product);
};

Basket.prototype.CalcTotal = function() {
  let total = 0;
  for (product of this.products) {
    total += product.price * product.amount;
  }
  return total;
};

Basket.prototype.PrintShoppingInfo = function() {
  let output = ``;
  for (product of this.products) {
    output += `name: ${product.name}, price: ${product.price}, amount: ${
      product.amount
    }\n`;
  }
  return output;
};

Basket.prototype.SortByName = function() {
  this.products.sort((product1, product2) => {
    if (product1.name < product2.name) return -1;
    if (product1.name > product2.name) return 1;
    return 0;
  });
  return this.products;
};

Basket.prototype.SortByPrice = function() {
  this.products.sort((product1, product2) => {
    if (product1.price < product2.price) return -1;
    if (product1.price > product2.price) return 1;
    if (product1.name < product2.name) return -1;
    if (product1.name > product2.name) return 1;
    return 0;
  });
  return this.products;
};

Basket.prototype.SortByAll = function() {
  this.products.sort((product1, product2) => {
    if (product1.name < product2.name) return -1;
    if (product1.name > product2.name) return 1;
    if (product1.price < product2.price) return -1;
    if (product1.price > product2.price) return 1;
    if (product1.amount < product2.amount) return -1;
    if (product1.amount > product2.amount) return 1;
    if (product1.amount * product1.price < product2.amount * product2.amount)
      return -1;
    if (product1.amount * product1.price > product2.amount * product2.amount)
      return 1;
    return 0;
  });
  return this.products;
};

const basket = new Basket();
const milk = new Product("milk", 25, 10);
const candy = new Product("candy", 1, 100);
const fish = new Product("fish", 50, 4);

basket.AddProduct(milk);
basket.AddProduct(candy);
basket.AddProduct(fish);
document.querySelector("body").innerHTML +=
  "total: " + basket.CalcTotal() + "<br>";
document.querySelector("body").innerHTML +=
  "products: " + basket.PrintShoppingInfo() + "<br>";
basket.SortByName();
document.querySelector("body").innerHTML +=
  "products sorted by name: " + basket.PrintShoppingInfo() + "<br>";
basket.SortByPrice();
document.querySelector("body").innerHTML +=
  "products sorted by price: " + basket.PrintShoppingInfo() + "<br>";
basket.SortByAll();
document.querySelector("body").innerHTML +=
  "products sorted by all: " + basket.PrintShoppingInfo() + "<br>";

// console.log(basket.CalcTotal());
// console.log(basket.PrintShoppingInfo());
// console.log(basket.SortByName());
// console.log(basket.SortByPrice());
// console.log(basket.SortByAll());
