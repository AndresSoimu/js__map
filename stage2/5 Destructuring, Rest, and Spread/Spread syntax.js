///////////////////////////................ex.
//console.log( Math.max(3, 5, 1) );                              // 5

///////////////////////////////
let arr = [3, 5, 1];

//console.log( Math.max(arr) );                                  // NaN
//console.log( Math.max(...arr) );                               // 5

//////////////////////////////////
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

//console.log( Math.max(...arr1, ...arr2) );                     // 8
//console.log( Math.max(1, ...arr1, 2, ...arr2, 25) );           // 25

/////////////////////////
let merged = [0, ...arr, 2, ...arr2];
//console.log(merged);                                           // 0,3,5,1,2,8,9,15 

///////////////////////////////////
let str = "Hola";

//console.log( [...str] );                                        // H,o,l,a
//console.log( Array.from(str) );                                 // H,o,l,a

///////////////////////////////////
let arra = [1, 2, 3];

let arraCopy = [...arra];
//console.log(JSON.stringify(arra) === JSON.stringify(arraCopy)); // true

//console.log(arra === arraCopy);                                 // false
//
arra.push(4);
//console.log(arra);                                              // 1, 2, 3, 4
//console.log(arraCopy);                                          // 1, 2, 3

//////////////////////////////////
let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; 
//console.log(JSON.stringify(obj) === JSON.stringify(objCopy));           // true
//console.log(obj === objCopy);                                           // false
//

obj.d = 4;
//console.log(JSON.stringify(obj));                                     // {"a":1,"b":2,"c":3,"d":4}
//console.log(JSON.stringify(objCopy));                                 // {"a":1,"b":2,"c":3}


/////////////////////////////https://es.javascript.info/rest-parameters-spread