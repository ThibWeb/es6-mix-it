"use strict";
var __moduleName = "es6-args";
var f = function(x) {
  var y = arguments[1] !== (void 0) ? arguments[1] : 5;
  return x + y;
};
console.log(f(1));
console.log(f(1, 2));
var g = function(a) {
  for (var b = [],
      $__0 = 1; $__0 < arguments.length; $__0++)
    b[$__0 - 1] = arguments[$__0];
  return a + b.length;
};
console.log(g(10));
console.log(g(10, "Hi!", true, {}));
var h = function(l, m) {
  return l + m;
};
console.log(h.apply(null, $traceurRuntime.toObject([1, 2])));
console.log(h.apply(null, $traceurRuntime.toObject([1, 2, 3])));
