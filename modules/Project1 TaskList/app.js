//Define UI Vars
const form=document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const cleanBtn= document.querySelector(".clear-tasks");
const filter =document.querySelector("#filter");
const taskInput= document.querySelector("#task");


//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners(){
    //Add task event
    form.addEventListener("submit",addTask);
}



//Add Task
function addTask(e){
    if(taskInput.value===''){
        alert("Add a task");
    }
    
    //Create li element
    const li = document.createElement("li");
    //Add class
    li.className="collection-item";
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    
    
    
    e.preventDefault();
}