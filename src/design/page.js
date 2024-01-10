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

  const tasksContaier = document.createElement("div");
  tasksContaier.id = "tasksContainer";

  const newTaskButton = document.createElement("button");
  newTaskButton.id = "new-task-button";
  newTaskButton.textContent = "Add new task";

  container.appendChild(title);
  container.appendChild(tasksContaier);
  container.appendChild(newTaskButton);

  return container;
}

function appendTaskToList(task, listContainer) {
  const tasksContainer = listContainer.querySelector("#tasksContainer");

  const newTask = document.createElement("div");
  newTask.className = "task";

  const taskTitle = document.createElement("div");
  taskTitle.className = "title";
  taskTitle.textContent = task.title;

  const taskDescription = document.createElement("div");
  taskDescription.className = "description";
  taskDescription.textContent = task.description;

  const taskDate = document.createElement("div");
  taskDate.className = "date";
  taskDate.textContent = task.date;

  newTask.appendChild(taskTitle);
  newTask.appendChild(taskDescription);
  newTask.appendChild(taskDate);

  tasksContainer.appendChild(newTask);
}

function addNewTaskEvent(listContent) {
  const newTaskButton = listContent.querySelector("#new-task-button");

  newTaskButton.addEventListener("click", () => {
    appendTaskToList(createTask(), listContent);
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
