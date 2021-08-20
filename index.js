const taskList = document.querySelector(".taskItem");

const tasks = [
  {
    title: "Get groceries",
    date: "Tomorrow",
    isDone: true,
  },
  {
    title: "Get groceries",
    date: "Tomorrow",
    isDone: false,
  },
  {
    title: "Get groceries fshdkfk flskdhf hfsdfh",
    date: "Tomorrow",
    isDone: true,
  },
];

const taskItems = tasks.map((task) => createTaskListItem(task));

console.log(taskItems);

taskList.append(...taskItems);

function createTaskListItem(taskObject) {
  const taskListItem = document.createElement("label");
  taskListItem.className = "taskItem__label";

  const taskItemInput = document.createElement("input");
  taskItemInput.className = "taskItem__checkbox";
  taskItemInput.setAttribute("type", "checkbox");
  taskItemInput.checked = taskObject.isDone;

  const taskItemText = document.createElement("span");
  taskItemText.className = "taskItem__text";
  taskItemText.innerText = taskObject.title;

  taskListItem.append(taskItemInput, taskItemText);

  return taskListItem;
}
