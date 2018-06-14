// creation of a simple function with no args and execute a function

function greet(){
    console.log("Good Morning");
}

greet();

//creation of a simple function with args
function greetArgs(name){
    console.log("Good Morning " + name);
}

greetArgs('NAVEEN');

// executing a function with less number of params
function greetLessArgs(name,age){
    var output = "Hello " + name + " You are " + age + " years Old !!";
    console.log(output);
}

greetLessArgs('John');

//executing a function with more number of params
function greetMoreArgs(name,age){
    var output = "Hello " + name + " You are " + age + " years Old !!";
    console.log(output);
}
greetMoreArgs('Williams',40,'Sales Manager');

//function overloading is not possible here


// functions with return values
function greetReturn(name) {
    var output = "Hello " + name + " Iam from greetReturn()";
   return output;
}

var greetMsg = greetReturn('Rajan');
console.log(greetMsg);

//function with empty return /no return


// function Expressions with name and execution


// Anonymous Function Expression and execution


// Functions as arguments without args



// Functions as arguments with args args


// Functions in Objects and Execution


// this keyword for accessing objects props in function


// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */


// Default Function Arguments (arguments)

