/*Functional programming (often abbreviated FP) is the process of 
building software by composing pure functions, avoiding shared state, 
mutable data, and side-effects. Functional programming is declarative 
rather than imperative, and application state flows through pure 
functions. Contrast with object oriented programming, where application 
state is usually shared and colocated with methods in objects.*/

/*it is used in situations where we have to perform lots of different 
operations on the SAME SET of data*/


/*
Pure function: given the same inputs always returns the same output
and has no side effects, also doesn't depend on anything but itself

Function composition: combining two or more functions in order to
produce a new function or perform some computation

Shared state: is any variable, object, or memory space 
that exists in a shared scope, or as the property of an object being 
passed between scopes. A shared scope can include global scope or 
closure scopes

Immutability: when the passed state of the given object is not changed
but instead a new object is created
the return of the function is always a new object: not the one from
the function's arg

Side effect: is any application state change that is observable outside 
the called function other than its return value (logging to console, 
writing to the screen/file/network, triggering any external process, 
calling any other function with side-effects )

A higher order function is any function which takes a function as an 
argument, returns a function, or both. Higher order functions are often 
used to:
--Abstract or isolate actions, effects, or async flow control using 
callback functions, promises, monads, etc…
--Create utilities which can act on a wide variety of data types
--Partially apply a function to its arguments or create a curried 
function for the purpose of reuse or function composition
--Take a list of functions and return some composition of those input 
functions
*/

//immutable data examples

let som = 1, som2 = 5;
som++;
//som2=som; 
console.log(som2);
/*for mutable values, updating state applies across all references 
to that variable, which means, changing a value in one place changes
it for all references to that object*/

/*for the immutable data types we have no way of changing the internal
state of the data so the reference always get reassigned to a new object*/

//map, reduce, filter ? napravi niz, sumiraj i izbaci > 15


/*   map()
Creates a new array with the results of calling a provided function on 
every element in this array.*/
//array.map(function(currentValue, index, arr), thisValue)
const doubleMap = (numbers) => numbers.map(n => n * 2);
console.log(doubleMap([1, 2, 3]));

//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

let nums = [3, 5, 12, 87, 33, 9, 23];
let suma = 0
nums.map(n=>suma=suma+n);
//let sum = nums.map(n => n + sum);

let sumaV = nums.map(current => current*current)
.filter(current => current > 30)
.reduce((previous, current) => previous + current );

console.log(sumaV);

/*reduce()
Apply a function simultaneously against two values of the array 
(from left-to-right) as to reduce it to a single value. */

suma = nums.reduce((prev, n) => prev+n);
console.log(suma);

/*filter()
Creates a new array with all of the elements of this array for which the 
provided filtering function returns true. */


const largerArray = nums.filter(theCurrentElementVLADIMIRE => theCurrentElementVLADIMIRE > 15)

console.log(largerArray);


/////////////////////////////////////////////////////

let letters = ['I', 'V', 'A', 'N', 'A'];
let formName = letters.join('-');
console.log(formName);
