//////////////////----------------------Async
async function foo() {
   return 1;
 }
// It is similar to:
 function foo() {
   return Promise.resolve(1);
 }

 ///////////////////
 async function foo() {
   const result1 = await new Promise((resolve) =>
     setTimeout(() => resolve("1")),
   );
   const result2 = await new Promise((resolve) =>
     setTimeout(() => resolve("2")),
   );
 }
 foo();

 ///////////////////////Examples:
 function resolveAfter2Seconds() {
   console.log("starting slow promise");
   return new Promise((resolve) => {
     setTimeout(() => {
       resolve("slow");
       console.log("slow promise is done");
     }, 2000);
   });
 }
 
 function resolveAfter1Second() {
   console.log("starting fast promise");
   return new Promise((resolve) => {
     setTimeout(() => {
       resolve("fast");
       console.log("fast promise is done");
     }, 1000);
   });
 }
 
 async function sequentialStart() {
   console.log("==SEQUENTIAL START==");
 
   // 1. Execution gets here almost instantly
   const slow = await resolveAfter2Seconds();
   console.log(slow); // 2. this runs 2 seconds after 1.
 
   const fast = await resolveAfter1Second();
   console.log(fast); // 3. this runs 3 seconds after 1.
 }
 
 async function concurrentStart() {
   console.log("==CONCURRENT START with await==");
   const slow = resolveAfter2Seconds(); // starts timer immediately
   const fast = resolveAfter1Second(); // starts timer immediately
 
   // 1. Execution gets here almost instantly
   console.log(await slow); // 2. this runs 2 seconds after 1.
   console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
 }
 
 function concurrentPromise() {
   console.log("==CONCURRENT START with Promise.all==");
   return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
     (messages) => {
       console.log(messages[0]); // slow
       console.log(messages[1]); // fast
     },
   );
 }
 
 async function parallel() {
   console.log("==PARALLEL with await Promise.all==");
 
   // Start 2 "jobs" in parallel and wait for both of them to complete
   await Promise.all([
     (async () => console.log(await resolveAfter2Seconds()))(),
     (async () => console.log(await resolveAfter1Second()))(),
   ]);
 }
 
// sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"
 
 ///////////////// wait above to finish
// setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"
 
 /////////////////// wait again
// setTimeout(concurrentPromise, 7000); // same as concurrentStart
 
 ///////////////// wait again
// setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"
 
///////////////////////................await and parallelism

function getProcessedData(url) {
   return downloadData(url) // returns a promise
     .catch((e) => downloadFallbackData(url)) // returns a promise
     .then((v) => processDataInWorker(v)); // returns a promise
 }
////////////////// or
async function getProcessedData(url) {
   let v;
   try {
     v = await downloadData(url);
   } catch (e) {
     v = await downloadFallbackData(url);
   }
   return processDataInWorker(v);
 }
////////////////// or
async function getProcessedData(url) {
   const v = await downloadData(url).catch((e) => downloadFallbackData(url));
   return processDataInWorker(v);
 }

 //////////////////////////https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 