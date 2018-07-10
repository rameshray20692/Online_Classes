/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/
// Usage of let vs Var inside for loop created variables
if (100 === 100) {
    var dept = 'Engineering';
}
console.log(dept);
if (100 === 100) {
    var dept1 = 'Maths';
}
//console.log(dept1); cannot access
for (var i = 0; i <= 10; i++) {
}
//console.log(i); cannot access
// Usage of let vs var inside if block
// Usage Const variable creation
var APP_NAME = 'TS_APP';
// APP_NAME = 'TS_APP'; // Cannot reassign the values
