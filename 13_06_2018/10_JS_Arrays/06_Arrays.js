// creation of arrays
var array = [10,20,30,40,50];

// Accessing an array and its properties
console.log(array);
console.log("Array Prop is : " + array[2]);

// Access not existed property from an array
console.log("The Array Element array[100] is  : " + array[100]);

// adding properties to an array
array[5] = 60;
console.log(array);

// Accessing length of an Array
console.log("The length of an array is : " + array.length);

// reverse the array using reverse()
array = [10,20,30,40,50];
document.getElementById('display1').innerHTML = array.join(' , ');
array.reverse();
document.getElementById('display2').innerHTML = array.join(' , ');

// Remove the first element of the array: shift()
array = [10,20,30,40,50];
document.getElementById('display1').innerHTML = array.join(' , ');
array.shift();
document.getElementById('display2').innerHTML = array.join(' , ');

// Add value to front of the array:unshift()
array = [10,20,30,40,50];
document.getElementById('display1').innerHTML = array.join(' , ');
array.unshift(60);
document.getElementById('display2').innerHTML = array.join(' , ');

// Remove the last value of the array: pop()
array = [10,20,30,40,50];
document.getElementById('display1').innerHTML = "Before : " + array.join(' , ');
array.pop();
document.getElementById('display2').innerHTML = "After : " + array.join(' , ');

// Add value the end of the array: push()
array = [10,20,30,40,50];
document.getElementById('display1').innerHTML = "Before : " + array.join(' , ');
array.push(60,70);
document.getElementById('display2').innerHTML = "After : " + array.join(' , ');

// Remove an element from an Array , Arguments: colors.splice(index,n):
array = [10,20,30,40,50];
document.getElementById('display1').innerHTML = "Before : " + array.join(' , ');
array.splice(0,1);
document.getElementById('display2').innerHTML = "After : " + array.join(' , ');

// Create a copy of an array. Typically assigned to a new variable:slice();
var array1 = [10,20,30,40,50];
var array2 = array1.slice();
if(array1 === array2){
    console.log("Both are Equal");
}
else{
    console.log("Both are NOT Equal");
}


// Return the first element that matches the search parameter
// after the specified index position. Defaults to index position 0. Arguments: colors.indexOf(search, index):
// var result = colors.indexOf(search, index);
// console.log("The search result index is: ", result);
array = [10,20,30,40,50];
document.getElementById('display1').innerHTML = "Index : " + array.indexOf(500);
var n = 200;
if(array.indexOf(n) === -1){
    console.log("the value " + n + " is not exists");
}
else{
    console.log("the value " + n + " is exists at index " + array.indexOf(n));
}


// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: colors.join(separator):
// var arrayString = colors.join(separator);
// console.log("String from array: ", arrayString);
array = [10,20,30,40,50,60];
document.getElementById('display1').innerHTML = array.join(' * ');

// Prove an array is an Object
array = [10,20,30,40,50,60];
console.log(array);
console.log(array["3"]); // 40
array["60"] = 70;
console.log(array);
array.name = 'John';
console.log(array);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
