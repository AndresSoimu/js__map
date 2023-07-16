/////////////////............Class inheritance:

//////////........The “extends” keyword

class Animal {
   constructor(name) {
     this.speed = 0;
     this.name = name;
   }
   run(speed) {
     this.speed = speed;
     alert(`${this.name} runs with speed ${this.speed}.`);
   }
   stop() {
     this.speed = 0;
     alert(`${this.name} stands still.`);
   }
 }
 
 let animal = new Animal("My animal");

 //create class Rabbit that inherits from Animal:

class Rabbit extends Animal {
   hide() {
     alert(`${this.name} hides!`);
   }
 }
 
 let rabbit = new Rabbit("White Rabbit");
 
 rabbit.run(5); // White Rabbit runs with speed 5.
 rabbit.hide(); // White Rabbit hides!

 ///////////////////////...Overriding a method

 class Animal {

   constructor(name) {
     this.speed = 0;
     this.name = name;
   }
 
   run(speed) {
     this.speed = speed;
     alert(`${this.name} runs with speed ${this.speed}.`);
   }
 
   stop() {
     this.speed = 0;
     alert(`${this.name} stands still.`);
   }
 
 }
 
 class Rabbit extends Animal {
   hide() {
     alert(`${this.name} hides!`);
   }
 
   stop() {
     super.stop(); // call parent stop
     this.hide(); // and then hide
   }
 }
 
 //let rabbit = new Rabbit("White Rabbit");
 
 rabbit.run(5); // White Rabbit runs with speed 5.
 rabbit.stop(); // White Rabbit stands still. White Rabbit hides!


 /////////////////////////////
 class Professor extends Person {
   teaches;
 
   constructor(name, teaches) {
     super(name);
     this.teaches = teaches;
   }
 
   introduceSelf() {
     console.log(
       `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
     );
   }
 
   grade(paper) {
     const grade = Math.floor(Math.random() * (5 - 1) + 1);
     console.log(grade);
   }
 }

 const walsh = new Professor("Walsh", "Psychology");

 walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'
 
 walsh.grade("my paper"); // some random grade
  
 //////////////////////////
 //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
 //https://javascript.info/class-inheritance