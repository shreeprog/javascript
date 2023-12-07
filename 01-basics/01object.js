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
console.log(Object.entries(person1));
console.log(Object.entries(person));//entries- all the key values to be show.
//nested objects
const name={
    fullname:{
        details:{
            fname:"subha",
            lname:"mishra"
        }
    }
}
console.log(name);
console.log(name.fullname.details.fname);
console.log(name.fullname.details.lname);
//object in array
const arrayObj=[
    {
        name:"subha",
        id:121,
        location:"bbsr"
    },
    {
        name:"shree",
        id:122,
        location:"cuttack"
    },
    {
        name:"mishra",
        id:123,
        location:"jspur"
    },
]
console.log(arrayObj);
console.log(arrayObj[2]);
console.log(arrayObj[0]);
//object de_structure-change the name of key values
const detailsOfCourse={
    cname:"javascript",
    cfee:3000,
    poweredby:"web_bocket",
};
console.log(detailsOfCourse);
const {cfee:s}=detailsOfCourse;
console.log(s);
