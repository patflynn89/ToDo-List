const submitField = document.getElementById("taskToDo");
const listItemsCSS = document.getElementById("list");

submitField.addEventListener("click", function (e) {
  e.preventDefault();
  const taskBox = document.forms[0].task.value;
  const node = document.createElement("li");
  const textNode = document.createTextNode(taskBox);
  //alert("Yeah mann funktionier! " + taskBox);
  node.appendChild(textNode);
  listItemsCSS.appendChild(node);
  clearBox();
});

function clearBox() {
  document.forms[0].task.value = "";
}