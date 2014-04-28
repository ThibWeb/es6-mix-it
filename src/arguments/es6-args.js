var f = function(x, y = 5) {
  return x + y;
};

console.log(f(1));
console.log(f(1, 2));



var g = function(a, ...b) {
  return a + b.length;
};

console.log(g(10));
console.log(g(10, "Hi!", true, {}));



var h = function (l, m) {
  return l + m;
};

console.log(h(...[1, 2]));
console.log(h(...[1, 2, 3]));
