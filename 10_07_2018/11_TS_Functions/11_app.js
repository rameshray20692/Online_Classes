// Create a simple function to add two numbers
function sum(a, b) {
    var sum = a + b;
    return sum;
}
console.log("The Sum of a, b is : " + sum(10, 20));
// Create the same add function with first number as 'any' type
// 10 , 20 -> 30
// '10' , 20 -> 30
// 'abc' , 20 -> 20
// true , 20 -> 20
// [] , 20 -> 20
function sumAny(a, b) {
    var sum = 0;
    if (typeof a === 'string') {
        if (isNaN(parseFloat(a))) {
            sum = b;
        }
        else {
            sum = parseFloat(a) + b;
        }
    }
    else if (typeof a === 'number') {
        sum = a + b;
    }
    else {
        sum = b;
    }
    return sum;
}
console.log("10 , 20 -> 30 : " + sumAny(10, 20));
console.log(" '10' , 20 -> 30 : " + sumAny('10', 20));
console.log("'abc' , 20 -> 20 : " + sumAny('abc', 20));
console.log("true , 20 -> 20 : " + sumAny(true, 20));
console.log("[] , 20 -> 20 : " + sumAny([], 20));
// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers
// Function Overloading in TypeScript , findMin using Math
// Create an Employee function and get an Employee Object
