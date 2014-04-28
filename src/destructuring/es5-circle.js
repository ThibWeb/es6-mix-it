var Circle = function(x, y, r) {
  this.center = {
    x: x,
    y: y
  };
  this.radius = r;
};

var c = new Circle(3, 5, 10);

var x = c.center.x;
var y = c.center.y;

console.log(x);
console.log(y);



var getDiameter = function(c) {
  return c.radius * 2;
};

console.log(getDiameter(c));




