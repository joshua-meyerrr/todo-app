const menuButton = document.querySelector(".burger-menu");
const task = "Do your laundry bro";
menuButton.onclick = createTaskListItem;

const taskList = document.querySelector(".taskList__taskItem");
const taskOne = createTaskListItem("Do your Laundry");
const taskTwo = createTaskListItem("Learn Js");

taskList.append(taskOne, taskTwo);

function createTaskListItem(taskName) {
  console.log(taskList);

  const taskListItem = document.createElement("label");
  taskListItem.className = "taskItem__label";

  const taskItemInput = document.createElement("input");
  taskItemInput.className = "taskItem__checkbox";
  taskItemInput.setAttribute("type", "checkbox");

  const taskItemText = document.createElement("span");
  taskItemText.className = "taskItem__text";
  taskItemText.innerText = taskName;

  taskListItem.append(taskItemInput, taskItemText);

  return taskListItem;
}

// Why do i have to define the taskList inside the function?

// function createTaskListItemAlt() {
//   const taskList = document.querySelector(".taskList__taskItem");
//   const taskItem = document.createElement("label");

//   taskItem.className = "taskItem__label";
//   taskItem.innerHTML = `<input class='taskItem__checkbox' type='checkbox' name='taskItem' /><span class='taskItem__text'>${task}</span>`;

//   taskList.append(taskItem);
// }
