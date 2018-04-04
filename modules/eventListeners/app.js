// document.querySelector("#extra").addEventListener("click",function(e){
//     console.log("hello world");
    
//     e.preventDefault();
// });


document.querySelector("#extra").addEventListener("click",onClick);


function onClick(e){
    // console.log("Clicked");
    
    let val;
    // let test;
    val = e;
    
    
    //EVENT tagret element
    
    val=e.target;
    val=e.target.id;
    val=e.target.classList;
    // test=Array.from(val);
    val=e.target.innerHTML="HEllNO!";
    
    //TimeStamp
    val=e.type;
    val=e.timeStamp/1000;
    
    val=e.clientY;
    val=e.clientX;
    
    //Coords event relative to the elemen
    val=e.offsetY;
    val=e.offsetX;
    
    
    console.log(val);
    // console.log(test);
}