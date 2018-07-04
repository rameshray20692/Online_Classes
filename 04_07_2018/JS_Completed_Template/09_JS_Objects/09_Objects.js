//creation of objects
var obj = {};

//Adding properties to objects
obj.name = 'John';
obj.age = 35;
obj.desg = 'Manager';

//Retrieving properties of objects
console.log(obj);

//declaring Object Literals
var employee = {
    name : 'Williams',
    age : 40,
    designation : 'Sales Manager'
};

console.log(employee);

//Access existing properties
var emp_name = employee.name;
console.log(emp_name);

//Access Non Existing Properties
var emp_salary = employee.salary;
console.log(emp_salary);

// Usage of Dot and [] notations
var emp_desg = employee['designation'];
console.log(emp_desg);

// use of [] notation where dot is not used for invalid identifiers
var student = {
    name : 'Rajan',
    age : 25,
    100 : 'Test'
};

var student_prop = student[100];
console.log(student_prop);

// use of [] notation for accessing dynamic properties
var dyna_prop = "name";
console.log(student[dyna_prop]);

// nested Objects creation
var student1 = {
    name : 'Naren',
    age : 25,
    course : 'Engg',
    address : {
        city : 'Hyderabad',
        state : 'Telanagana',
        country : 'India'
    }
};

//Accessing them using dot notation
var stu_city = student1.address.city;
console.log(stu_city);

//Accessing them using mix of dot and [] notation
var stu_state = student1.address['state'];
console.log(stu_state);

// Add some properties to nested object and access them
console.log(student1);
student1.address.street = 'Hitech City';
console.log(student1);

// === operator demo for objects (if pointing to same location in memory)
var emp1 = {
    name : 'John',
    age : 35,
    desg : 'Manager'
};

var emp2 = emp1;

if(emp1 === emp2){
    console.log("Both are Equal");
}
else{
    console.log("Both are NOT Equal");
}

// deleting a property from an object
console.log(student1);
delete  student1.address.street;
delete student1.address;
console.log(student1);

