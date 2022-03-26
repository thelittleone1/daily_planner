// Function that displays current time to top of page
function displayTime() {
   $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
   for(let box in dataValues){
    timeColorDisplay(dataValues[box])
  }
}
setInterval(displayTime, 3000);

// Display Current Time on the Page
var currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(currentDay);

// Grabbing the input values from User
let dataEntry = $(".col-10 border");

// Display colors based on time of activities 
function timeColorDisplay(time) {
  // Gather all the elements that contain data-hour attribute
  let timeValues = Number(time.attr('data-hour')) - currentDay.hour();

  if (timeValues < 0) {
    time.addClass("past");
} else if (timeValues > 0) {
    time.addClass("future");
} else {
    time.addClass("present");
}}

// Creating an object to hold the value of events
let dataValues = {
  h9: $("#h9"),
  h10: $("#h10"),
  h11: $("#h11"),
  h12: $("#h12"),
  h13: $("#h13"),
  h14: $("#h14"),
  h15: $("#h15"),
  h16: $("#h16"),
  h17: $("#h17")
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
timeColorDisplay();

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
