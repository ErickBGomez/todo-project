import dateSvg from "../img/svg/tasks/date-fill.svg";
import prioritySvg from "../img/svg/tasks/priority-fill.svg";

import lists from "../lists-and-tasks.js";
import dialogs from "./dialogs.js";

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
  tasksContaier.id = "tasks-container";

  const newTaskButton = document.createElement("button");
  newTaskButton.id = "new-task-button";
  newTaskButton.textContent = "Add new task";

  const completedSection = document.createElement("div");
  completedSection.className = "completed-tasks-section";

  const completedTasksTitleSection = document.createElement("div");
  completedTasksTitleSection.className = "completed-tasks-title-section";

  const completedTitle = document.createElement("h2");
  completedTitle.id = "completed-tasks-title";
  completedTitle.textContent = "Completed tasks ";

  const completedTasksCounter = document.createElement("span");
  completedTasksCounter.className = "completed-tasks-counter";
  completedTasksCounter.textContent = "(0)";

  const expandCompletedTasks = document.createElement("div");
  expandCompletedTasks.className = "expand-tasks";

  completedTitle.appendChild(completedTasksCounter);
  completedTasksTitleSection.appendChild(completedTitle);
  completedTasksTitleSection.appendChild(expandCompletedTasks);

  const completedContainer = document.createElement("div");
  completedContainer.id = "completed-tasks-container";

  completedSection.appendChild(completedTasksTitleSection);
  completedSection.appendChild(completedContainer);

  container.appendChild(title);
  container.appendChild(tasksContaier);
  container.appendChild(newTaskButton);
  container.appendChild(completedSection);

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

  newTaskElement.dataset.taskid = task.id;

  const completeTaskButton = document.createElement("div");
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

  if (task.priority) {
    const priorityIcon = document.createElement("div");
    priorityIcon.className = "priority-icon";
    priorityIcon.innerHTML = prioritySvg;

    const taskPriority = document.createElement("div");
    taskPriority.className = "priority";

    switch (task.priority) {
      case "Low":
        taskPriority.classList.add("low");
        taskPriority.textContent = "Low";
        break;

      case "Medium":
        taskPriority.classList.add("medium");
        taskPriority.textContent = "Medium";
        break;

      case "High":
        taskPriority.classList.add("high");
        taskPriority.textContent = "High";
        break;
    }

    priorityContainer.appendChild(priorityIcon);
    priorityContainer.appendChild(taskPriority);
  }

  const dateContainer = document.createElement("div");
  dateContainer.className = "date-container";

  if (task.date) {
    const dateIcon = document.createElement("div");
    dateIcon.className = "date-icon";
    dateIcon.innerHTML = dateSvg;

    const taskDate = document.createElement("div");
    taskDate.className = "date";
    taskDate.textContent = task.date;

    dateContainer.appendChild(dateIcon);
    dateContainer.appendChild(taskDate);
  }

  subInformation.appendChild(priorityContainer);
  subInformation.appendChild(dateContainer);

  taskInformation.appendChild(mainInformation);
  taskInformation.appendChild(subInformation);

  newTaskElement.appendChild(completeTaskButton);
  newTaskElement.appendChild(taskInformation);

  return newTaskElement;
}

export function refreshTaskElements() {
  const tasksContainer = listPage.querySelector("#tasks-container");
  const completedContainer = listPage.querySelector(
    "#completed-tasks-container"
  );
  const completedCounter = listPage.querySelector(".completed-tasks-counter");

  // Reset all tasks elements
  tasksContainer.innerHTML = "";
  lists.getCurrentList().tasks.forEach((task) => {
    tasksContainer.appendChild(createNewTaskElement(task));
  });

  addCompleteTaskEvent();

  // Reset all completed tasks elements
  completedContainer.innerHTML = "";
  // Count completed takss
  completedCounter.textContent = `(${lists.getCompletedLength(
    lists.getCurrentList().name
  )})`;

  lists.getCurrentList().completed.forEach((task) => {
    completedContainer.appendChild(createNewTaskElement(task));
  });

  addRestoreTaskEvent();
}

export function loadListContent() {
  const emptyContainer = listPage.querySelector(".empty-page");
  const listContainer = listPage.querySelector(".list-container");
  const listTitle = listPage.querySelector("#list-title");

  emptyContainer.classList.add("hide");
  listContainer.classList.remove("hide");

  // Set title
  listTitle.textContent = lists.getCurrentList().name;

  refreshTaskElements();
}

function addNewTaskEvent() {
  const newTaskButton = listPage.querySelector("#new-task-button");

  newTaskButton.addEventListener("click", () => {
    dialogs.showNewTaskDialog();
  });
}

function addCompleteTaskEvent() {
  const tasksContainer = listPage.querySelector("#tasks-container");
  const tasks = Array.from(tasksContainer.querySelectorAll(".task"));

  // Add complete button event to each task element
  tasks.forEach((task) => {
    const completeTaskButton = task.querySelector(".complete-task-button");
    completeTaskButton.addEventListener("click", () => {
      lists.completeTask(lists.getCurrentList().name, task.dataset.taskid);
      refreshTaskElements();
    });
  });
}

function addRestoreTaskEvent() {
  const completedTasksContainer = listPage.querySelector(
    "#completed-tasks-container"
  );
  const tasks = Array.from(completedTasksContainer.querySelectorAll(".task"));

  // Add complete button event to each task element
  tasks.forEach((task) => {
    const completeTaskButton = task.querySelector(".complete-task-button");
    completeTaskButton.addEventListener("click", () => {
      lists.restoreTask(lists.getCurrentList().name, task.dataset.taskid);
      refreshTaskElements();
    });
  });
}

function addExpandTasksEvent() {
  const completedTasks = listPage.querySelector(".completed-tasks-section");
  const expandTasksButton = listPage.querySelector(".expand-tasks");

  expandTasksButton.addEventListener("click", () => {
    completedTasks.classList.toggle("show");
  });
}

export function renderPage() {
  listPage = document.createElement("div");
  listPage.id = "list-page";

  listPage.appendChild(createBackground());
  listPage.appendChild(createListContainer());
  listPage.appendChild(emptyPage());

  addNewTaskEvent();
  addExpandTasksEvent();

  document.body.appendChild(listPage);
}
