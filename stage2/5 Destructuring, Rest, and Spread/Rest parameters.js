function sumAll(...args) { // args es el nombre del array
   let sum = 0;
 
   for (let arg of args) sum += arg;
 
   return sum;
 }
 
/*  console.log( sumAll(1) ); // 1
 console.log( sumAll(1, 2) ); // 3
 console.log( sumAll(1, 2, 3) ); // 6 */

 //////////////////´´
 function showNames(firstName, lastName, ...titles) {
   console.log( firstName + ' ' + lastName ); // Julio Cesar
   console.log( titles[0] ); // Cónsul
   console.log( titles[1] ); // Emperador
   console.log( titles.length ); // 2
 }
 
 //showNames("Julio", "Cesar", "Cónsul", "Emperador");

 //////////////////////..
 function f(arg1/* , ...rest */, arg2) { // arg2 después de ...rest ?!
   // error
 }

 ////////////////////////..
 function showName() {
   console.log( arguments.length );
   console.log( arguments[0] );
   console.log( arguments[1] );
 }
 
 //showName("Julio", "Cesar");    // 2, Julio, Cesar
 //showName("Ilya");     //  1, Ilya, undefined (no hay segundo argumento)


 ////////////////////////https://es.javascript.info/rest-parameters-spread