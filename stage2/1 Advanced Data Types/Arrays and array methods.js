const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

//// Get Elements /////for loop
for(let i=0; i<salad.length; i++) {
   console.log(`Element at index ${i} is ${salad[i]}`);
 }

 //// Add Elements to the end of the array //////push()
 salad.push('🥜');

 //// Add Elements to the beginning of the array /////unshift
 salad.unshift('🥜');

 //// Remove Elements from the end of the array /////pop
 salad.pop()

 //// Remove Elements from the beginning of an array ////shift
 salad.shift()

 //// Copy array to a new array ///// slice() or spread

 var saladCloned = [...salad];
 const saladCopy = salad.slice()

 //// Determine if a Value is an Array
 Array.isArray([]); // returns true

 //// Array Destructuring
 var [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];

 //// Assign a Default Value to a Variable
 let [tomato , mushroom = '🍄'] = ['🍅']

 //// Skip a Value in an Array
 let [tomato, , carrot] = ['🍅', '🍄', '🥕']

 //// Nested Array Destructuring

 var fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
 const veg = fruits[4]; // returns the array ['🍅', '🍄', '🥕']
 const carrot = veg[2]; // returns '🥕'
 //or
 fruits[4][2]; // returns '🥕'

 ////////////////Spread and Rest (...)
 ///////////For the rest parameter, the ... appears on the left side of the destructuring syntax.
////////////For the spread syntax, the ... appears on the right side of the destructuring syntax.
 //// Rest Parameter
 var [tomato, mushroom, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
 //console.log(tomato); // '🍅'
 //console.log(mushroom); // '🍄'
 //console.log(rest); // ["🥦", "🥒", "🌽", "🥕", "🥑"]

 //// Spread Operator
 const saladCloned = [...salad];

 ////////////////::::::::::::: Destructuring Use Cases
 //// Swap Values with Destructuring
 var first = '😔';
 var second = '🙂';
 [first, second] = [second, first];

 ////Merge Arrays
 const emotion = ['🙂', '😔'];
 const veggies = ['🥦', '🥒', '🌽', '🥕'];
 const emotionalVeggies = [...emotion, ...veggies];

 ////::::::::::::::::::: Create, Remove, Update, and Access Arrays
 ////concat()
 const first = [1, 2, 3];
 const second = [4, 5, 6];
 const third = [7, 8, 9];
 const merged = first.concat(second, third);
 //console.log(merged); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

 ////join() ....method joins all the elements of the array using a separator and returns a string.
 const emotions = ['🙂', '😍', '🙄', '😟'];
 var joined = emotions.join();
 //console.log(joined); // "🙂,😍,🙄,😟"

 const joined = emotions.join('<=>');
 //console.log(joined); // "🙂<=>😍<=>🙄<=>😟"

 /////fill()
 const colors = ['red', 'blue', 'green'];
 colors.fill('pink'); // ["pink", "pink", "pink"]
 colors.fill('pink', 1,2); // ["red", "pink", "pink"]

 ////includes()
 var names = ['tom', 'alex', 'bob', 'john'];
 names.includes('tom'); // returns true
 names.includes('july'); // returns false

 ////indexOf()
 var names = ['tom', 'alex', 'bob', 'tom' , 'john'];
 names.indexOf('alex'); // returns 1
 names.indexOf('rob'); // returns -1
 names.lastIndexOf('tom'); // returns 3

 ////reverse()
 var names = ['tom', 'alex', 'bob'];
 names.reverse(); // returns ["bob", "alex", "tom"]

 ////sort()
 const numbers = [23, 5, 100, 56, 9, 13, 37, 10, 1]
 numbers.sort();// returns [1, 10, 100, 13, 23, 37, 5, 56, 9]
 //or
 function ascendingComp(a, b){
   return (a-b);
 }
 numbers.sort(ascendingComp); // retruns [1, 5, 9, 10, 13, 23, 37, 56, 100]
 //For descending order, do this:
 numbers.sort((a, b) => (b-a));

 /////splice()
 const names = ['tom', 'alex', 'bob'];
 /* we are adding an element zack at the index 1 without deleting any elements. */
 names.splice(1, 0, 'zack'); // ["tom", "zack", "alex", "bob"]
 /* Here we are removing one element from the index 2 and adding a new element, zack */
 names.splice(2, 1, 'zack'); // ["tom", "alex", "zack"]

 ////::::::::::::::::::::::::Static Array Methods in JavaScript::::::::::::::::::
 //Array.from()
 const collection = Array.from(document.getElementsByTagName('li'))
 //Array.of()
 Array.of(2, false, 'test', {'name': 'Alex'})
 ////::::::::::::::::::::::::Array Iterator Methods::::::::::::::::::
 let students = [
  {
     'id': 001,
     'f_name': 'Alex',
     'l_name': 'B',
     'gender': 'M',
     'married': false,
     'age': 22,
     'paid': 250,  
     'courses': ['JavaScript', 'React']
  },
  {
     'id': 002,
     'f_name': 'Ibrahim',
     'l_name': 'M',
     'gender': 'M',
     'married': true,
     'age': 32,
     'paid': 150,  
     'courses': ['JavaScript', 'PWA']
  },
  {
     'id': 003,
     'f_name': 'Rubi',
     'l_name': 'S',
     'gender': 'F',
     'married': false,
     'age': 27,
     'paid': 350,  
     'courses': ['Blogging', 'React', 'UX']
  },
  {
     'id': 004,
     'f_name': 'Zack',
     'l_name': 'F',
     'gender': 'M',
     'married': true,
     'age': 36,
     'paid': 250,  
     'courses': ['Git', 'React', 'Branding']
  } 
];
//filter()
const femaleStudents = students.filter((element, index) => {
  return element.gender === 'F';
})
//console.log(femaleStudents);
/////////map()
const fullNames = students.map((element, index) => {
  return {'fullName': element['f_name'] + ' ' + element['l_name']}
});

//console.log(fullNames);
////////////reduce()
const total = students.reduce(
  (accumulator, student, currentIndex, array) => {
     accumulator = accumulator + student.paid;
     return (accumulator);
  }, 
0);

//console.log(total); // 1000
//////////some()
let hasStudentBelow30 = students.some((element, index) => {
  return element.age < 30;
});

//console.log(hasStudentBelow30); // true
///////find()
const student = students.find((element, index) => {
  return element.age < 30;
});

//console.log(student);
///////every()
const atLeastTwoCourses = students.every((elements, index) => {
  return elements.courses.length >= 2;
});

//console.log(atLeastTwoCourses); // true
////::::::::::::::::::::::::Proposed Array Methods::::::::::::::::::
//at()
const junkFoodILove = ['🥖', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🍿'];

junkFoodILove.at(0); // 🥖
junkFoodILove.at(3); // 🍕
junkFoodILove.at(-1); // 🍿
junkFoodILove.at(-5); // 🍕
junkFoodILove.at(-8); // 🥖
junkFoodILove.at(10); // undefined

