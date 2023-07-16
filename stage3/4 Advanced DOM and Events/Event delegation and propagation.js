/* Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object. */

//....example with and without event delegation:
const customUI = document.createElement('ul');

for (var i = 1; i <= 10; i++) {
    const newElement = document.createElement('li');
    newElement.textContent = "This is line " + i;
    newElement.addEventListener('click', () => {
        console.log('Responding')
    })
    customUI.appendChild(newElement);
}

/* Implementing the same functionalities with an alternate approach. In this approach, we will associate the same function with all event listeners. We are creating too many responding functions (that all actually do the exact same thing). We could extract this function and just reference the function instead of creating too many functions: */

const customUI_1 = document.createElement('ul_1');

function responding() {
    console.log('Responding')
}

for (var i = 1; i <= 10; i++) {
    const newElement = document.createElement('li');
    newElement.textContent = "This is line " + i;
    newElement.addEventListener('click', responding)
    customUI_1.appendChild(newElement);
}

/* In the above approach, we still have too many event listeners pointing to the same function. Now implementing the same functionalities using a single function and single event. */

const customUI_2 = document.createElement('ul_2');

function responding() {
    console.log('Responding')
}

for (var i = 1; i <= 10; i++) {
    const newElement = document.createElement('li');
    newElement.textContent = "This is line " + i;
    customUI.appendChild(newElement);
}
customUI_2.addEventListener('click', responding)

/* Now there is a single event listener and a single responding function. In the above-shown method, we have improved the performance, but we have lost access to individual <li> elements so to resolve this issue, we will use a technique called event delegation.  */


//Event propagation:
/* Event propagation in JavaScript refers to how events travel the Document Object Model(DOM) tree. This behavior can be likened to an electric current traveling through the DOM tree once an event is triggered. Event propagation has two phases; capturing and bubbling.
 */

//Event delegation:
/* Event delegation is essentially the use of the knowledge that events bubble to instead handle events at any of the parent elements of the target element where the event was triggered. Events are said to be ‘delegated’ to a parent element of the target element so they can be handled right at that element.
 */


///https://www.geeksforgeeks.org/event-delegation-in-javascript/

///https://www.freecodecamp.org/news/event-delegation-javascript/

///https://dev.to/itzz_okure/how-event-propagation-and-delegation-work-in-javascript-5efe