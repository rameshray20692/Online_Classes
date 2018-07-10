/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/

// Usage of Destructing to assign each variable of an array to other vars
let employee:Array<any> = ['John',40,'Manager'];
let empName = employee[0];
let empAge = employee[1];
let empDesg = employee[2];

console.log(`EmpName : ${empName} Age : ${empAge} Desg: ${empDesg}`);

let [eName,eAge,eDesg] = employee; // Destructing
console.log(`Name : ${eName} Age: ${eAge} Desg: ${eDesg}`);

// Usage of Destructing to exchange the values of two vars
let a:number = 10;
let b:number = 20;
[a , b] = [b , a]; // Destructing

console.log(`a : ${a} b: ${b}`);


// Usage of Destructing to assign each variable of an Object to other vars
let student = {
    sName : 'Rajan',
    sAge : 23,
    sCourse : 'Engg'
};

let {sName:stdName , sAge:stdAge , sCourse:stdCourse} = student;
console.log(`Name : ${stdName} Age: ${stdAge} Course : ${stdCourse}`);

