/* `Recursion allows solving problems by decomposing them into small ones. The recursive function always contains two parts:

1.base case — it’s terminating condition where a recursive function computes the particular value without invoking the recursive function itself,

2.recursive case — part of the function which invokes itself.

The most important part here is a base case with a terminate condition. If you miss it — the recursion runs indefinitely until the program crashes, therefore as a rule of thumb — when you start recursion implementation — at first define a terminate condition.` */

//.........ex:

// not TCO
function factorial(n) {
   if (n <= 0) return 1;
   
   return n * factorial(n-1); // here, the main recursive call not in a tail position because of the `n` context.
 }
 
 // TCO
 function factorial(n) {
   return recursiveFactorial(n, 1);
 }
 
 function recursiveFactorial(n, accumulator) {
   if (n <= 0) return accumulator;
 
   return recursiveFactorial(n-1, n*accumulator);
 }

 //...........Breaking recursion:

 function factorial(number) {
   if(number === 1) {
       return number;
   } else {
       return number * factorial(number - 1);
   }
}

factorial(5); // 120

//.........Tail recursion:

//  factorial(5);                 // step 1
//  5 * factorial(4);             // step 2
//  5 * 4 * factorial(3);         // step 3
//  5 * 4 * 3 * factorial(2);     // step 4
//  5 * 4 * 3 * 2 * factorial(1); // step 5
//  5 * 4 * 3 * 2 * 1;            // step 6

//...........Breaking recursion:
function tailRecursiveFactorial(number, result = 1) {
   if(number === 1) {
       return result;
   } else {
       return tailRecursiveFactorial(number - 1, result * number);
   }
}

tailRecursiveFactorial(5); // 120

//.........Tail recursion:

//Step 1: tailRecursiveFactorial(5, 1)
//Step 2: tailRecursiveFactorial(4, 5)
//Step 3: tailRecursiveFactorial(3, 20)
//Step 4: tailRecursiveFactorial(2, 60)
//Step 5: tailRecursiveFactorial(1, 120)