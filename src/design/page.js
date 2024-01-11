// Functions
import { createTask } from "../tasks.js";
// Icons
import taskDescriptionSvg from "../img/svg/task-description.svg";
import taskDateSvg from "../img/svg/task-date.svg";
import taskPriorityLowSvg from "../img/svg/task-priority-low.svg";
import taskPriorityMediumSvg from "../img/svg/task-priority-medium.svg";
import taskPriorityHighSvg from "../img/svg/task-priority-high.svg";

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
  tasksContaier.id = "task-container";

  const newTaskButton = document.createElement("button");
  newTaskButton.id = "new-task-button";
  newTaskButton.textContent = "Add new task";

  container.appendChild(title);
  container.appendChild(tasksContaier);
  container.appendChild(newTaskButton);

  return container;
}

function appendTaskToList(task, listContainer) {
  const tasksContainer = listContainer.querySelector("#task-container");

  const newTask = document.createElement("div");
  newTask.className = "task";

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

  newTask.appendChild(completeTaskButton);
  newTask.appendChild(taskInformation);

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
