// Create element
const li = document.createElement("li");

//Add class
li.className="collection-item";

//Add id
li.id="new-item";

//Add attribute;
li.setAttribute("title","New Item");

//Create text node and append
li.appendChild(document.createTextNode("Hello World"));


//Create new link element
const link= document.createElement("a");
//Add Class
link.className="delete-item secondary-content";
//Add icon html.
link.innerHTML="<i class=fa fa-remove>  x</i>";

//Append link in to LI
li.appendChild(link);


//Append li as child to ul.
document.querySelector("ul").insertBefore(li,document.querySelector("ul").firstChild);

console.log(li);