// Person constructor
function Person (firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}

// Greeting
Person.prototype.greeting =function(){
   return `Hello there ${this.firstName} ${this.lastName}`;  
};

const person1= new Person('John','Doe');
// console.log(person1.greeting());

// Customer constructor
function Customer(firstName,lastName,phone,membership){
    Person.call(this,firstName,lastName);
    
    this.phone=phone;
    this.membership=membership;
}



//-------------------------------------------------------- PROTOTYPE INHERIT 
// Inherit Person prototype methods - adding other object prototype ! :)
Customer.prototype=Object.create(Person.prototype);

// Make customer.prototype return Customer() - its pointing in to Custome (child) constructor 
Customer.prototype.constructor=Customer;
//--------------------------------------------------------




// Create customer 
const customer1 = new Customer ('Tom','Smith','555-555-5555','Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting=function(){
return `Hello there ${this.firstName} ${this.lastName}
Wellcome to our company`; 
}




console.log(customer1.greeting());