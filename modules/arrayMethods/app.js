//ARRAYS.Create some arrays
const numbers = [43,556,43,23,24,46,5,36,58,46,87];

const numbers2 = new Array(21,54,63,48,12,4);

const fruit= ["Apple","Bannana","Orange","Pear"];
const mixed= [22, "hello",true,undefined,null,{a:1,b:2},new Date()];

let val;

//get length
val=numbers.length;

//check if is array ?
val=Array.isArray(numbers);

//i need check something (ok not working ;))
val= numbers.isArray; //<- its bad

val=numbers[3]; 
val=numbers[0]; //array 0 based...

//Insert in to array
numbers[2]=100;

//Find index of value
val=numbers.indexOf(36); //<- and -1 if false


//Mutating ArRAYS !----------------------------!I could use this more often in my VBA projects ;<
//add to the end:
numbers.push(250);
//removing from the end: PUSH and POP
numbers.pop();


//add on to front
numbers.unshift(120);
//removing from the frontt UNSHIFT and SHIFT
numbers.shift();
//---------------------------------------------!


//Slice values
numbers.splice(1,4);

//reverse array
numbers.reverse();


//concatenate arrays
val =numbers.concat(numbers2);


//sorting arrays
val=fruit.sort();
val=numbers.sort(); //<- its sorting only by first number so 100 < 23 in that case

//how to fix it ?
//Use the "compare" function
val=numbers.sort(function(x,y){
    return x-y;
});

//Reverse sort
val=numbers.sort(function(x,y){
    return y-x;
});

//Find
function under50(num){
    return num<50;
}

val=numbers.find(under50);



console.log(numbers);
console.log(val);

