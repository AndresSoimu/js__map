//........................Syntax
/* try {
   tryStatements
 } catch (exceptionVar) {
   catchStatements
 } finally {
   finallyStatements
 }
 */ 
//........................The exception variable
try {
   throw new TypeError("oops");
 } catch ({ name, message }) {
  // console.log(name); // "TypeError"
  // console.log(message); // "oops"
 }
//...........................The finally block
/* openMyFile();
try {
  // tie up a resource
  writeMyFile(theData);
} finally {
  closeMyFile(); // always close the resource
} */
//.........................Unconditional catch block
try {
   throw "myException"; // generates an exception
 } catch (e) {
   // statements to handle any exceptions
   //logMyErrors(e); // pass exception object to error handler
 }
 //.........................Conditional catch blocks
 try {
   myroutine(); // may throw three types of exceptions
 } catch (e) {
   if (e instanceof TypeError) {
     // statements to handle TypeError exceptions
   } else if (e instanceof RangeError) {
     // statements to handle RangeError exceptions
   } else if (e instanceof EvalError) {
     // statements to handle EvalError exceptions
   } else {
                           // statements to handle any unspecified exceptions
    /*  logMyErrors(e); */ // pass exception object to error handler
   }
 }
 
 //..........................Nested try blocks
 //First, let's see what happens with this:

try {
  try {
    throw new Error("oops");
  } finally {
   // console.log("finally");
  }
} catch (ex) {
 // console.error("outer", ex.message);
}

// Logs:
// "finally"
// "outer" "oops"

/* Copy to Clipboard
Now, if we already caught the exception in the inner try block by adding a catch block: */

try {
  try {
    throw new Error("oops");
  } catch (ex) {
    //console.error("inner", ex.message);
  } finally {
   // console.log("finally");
  }
} catch (ex) {
 // console.error("outer", ex.message);
}

// Logs:
// "inner" "oops"
// "finally"

/* Copy to Clipboard
And now, let's rethrow the error. */

try {
  try {
    throw new Error("oops");
  } catch (ex) {
   // console.error("inner", ex.message);
    throw ex;
  } finally {
   // console.log("finally");
  }
} catch (ex) {
 // console.error("outer", ex.message);
}

// Logs:
// "inner" "oops"
// "finally"
// "outer" "oops"

//...........................Returning from a finally block
(() => {
   try {
     try {
       throw new Error("oops");
     } catch (ex) {
       console.error("inner", ex.message);
       throw ex;
     } finally {
       console.log("finally");
       return;
     }
   } catch (ex) {
     console.error("outer", ex.message);
   }
 })();
 
 // Logs:
 // "inner" "oops"
 // "finally"

 
 /////https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch