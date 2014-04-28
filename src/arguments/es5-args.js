var f = function(x, y) {
  y = y ? y : 5;
  return x + y;
};

console.log(f(1));
console.log(f(1, 2));



var g = function(a, b) {
  return a + (arguments.length - 1);
};

console.log(g(10));
console.log(g(10, "Hi!", true, {}));



var h = function (arr) {
  return arr[0] + arr[1];
};

console.log(h([1, 2]));
console.log(h([1, 2, 3]));
