const submitField = document.getElementById("taskToDo");
const listItemsCSS = document.getElementById("list");

/* document.addEventListener('submit', function (e) {
  e.preventDefault();
  const newTask = document.querySelector(".task");

}) */

submitField.addEventListener("click", function (e) {
  e.preventDefault();
  const taskBox = document.getElementById("taskForm").elements["task"].value;
  const node = document.createElement("li");
  const textNode = document.createTextNode(taskBox);
  //alert("Yeah mann funktionier! " + taskBox);
  node.appendChild(textNode);
  listItemsCSS.appendChild(node);
  clearBox();
});

function clearBox() {
  document.getElementById("taskForm").elements["task"].value = "";
}