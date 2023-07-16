/* Scope determines the accessibility (visibility) of variables.

JavaScript has 3 types of scope:

Block scope
Function scope
Global scope */
//.......................Block Scope
{
   let x = 2;
 }
 // x can NOT be used here
 {
   var x = 2;
 }
 // x CAN be used here  /* Variables declared with the var keyword can NOT have block scope. */

 //......................Local Scope

 // code here can NOT use carName
function myFunction() {
   let carName = "Volvo";
   // code here CAN use carName
 }
 
 // code here can NOT use carName

 //........................Function Scope

 function myFunction() {
   const/* or let or var */ carName = "Volvo";   // Function Scope
 }

 //..........................Global JavaScript Variables
//A variable declared outside a function, becomes GLOBAL.
let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}

//...........................Global Scope
//Variables declared Globally (outside any function) have Global Scope.

//...........................Automatically Global
//If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}

//..............................Strict Mode

//In "Strict Mode", undeclared variables are not automatically global.

//..............................Global Variables in HTML
var carName1 = "Volvo";
// code here can use window.carName

//Global variables defined with the let keyword do not belong to the window object:
let carName2 = "Volvo";
// code here can not use window.carName