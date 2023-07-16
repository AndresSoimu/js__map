//....................Lexical scoping
function init() {
   var name = "Mozilla"; // name is a local variable created by init
   function displayName() {
     // displayName() is the inner function, that forms the closure
     console.log(name); // use variable declared in the parent function
   }
   displayName();
 }
 //init();

 //....................Scoping with let and const
 if (Math.random() > 0.5) {
   var x = 10;
 } else {
   var x = 20;
 }
 //console.log(x); //...10 or 20
/////////////////
if (Math.random() > 0.5) {
   const x = 1;
 } else {
   const x = 2;
 }
 //console.log(x); //... ReferenceError: x is not defined

 //.......................Closure
 function makeFunc() {
   const name = "Mozilla";
   function displayName() {
     console.log(name);
   }
   return displayName;
 }
 
 const myFunc = makeFunc();
 //myFunc();
///////////////////////////
 function makeAdder(x) {
   return function (y) {
     return x + y;
   };
 }
 
 const add5 = makeAdder(5);
 const add10 = makeAdder(10);
 
// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

//.................................Emulating private methods with closures
const makeCounter = function () {
   let privateCounter = 0;
   function changeBy(val) {
     privateCounter += val;
   }
   return {
     increment() {
       changeBy(1);
     },
 
     decrement() {
       changeBy(-1);
     },
 
     value() {
       return privateCounter;
     },
   };
 };
 
 const counter1 = makeCounter();
 const counter2 = makeCounter();
 
// console.log(counter1.value()); // 0.
 
 counter1.increment();
 counter1.increment();
 //console.log(counter1.value()); // 2.
 
 counter1.decrement();
 //console.log(counter1.value()); // 1.
 //console.log(counter2.value()); // 0.
 
 //......................Closure scope chain
 /* Every closure has three scopes:

Local scope (Own scope)
Enclosing scope (can be block, function, or module scope)
Global scope
 */

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

  //console.log(sum(1)(2)(3)(4)); //... 20

  /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures */
