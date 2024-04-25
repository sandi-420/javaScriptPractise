/*
    Problem Statement : We are given a shop array which consists of diff types of products 
    in the shop and now we need to take all the products in the shop and add the price and 
    corresponding quantity to the result array and then print it 
*/

function convertToString(stringToBeConverted){
    let arr;
    arr = stringToBeConverted.map(item=>(parseInt(item,2)));
    console.log(arr);
    arr = arr.map(item=>(String.fromCharCode(item)));
    console.log(arr);
}



let shop = 
    [
    {category: "laptop",
    price: 10000,
    brand: "hp",
    color: "black",
    screenSize: 15.6,
    quantity: 90,
    processor: "i5"
    },
    {category: "mobile",
    price: 10000,
    brand: "zenbook",
    color: "black",
    screenSize: 15.6,
    quantity: 100,
    processor: "i5"
    },
    {category: "television",
    price: 100000,
    brand: "sony",
    color: "black",
    screenSize: 15.6,
    quantity: 5,
    processor: "i5"
    },
    {category: "mobile",
    price: 10000,
    brand: "moto",
    color: "black",
    screenSize: 15.6,
    quantity: 1,
    processor: "i5"
    },
    {category: "laptop",
    price: 10000,
    brand: "omen",
    color: "black",
    screenSize: 15.6,
    processor: "i5",
    quantity: 10
    }
]
console.log("the size of the obj is ",shop.length);
const listWithPriceAndCategory = {};

//const {category,price,quantity} = shopping;
shop.forEach(product => {
    const {category,price,quantity} = product;
    //console.log(category,price,quantity);
    if(!listWithPriceAndCategory[category]){
        listWithPriceAndCategory[category] = {price,quantity};
        //console.log(listWithPriceAndCategory);
    }else {
       console.log("the category already exists");
       listWithPriceAndCategory[category].price+= price;   
       listWithPriceAndCategory[category].quantity+= quantity;  
    }
});

//console.log("final list is -->" ,listWithPriceAndCategory);
/*
    here we are filtering the list on the basis of the category and then we perform some of the actions on the list 
    and return the results and store it in the variable if we don't return the value the variable will not be able 
    to catch the value and it would return undefined
*/
const result = shop.filter(products => products.category==="laptop").map(product => {
    let price = product.price;
    product.price = price*8;
    //console.log("price",product);
    return product;
});
console.log(result);



//console.log(shop);
// let shopping = [{category: "laptop",
// price: 10000,
// brand: "omen",
// color: "black",
// screenSize: 15.6,
// processor: "i5",
// quantity: 10
// }
// ]