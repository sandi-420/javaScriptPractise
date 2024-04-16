/*

Problem Statement:
We are given an array of binary numbers and we need to convert the corresponding into the string that it represents
for eg : 
Input : 1010011 1110100 1100001 1100011 1101011 1001111 1110110 1100101 1110010 1100110 1101100 1101111 1110111
Output : StackOverflow


*/

const binaryString = "1010011 1110100 1100001 1100011 1101011 1001111 1110110 1100101 1110010 1100110 1101100 1101111 1110111";

const binaryStringSentence = "01000011, 01001111, 01000100, 01101001, 01101110, 01000111, 001000002, 01101001, 01110011, 001000002, 01000110, 01010101, 01001110"


let binaryStrings = [
    "01000011",
    "01001111",
    "01000100",
    "01101001",
    "01101110",
    "01000111",
    "00100000",
    "01101001",
    "01110011",
    "00100000",
    "01000110",
    "01010101",
    "01001110"
];

/*
for an array of elements we can not split it using the space character as the separator
*/

function convertToString(stringToBeConverted){
    let arr;
    arr = stringToBeConverted.map(item=>(parseInt(item,2)));
    console.log(arr);
    arr = arr.map(item=>(String.fromCharCode(item)));
    console.log(arr);
    return arr.join(''); 
}

const result = convertToString(binaryStrings);
console.log(result);



//using the arrow functions to convert the binary string to a normal string
let resultOfConversion = (stringToBeConverted) =>{
    return stringToBeConverted.split(' ').map(item=>(String.fromCharCode(parseInt(item,2)))).join('');
}

console.log("the result of an arrow function is " ,resultOfConversion(binaryStringSentence));