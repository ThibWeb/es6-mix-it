"use strict";
var __moduleName = "es6-circle";
var Circle = function(x, y, r) {
  this.center = {
    x: x,
    y: y
  };
  this.radius = r;
};
var c = new Circle(3, 5, 10);
var $__0 = c.center,
    x = $__0.x,
    y = $__0.y;
console.log(x);
console.log(y);
var getDiameter = function($__0) {
  var r = $__0.radius;
  return r * 2;
};
console.log(getDiameter(c));
