one(5);
function one(count){
    console.log(count+1);
    }
    //one(5);
    //two(8);//hoisting :in arrow function we cannot do call before function defination otherwise it will give error.
    const two=(count)=>{
        console.log(count+1);
    }
    two(8);
    //const a;
    //console.log(a);
    //a=10;

    //const sum(variable)//function name=(parameter)=>{
        //function body
    //}
    //Sum(argument)//function call
    //IIFE(Immediate Involve Function Execution)
    (function passMessage(){
console.log("first execution");
console.log("database fetched");
    })();  //so here semicolon is mandate.

    (
        (name)=>{
        console.log(`${name},2nd IIFE arrow function execution`);
   }
   )(`shree`);