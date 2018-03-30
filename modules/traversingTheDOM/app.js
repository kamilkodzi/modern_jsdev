let val;

const list = document.querySelector("ul");
const listItem=document.querySelector("li:first-child");

val=listItem;
val=list;


//Get child nodes (NODE LIST)
val =list.childNodes;
// val =list.childNodes[0];
// val =list.childNodes[0].nodeName;
val =list.childNodes[7].nodeType;

// 1  - Element
// 2  - Atributte (deprecated)
// 3  - Text node
// 8  - Comment
// 9  - Document itself
// 10 - Doctype


// //instedad nodes of text we can use .children (HTML COLLECTION)
// val=list.children;
// val= list.children[1];
// val= list.children[1].textContent="Hello";

//Children of Children
// val=list.children[1].children[0].id ="text-link" ;

// val=list.firstChild;
// val=list.firstElementChild;

// val=list.LastChild;
// val=list.LastElementChild;

////Count childe elements
// val= list.childElementCount;

//Get parent node

val = listItem.parentNode;
val=  listItem.parentElement;
val=  listItem.parentElement.parentElement;



//GEt next sibling

val=listItem.nextSibling;
val=listItem.nextElementSibling.nextElementSibling;

//GEt prev sibling

val=listItem.previousSibling;
val=listItem.previousElementSibling;




console.log(val);