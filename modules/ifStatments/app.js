// if(something){
//     do something
// }else {
//     do something
// }

const id="100";

// //Equal to
// if(id == 100){
//     console.log("CORRECT");
// }else{
//     console.log("INCORRECT");
// }

// // NOT EQUAL TO ?
// if(id != 100){
//     console.log("CORRECT");
// }else{
//     console.log("INCORRECT");
// }


// // triple === signs
// //EQUAL TO VALUE AND TYPE :)
// if(id === "100"){
//     console.log("CORRECT");
// }else{
//     console.log("INCORRECT");
// }

// // triple === signs
// //NOT EQUAL TO VALUE AND TYPE :)
// if(id !== "100"){
//     console.log("CORRECT");
// }else{
//     console.log("INCORRECT");
// }

//TEST if undefined
// if(typeof id !== "undefined"){
//     console.log(`the id is ${id}`);
// }else{
//     console.log("NO ID");
// }

//Greather or Less Than:
// if(id < 100){
//     console.log("CORRECT");
// }else{
//     console.log("INCORRECT");
// }

//IF ELSE
const color="gold";

if(color==="red"){
    console.log("Color is red");
}else if(color==="blue"){
    console.log("Color is blue");
}else{
    console.log("color in not red or blue it is "+color);
}

//Logical operators
const name= "Steve";
const age=30;

// AND && 
if(age > 0 && age <12){
    console.log(`${name} is a child`);
}else if(age>=13 && age <= 19){
    console.log(`${name} is a teenager`);
}else {
    console.log(`${name} is an adult`);
}


// OR ||

if(age < 16 || age >65){
    console.log(`${name} can not run in the race`);
}else{
    console.log(`${name} is registered for the race!`);
}


// TERNARY OPERATOR

console.log(id == 100 ? "correct" : "INCORET");

// Without BRACES like VB but without end if...

if(id===100)
console.log("correct");
else
console.log("Incorrect");
