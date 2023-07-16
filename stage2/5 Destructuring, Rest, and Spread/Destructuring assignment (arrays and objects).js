
//------------------.............Array

///////////////Rest property
let a, b, rest;
[a, b] = [10, 20];

[a, b, ...rest] = [10, 20, 30, 40, 50];

//console.log(rest);
// Expected output: Array [30, 40, 50]


const x = [1, 2, 3, 4, 5];
const [y, z] = x;
//console.log(y); // 1
//console.log(z); // 2

//,,,
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
//console.log(red); // "one"
//console.log(yellow); // "two"
//console.log(green); // "three"

/////////////////Swapping variables
let e = 1;
let i = 3;

[e, i] = [i, e];
//console.log(e); // 3
//console.log(i); // 1

///////////////////Parsing an array returned from a function
/* function f() {
   return [1, 2];
 }
 
 const [a, b] = f();
 console.log(a); // 1
 console.log(b); // 2 */

 ///////////////////Ignoring some returned values
 /* function f() {
   return [1, 2, 3];
 }
 
 const [a, , b] = f();
 console.log(a); // 1
 console.log(b); // 3 */

////////////////////Using a binding pattern as the rest property
/* const [a, b, ...{ length }] = [1, 2, 3];
console.log(a, b, length); // 1 2 1
/////////
const [a, b, ...[c, d]] = [1, 2, 3, 4];
console.log(a, b, c, d); // 1 2 3 4
/////////
const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, d, e, f); // 1 2 3 4 5 6 */

////////////////////////Unpacking values from a regular expression match
function parseProtocol(url) {
   const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
   if (!parsedURL) {
     return false;
   }
  // console.log(parsedURL);
   //- ["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
   //- "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]
 
   const [, protocol, fullhost, fullpath] = parsedURL;
   return protocol;
 }
 
// console.log(parseProtocol("https://developer.mozilla.org/en-US/docs/Web/JavaScript"),);
 //- "https"
 
 //////////////////////////Using array destructuring on any iterable
 /* const [a, b] = new Map([
   [1, 2],
   [3, 4],
 ]);
 console.log(a, b); // [1, 2] [3, 4] */
 //,,,,,,,,
/*  const obj = {
   *[Symbol.iterator]() {
     for (const v of [0, 1, 2, 3]) {
       console.log(v);
       yield v;
     }
   },
 };
 const [a, b] = obj; // Only logs 0 and 1
 const [a, b, ...rest] = obj; // Logs 0 1 2 3
 console.log(rest); // [2, 3] (an array) */





//------------------Object
const users = {
   id: 42,
   isVerified: true,
 };
 
 const { id, isVerified } = users;
 
 //console.log(id); // 42
 //console.log(isVerified); // true

 ////////////////Assigning to new variable names
 const o = { p: 42, q: true };
 const { p: foot, q: bar } = o;

//console.log(foot); // 42
//console.log(bar); // true

///////////////////Unpacking properties from objects passed as a function parameter
const user = {
   id: 42,
   displayName: "jdoe",
   fullName: {
     firstName: "Jane",
     lastName: "Doe",
   },
 };

 function userId({ id }) {
   return id;
 }
 //console.log(userId(user)); // 42

 function userDisplayName({ displayName: dname }) {
   return dname;
 }
 //console.log(userDisplayName(user)); // "jdoe"

 function whois({ displayName, fullName: { firstName: name } }) {
   return `${displayName} is ${name}`;
 }
 //console.log(whois(user)); // "jdoe is Jane"

 //////////////Setting a function parameter's default value
 function drawChart({
   size = "big",
   coords = { x: 0, y: 0 },
   radius = 25,
 } = {}) {
   //console.log(size, coords, radius);
   //- do some chart drawing
 }
 
 drawChart({
   coords: { x: 18, y: 30 },
   radius: 30,
 });

 ////////////////////Nested object and array destructuring
 const metadata = {
   title: "Scratchpad",
   translations: [
     {
       locale: "de",
       localizationTags: [],
       lastEdit: "2014-04-14T08:43:37",
       url: "/de/docs/Tools/Scratchpad",
       title: "JavaScript-Umgebung",
     },
   ],
   url: "/en-US/docs/Tools/Scratchpad",
 };
 
 const {
   title: englishTitle, // rename
   translations: [
     {
       title: localeTitle, // rename
     },
   ],
 } = metadata;
 
 //console.log(englishTitle); // "Scratchpad"
 //console.log(localeTitle); // "JavaScript-Umgebung"
 
 ////////////For of iteration and destructuring
 const people = [
   {
     name: "Mike Smith",
     family: {
       mother: "Jane Smith",
       father: "Harry Smith",
       sister: "Samantha Smith",
     },
     age: 35,
   },
   {
     name: "Tom Jones",
     family: {
       mother: "Norah Jones",
       father: "Richard Jones",
       brother: "Howard Jones",
     },
     age: 25,
   },
 ];
 
 for (const {
   name: n,
   family: { father: f },
 } of people) {
   //console.log(`Name: ${n}, Father: ${f}`);
 }
 
 // "Name: Mike Smith, Father: Harry Smith"
 // "Name: Tom Jones, Father: Richard Jones"
 
 /////////////////////The prototype chain is looked up when the object is deconstructed
 const obj = {
   self: "123",
   __proto__: {
     prot: "456",
   },
 };
 const { self, prot } = obj;
 
 //console.log(self); // "123"
 //console.log(prot); // "456"



 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment