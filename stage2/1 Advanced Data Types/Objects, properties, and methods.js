var myObj = new Object(),
    str = "myString",
    random = Math.random(),
    obj = new Object();

myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[random]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";

//console.log(myObj);

////
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

//for in
function showProps(obj, objName) {
   var result = "";
   for (let i in obj) {
     if (obj.hasOwnProperty(i)) {
         result += objName + "." + i + " = " + obj[i] + "\n";
     }
   }
   return result;
 }
 //console.log(showProps(myCar, "myCar"))

 //////constructor
 function Cars(make, model, year) {
   this.make = make;
   this.model = model;
   this.year = year;
 }
 let eagle = new Cars("Eagle", "Talon TSi", 1993);
 let nissan = new Cars("Nissan", "300ZX", 1992);
 let mazda = new Cars("Mazda", "Miata", 1990);
 //console.log(nissan)
 //console.log(eagle)
//////////////////////////

 function Person(name, age, sex) {
   this.name = name;
   this.age = age;
   this.sex = sex;
 }
 const rand = new Person("Rand McKinnon", 33, "M");
 const ken = new Person("Ken Jones", 39, "M");

 function Car(make, model, year, owner) {
   this.make = make;
   this.model = model;
   this.year = year;
   this.owner = owner; /* important */
 }
 let car1 = new Car("Eagle", "Talon TSi", 1993, rand);
 let car2 = new Car("Nissan", "300ZX", 1992, ken);
 car1.color = "black";
  //console.log(car2.owner.name)
  //Defining properties for all objects of one type
  Car.prototype.color = "red";
 //console.log(car2.color); // "red"

  //////////////////////////Object.create() method
  // Animal properties and method encapsulation
const Animal = {
   type: "Invertebrates", // Default value of properties
   displayType() {
     // Method which will display type of Animal
     //console.log(this.type);
   },
 };
 
 // Create new animal type called animal1
 const animal1 = Object.create(Animal);
 animal1.displayType(); // Logs: Invertebrates
 
 // Create new animal type called fish
 const fish = Object.create(Animal);
 fish.type = "Fishes";
 fish.displayType(); // Logs: Fishes

 ///////////deleting
 const myobj = new Object();
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
//console.log("a" in myobj); // false

///////////////////////Defining methods
//objectName.methodName = functionName;

const mynObj = {
  myMethod: function (params) {
    // do something
  },

  // this works too!
  myOtherMethod(params) {
    // do something else
  },
};
//You can then call the method in the context of the object as follows:
//objectName.methodName(params);

////////////////----------------------
Car.prototype.displayCar = function () {
   const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
   console.log(result);
 };
 //car1.displayCar();
 //car2.displayCar();

 /////////////////////////////////////Using this for object references
 const Manager = {
   name: "Karina",
   age: 27,
   job: "Software Engineer",
 };
 const Intern = {
   name: "Tyrone",
   age: 21,
   job: "Software Engineer Intern",
 };
 
 function sayHi() {
   console.log(`Hello, my name is ${this.name}`);
 }
 
 // add sayHi function to both objects
 Manager.sayHi = sayHi;
 Intern.sayHi = sayHi;
 
 //Manager.sayHi(); // Hello, my name is Karina
 //Intern.sayHi(); // Hello, my name is Tyrone

 /////////////////////////////////Defining getters and setters
 const mysObj = {
   a: 7,
   get b() {
     return this.a + 1;
   },
   set c(x) {
     this.a = x / 2;
   },
 };
 
/*  console.log(mysObj.a); // 7
 console.log(mysObj.b); // 8, returned from the get b() method
 mysObj.c = 50; // Calls the set c(x) method
 console.log(mysObj.a); // 25 */

 //or
 const myzObj = { a: 0 };

Object.defineProperties(myzObj, {
  b: {
    get() {
      return this.a + 1;
    },
  },
  c: {
    set(x) {
      this.a = x / 2;
    },
  },
});

//myzObj.c = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
//console.log(myzObj.b); // Runs the getter, which yields a + 1 or 6

///////////////////////////////Comparing objects
// Two variables, two distinct objects with the same properties
const fruit = { name: "apple" };
const fruitbear = { name: "apple" };

fruit == fruitbear; // return false
fruit === fruitbear; // return false

// Two variables, a single object
const fruit1 = { name: "apple" };
const fruitbear1 = fruit1; // Assign fruit object reference to fruitbear

// Here fruit and fruitbear are pointing to same object
fruit1 == fruitbear1; // return true
fruit1 === fruitbear1; // return true

fruit1.name = "grape";
console.log(fruitbear1); // { name: "grape" };
