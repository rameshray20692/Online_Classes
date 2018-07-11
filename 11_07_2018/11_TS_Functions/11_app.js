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
function findMin(a, b, c) {
    if (b === undefined && c === undefined) {
        return a;
    }
    else if (c === undefined) {
        return Math.min(a, b);
    }
    else {
        return Math.min(a, b, c);
    }
}
console.log("Min of a : " + findMin(10));
console.log("Min of a,b : " + findMin(10, 20));
console.log("Min of a,b,c : " + findMin(10, 20, 30));
//console.log(`Min of nothing : ${findMin()}`);
//console.log(`Min of a,b,c,d : ${findMin(10,40,50,40)}`);
