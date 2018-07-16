// Create a simple function to add two numbers
function sum(a:number,b:number):number{
    let sum:number = a + b;
    return sum;
}
console.log(`The Sum of a, b is : ${sum(10,20)}`);

// Create the same add function with first number as 'any' type
// 10 , 20 -> 30
// '10' , 20 -> 30
// 'abc' , 20 -> 20
// true , 20 -> 20
// [] , 20 -> 20

function sumAny(a:any,b:number):number{
    let sum:number = 0;
    if(typeof a === 'string'){
        if(isNaN(parseFloat(a))){
            sum = b;
        }
        else{
            sum = parseFloat(a) + b;
        }
    }
    else if(typeof a === 'number'){
        sum = a + b;
    }
    else{
        sum = b;
    }
    return sum;
}
console.log(`10 , 20 -> 30 : ${sumAny(10,20)}`);
console.log(` '10' , 20 -> 30 : ${sumAny('10',20)}`);
console.log(`'abc' , 20 -> 20 : ${sumAny('abc',20)}`);
console.log(`true , 20 -> 20 : ${sumAny(true,20)}`);
console.log(`[] , 20 -> 20 : ${sumAny([],20)}`);

// Function Overloading in TypeScript , findMin of 1 , 2 , 3 numbers
function findMin(a:number):number;
function findMin(a:number,b:number):number;
function findMin(a:number,b:number,c:number):number;
function findMin(a:number,b?:number,c?:number):number{
    if(b === undefined && c === undefined){
        return a;
    }
    else if(c === undefined){
        return Math.min(a,b);
    }
    else{
        return Math.min(a,b,c);
    }
}
console.log(`Min of a : ${findMin(10)}`);
console.log(`Min of a,b : ${findMin(10,20)}`);
console.log(`Min of a,b,c : ${findMin(10,20,30)}`);
//console.log(`Min of nothing : ${findMin()}`);
//console.log(`Min of a,b,c,d : ${findMin(10,40,50,40)}`);
