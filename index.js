const menuButton = document.querySelector(".burger-menu");
const task = "Do your laundry bro";
menuButton.onclick = createTaskListItem;

const taskList = document.querySelector(".taskList__taskItem");

const potentialTask = {
  title: "Get groceries",
  date: "Tomorrow",
  isDone: true,
};

const taskFromObject = createTaskListItem(potentialTask);

taskList.append(taskFromObject);

function createTaskListItem(taskName) {
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
