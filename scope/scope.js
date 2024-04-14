/*
in this we are practising about the global scope execution context and closure in js
also we would see different type of functions and their declaration
*/

function one(number1){
    let valueTwo = "a value 2 is assigned";
    let numberOneValue = number1;
    console.log("inside function one");
    
    function two(numberOneValue){
        console.log("im here inside function two ",valueTwo);
        return numberOneValue+3;
    }
   const result =  two(5);
   console.log("the result is ",result);
   return numberOneValue + 10;
}
const result = one(5);
console.log("the result for the first execution is -->",result);
//two();//if we try to access two from here it would give reference error as two is not defined in the global scope the scope of this function is blocked


/*
we also have the "this" keyword in js 
this keyword is used for the reference of a paritcular instance
*/



let user = {
    username:"Sandipt",
    price:900,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to the course`) //when ever we want to access the variable in the current context we need to use the this keyword if not used it would show it as not defined
    }
    
}
user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

/*
this can only be used under an object level but not under a fuction in js
*/