import { CarFactory } from './car.factory';
import { equal } from "assert";

const carFactory = new CarFactory();
const car = carFactory.makeCar("Audi", "123-456", "Diesel", 1.9);

//equal("Audi", car.get().model);

function izracunaj(x: number) {

  let s: number = 5;

  this.name = 'hello world';

  const b = (s: number) => {console.log(this)}

  function kvadriraj(s) {
    console.log(this);
    return x * x;
  }
  console.log(s);
  s = (kvadriraj(4) + x);
  console.log(this);

  b(5);

  return s;
}

function Person (name: string, age: number){

  this.name = name;
  this.age = age;

  const personAge = () => {return this.age;}

  function getName(){
    this.name = 'string';
    console.log(this);
  }
  console.log(personAge());
  new getName();
}

const person = new Person("Ivanka", 24);

console.log(person);

//let s: number = izracunaj(2);

//console.log(s);


