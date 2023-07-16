//Event handling
const button = document.querySelector(".btn")

button.onclick = () => {
  console.log("Button clicked.");
};
//Event listeners

const button = document.querySelector(".btn")

button.addEventListener("click", () => {
  console.log("Button clicked.");
})
// events
/* 
Event         	Description

onchange	      An HTML element has been changed
onclick	      The user clicks an HTML element
onmouseover	   The user moves the mouse over an HTML element
onmouseout	   The user moves the mouse away from an HTML element
onkeydown	   The user pushes a keyboard key
onload	      The browser has finished loading the page 
*/