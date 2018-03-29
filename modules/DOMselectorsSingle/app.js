// // document.getElementById()

// console.log(document.getElementById("header"));

// // GEt things from the element

// console.log(document.getElementById("header").id);

// //change styling
// document.getElementById("header").style.background="#333";
// document.getElementById("header").style.color="#fff";
// document.getElementById("header").style.padding="5px";
// // document.getElementById("header").style.display="none";


// //Change content 
// document.getElementById("header").textContent="Bo nie mam czasu";
// document.getElementById("header").innerText="My tasks";

// //document.getElementById("header").innerHTML='<span style="color:red">Task List </span>';

// //We should use variable

// const taskTittle= document.getElementById("header");
// taskTittle.style.color="yellow";


//querySelector
//document.querySelector()

// console.log(document.querySelector("#header"));
// console.log(document.querySelector(".cartoon"));
// console.log(document.querySelector("h1"));

// document.querySelector("h1").style.color="green";
// document.querySelector("li:last-child").style.color="green";
// document.querySelector("li:nth-child(3)").style.color="red";
// document.querySelector("li:nth-child(4)").textContent="Hello WORLD !";
// document.querySelectorAll("li:nth-child(even)").style.background="#ccc";


// const items= Array.from(document.getElementsByClassName("header"));
// console.log(items);
// console.log(items.map(function(itm){
//     return itm.textContent;
// }));

// items[2].style.color="red";
// items[2].textContent="Hello@@@ HACKED";

// const listItems = document.querySelector("ul").getElementsByClassName("wyjatowa");

// console.log(listItems);

// listItems.forEach(function(itm){
//     this.itm.textContent="Hacked Again with JS";
// });

// //GET elements by Tag name
// let lis = document.getElementsByTagName("li");
// // console.log(lis);
// // console.log(lis[0]);
// // lis[3].textContent="Hello";

// //CONVERT HTML COLLECTION IT TO ARRAY
// lis=Array.from(lis);

// // lis.reverse();

// lis.forEach(function(li,index){
//     console.log(li.className);
//     li.textContent=`${index}: Hello:`;
// });



// console.log(lis);



//document.querySelectorAll
const items = document.querySelectorAll("ul li.wyjatowa");

items.forEach(function(item,index){
    item.textContent=`${index}: Hello`;
});

const liOdd =document.querySelectorAll("li:nth-child(odd)");
const liEven =document.querySelectorAll("li:nth-child(even)");
console.log(liOdd);
console.log(liEven);

liOdd.forEach(function(li,index){
    li.style.background="#ccc";
});


for(let i =0;i<liEven.length;i++){
    liEven[i].style.background="#f4f4f4"
}



