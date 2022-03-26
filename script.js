// Function that displays current time to top of page
function displayTime() {
   $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}
setInterval(displayTime, 1000);

// Display Current Time on the Page
var currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(currentDay);

// Grabbing the input values from User
let dataEntry = $(".col-10 border");

// Loop through all the elements
//for(let i = 0; i < dataEntry.length; i++) {}

// Display colors based on time of activities 
function timeColorDisplay() {
  // Gather all the elements that contain data-hour attribute
  let timeValues = ($("data-hour"));
  console.log(timeValues);

  if (timeValues < currentDay) {
    time.addClass("past");
} else if (timeValues > currentDay) {
    time.addClass("future");
} else {
    time.addClass("present");
}}

// Creating an object to hold the value of events
let dataValues = {
  h9: $("#h9").val(),
  h10: $("#h10").val(),
  h11: $("#h11").val(),
  h12: $("#h12").val(),
  h13: $("#h13").val(),
  h14: $("#h14").val(),
  h15: $("#h15").val(),
  h16: $("#h16").val(),
  h17: $("#h17").val()
}

// Creating a function to set the local data
function saveData() {
  localStorage.setItem("dataValues", JSON.stringify(dataValues));
}

// Turns local data into an object
let storedData = JSON.parse(localStorage.getItem("dataValues"));
console.log(storedData);

// The save button save the contents of the page
$("saveButton").on("click", saveData);

//function timeColorDisplay() {
  // var hourTime = parseInt.attr("id");
    //if (hourTime < currentTime) {
      //  hourTime.addClass("past");
    //} else if ( hourTime > currentTime) {
      //  hourTime.addClass("future");
    //} else {
      // hourTime.addClass("present");
    //}        
//}
