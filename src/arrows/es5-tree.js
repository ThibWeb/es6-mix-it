function ES5Tree() {
  var self = this;
  self.age = 0;

  setInterval(function () {
    self.age++;
    console.log(self.age);
  }, 2000);
}

var t = new ES5Tree();
