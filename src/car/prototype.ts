const a = String("vlado");

String.prototype.reverse = function () {
  let newValue = '';
  let i = this.length-1;
  while (i>=0) {
    newValue += this[i--];
  }

  return newValue;
}

String.prototype.reverse2 = function () {

  return this
    .split('')
    .map((item, index) => this[(this.length - 1 ) - index])
    .join('');
}

const bb = a.reverse();
const cc = a.reverse2();
console.log(bb);
