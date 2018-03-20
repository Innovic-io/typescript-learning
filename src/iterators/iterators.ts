let evenNumbers = [2, 4, 6, 8];

for (let index in evenNumbers) {
  console.log(index); //0, 1, 2, 3
}

for (let element of evenNumbers) {
  console.log(element); //2, 4, 6, 8
}

const doubleEven = evenNumbers.map(value => value * 2);
console.log(doubleEven); //4, 8, 12, 16

doubleEven.forEach((value, index) => {
  doubleEven[index] = value / 3;
});

const sum = doubleEven.reduce((previousValue, currentValue) => currentValue += previousValue);
console.log(sum);

const oddNumbers = [];

for (let i = 0; i < evenNumbers.length; i++) {
  oddNumbers.push(evenNumbers.map(value => value - 1)[i]);
}
