// Create Element
let newHeader = document.createElement('h1');
//Append Child
let newHeaderOne = document.createElement('h1');
newHeader.innerHTML = "Welcome to my Portfolio!"
document.body.appendChild(newHeader);
//Remove Element
let mainHeader = document.getElementsByTagName("h1")
mainHeader.remove();