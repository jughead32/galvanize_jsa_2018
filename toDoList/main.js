var tasks = [];
var taskInput = document.getElementById("task");
var toDoList = document.getElementById("display");

// Write a function called addToList that adds a to do item to a to do list

function addToList() {
  tasks.push( taskInput.value );

  clearAndShow();
}

function markComplete() {

  clearAndShow();
}

function clearAndShow() {
  // Clear our input field
  taskInput.value = "";

  // Show our to do list
  toDoList.innerHTML = "";

  toDoList.innerHTML += "To do today: " + tasks.join(", ") + "<br/>";
}
