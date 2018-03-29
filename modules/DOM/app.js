let val;

val=document;
val=document.all;
val=document.all[1];
val=document.all.length;
val=document.doctype;
val=document.URL;



val=document.forms[2];
val=document.forms[2].id;
val=document.forms[2].action;
val=document.forms[2].method;

val=document.links;
val=document.links[0];
val=document.links[1].id;
val=document.links[2].className;
val=document.links[3].classList[0];

val = document.images;

val=document.scripts[2].getAttribute("src");

// FOR EACH WITH CLLECTION  <-- basically we can do for each not on an array. document is an collection but we can convert it in to array
let scripts = document.scripts;

let scriptsArray= Array.from(scripts);


scriptsArray.forEach(function(scripts){
    console.log(scripts);
});



console.log(val);