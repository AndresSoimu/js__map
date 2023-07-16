//Basic DOM manipulation
const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

//Creating and placing new nodes
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);
//<<<<<<<<<<<
const text = document.createTextNode(
   " — the premier source for web development knowledge."
 );
 const linkPara = document.querySelector("p");
linkPara.appendChild(text);

//Moving and removing elements
sect.appendChild(linkPara);
sect.removeChild(linkPara);
//or
linkPara.remove();

//Manipulating styles
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";
//or
//Add the following inside your HTML
/*
 style>
  .highlight {
    color: white;
    background-color: black;
    padding: 10px;
    width: 250px;
    text-align: center;
  }
</style>
 */
para.setAttribute("class", "highlight");
