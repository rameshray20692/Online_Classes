/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/
// Usage of for...in loop from ES5
var array = ['HTML', 'CSS', 'JavaScript', 'Bootstrap'];
var output = 'for in.. ';
for (var index in array) {
    var value = array[index];
    output += value + ' ';
}
console.log(output);
// Usage of for...of loop from ES6
output = 'for of .. ';
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    output += value + ' ';
}
console.log(output);
