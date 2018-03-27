const person = {
    firstName: "Steve",
    lastName: "Smith",
    age: 18,
    email:"kamil@gmaisal.com",
    hobbies: ["nicestuff","soccer"],
    adress: {
        city: "Miami",
        state: "FL"
    },
    getBirthYear: function(){
        return 2018 - this.age;
    }
    
    
};

let val;

val=person;
//or specific value
val=person.firstName;
val=person["firstName"];
val=person.age;
val=person;
val=person.hobbies[1];
val=person.adress.state;

val=person.getBirthYear();


console.log(val);


const people = [
    {name: "John", age:30},
    {name: "Kamil", age:15},
    {name: "Adam", age:40}
    ];
    
 for(let i=0; i<people.length;i++){
     console.log(people[i].name);
 }
