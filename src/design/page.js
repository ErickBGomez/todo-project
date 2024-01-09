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

export default function renderPage() {
  const listContent = document.createElement("div");
  listContent.id = "list-page";

  listContent.appendChild(createBackground());
  listContent.appendChild(createListContent());

  document.body.appendChild(listContent);
}
