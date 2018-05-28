// SETS - Store unique values of any type

const set1 = new Set();

// Add values to sets
set1.add(100);
set1.add('a String');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); // it will not add again same value (same set in to this.. set ;)) that is unique


// const set2= new Set([1,true,'strinmg']);
// console.log(set2);

// console.log(set1);


// Get count
// console.log(set1.size);

// Check for values
// console.log(set1.has(100));
// console.log(set1.has(50+50));
// console.log(set1.has({name:'John'}));

// console.log({name:'John'}==={name:'John'});

// Delete from set
// set1.delete(100);

// console.log(set1);

// Iterating Through Sets

// For..of
// for(let item of set1){
// console.log(item);
// }

// For each Loop
// set1.forEach((value)=>{
//    console.log(value);     
// });

// CONVERT SETS IN TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);