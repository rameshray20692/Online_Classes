/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/

// Create a function and provide few default parameters using ES6

function greet(name:string='Anonymous',age:number=35):string{
    let greeting:string = "Hello " + name + " You are " + age + " years old!!";
    return greeting;
}

console.log(greet());