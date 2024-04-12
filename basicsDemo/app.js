

// console.log("sandipt singh");
// console.log ("the second execution is here")
// console.log ("the third execution is here")


let string = "the value of the index is undefined";
const newLocal = string.split(" ");
console.log (newLocal);

const randomNumbers = Math.random();
console.log(randomNumbers);

//to make a dice game using random 

const minValue = 1;
const maxValue = 6;
//0.5993174820230534 test case to get the number as 6
const randomGeneratedNum = (Math.floor(randomNumbers*10)+1)%maxValue;
console.log(randomGeneratedNum);

const result = randomGeneratedNum == 0 ? randomGeneratedNum+maxValue:randomGeneratedNum;
console.log(`the result of the dice throw is ${result}`);
// console.log(Math.floor(0.9840411204100629 * (maxValue - minValue) + minValue));