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
function greetEmptyReturn(name) {
    var output = "Hello " + name + " Iam from greetEmptyReturn()";
}
var greeetingMsg = greetEmptyReturn('John');
console.log("greetEmptyReturn : " + greeetingMsg);

// function Expressions with name and execution
var name  = 'Williams';
var greeting = greetReturn('John');
var greetFn = function greet() {
    var greeting = "Iam from Function Expression";
    console.log(greeting);
};

greetFn();

// Anonymous Function Expression and execution
var greetAnonymous = function() {
    console.log("I am from greetAnonymous Function");
};
greetAnonymous();

// Functions as arguments
function greet1(name){
    console.log("Hello ! " + name + " Iam from greet1 function" );
}
function greet2(name){
    console.log("Hello ! " + name + " Iam from greet2 function");
}
function greetEngine(fName,name) {
    fName(name);
}
greetEngine(greet1,'Williams');

// Function Expression with functions as args
var greetFn1 = function(name,age) {
    console.log("I am from greetFn1 Function " + name + " " + age);
};
var greetFn2 = function(name,age) {
    console.log("I am from greetFn2 Function " + name + " " + age);
};
var greetDeligate = function(fName,name,age) {
  fName(name,age);
};
greetDeligate(greetFn1,'Williams',45);

// Functions in Objects and Execution
var student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    getFullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(student.getFullName());


// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */

var employee = {
    name : 'John',
    age : 35,
    desg : 'Manager',
    address : {
        city : 'Hyderabad',
        state : 'Telangana',
        country : 'India'
    },
    isFromState : function(state) {
        return this.address.state === state;
    },
    isFromCity : function(city) {
        return this.address.city === city;
    },
    isFromCountry : function(country) {
        return this.address.country === country;
    }
};

console.log('Is From Telangana ? ' + employee.isFromState('Telangana'));
console.log('Is From Hyderabad ? ' + employee.isFromCity('Hyderabad'));
console.log('Is From India ? ' + employee.isFromCountry('India'));


// Default Function Arguments (arguments)
function defaultFn() {
    console.log(arguments);
}

defaultFn('John',40,'manager');
