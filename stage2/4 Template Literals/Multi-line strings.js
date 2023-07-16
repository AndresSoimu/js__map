//.....................Creating a Multiline String in JavaScript
//Execute
let str = `<div>
	<p>JavaScript Multiline String 1</p>
	<p>JavaScript Multiline String 2</p>
</div>`;

//console.log(str);

//.........................Creating a multiline string using the newline character
let str1 = " Javascript \n Multiline \n String \n Example";

//console.log(str1);

// output:
//  JavaScript 
//  Multiline           
//  String 
//  Example

//...........................Creating a multiline string using concatenation
let str2 = 'JavaScript\n' +
'Multiline\n' +
'String\n' +
'Example';
 
//console.log(str2);

// output: JavaScript 
//  Multiline           
//  String 
//  Example

//.............................Creating a multiline string using template literals
let str3 = `JavaScript
Multiline
String
Example`;
 
//console.log(str3);

// output: JavaScript
//  Multiline
//  String
//  Example

//....
let age = 31;

console.log(`Hello, my name is Leo, I'm ${age} years old.`);

// output: Hello, my name is Leo, I'm 31 years old.