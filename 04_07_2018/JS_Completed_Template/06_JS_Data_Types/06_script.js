// number example
var a = 10;
var output;
output = 'The type of a is : ' + typeof a + ' The value is ' + a;
console.log(output);
document.getElementById('display').innerHTML = output;

// String Examples
var Name = 'Test';
output = 'Name : ' + Name + ' Data Type : ' + typeof Name;
console.log(output);
document.getElementById('display').innerHTML = output;

// boolean Examples
var isJSEasy = true;
output = 'isJSEasy : ' + isJSEasy  + ' Data Type : ' + typeof isJSEasy;
console.log(output);
document.getElementById('display').innerHTML = output;

// reassignment example of variables
var b;
console.log('The b value is ' + b);
b = 10;
console.log('The b value is ' + b);
b = "Test";
console.log('The b value is ' + b);
b = true;
console.log('The b value is ' + b);
b = null;
console.log('The b value is ' + b);

