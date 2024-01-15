// Icons
import taskDescriptionSvg from "../img/svg/task-description.svg";
import taskDateSvg from "../img/svg/task-date.svg";
import taskPriorityLowSvg from "../img/svg/task-priority-low.svg";
import taskPriorityMediumSvg from "../img/svg/task-priority-medium.svg";
import taskPriorityHighSvg from "../img/svg/task-priority-high.svg";
import { addNewTask, currentList } from "../lists-and-tasks";

let listPage;

function createBackground() {
  const background = document.createElement("div");
  background.id = "list-background";

  return background;
}

function createListContainer() {
  const container = document.createElement("div");
  container.className = "list-container hide";

  const title = document.createElement("h1");
  title.id = "list-title";
  title.textContent = "List Title";

  const tasksContaier = document.createElement("div");
  tasksContaier.id = "task-container";

  const newTaskButton = document.createElement("button");
  newTaskButton.id = "new-task-button";
  newTaskButton.textContent = "Add new task";

  container.appendChild(title);
  container.appendChild(tasksContaier);
  container.appendChild(newTaskButton);

  return container;
}

function emptyPage() {
  const container = document.createElement("div");
  container.className = "empty-page";

  const emptyTitle = document.createElement("p");
  emptyTitle.className = "empty-title";
  emptyTitle.textContent = "To-Do app";

  const emptySubtitle = document.createElement("p");
  emptySubtitle.className = "empty-subtitle";
  emptySubtitle.textContent =
    "Select a list to start adding your tasks or create a new list by clicking the + button";

  container.appendChild(emptyTitle);
  container.appendChild(emptySubtitle);

  return container;
}

function createNewTaskElement(task) {
  const newTaskElement = document.createElement("div");
  newTaskElement.className = "task";

  const completeTaskButton = document.createElement("button");
  completeTaskButton.className = "complete-task-button";

  const taskInformation = document.createElement("div");
  taskInformation.className = "task-information";

  const mainInformation = document.createElement("div");
  mainInformation.className = "main-information";

  const taskTitle = document.createElement("div");
  taskTitle.className = "title";
  taskTitle.textContent = task.title;

  const taskDescription = document.createElement("div");
  taskDescription.className = "description";
  taskDescription.textContent = task.description;

  mainInformation.appendChild(taskTitle);
  mainInformation.appendChild(taskDescription);

  const subInformation = document.createElement("div");
  subInformation.className = "sub-information";

  const priorityContainer = document.createElement("div");
  priorityContainer.className = "priority-container";

  const priorityIcon = new Image();

  const taskPriority = document.createElement("div");
  taskPriority.className = "priority";

  switch (task.priority) {
    case 1: // Low
      priorityIcon.src = taskPriorityLowSvg;
      taskPriority.classList.add("low");
      taskPriority.textContent = "Low";
      break;

    case 2: // Medium
      priorityIcon.src = taskPriorityMediumSvg;
      taskPriority.classList.add("medium");
      taskPriority.textContent = "Medium";
      break;

    case 3: // High
      priorityIcon.src = taskPriorityHighSvg;
      taskPriority.classList.add("high");
      taskPriority.textContent = "High";
      break;
  }

  priorityContainer.appendChild(priorityIcon);
  priorityContainer.appendChild(taskPriority);

  const dateContainer = document.createElement("div");
  dateContainer.className = "date-container";

  const dateIcon = new Image();
  dateIcon.src = taskDateSvg;

  const taskDate = document.createElement("div");
  taskDate.className = "date";
  taskDate.textContent = task.date;

  dateContainer.appendChild(dateIcon);
  dateContainer.appendChild(taskDate);

  subInformation.appendChild(priorityContainer);
  subInformation.appendChild(dateContainer);

  taskInformation.appendChild(mainInformation);
  taskInformation.appendChild(subInformation);

  newTaskElement.appendChild(completeTaskButton);
  newTaskElement.appendChild(taskInformation);

  return newTaskElement;
}

function refreshTaskElements() {
  const tasksContainer = listPage.querySelector("#task-container");

  tasksContainer.innerHTML = "";
  currentList.tasks.forEach((task) => {
    tasksContainer.appendChild(createNewTaskElement(task));
  });
}

export function loadListContent() {
  const emptyContainer = listPage.querySelector(".empty-page");
  const listContainer = listPage.querySelector(".list-container");
  const listTitle = listPage.querySelector("#list-title");

  emptyContainer.classList.add("hide");
  listContainer.classList.remove("hide");

  // Set title
  listTitle.textContent = currentList.name;

  refreshTaskElements();
}

function addNewTaskEvent() {
  const newTaskButton = listPage.querySelector("#new-task-button");

  newTaskButton.addEventListener("click", () => {
    // Temporary new task creation
    const title = prompt("Title", "Task title");
    const description = prompt("Description", "Description of the task");
    const date = prompt("Date", "15-Jan-2024");
    const priority = prompt("Priority (0,1,2,3)");

    addNewTask(currentList.name, title, description, date, priority);
    refreshTaskElements();
  });
}

export function renderPage() {
  listPage = document.createElement("div");
  listPage.id = "list-page";

  listPage.appendChild(createBackground());
  listPage.appendChild(createListContainer());
  listPage.appendChild(emptyPage());

  addNewTaskEvent(listPage);

  document.body.appendChild(listPage);
}
