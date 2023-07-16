/* Encapsulation means hiding information or data. It refers to the ability of the object to execute its functionality without revealing any execution details to the caller. In other words, the private variable is only visible to the current function and is not accessible to the global scope or other functions. */

const Book = function(t, a) {
   let title = t; 
   let author = a; 
   
   return {
      summary : function() { 
        console.log(`${title} written by ${author}.`);
      } 
   }
}
const book = new Book('Hippie', 'Paulo Coelho');
book.summary();
//=================  Hippie written by Paulo Coelho.

//https://www.geeksforgeeks.org/encapsulation-in-javascript/

/* The ability to call the same method on different objects and have each of them respond in their own way is called polymorphism. */

class book1 {
   constructor() { }
   summary() {
      return "summary of book1";
   }
}
class book2 {
   constructor() { }
   summary() {
      return "summary of book2";
   }
}
book2.prototype = Object.create(book1.prototype);
class book3 {
   constructor() { }
   summary() {
      return "summary of book3";
   }
}
book3.prototype = Object.create(book1.prototype);
   
let books = [new book1(), new book2(), new book3()];
books.forEach(function(book){
   console.log(book.summary());
});

/* summary of book1
   summary of book2
   summary of book3 
*/
//https://www.geeksforgeeks.org/polymorphism-in-javascript/?ref=ml_lbp

////////https://betterprogramming.pub/object-oriented-programming-in-javascript-b3bda28d3e81