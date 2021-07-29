// alt button

const altBtnEl = document.querySelector(".addTaskBtn--alternative");

altBtnEl.onclick = alertSelectedDate;

function alertSelectedDate() {
  const checkedInput = document.querySelector(".radio__input:checked");

  console.log(checkedInput.value);
}

// submit button
const submitBtnEl = document.querySelector(".add-task-btn");

const formEl = document.querySelector(".task-form");
