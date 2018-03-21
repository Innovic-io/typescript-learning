/*What strict does, in case it wasn't clear there, is that it checks not only the
equality of the two values, it compares the types of the two values too.
Using == will try and convert one side of the expression to be the same type as the other.*/

console.log(0 == false); // true
console.log(0 === false);  // false, because they are of a different type
console.log(1 == "1");   // true, automatic type conversion for value only
console.log(1 === "1") ;   // false, because they are of a different type
console.log(null == undefined); // true
console.log(null === undefined);// false
console.log('0' == false);// true
console.log('0' === false);// false
