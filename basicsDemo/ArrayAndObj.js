

//Notes for objects

//objects value in js can also be read by using objname["fieldName"]

    /*
    in js we can create singleton objs and prototype objs too 
    to create a singleton obj in js we need to create the obj using its constructor 
    and if we use any other method the obj is not singleton in nature.
    */

    /*
    Object.create this method is used to create singleton obj in js 
    */

   /*
   read about optional chaining in js 
   it basically refers to an object whose key value is not present in the obj and we do it by using a "?"
   */


//object literals declaration method
    const vehicleSample = [
        {
            vehicleOne:{
                name:"mustang",
                type:"american muscle"
            },
            vehicleTwo:{
                name:"ferrari",
                type:"sports"
            }
        },{
            vehicleOne:{
                name:"honda",
                type:"sedan"
            },
            vehicleTwo:{
                name:"maruti",
                type:"hatchback"
            }
        }
    ]
    console.log(vehicleSample[0].vehicleOne.type);

    //this is one method to concat tow obj
    const myobj = {1:"a",2:"b"};
    const myobj2 = {3:22,7:89}
    const myobj3 = {...myobj,...myobj2};
    console.log("the result of first option is ",myobj3)

    //2nd method to join two obj's
    //the first parameter is the target which we want to acheive
    const myresult = Object.assign({},myobj,myobj2)
    console.log("the result is ",myresult);

//note: to print obj with some strings attached use a "," instead of "+"

/*
to get the key or the value from and object we could use 
Object.key(variableName) --> this would return an array of the keys present
Object.values(variableName) --> this would return an array of the value present
Object.entries(variableName) --> this would return an array of the keys present
*/