class Person{
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.birthday=new Date(dob);
    }
    
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
    
    calculateAge(){
        const diff = Date.now()-this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    }
    
    getsMarried(newLastName){
        this.lastName=newLastName;
    }
    
    static addNumbers(x,y){  // <--- if ye`re do not use this in our classes is good practice to use static functions (some like stand alone function) we re not using obj mary.addNumbers !! use Person.addNumbers()
        return x+y;
    }
    
}

const mary = new Person('Marry','Johnnson','11-13-1980');

mary.getsMarried('Shiningstar');

console.log(mary);

console.log(Person.addNumbers(2,3));