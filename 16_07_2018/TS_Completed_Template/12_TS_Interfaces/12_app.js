function printStudent(student) {
    console.log("Name : " + student.sName + " \n                 Age : " + student.age + "\n                 course : " + student.course + "\n                 city : " + student.address.city + "\n                 state : " + student.address.state + "\n                 country : " + student.address.country);
}
var student1 = {
    sName: 'Rajan',
    age: 23,
    course: 'Engineering',
    address: {
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India'
    }
};
printStudent(student1);
