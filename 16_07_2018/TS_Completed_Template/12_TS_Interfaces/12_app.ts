// Create a Student Interface , and printStudent function
interface Student{
    sName :string,
    age:number,
    course : string,
    address : {
        city : string,
        state : string,
        country : string
    }
}

function printStudent(student:Student):void{
    console.log(`Name : ${student.sName} 
                 Age : ${student.age}
                 course : ${student.course}
                 city : ${student.address.city}
                 state : ${student.address.state}
                 country : ${student.address.country}`);
}

let student1:Student = {
    sName :'Rajan',
    age:23,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'Telangana',
        country : 'India'
    }
};

printStudent(student1);