//..................What is Immutability?
/* Immutability is a concept that revolves around the idea that once an object is created, it cannot be changed. This principle is contrary to how most programming languages, including JavaScript, typically work, where objects can be modified after creation.
 */
/* When dealing with immutable objects, any change that needs to be made will result in a new object being created instead of modifying the existing one. This approach can lead to more predictable code, reduced side effects, and easier debugging. */

const immutableObject = Object.freeze({
   key: 'value',
 });
 
 // Attempting to change the object will have no effect
 immutableObject.key = 'newValue';
 console.log(immutableObject.key); // 'value'

 //.................. What are Pure Functions?
/* A pure function is a function that adheres to the following principles:

1.Given the same input, it always returns the same output.
2.It has no side effects, meaning it doesn't modify any external state or variables. */
/* Pure functions are an essential aspect of functional programming, as they lead to code that is easier to reason about, test, and debug. */

function add(a, b) {
   return a + b;
 }
 
 const result = add(1, 2);
 console.log(result); // 3

 //........................ Combining Immutability and Pure Functions in Practice
 const tasks = Object.freeze([
   { id: 1, title: 'Buy groceries', completed: false },
   { id: 2, title: 'Clean the house', completed: true },
 ]);
 
 function addTask(tasks, task) {
   return [...tasks, task];
 }
 
 function completeTask(tasks, taskId) {
   return tasks.map((task) =>
     task.id === taskId ? { ...task, completed: true } : task
   );
 }
 
 const newTask = { id: 3, title: 'Do laundry', completed: false };
 const updatedTasks = addTask(tasks, newTask);
 console.log(updatedTasks);

 ////////  https://codedamn.com/news/javascript/immutability-pure-functions