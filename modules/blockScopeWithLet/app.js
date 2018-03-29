//Global Scope
var a=5;
let b = 2;
const c =3;


// function test(){
//     var a=4;
//     let b = 5;
//     const c =6;
//     console.log("Function Scope: ",a,b,c);
// }

// test();


// if(true){
//     //BLOCK Scope
//     var a=4;
//     let b = 5;
//     const c =6;
//     console.log("If Scope: ",a,b,c);
// }


for(var a=0;a<10;a++){ //<--- var is dangerous 
    console.log(`Loop: ${a}`);
}


console.log("Global Scope: ",a,b,c);


//VAR -> FUNCTION SCPE
//LET AND Const -> BLOCK SCOPE ;)