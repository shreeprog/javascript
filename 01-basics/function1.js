function addTwoNos(num1,num2){
    return num1+num2;//return keyword is a exit of a function is exsit point of a function.once we declare return in our function after that nothing will be excuted.
    //console.log(result);
    }
    const result=addTwoNos(4,5);
    console.log(result);
    
    function loginUserMessage(uname){
        if(uname===undefined){
            console.log(`${uname},please enter the valid uname`);
    return 0;
        }
        console.console.log(`${uname},good afternoon you have logged in`);
        
    }
    loginUserMessage();

    function addInYourCart(...val){//rest operator
        //console.log(num1);
        //console.log(num2);
        console.log(val);
    }
    addInYourCart(100,200,300,400);
    //scope
    var d=300;
    if(true){
    let s=10;//block
    //var d=20;//global scope
    const m=30;//block scope
    console.log(s);
    console.log(m);
    }
    console.log(d);
    


function one(){
    const personname="subha";
    function two(){
        const childname="shree";
        const location="bbsr";
        console.log(childname);
        console.log("child called");
    }
    //console.log(childname);
    two();
    console.log("parent two called");
}
one();

const user={
username:"subha",
location:"bbsr",
usermessage:function(){
    console.log(`${this.username},"hello!"`);
    console.log(this);
}

}
user.usermessage();
//console.log(user.usermessage());
//console.log(user);
//Arrow function (fat arrow function)

const schoolData=(schoolid,schoolname,location)=>{
  console.log(schoolid); 
  console.log(schoolname); 
  console.log(location);  
}
schoolData(111,"St.Xavier's","bbsr");
const addTwoNo=(num1,num2)=>num1+num2;
console.log(addTwoNo(6,7));