/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/

// use spread operator to expand the array elements and pass it as args to a function
let array:Array<number> = [10,20,30,40,50,60];
let min = Math.min(...array);
console.log(`min values is : ${min}`);

// use spread operator to add an array in the middle of another array
let arr1:Array<number> = [30,40,50];
let arr2:Array<number> = [10,20,...arr1,60,70,80];
console.log(`arr2 values are : ${arr2}`);

// use spread operator to create a new copy of an array
let languages1:Array<string> = ['HTML','CSS','JS','Bootstrap'];
let languages2:Array<string> = languages1.slice(); // creates new copy
languages2 = [...languages1]; // creates new copy of an array









