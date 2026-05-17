let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  let input = document.getElementById("input");
  let text = input.value.trim();

  if (!text) return;

  tasks.push({
    id: Date.now(),
    text,
    completed: false,
  });

  input.value = "";
  save();
  render();
}

function toggleTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task,
  );
  save();
  render();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  save();
  render();
}

function editTask(id) {
  let newText = prompt("Edit task:");
  if (!newText) return;

  tasks = tasks.map((task) =>
    task.id === id ? { ...task, text: newText } : task,
  );

  save();
  render();
}

function setFilter(type) {
  filter = type;
  render();
}

function getFilteredTasks() {
  if (filter === "active") return tasks.filter((t) => !t.completed);
  if (filter === "completed") return tasks.filter((t) => t.completed);
  return tasks;
}

function render() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  getFilteredTasks().forEach((task) => {
    let li = document.createElement("li");

    if (task.completed) li.classList.add("done");

    li.innerHTML = `
      <span onclick="toggleTask(${task.id})">${task.text}</span>

      <div class="actions">
        <button onclick="editTask(${task.id})">Edit</button>
        <button onclick="deleteTask(${task.id})">X</button>
      </div>
    `;

    list.appendChild(li);
  });
}

render();
