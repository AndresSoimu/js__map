///////////////////////.......Constructor
let promise = new Promise(function(resolve, reject) {
   // executor (the producing code, "singer")
 });

 /* The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result. In terms of the analogy above: the executor is the “singer”.

Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor. */

 /////////////////////.........Examples
 let myPromise = new Promise(function(myResolve, myReject) {
   let x = 0;
 
 // The producing code (this may take some time)
 function myDisplayer(some) {
   document.getElementById("demo").innerHTML = some;
 }
 
   if (x == 0) {
     myResolve("OK");
   } else {
     myReject("Error");
   }
 });
 
 myPromise.then(
   //function(value) {myDisplayer(value);},
  // function(error) {myDisplayer(error);}
 );
 //////////////
 let Promise = new Promise(function(myResolve, myReject) {
   setTimeout(function() { myResolve("I love You !!"); }, 3000);
 });
 
 Promise.then(function(value) {
   document.getElementById("demo").innerHTML = value;
 });
 ////////////////
 let myPromises = new Promise(function(myResolve, myReject) {
   let req = new XMLHttpRequest();
   req.open('GET', "mycar.htm");
   req.onload = function() {
     if (req.status == 200) {
       myResolve(req.response);
     } else {
       myReject("File not Found");
     }
   };
   req.send();
 });
 
 myPromises.then(
   function(value) {myDisplayer(value);},
   function(error) {myDisplayer(error);}
 );

 //////////..............Using then
 let promis = new Promise(function(resolve, reject) {
   setTimeout(() => resolve("done!"), 1000);
 });
 
 // resolve runs the first function in .then
 promis.then(
   result => alert(result), // shows "done!" after 1 second
   error => alert(error) // doesn't run
 );
 /////////or
 let promi = new Promise(function(resolve, reject) {
   setTimeout(() => reject(new Error("Whoops!")), 1000);
 });
 
 // reject runs the second function in .then
 promi.then(
   result => alert(result), // doesn't run
   error => alert(error) // shows "Error: Whoops!" after 1 second
 );

 ////////////////................Example: loadScript
 /* function loadScript(src, callback) {
   let script = document.createElement('script');
   script.src = src;
 
   script.onload = () => callback(null, script);
   script.onerror = () => callback(new Error(`Script load error for ${src}`));
 
   document.head.append(script);
 } */

 /////////////////Using Promises
 function loadScript(src) {
   return new Promise(function(resolve, reject) {
     let script = document.createElement('script');
     script.src = src;
 
     script.onload = () => resolve(script);
     script.onerror = () => reject(new Error(`Script load error for ${src}`));
 
     document.head.append(script);
   });
 }

//Usage:
let promises = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promises.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promises.then(script => alert('Another handler...'));