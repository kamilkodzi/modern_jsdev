const firstName="Will";
const lastName="Hannibal";
const age=36;
let val;
const str="Hello there my name is Brad";
const tags="web design,web forms";

val=firstName+lastName;

//Concatenantion
val= firstName + " "+lastName;

//Appended
val= "Brad ";
val+="Travis";

val="Hello, my name is " +firstName+ " and I am "+age;

//Escaping

val='That\'s awesome, I can\'t wait';

val=firstName.length;

//concat()

val=firstName.concat(" ",lastName);


//change case
val=firstName.toUpperCase();
val=lastName.toLowerCase();


val=firstName[2];


//indexOf()
val=firstName.indexOf("l");
val=firstName.lastIndexOf("l");

//charAt()

val=firstName.charAt("2");

//get last character
val=firstName.charAt(firstName.length -1);

//substring()
val=firstName.substring(0,4);


val = firstName.slice(-3);


//split()

val = str.split(" ");
val= tags.split(",");

//replace()

val=str.replace("Brad","Kamil");


//includes()
val=str.includes("Hello");







console.log(val);
