//       FOR LOOPS, FOR EACH LOOPS , WHILE LOOPS.

//   for(let i=0;i<10;i++){
//       if(i===2){
//           console.log("2 is my favourite number;)");
//               continue;
//           }
    
//           if(i===5){
//               console.log("break the loop");
//               break;
//           }

//           console.log("Number "+i);
    
//       }


//           WHILE LOOP
//          let i=0;

//          while(i<10){
//              console.log("Number " + i);
//              i++;
//          }

//         DO WHILE

//       let i = 110;

//       do{
//           console.log("Number "+i);
//           i++;
//       }

//       while(i<10);
    //  LOOP THORUG the ARRAY 
//   const cars= ["ford","chewy","Honda","toyota"];



//       for (let i=0;i<cars.length;i++){
//           console.log(cars[i]);
//       }


//   cars.forEach(function(car,index,array){
//       console.log(`${index} : ${car}`);
//       console.log(array);
//   });


//  MAP ! :) 
// const users=[
//     {id:1,name:"John"},
//     {id:2,name:"Kamil"},
//     {id:3,name:"Karen"}
//     ];
    
//     const ids=users.map(function(user){
//         return user.name;
//     });
    
//     console.log(ids);

const user={
    firstName: "John",
    lastName: "Doe",
    age:30
};


//FOR IN LOOP
for(let x in user){
    console.log(`${x} : ${user[x]}`);
}