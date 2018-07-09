/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/
// Normal Function 1
var greet = function () {
    return "Good Morning";
};
console.log(greet());
// Arrow Function 1
var greetArrow = function () { return "Good Morning From Arrow "; };
console.log(greetArrow());
// Normal Function 2
var greetMe = function (name) {
    return "Good Morning " + name;
};
console.log(greetMe('John'));
// Arrow Function 2
var greetMeArrow = function (name) { return "Good Morning " + name; };
console.log(greetMeArrow('Williams'));
// Normal Function 3
var add = function (a, b) {
    return a + b;
};
console.log("Normal Fn : The Sum of a , b is : " + add(10, 20));
// Arrow Function 3
var addArrow = function (a, b) { return a + b; };
console.log("Arrow Fn : The Sum of a , b is : " + addArrow(20, 40));
// Normal function 4
var array = [10, 20, 30, 40, 50];
var arrLength = function (array) {
    return array.length;
};
console.log('Normal Fn: Array length is ' + arrLength(array));
// Arrow Function 4
var arrLengthArr = function (array) { return array.length; };
console.log('Arrow Fn: Array length is ' + arrLengthArr(array));
// Create an array with the length of each element of an array
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var movieLength = movies.map(function (movie) {
    return movie.length;
});
//[9,7,9]
console.log("Normal Function : " + movieLength);
// Arrow Function for the above example
var movieLenArrow = movies.map(function (movie) { return movie.length; });
console.log("Movie Length : " + movieLenArrow);
