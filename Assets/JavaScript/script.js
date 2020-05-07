//get current date and hour
var currentDay = $("#currentDay");
var currentHour = moment().hour();

//display date
currentDay.text(moment().format("dddd, MMMM Do YYYY"));

var saveButtons = $(".btn.saveBtn");

//previously saved tasks are rendered on the page
var tasks = {};
var storedTasks = JSON.parse(localStorage.getItem("tasks"));

if (storedTasks){
  tasks = storedTasks;
}

saveButtons.each(function(){
  var clickedHour = $(this).data("hour");
  var taskInput = $("#task-" + clickedHour);
  taskInput.val( tasks["task" + clickedHour]);
});

//tasks are retrieved by user and saved
saveButtons.on("click", function(){
  
  var clickedHour = $(this).data("hour");

  var taskInput = $("#task-" + clickedHour);
  var taskValue = taskInput.val();

  tasks[ "task" + clickedHour] = taskValue;

  localStorage.setItem("tasks", JSON.stringify(tasks));
});

//colors set on time blocks based on the current hour
$(".input").each(function(){
  var hour = $(this).attr("name");

  if (hour == currentHour){
    $(this).addClass("present");
  }
  else if (hour < currentHour){
    $(this).addClass("past");
  }
  else{
    $(this).addClass("future");
    console.log("future");
  }

});
