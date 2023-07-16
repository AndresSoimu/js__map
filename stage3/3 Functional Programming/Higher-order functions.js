/* A higher order function is a function that takes one or more functions as arguments, or returns a function as its result. There are several different types of higher order functions like map and reduce. */

const radius = [1, 2, 3];


// function to calculate area of the circle

const calculateArea =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

//////////////..................  using HOFs:

// logic to clculate area
const area = function(radius){
   return Math.PI * radius * radius;
}

// function to calculate diameter of the circle

const calculateDiameter =  function (radius) {
   const output = [];
   for(let i = 0; i< radius.length; i++){
       output.push(2 * radius[i]);
   }
   return output;
}

//////////////..................  using HOFs:

// logic to calculate diameter
const diameter = function(radius){
   return 2 * radius;
}

// a reusable function to calculate area, diameter, etc
const calculate = function(radius, logic){ 
   const output = [];
   for(let i = 0; i < radius.length; i++){
       output.push(logic(radius[i]))
   }
   return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, diameter));

//////////////////////////............  How to Use Higher Order Functions


/* When working with arrays, you can use the map(), reduce(), filter(), and sort() functions to manipulate and transform data in an array. */

/* When working with objects, you can use the Object.entries() function to create a new array from an object. */

/* When working with functions, you can use the compose() function to create complex functions from simpler ones. */


//https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/#:~:text=A%20higher%20order%20function%20is%20a%20function%20that%20takes%20one,functions%20like%20map%20and%20reduce.