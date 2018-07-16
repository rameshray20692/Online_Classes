/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/


/*
Create en Employee Object and prepares a Template String using
String Concatenation and Template String.
 */

let employee = {
    empName : 'John',
    empAge : 40,
    empDesg : 'Manage'
};

let strContact:string = "<div style='background-color: purple'>" +
                    "<h2> Name : " + employee.empName +"</h2>" +
                    "<h2> Age : " + employee.empAge +"</h2>" +
                    "<h2> Desg : " + employee.empDesg +"</h2>" +
                 "</div>";

document.querySelector('#container').innerHTML = strContact;

let tempStr:string = `<div style="background-color: red">
                    <h2>Name : ${employee.empName}</h2>
                    <h2>Age : ${employee.empAge}</h2>
                    <h2>Desg : ${employee.empDesg}</h2>
                    </div>`;
document.querySelector('#container').innerHTML = tempStr;