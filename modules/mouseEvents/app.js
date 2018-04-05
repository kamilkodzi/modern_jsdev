const clearBtn = document.querySelector("#extra");
const card= document.querySelector(".card-action");
const heading= document.querySelector("#header");

//Click
// clearBtn.addEventListener("click",runEvent);

//DoubleClick
// clearBtn.addEventListener("dblclick",runEvent);


// Mousedown
// clearBtn.addEventListener("mousedown",runEvent);


//Mouse UP
// clearBtn.addEventListener("mouseup",runEvent);


// //Mouseenter -only when we enter parent element (whole div
// card.addEventListener("mouseenter",runEvent);

// //Mouseleave -only when we leave parent element (whole div
// card.addEventListener("mouseleave",runEvent);


// //Mouseenter -if thre are some smaller parts in DVI - like <li> it will fires up many times.
// card.addEventListener("mouseover",runEvent);

// //Mouseleave -if thre are some smaller parts in DVI - like <li> it will fires up many times.
// card.addEventListener("mouseout",runEvent);

//Mousemove
card.addEventListener("mousemove",runEvent);




// Event Handler 
function runEvent(e){
    console.log(`Event type: ${e.type}`);
    heading.textContent=`MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`;
    
}