// const brad = {
//     name: 'Brad',
//     age:30
// };
// console.log(brad);
// console.log(brad.age);

// Person constructor
function Person(name,dob){
    this.name = name;
    // this.age=age;
    this.birthday = new Date(dob);
    this.calculateAge=function(){
        const diff = Date.now()-this.birthday.getTime();
        const ageDate = new Date (diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    };
}

// // console.log(this);
// // this.alert(1);

// const brad=new Person('Brad',36);
// const john=new Person('John',25);

// // console.log(brad);
// console.log(john.age);

const brad= new Person('Bard','9-10-1950');
console.log(brad.calculateAge());