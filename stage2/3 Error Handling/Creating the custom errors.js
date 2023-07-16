//..........................Throwing a generic error
try {
   throw new Error("Whoops!");
 } catch (e) {
  // console.error(`${e.name}: ${e.message}`);
 }

 //........................Handling a specific error type
 try {
  // foo.bar();
 } catch (e) {
   if (e instanceof EvalError) {
     console.error(`${e.name}: ${e.message}`);
   } else if (e instanceof RangeError) {
     console.error(`${e.name}: ${e.message}`);
   }
   // etc.
   else {
     // If none of our cases matched leave the Error unhandled
     throw e;
   }
 }
 //..........................Differentiate between similar errors
 function doWork() {
   try {
     doFailSomeWay();
   } catch (err) {
     throw new Error("Failed in some way", { cause: err });
   }
   try {
     doFailAnotherWay();
   } catch (err) {
     throw new Error("Failed in another way", { cause: err });
   }
 }
 
 try {
   doWork();
 } catch (err) {
   switch (err.message) {
     case "Failed in some way":
     //  handleFailSomeWay(err.cause);
       break;
     case "Failed in another way":
       handleFailAnotherWay(err.cause);
       break;
   }
 }

 //.....................Custom error types
 class CustomError extends Error {
   constructor(foo = "bar", ...params) {
     // Pass remaining arguments (including vendor specific ones) to parent constructor
     super(...params);
 
     // Maintains proper stack trace for where our error was thrown (only available on V8)
     if (Error.captureStackTrace) {
       Error.captureStackTrace(this, CustomError);
     }
 
     this.name = "CustomError";
     // Custom debugging information
     this.foo = foo;
     this.date = new Date();
   }
 }
 
 try {
   throw new CustomError("baz", "bazMessage");
 } catch (e) {
   console.error(e.name); // CustomError
   console.error(e.foo); // baz
   console.error(e.message); // bazMessage
   console.error(e.stack); // stacktrace
 }
 