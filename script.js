//need help w responsiveness?

var saveBtn = $("#saveBtn");
var textarea = $("textarea");
var description = $(".description");

//NOW YOU ONLY NEED THE HOUR! :D
var NOW = moment().format("HH");

console.log(NOW);

//if the current time is within the same hour, else
//can the time be stringified and put in an array for easier comparison? Like, comparing the xth in the array

//need to either turn the string into a value or...? Need to add a function bc it's comparing every hour, something that iterates through and checks

if (NOW === "11:00") {
  console.log("it's that v specific time");
} else {
  console.log("it's not that time rn");
}

//to make past time
$(".description").removeClass("present future");

//to make present time
$(".description").removeClass("past future");

//to make future time
$(".description").removeClass("present past");

//need an event handler, so using this onclick event
$(saveBtn).click(function () {});
