const submitButton = document.getElementById("taskToDo");
const taskBox = document.getElementById("task");
const listItemsCSS = document.getElementById("list");

function taskButton() {
  if (taskBox && taskBox.value) {
    //alert(taskBox);
    listItemsCSS.style.display = "";

  }

}

taskToDo.addEventListener("click", taskButton);