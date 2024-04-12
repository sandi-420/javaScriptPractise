

// console.log("sandipt singh");
// console.log ("the second execution is here")
// console.log ("the third execution is here")


let string = "the value of the index is undefined";
const newLocal = string.split(" ");
//console.log (newLocal);

const randomNumbers = Math.random();
//console.log(randomNumbers);

//to make a dice game using random 

const minValue = 1;
const maxValue = 6;
//0.5993174820230534 test case to get the number as 6
const randomGeneratedNum = (Math.floor(randomNumbers*10)+1)%maxValue;
console.log(randomGeneratedNum);

const result = randomGeneratedNum == 0 ? randomGeneratedNum+maxValue:randomGeneratedNum;
console.log(`the result of the dice throw is ${result}`);
// console.log(Math.floor(0.9840411204100629 * (maxValue - minValue) + minValue));



//date creation using date object in js
/*
dates in js starts with 0 and ends on 11 with the respective months in them 
*/
let createdDate = new Date(2023,11,23);
//console.log(createdDate.getDate());
//console.log(createdDate);

//using the mm-dd-yyyy format also the date can be applied using the format of dd-mon-yyyy
let createdDateFormated = new Date ("01-02-2024");
//console.log(createdDateFormated)

//Array usage in js

const myArray = new Array("hey","say","nay","they","them");
    //  console.log("the array is "+myArray)

const multiArray = [1,2,[22,33],[66,4444,[99,88]]]
/*
entries method in js when used upon array returns and iterator 
which we can use to iterate upon the result set and then we get the output in the key value pair format
*/
const iterator = multiArray.entries();
for(x of iterator){
    //console.log("inside of the iterator "+x);
}

// console.log("the multi array is "+ typeof multiArray.flat())
// console.log("the multi array is "+ multiArray.flat())
// console.log("the multi array is "+ typeof multiArray)
/*
performing operations on the array
flat map in js acts the same as map in java 
on the other hand flat in js would flatten the array and give a combined result
*/
//console.log("flat map used "+myArray.flatMap((c)=>c+3))

/*
here we can observe the diff between splice and slice methods of js based on the use case
*/

let array = [1,2,3,4,5,6]
console.log("the original array is "+array);
console.log("the slice array is "+array.slice(1,3))
console.log("the original array is after modifications "+array);

console.log("the original array is "+array);
console.log("the spliced array is "+array.splice(1,3))
console.log("the original array is after modifications "+array);
/*
-->the difference is that in slice we just take out the elements based on the index and the last index is ignored 
-->the original array remains unchanged
but 
-->in splice we take out the element and the last index is considered but this also makes the change in the original 
-->array as it removes the element from the original array 
*/