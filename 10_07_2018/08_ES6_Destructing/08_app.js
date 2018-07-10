/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
// Usage of Destructing to assign each variable of an array to other vars
var employee = ['John', 40, 'Manager'];
var empName = employee[0];
var empAge = employee[1];
var empDesg = employee[2];
console.log("EmpName : " + empName + " Age : " + empAge + " Desg: " + empDesg);
var eName = employee[0], eAge = employee[1], eDesg = employee[2]; // Destructing
console.log("Name : " + eName + " Age: " + eAge + " Desg: " + eDesg);
// Usage of Destructing to exchange the values of two vars
var a = 10;
var b = 20;
_a = [b, a], a = _a[0], b = _a[1]; // Destructing
console.log("a : " + a + " b: " + b);
// Usage of Destructing to assign each variable of an Object to other vars
var student = {
    sName: 'Rajan',
    sAge: 23,
    sCourse: 'Engg'
};
var stdName = student.sName, stdAge = student.sAge, stdCourse = student.sCourse;
console.log("Name : " + stdName + " Age: " + stdAge + " Course : " + stdCourse);
var _a;
