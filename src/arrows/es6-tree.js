function ES6Tree() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 2000);
}

var t = new ES6Tree();
