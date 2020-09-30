var NOW = parseInt(moment().format("HH"));
var today = moment().format("dddd") + ", " + moment().format("MMMM Do");

var task = JSON.parse(localStorage.getItem("task")) || {};

var times = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

$("#currentDay").append(today);

for (let index = 0; index < times.length; index++) {
  if (NOW > parseInt(times[index])) {
    $(`#${times[index]}`).removeClass("present future");
  } else if (NOW < parseInt(times[index])) {
    $(".description").removeClass("present past");
  } else {
    $(".description").removeClass("past future");
  }
}

$(".saveBtn").click(function () {
  var userInput = $(this).prev().children("textarea").val();
  var timeID = $(this).prev().attr("id");
  task[timeID] = userInput;
  localStorage.setItem("task", JSON.stringify(task));
});

for (const property in task) {
  $(`#${property}`).children("textarea").val(task[property]);
}
