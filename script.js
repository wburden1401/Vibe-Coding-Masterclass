document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", () => taskList.removeChild(li));
    taskList.appendChild(li);
    taskInput.value = "";
    taskInput.focus();
  }

  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });
});
