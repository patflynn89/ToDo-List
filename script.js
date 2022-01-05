const submitField = document.getElementById("taskToDo");
const fields = document.getElementById("fields");

/* document.addEventListener('submit', function (e) {
  e.preventDefault();
  const newTask = document.querySelector(".task");

}) */

submitField.addEventListener("click", function (e) {
  e.preventDefault();
  const taskBox = document.getElementById("task_wrapper").elements["task"].value;
  const div = document.createElement("div");
  const node = document.createElement("label");
  const textNode = document.createTextNode(taskBox);
  const editButton = document.createElement("button");
  const saveButton = document.createElement("button");
  editButton.id = "buttonBox";
  node.setAttribute("type", "text");
  node.setAttribute("value", taskBox);
  node.setAttribute("id", "taskToDo");
  div.id = "boxes";
  editButton.innerHTML = "Edit";
  saveButton.innerHTML = "Save";
  //alert("Yeah mann funktionier! " + taskBox);
  node.appendChild(textNode);
  div.appendChild(node);
  div.appendChild(editButton);
  div.appendChild(saveButton);
  fields.appendChild(div);
  clearBox();
});

function clearBox() {
  document.getElementById("taskForm").elements["task"].value = "";
}