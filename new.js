const altBtnEl = document.querySelector(".addTaskBtn--alternative");

altBtnEl.onclick = alertSelectedDate;

function alertSelectedDate() {
  const checkedInput = document.querySelector(".radio__input:checked");

  console.log(checkedInput.value);
}

// submit button
const submitBtnEl = document.querySelector(".add-task-btn");

const formEl = document.querySelector(".task-form");

formEl.onsubmit = function (event) {
  // Prevent the default functionality of the submit event, which is reloading the page
  event.preventDefault();

  const newTask = { title: "", date: "", isDone: false };

  const checkedDateInput = document.querySelector(".radio__input:checked");
  const textInput = document.querySelector(".task-form__textInput");

  newTask.title = textInput.value;
  newTask.date = checkedDateInput.value;

  // template literals
  console.log(
    `Hi you entered "${newTask.date}" as date and "${newTask.title}" as description`
  );
  console.log(newTask);
};
