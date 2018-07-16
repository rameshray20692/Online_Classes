/*
-----------------------------------------------------------------------------------------
   Variable Declarations in TypeScript and Usage
-----------------------------------------------------------------------------------------
 */

/*

    Boolean DataType

The most basic data type is the simple true/false value,
which JavaScript and TypeScript call a boolean value.

*/



/*

    Number DataType

    As in JavaScript all the numbers in TypeScript are also Floating point numbers.
    In addition to hexadecimal and decimal literals, TypeScript also
    supports binary and octal literals introduced in ECMAScript 2015.
    decimal, hex = 0x , binary = 0b , octal = 0o.
*/



/*
String Data type

 This is one of the commonly used datatype for textual data of any length,
 we may use with "" or ''
 */


// You can also use template strings, which can span multiple lines and have embedded expressions.



/*
    Array DataType

    An array is an indexed collection of values
    we can define multiple values with single variable name array
    we can use them like number[] or Array<number>
 */


/*

  Enum DataType

   enums are used to define a collection of constant values
    enums values once declared ,  they cannot be modified
 */


/*
    Any DataType

    This datatype accepts any types of data as a value to variables
 */


/*
    Void Data Type
    This is quite opposite to any datatype
    this may commonly used with function where no return types
 */

// Boolean , number, string , any , Array , Enum , void

// Boolean Data type
let isTSEasy:boolean = true;
console.log(`isTSEasy : ${isTSEasy}`);

// number data type
let age:number = 40;
console.log(`age : ${age}`);

// String data type
let greeting : string = "Good Morning";
console.log(`Greeting : ${greeting}`);

// Any data types
let anyVar:any = 'Test';
console.log(`anyVar : ${anyVar}`);

// Array data type
let arr1:Array<any> = ['HTML','CSS','JavaScript','Bootstrap',10];
console.log(`arr1 : ${arr1}`);

// Enum data type
enum Month {
    JANUARY = 'JAN',
    FEBRUARY = 'FEB'
}
console.log(`Month : ${Month.JANUARY}`);

// void data type
function greet():void{
   console.log(`Good Morning`);
}
greet();













