// If Else condition Example
var courseCompleted = false;
var practiceCompleted = false;
var output = "";
if(courseCompleted && practiceCompleted){
    output = "You will get a job Soon ";
}
else if(courseCompleted && !practiceCompleted){
    output = "Keep Practicing";
}
else{
    output = "Join any course";
}
console.log(output);


// For loop Example to display from 1 - 10 values
output = "";
for(var i = 1; i <= 10; i++){
   if(i <= 9){
       output += i + " , ";
   }
   else{
       output += i;
   }
}
console.log(output);

// While loop Example to display from 1 - 10 values
var i = 1;
output = "";
while(i <= 10){
   if(i <= 9){
       output += i + " - ";
       i++;
   }
   else{
       output += i;
       i++;
   }
}
console.log(output);


// Do while loop Example to display from 1 - 10 values
var i = 1;
output = "";
do{
    if(i <= 9){
        output += i + " / ";
        i++;
    }
    else{
        output += i;
        i++;
    }
}
while(i <= 10);
console.log(output);

// Switch Statement Example to display full Day
var today = new Date().getDay();
console.log(today);
output = "";
switch(today){
    case 0:
        output += "Sunday";
        break;
    case 1:
        output += "Monday";
        break;
    case 2:
        output += "Tuesday";
        break;
    case 3:
        output += "Wednesday";
        break;
    case 4:
        output += "Thursday";
        break;
    case 5:
        output += "Friday";
        break;
    case 6:
        output += "Saturday";
        break;
    default:
        output += "No Day";
        break;
}
console.log("Today is " + output);