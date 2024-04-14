
/*
in js a function can also return a function if required and the example can be
store the myFunc into a variable and the try to print the variable it returns you the whole actual function with the 
implementation
*/
function myFunc(...numbers){
console.log(numbers[0]);
return numbers[0];
}

/*
in js we cannot make direct empty obj check
*/

const ans = myFunc(100,200,300);
//console.log("the result is ",ans);

let user = { 
};
// user.name = "sandipt";
// user.email = "s@gmail.com"

console.log(user);
const result = getUserDetails(user);
function getUserDetails(anyObject){
    if(anyObject===null){
        console.log("please enter a valid object");
        return;
    }
    return message = `the username is ${anyObject.name} and the email is ${anyObject.email}`;
}
console.log("user details are as follows -->",result);

/*
we can also store a function inside a variable in js and it would be treated like any other variable in js 
*/

const myFunction = function(value)
{
   // console.log("a new value is assigned to me ",value)
}
//myFunction(60);
//console.log(typeof myFunction);

//the use of arrow functions is also here
const myFunctionArrow = (value)=>
{
    //console.log("a new value is assigned to me ",value)
}
//myFunctionArrow(900);
//console.log(typeof myFunctionArrow);


let array1 = [user = {
userName:"sandipt",
price:9900
}];

//console.log(user);
console.log(array1);
let newUser = {

}
const addUser = (newUser) =>{
    //console.log("inside add user");
    newUser.userName = "sam";
    newUser.price = 1999;
    array1.push(newUser);
    //console.log("new user added",newUser.userName);
}
addUser(newUser);
console.log(array1);