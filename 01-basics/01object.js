//object literals
const person={
    name:"subha",
    age:22,
    location:"bbsr"
};
console.log(person);
console.log(person.location);
//object constructor
const person1={};
person1.name="shree";
person1.age=22;
person1.location="bbsr";
person1.isLoggedIn=false;
console.log(person1);
console.log(person1.age);
console.log(person1.location);
console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(person1.hasOwnProperty("isLoggedIn"));
