//need help w responsiveness?

var saveBtn = $("#saveBtn");
var textarea = $("textarea");
var description = $(".description");

//NOW YOU ONLY NEED THE HOUR! :D
var NOW = moment().format("HH");
var today = moment().format("dddd") + ", " + moment().format("MMMM Do");

console.log(today);
console.log(NOW);

$("#currentDay").append(today);

//if the current time is within the same hour, else

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
