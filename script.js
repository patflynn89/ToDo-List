const submitField = document.getElementById("taskToDo");
//let taskBox = document.getElementById("task").value;
//let taskBox = document.getElementsByTagName("input");
let taskBox = document.querySelector('input')[0];
const listItemsCSS = document.getElementById("list");
//let input = document.getElementById("task").value;
taskBox.addEventListener("input", checkVal);
/**
function taskButton() {
  if (taskBox && taskBox.value) {
    //alert(taskBox);
    listItemsCSS.style.display = "";
 
  }
 
}
 */

submitField.addEventListener("click", input); //{
  //e.preventDefault();
  //checkVal(taskBox);
  //alert("Yeah mann funktionier! " + taskBox);
//});

function checkVal(input) {
  input.preventDefault();
  alert("Dere: " + input.target.value);
}