 //Replace Element
 
 //Create element
 const newHeading = document.createElement("h2");
// Add id
newHeading.id="task-title";
newHeading.appendChild(document.createTextNode("Task list:"));


//Get old heading
const oldHeading = document.getElementById("header");

//Parent
const cardAction=document.querySelector(".card-action");

//Replace
cardAction.replaceChild(newHeading,oldHeading);
 
 
//Remove Element
const lis =document.querySelectorAll("li");
const list = document.querySelector("ul");

//Remove
// lis[0].remove();

// //Remove child element
// list.removeChild(lis[2]);

//CLASSES & ATTR
const firstLI = document.querySelector("li:first-child");
const link = firstLI.children[1];

// console.log(firstLI.children[1]);

let val;

// Classes
val = link.className;
val = link.classList;
val=link.classList[0];
link.classList.add("test");
link.classList.remove("test");
val=link;


//ATTRIBUTES
val = link.getAttribute("href");
val= link.setAttribute("href","http://google.com");

link.setAttribute("title","google-link");

val=link.hasAttribute("href");
val=link.hasAttribute("title");
val=link;

link.removeAttribute("title");


console.log(val);