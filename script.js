const submitField = document.getElementById("taskToDo");
const taskBox = document.getElementById("task");
const listItemsCSS = document.getElementById("list");
//let input = document.getElementById("task").value;
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
  //checkVal(taskBox);
  alert("Yeah mann funktionier! " + taskBox[e.target.value]);
});

function checkVal(input) {
  alert("Dere: " + input["task"].value);
}