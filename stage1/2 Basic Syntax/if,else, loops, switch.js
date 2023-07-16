// if else

const edad = 18;

if (edad >= 18) {
  //  console.log("Nick es un adulto.");
} else {
  console.log("Nick es un ninio.");
}

if (edad < 18) {
  // console.log("Alice es menor de 18 anios.");
} else if (edad >= 18 && edad <= 21) {
  // console.log("Alice tiene entre 18 y 21 anios de edad.");
} else {
  console.log("Alice tiene mas de 21 anios.");
}

// loops //////////////////////////////////////////////////////
///////////////for loop
for (var i = 0; i < 9; i++) {
  //  console.log(i);
}
//

for (var i = 1; i <= 20; i += 2) {
  // console.log(i);
}
//
var arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}
///////////for...in loop

a = { a: "Athens", b: "Belgrade", c: "Cairo" };
var s = "";
for (var key in a) {
  s += key + ": " + a[key] + " ";
}
//console.log (s);
//////
var arr = new Array("cero", "uno", "dos");
arr["naranja"] = "fruta";
arr["zanahoria"] = "vegetal";
var s = "";
for (var key in arr) {
  s += key + ": " + arr[key] + " ";
}
//console.log  (s);
//////////
var myObj = { a: 1, b: 2, c: 3 },
  myKeys = [],
  i = 0;
for (myKeys[i++] in myObj);

//console.log (myKeys);

//////////////////////// for...off loop
var arr = ["fred", "tom", "bob"];

for (let i of arr) {
  //console.log(i);
}
//////////////////////while loop
var i = 1;
while (i < 10) {
  // console.log(i);
  i++;
}
//
var miArray = [];
var i = 0;
while (i <= 4) {
  miArray.push(i);
  i++;
}
//console.log(miArray)
//////////////////////do...while
var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
} while (i <= 20);

//console.log(myArray)
//////////////////////switch
const mascota = "perro";

switch (mascota) {
  case "lagarto":
    console.log("Tengo un lagarto");
    break;
  case "perro":
    // console.log("Tengo un perro");
    break;
  case "gato":
    console.log("Tengo un gato");
    break;
  case "serpiente":
    console.log("Tengo una serpiente");
    break;
  case "loro":
    console.log("Tengo un loro");
    break;
  default:
    console.log("No tengo mascota");
    break;
}
////////////
switch ("oboe") {
  case "trompeta":
    console.log("Toco la trompeta");
    break;
  case "flauta":
    console.log("Toco la flauta");
    break;
    //case "oboe":
    // console.log("Toco el oboe");
    break;
  default:
    // console.log("No toco un instrumento. Lo siento");
    break;
}
///////////////
const country = "Irlanda";
switch (country) {
  case "Francia":
  case "Espana":
  case "Irlanda":
  case "Polonia":
    console.log("Este pais esta en Europa.");
    break;
  case "Estados Unidos":
  default:
    console.log("Este pais no esta en Europa.");
}
