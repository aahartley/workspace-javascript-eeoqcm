
/* Send a customized message based on time
*/
console.log("im in hello.js");

//get the date and time
var today= new Date();
var hoursNow = today.getHours();

//display the greeting message
var greeting = "";
if(hoursNow <= 12){
  greeting= "Good Morning";
}else{
  greeting="Good Afternoon";
}

//write to the document
document.write(greeting);