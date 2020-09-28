//need help w responsiveness?

//NOW YOU ONLY NEED THE HOUR! :D
var NOW = parseInt(moment().format("HH"));

var today = moment().format("dddd") + ", " + moment().format("MMMM Do");

//will parse whatever's passed, and if there's nothing, then it will be blank, hence the empty {}
var task = JSON.parse(localStorage.getItem("task")) || {};

console.log(today);
console.log(NOW);

$("#currentDay").append(today);

//if the current time is within the same hour, else
var times = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
for (let index = 0; index < times.length; index++) {
  if (NOW > parseInt(times[index])) {
    //template literals-- look this up-- backticks indicate that it's a template literal, and then use the ${} to indicate that this will be JS
    $(`#${times[index]}`).removeClass("present future");
  } else if (NOW < parseInt(times[index])) {
    $(".description").removeClass("present past");
  } else {
    $(".description").removeClass("past future");
  }
}

//need an event handler, so using this onclick event
$(".saveBtn").click(function () {
  //selects the previous element, the column with the description
  //selecting just takes the tag name; don't need <> unless you're creating an element
  //the empty parentheses at .val() takes whatever was passed through the textarea
  var userInput = $(this).prev().children("textarea").val();
  //attr gets or sets value
  var timeID = $(this).prev().attr("id");
  //[] references key in an object; adds the key to the object and matches up with the value SO when we get something from local storage, we can update the text area and value dynamically/responsively
  task[timeID] = userInput;
  //1st parameter is the key, then the value of what we're setting it to-- which is the variable!!
  localStorage.setItem("task", JSON.stringify(task));
});
//need a way to retain this on the page, and not just in local storage

//a for-in loop; one way to iterate over an object
//property = the key in the task object; iterated over them
//uses template literals
//"property" is like the iterater in the "for-in" loop, like "index" is the iterater in the regular "for" loop
//maybe put this in a function and call it?
for (const property in task) {
  $(`#${property}`).children("textarea").val(task[property]);
}
