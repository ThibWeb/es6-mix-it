"use strict";
var __moduleName = "es6-tree";
function ES6Tree() {
  var $__0 = this;
  this.age = 0;
  setInterval((function() {
    $__0.age++;
    console.log($__0.age);
  }), 2000);
}
var t = new ES6Tree();
