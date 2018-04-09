// Event Bubbling

// document.querySelector(".card-action").addEventListener("click",function(){
//   console.log("card-action");
// });


// document.querySelector("#header").addEventListener("click",function(){
//   console.log("header");
// });

// document.querySelector(".card-title").addEventListener("click",function(){
//   console.log("card-title");
// });

// document.querySelector(".single").addEventListener("click",function(){
//   console.log("single");
// });



//Event Delegation

// const delItem = document.querySelector(".delete-item");

// delItem.addEventListener("click", deleteItem);

document.body.addEventListener("click",deleteItem);


// function deleteItem(e){
//   if(e.target.parentElement.className==="delete-item secondary-content"){
//       console.log("removed");
//   }
// }


function deleteItem(e){
  if(e.target.parentElement.classList.contains("delete-item")){
      console.log("removed");
      e.target.parentElement.parentElement.remove();
  }
}