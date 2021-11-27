const submitField = document.getElementById("taskToDo");
const taskBox = document.getElementById("task");
const listItemsCSS = document.getElementById("list");
let input = document.getElementById("task").value;
/**
function taskButton() {
  if (taskBox && taskBox.value) {
    //alert(taskBox);
    listItemsCSS.style.display = "";
 
  }
 
}
 */

submitField.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Yeah mann funktionier!" + e.input);
});