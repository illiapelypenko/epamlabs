module("Rectangle intersection");

/*
Your task is to create three classes with correct inheritance setup.

  Shape class is an abstract figure class and only holds its position.
  Constructor: Shape(x, y)
  Methods:
    shape.getX() must return x coordinate
    shape.getY() must return y coordinate

  Constructor: Rectangle(x, y, width, height)
    x and y hold position of rectangles' top-left corner
  Inherits from: Schape
  Methods:
    rectangle.getWidth() must return width
    rectangle.getHeight() must return height
    rectangle.intersects(anotherRectangle) must return true if two rectangles intersect and false otherwise
      do not forget to check if argument is actually a rectangle

  Constructor: Square(x, y, size)
  Inherits from: Rectangle
  Methods: none

Aim of task is to be able to correctly calculate intersections between Rectangle and its subclass Square
*/

// Write your classes here
// ---

function Shape(x, y) {
  this.x = x;
  this.y = y;
}

Shape.prototype.getX = function() {
  return this.x;
};

Shape.prototype.getY = function() {
  return this.y;
};

function Rectangle(x, y, width, height) {
  Shape.call(this, x, y);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getWidth = function() {
  return this.width;
};

Rectangle.prototype.getHeight = function() {
  return this.height;
};

Rectangle.prototype.intersects = function(rec) {
  let ax1 = this.x;
  let ax2 = this.x + this.width + this.height;
  let ay1 = this.y;
  let ay2 = this.y + this.height + this.width;
  let bx1 = rec.x1;
  let bx2 = rec.x2 + rec.width + rec.height;
  let by1 = rec.y;
  let by2 = rec.y + rec.height + rec.width;

  if (ax1 >= bx2 || bx1 >= ax2) return false;

  if (ay1 >= by2 || by1 >= ay2) return false;

  return true;
};

function Square(x, y, width, height) {
  Rectangle.call(this, x, y, width, height);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

// ---

test("Inheritance chain is valid", function() {
  var constructors = [typeof Shape, typeof Square, typeof Rectangle];

  for (var i = 0; i < constructors.length; i++) {
    if (constructors[i] !== "function") {
      ok(false, "Constructors are not defined");
      return;
    }
  }

  // Prototypal inheritance is correct
  notEqual(Shape.prototype, Rectangle.prototype);
  notEqual(Square.prototype, Rectangle.prototype);
  notEqual(Square.prototype, Shape.prototype);

  // constructor property points to correct function
  equal(Shape.prototype.constructor, Shape);
  equal(Rectangle.prototype.constructor, Rectangle);
  equal(Square.prototype.constructor, Square);

  var rectangleOne = new Rectangle(-100, -100, 2, 4);
  var rectangleTwo = new Rectangle(10, 5, 4, 6);

  var squareOne = new Square(0, 0, 20);
  var squareTwo = new Square(5, 5, 10);

  // Prototypal inheritance chain is correct
  equal(rectangleOne instanceof Shape, true);
  equal(rectangleOne instanceof Rectangle, true);

  equal(squareOne instanceof Shape, true);
  equal(squareOne instanceof Rectangle, true);
  equal(squareOne instanceof Square, true);

  // Methods work as expected
  equal(rectangleOne.intersects(rectangleTwo), false);
  equal(rectangleOne.intersects(squareOne), false);

  equal(squareOne.intersects(squareTwo), true);
  equal(squareOne.intersects(rectangleTwo), true);
});
