//Shows time on all pages
var time = document.body.querySelector(".time");

//Appends the time to the clock
time.append(moment().format("MMMM Do YYYY, h:mm a"));