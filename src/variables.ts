/*In JavaScript, it’s important not to confuse const, with immutability. 
const creates a variable name binding which can’t be reassigned after 
creation. const does not create immutable objects. You can’t change the 
object that the binding refers to, but you can still change the 
properties of the object, which means that bindings created with const 
are mutable, not immutable.*/


/*let customerName: string = "John"; //ne moras stavljati string
let price: number = 10;
let someth: boolean = false;
let day: Date = new Date(2018, 3, 12);
let bzv: any = "This can be anything";
enum clr {Red, Green, Blue};
let Red: number = 25;
let list = [1, 2, 3, 4];

let namePerson = { //mutable values: objects, arrays, functions, classes, sets, maps
    name: 'Iva',
    age: 25
};
let b = namePerson;
namePerson.name = 'Ivana';
console.log(b.name); //Ivana

let s = ['f', 'g'];
let j = s;
s.push("q");
console.log(...j);
console.log(s===j); //true

let a = 'test'; //immutable values(example: strings and numbers)
let ba = a;
a = a.substring(1);
console.log(ba); //test
console.log(a); //est */
/*
const [ first, second, last ] = list;

console.log(namePerson)
interface labelledValue {
    label: String;

}
function printLbl (lblObj: {label: string}) { 
    console.log(lblObj.label)
}
let myObj = {size: 10, label: "Size 10 obj"};
printLbl(myObj);*/


