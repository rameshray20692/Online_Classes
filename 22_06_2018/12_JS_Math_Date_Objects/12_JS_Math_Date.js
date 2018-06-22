/*
       Math Object Examples

    */

// Math PI and Sqrt
var piValue = Math.PI;
console.log("PiValue is :  " + piValue);

var sqrt = Math.sqrt(256);
console.log("sqrt of 256 is : " + sqrt);

// find the min of 4 numbers
var min = Math.min(10,45,897,78,56,74,12);
console.log("The Min value is : " + min);

// find the Max of 4 numbers
var max = Math.max(10,45,897,78,56,74,12);
console.log("The Max value is : " + max);

// find the 'x' to the power of 'y' value, ex: 2^4
var power = Math.pow(2,4);
console.log("2 ^ 4 is : " + power);

// generate the random numbers from 0 to 100000
var random = Math.round(Math.random() * 100000);
console.log(random);
document.getElementById('display').innerHTML = "Random : " + random;

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/*
    Date Object Examples

 */

// get today's date
var today = new Date();
console.log(today);

// get a normal date
var date = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
console.log(date);

// get full day of the week using switch statement
var day = today.getDay();
console.log(day);
var fullDay = "Today is : ";
switch(day){
    case 0:
        fullDay += 'Sunday';
        break;
    case 1:
        fullDay += 'Monday';
        break;
    case 2:
        fullDay += 'Tuesday';
        break;
    case 3:
        fullDay += 'Wednesday';
        break;
    case 4:
        fullDay += 'Thursday';
        break;
    case 5:
        fullDay += 'Friday';
        break;
    case 6:
        fullDay += 'Saturday';
        break;
    default:
        fullDay += 'No Value';
        break;
}
console.log(fullDay);

// Display a Digital Clock on the web page
function indianClock() {
    var today = new Date();
    var options = {timeZone : "Asia/Kolkata"};
    var time = today.toLocaleTimeString('en-US',options);
    document.getElementById('display').innerHTML = "Indian Time : " + time;
}
setInterval(indianClock,1000);

function usClock() {
    var day = new Date();
    var options = {timeZone : "America/New_York"};
    var time = day.toLocaleTimeString('en-US',options);
    document.getElementById('clock').innerHTML = "US Time : " + time;
}
setInterval(usClock,1000);








/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/
