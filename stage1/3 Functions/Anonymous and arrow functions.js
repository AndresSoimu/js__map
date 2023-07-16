/////This is a named function, aka a function declaration
function brag(count) {
   return("I can do " + count + " pushups");
} 

console.log(brag(4))

/////This is an anonymous function, aka a function expression
var brag = function(count) {
   return("I can do " + count + " pushups");
} 

console.log(brag(3))

/////This is an arrow function, a special type of function expression.
var brag = (count) => ("I can do " + count + " pushups");

console.log(brag(2))