
  Array.prototype.square = function() {
    console.log(this.map((item) => {return Math.pow(item, 2)}));
  }

  Array.prototype.cube = function() {
    console.log(this.map((item) => {return Math.pow(item, 3)}));
  }

  Array.prototype.average = function() {
    let total = 0;
    this.forEach((item) => {total += item});
    console.log(total / this.length);
  }

  Array.prototype.sum = function() {
    let total = 0;
    this.forEach((item) => {total += item});
    console.log(total); 
  }

  Array.prototype.even = function() {
    let array = [];
    for (let i = 0; i < this.length; i++) {
      if (this[i] % 2 == 0) { 
        array.push(this[i]);
      }
    }
    console.log(array);
  }

  Array.prototype.odd = function() {
    let array = [];
    for (let i = 0; i < this.length; i++) {
      if (this[i] % 2 !== 0) { 
        array.push(this[i]);
      }
    }
    console.log(array);
  }

let numbers = [1, 2, 3, 4, 5];
let emptyArray = [];
numbers.square();
numbers.cube();
numbers.average();
numbers.sum();
numbers.even();
numbers.odd();
emptyArray.average();

