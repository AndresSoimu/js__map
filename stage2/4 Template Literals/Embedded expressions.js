
//How to work embedded expressions e.g. ${...} work. when I work in javascript it work perfect. but not in HTML. so //My question is ES6 check all String (literal or object) in runtime and string interpolation.

ex:

var i = "${4 + 2}";
var j = new String(`${4 + 1}`);
console.log(i);  //result 6
console.log(j);  //result 5
but in HTML

/* {<body>
    Addition = ${5+6}  //show Addition = ${5+6}
</body>} */