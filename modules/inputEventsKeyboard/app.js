const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading= document.getElementById("header");
const select = document.querySelector("select");
//Clear input
taskInput.value='';


// form.addEventListener('submit',runEvent);


//KEY DOWN
// taskInput.addEventListener('keydown',runEvent);

//KEY UP
/*taskInput.addEventListener('keyup',runEvent);*/

//KEY PRESS
// taskInput.addEventListener('keypress',runEvent);

//FOCUS
// taskInput.addEventListener('focus',runEvent);

//Blure
// taskInput.addEventListener("blur",runEvent);

//Cut
// taskInput.addEventListener("cut",runEvent);

//PASTE
// taskInput.addEventListener("paste",runEvent);

//Input
// taskInput.addEventListener("input",runEvent);

//Change Event
select.addEventListener("change",runEvent);






function runEvent(e){
    console.log(`Event Type: ${e.type}`);
    console.log(e.target.value);
    // heading.innerText=e.target.value;
    
    //Get input value
    // console.log(taskInput.value);
    
    // e.preventDefault();
    
}
