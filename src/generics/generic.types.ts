//generic function
//this function takes parameter T (type) which can be any type, but it will also return the same type that she gets;
//T is different than "any"; using "any" in this function would cause to lose the type of the parameter

function identity<T>(arg: T): T {
  return arg;
}

//let myIdentity: <T>(arg: T) => T = identity; //or:
let myIdentity: {<T>(arg: T): T} = identity;

//this will show that T keeps the type of the passed argument:
console.log(typeof myIdentity("String")); //string
console.log(typeof myIdentity(50)); //number

//a different name for the generic type parameter could be used, but "T" is a convention

const sym = Symbol("symbol");
const sym1 = Symbol("symbol");

const str1 = "symbol";
const str2 = "symbol";

console.log(str1 === str2);

class Symbolic {
  [sym](){
    return sym;
  }
}

const nesto = new Symbolic();

console.log(nesto[sym]());


