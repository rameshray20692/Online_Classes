/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/

// Usage of for...in loop from ES5
let array:Array<string> = ['HTML','CSS','JavaScript','Bootstrap'];
let output = 'for in.. ';
for(let index in array){
    let value = array[index];
    output += value + ' ';
}
console.log(output);

// Usage of for...of loop from ES6
output = 'for of .. ';
for(let value of array){
    output += value + ' ';
}
console.log(output);