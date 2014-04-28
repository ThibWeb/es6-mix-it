var Circle = function(x, y, r) {
  this.center = {
    x: x,
    y: y
  };
  this.radius = r;
};

var c = new Circle(3, 5, 10);

var {x, y} = c.center;

console.log(x);
console.log(y);



var getDiameter = function({radius: r}) {
  return r * 2;
};

console.log(getDiameter(c));




