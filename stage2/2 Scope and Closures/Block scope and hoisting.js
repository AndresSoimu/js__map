/* Global scope refers to all the variables declared in a JS file that are not inside any function. These variables have access anywhere in the file. */
/*Function scope refers to a limited private scope that the variable gets within the function it is declared. This variable can be accessed anywhere within the function, but not outside it. Let us try to illustrate with an example. Consider the following lines of code: */
var globalVariable = "globalVariable is in global scope";

function func1() {
  var variable1 = "variable1 is in func1 scope";
}

function func2() {
  var variable2 = "variable2 is in func2 scope";
  console.log(variable1); //Uncaught ReferenceError: variable1 is not defined
}
//console.log(variable1); //Uncaught ReferenceError: variable1 is not defined

//....................Scope chain and Variable look-up
var globalVariable = "globalVariable is in global scope";

function outerFunc() {
  var outerVariable = "outerVariable is in outerFunc scope";

  function innerFunc() {
    var innerVariable = "innerVariable is in innerFunc scope";
    console.log(innerVariable); //Same scope
    console.log(outerVariable); //Parent scope or outer scope
    console.log(globalVariable); //Global scope
  }
}

//..........................Let and Const
var variable11;
let variable23;
const variable3 = "Constant value";
///* const variable4; */ ..// Uncaught SyntaxError: Missing initializer in const declaration

variable11 = "This can be reassigned";
variable23 = "This can also be reassigned";
///* variable3 = "Cannot be reassigned"; */ ..// Uncaught TypeError: Assignment to constant variable

//.........................ES6(ES2015) and Block scope
function func1() {
   var variable1 = "Grapes";
 
   if(true) {
     var variable2 = "Bananas";
     let apples = "Oranges";
     console.log(apples); // Works - Block Scope
     console.log(variable1); // Works - Function Scope
     console.log(variable2); // Works - Function Scope
   }
 console.log(apples); // Doesn't work - Out of the block
 console.log(variable1); // Works - Function Scope
 console.log(variable2); // Works - Function Scope
 }
 ///* console.log(apples); */ ......// Doesn't work - Out of the block
 ///* console.log(variable1); */ ...// Doesn't work - Out of the function
 ///* console.log(variable2); */ ...// Doesn't work - Out of the function

 //...............Hoisting and Temporal dead zone
 function func1() {
  console.log("This is some dummy code");
  var variable1 = "Hoisting Demo";
  let variable2 = "Hoistings";
}
//The javascript code translates this peice of code to:
/* function func1() {
   var variable1;
   let variable2;
   console.log("This is some dummy code");
   variable1 = "Hoisting Demo";
   variable2 = "Hoisting";
 } */

 ////////
 /* console.log(variable1); // Works with value undefined
    console.log(variable2); // Uncaught ReferenceError: Cannot access 'b' before initialization
    console.log(constant1); // Uncaught ReferenceError: Cannot access 'b' before initialization
 */
var variable1 = "Hoisting Demo";
let variable2 = "Hoisting";
const constant1 = "Hoisting Demo";

//....................Final catch
for(var i = 0; i < 10; i++) {
   setTimeout(function() {
     //console.log('The number is ' + i);
   });
 }
 /* The number is 10
The number is 10
The number is 10
The number is 10
The number is 10
The number is 10
The number is 10
The number is 10
The number is 10
The number is 10 */
 
 for(let i = 0; i < 10; i++) {
   setTimeout(function() {
     //console.log('The number is ' + i);
   });
 }
 /* The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9 */