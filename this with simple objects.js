var person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  occupation: "Developer",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.firstName); 
console.log(person.age); 
console.log(person.fullName());