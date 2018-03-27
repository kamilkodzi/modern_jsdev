// //FUNCTION DECLARATIOS

// function greet(){
//     console.log("Hello");
// }
// greet();



// function greet2(){
//  return "Hello";   
// }
// console.log(greet2());


// //default valuse - i hope it is not a constructor ;> ES5 style
// function greet3(firstName,lastName){
//     if(typeof firstName === "undefined"){firstName="John"}
//     if(typeof lastName === "undefined"){lastName="Doe"}

//     return "Hello "+firstName+" "+lastName;
// }
// console.log(greet3());
// console.log(greet3("Kamil","coKodziSe"));


// //default values ES6

// function greet4(firstName="john",lastName="doe"){
//     return "Hello "+firstName+" "+lastName;
// }
// console.log(greet4());
// console.log(greet4("Kamil","coKodziSe"));



//FUNCTION EXPRESSIONS

const square = function (x=3){
    return x*x;
};

console.log(square());


// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
//Declare and run ? some lambda? -- nope ;) it`s not lambda

(function(){
   console.log("IIFE Ran");
})();



(function(name){
   console.log("Hello "+name);
})("Kamil");

//PROPERTY METHODS
const todo={
  add: function(){
      console.log("Add todo...");
  },
  edit: function(id){
      console.log(`Edit todo ${id}`);
  }
};

todo.delete= function(){
    console.log("Delete todo");
};


todo.add();
todo.edit(22);
todo.delete();