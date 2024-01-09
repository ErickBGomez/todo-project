import createTask from "../tasks";

function createBackground() {
  const background = document.createElement("div");
  background.id = "list-background";

  return background;
}

function createListContent() {
  const container = document.createElement("div");
  container.className = "list-container";

  const title = document.createElement("h1");
  title.id = "list-title";
  title.textContent = "List Title";

  const tasks = document.createElement("div");
  tasks.id = "tasks";

  const newTaskButton = document.createElement("button");
  newTaskButton.id = "new-task-button";
  newTaskButton.textContent = "Add new task";

  container.appendChild(title);
  container.appendChild(tasks);
  container.appendChild(newTaskButton);

  return container;
}

function createTaskElement(task, listContainer) {
  const tasks = listContainer.querySelector("#tasks");

  const newTask = document.createElement("div");
  newTask.className = "task-container";

  const taskTitle = document.createElement("div");
  taskTitle.className = "task-title";
  taskTitle.textContent = task.title;

  const taskDescription = document.createElement("div");
  taskDescription.className = "task-description";
  taskDescription.textContent = task.description;

  const taskDate = document.createElement("div");
  taskDate.className = "task-date";
  taskDate.textContent = task.date;

  newTask.appendChild(taskTitle);
  newTask.appendChild(taskDescription);
  newTask.appendChild(taskDate);

  tasks.appendChild(newTask);
}

function addNewTaskEvent(listContent) {
  const newTaskButton = listContent.querySelector("#new-task-button");

  newTaskButton.addEventListener("click", () => {
    createTaskElement(createTask(), listContent);
  });
}

export default function renderPage() {
  const listContent = document.createElement("div");
  listContent.id = "list-page";

  listContent.appendChild(createBackground());
  listContent.appendChild(createListContent());

  addNewTaskEvent(listContent);

  document.body.appendChild(listContent);
}
