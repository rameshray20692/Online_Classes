/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
// use spread operator to expand the array elements and pass it as args to a function
var array = [10, 20, 30, 40, 50, 60];
var min = Math.min.apply(Math, array);
console.log("min values is : " + min);
// use spread operator to add an array in the middle of another array
var arr1 = [30, 40, 50];
var arr2 = [10, 20].concat(arr1, [60, 70, 80]);
console.log("arr2 values are : " + arr2);
// use spread operator to create a new copy of an array
var languages1 = ['HTML', 'CSS', 'JS', 'Bootstrap'];
var languages2 = languages1.slice(); // creates new copy
languages2 = languages1.slice(); // creates new copy of an array
