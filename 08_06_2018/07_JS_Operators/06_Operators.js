// Assignment operator =
var a  = 10;
var output = "The value of a is : " + a;
console.log(output);
document.getElementById('display').innerHTML = output;


// Arithmetic operators + - * /
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
output = "The sum of num1 , num2 is : " + sum;
console.log(output);
document.getElementById('display').innerHTML = output;


// Short hand math += , -= , *= , /=
var x = 10;
var y = 20;
var add = 1;

add = add * (x + y); // 1 * (10 + 20)

add *= (x + y); // 30 * (10 + 20)

output = "The value of add is : " + add;
console.log(output);
document.getElementById('display').innerHTML = output;


// Conditional operators < , > , <= , >= , !=
var age = 15;
if(age >= 18){
    output = "You are Major";
}
else{
    output = "You are Minor";
}
console.log(output);
document.getElementById('display').innerHTML = output;


// Unary Operator ++ , -- (pre , post)
var b = 10;
b = b + 1; // 11
b += 1; // 12
b++; // 13
output = "The value of b is : " + b;
console.log(output);
document.getElementById('display').innerHTML = output;

// Logical operators AND , OR
var inRelation = true;
var parentsAgreed = false;
output = "";
if( inRelation && parentsAgreed){
    output = "Get Marry Soon";
}
else{
    output = "Wait until the parents Agreed!!";
}
console.log(output);
document.getElementById('display').innerHTML = output;

// String Concatenation Operator (+)

var abc = "10" + 20 + "30" + 10 + 10; //1020301010
output = "The abc value is  : " + abc;
console.log(output);
document.getElementById('display').innerHTML = output;

// Ternary operator (? :)
age = 10;
output = "";
(age >= 18)? output = "You are Major" : output = "You are Minor";
console.log(output);
document.getElementById('display').innerHTML = output;

// Type of operator is used to check the type of a value.
var xyz;// undefined

xyz = 10;

xyz = "Test";

xyz = true;

xyz = null;

output = "Value of xyz : " + xyz + " Type of xyz is : " + typeof xyz;
console.log(output);
document.getElementById('display').innerHTML = output;

// == operator

// === operator