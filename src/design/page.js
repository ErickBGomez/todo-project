// Icons
import dateSvg from "../img/tasks/date-fill.svg";
import prioritySvg from "../img/tasks/priority-fill.svg";
import toCompleteButtonSvg from "../img/others/to-complete-button.svg";
import completedTaskSvg from "../img/others/completed-task.svg";
import expandTasksSvg from "../img/others/expand-tasks.svg";
import horizontalOptionsSvg from "../img/others/horizontal-options.svg";
import editSvg from "../img/others/edit.svg";
import deleteSvg from "../img/others/delete.svg";

import * as lists from "../lists-and-tasks.js";
import * as dialogs from "./dialogs.js";
import * as inputs from "./inputs.js";

let listPage;

function createListContainer() {
  const page = document.createElement("div");
  page.id = "page";
  // Hide page when first load
  page.className = "hide";

  const background = document.createElement("div");
  background.id = "list-background";

  const container = document.createElement("div");
  container.className = "list-container";

  const titleSection = document.createElement("div");
  titleSection.className = "title-section";

  const title = document.createElement("h1");
  title.id = "list-title";
  title.textContent = "List title";

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
  expandCompletedTasks.innerHTML = expandTasksSvg;

  completedTitle.appendChild(completedTasksCounter);
  completedTasksTitleSection.appendChild(completedTitle);
  completedTasksTitleSection.appendChild(expandCompletedTasks);

  const completedContainer = document.createElement("div");
  completedContainer.id = "completed-tasks-container";

  completedSection.appendChild(completedTasksTitleSection);
  completedSection.appendChild(completedContainer);

  container.appendChild(titleSection);
  container.appendChild(tasksContaier);
  container.appendChild(newTaskButton);
  container.appendChild(completedSection);

  page.appendChild(background);
  page.appendChild(container);

  return page;
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

function createNewTaskElement(task, isCompleted) {
  const newTaskElement = document.createElement("div");
  newTaskElement.className = "task";

  newTaskElement.dataset.taskid = task.id;

  const completeTaskButton = document.createElement("div");
  completeTaskButton.className = "complete-task-button";
  completeTaskButton.innerHTML = isCompleted
    ? completedTaskSvg
    : toCompleteButtonSvg;

  const mainInformation = document.createElement("div");
  mainInformation.className = "main-information";

  const taskTitle = document.createElement("div");
  taskTitle.className = "title";
  taskTitle.textContent = task.title;

  mainInformation.appendChild(taskTitle);

  if (task.description) {
    const taskDescription = document.createElement("div");
    taskDescription.className = "description";
    taskDescription.textContent = task.description;

    mainInformation.appendChild(taskDescription);
  }
  const subInformation = document.createElement("div");
  subInformation.className = "sub-information";

  const taskPriority = document.createElement("div");
  taskPriority.className = "priority";

  if (task.priority) {
    const priorityIcon = document.createElement("div");
    priorityIcon.className = "priority-icon";
    priorityIcon.innerHTML = prioritySvg;

    const priorityLabel = document.createElement("div");
    priorityLabel.className = "priority-label";

    switch (task.priority) {
      case "Low":
        taskPriority.classList.add("low");
        priorityLabel.textContent = "Low";
        break;

      case "Medium":
        taskPriority.classList.add("medium");
        priorityLabel.textContent = "Medium";
        break;

      case "High":
        taskPriority.classList.add("high");
        priorityLabel.textContent = "High";
        break;
    }

    taskPriority.appendChild(priorityIcon);
    taskPriority.appendChild(priorityLabel);
  }

  const taskDate = document.createElement("div");
  taskDate.className = "date";

  if (task.date) {
    const dateIcon = document.createElement("div");
    dateIcon.className = "date-icon";
    dateIcon.innerHTML = dateSvg;

    const dateLabel = document.createElement("div");
    dateLabel.className = "date-label";
    dateLabel.textContent = task.date;

    taskDate.appendChild(dateIcon);
    taskDate.appendChild(dateLabel);
  }

  subInformation.appendChild(taskPriority);
  subInformation.appendChild(taskDate);

  newTaskElement.appendChild(completeTaskButton);
  newTaskElement.appendChild(mainInformation);
  newTaskElement.appendChild(subInformation);

  addTaskDetailsDialogEvent(newTaskElement, lists.getCurrentList(), task);

  return newTaskElement;
}

// Refresh all tasks from selected list
function refreshTaskElements() {
  const tasksContainer = listPage.querySelector("#tasks-container");
  const completedSection = listPage.querySelector(".completed-tasks-section");
  const completedContainer = listPage.querySelector(
    "#completed-tasks-container"
  );
  const completedCounter = listPage.querySelector(".completed-tasks-counter");

  // Reset all tasks elements
  tasksContainer.innerHTML = "";
  lists.getCurrentList().tasks.forEach((task) => {
    tasksContainer.appendChild(createNewTaskElement(task, false));
  });

  addCompleteTaskEvent();

  // Reset all completed tasks elements
  completedContainer.innerHTML = "";
  // Count completed takss
  completedCounter.textContent = `(${lists.getCompletedLength(
    lists.getCurrentList().name
  )})`;

  // Add all completed tasks to page
  lists.getCurrentList().completed.forEach((task) => {
    completedContainer.appendChild(createNewTaskElement(task, true));
  });

  // Hide completed tasks container when completed array is empty
  if (!lists.getCompletedLength(lists.getCurrentList().name)) {
    completedSection.classList.add("hide");
  } else {
    completedSection.classList.remove("hide");
  }

  addRestoreTaskEvent();
}

function refreshListTitle() {
  const listTitle = document.querySelector("#list-title");
  listTitle.textContent = lists.getCurrentList().name;
}

function loadListContent() {
  const emptyContainer = listPage.querySelector(".empty-page");
  const pageContainer = listPage.querySelector("#page");
  const titleSection = listPage.querySelector(".title-section");

  // Hide empty page container
  emptyContainer.classList.add("hide");
  pageContainer.classList.remove("hide");

  // Reload titleSection to load title and options
  titleSection.innerHTML = "";

  const title = document.createElement("h1");
  title.id = "list-title";
  title.textContent = lists.getCurrentList().name;

  const listOptions = inputs.appendOptionsButton(
    horizontalOptionsSvg,
    "list-more-options",
    [
      { label: "Edit", icon: editSvg, optionClass: "edit-list" },
      { label: "Delete", icon: deleteSvg, optionClass: "delete-list" },
    ]
  );
  const deleteOption = listOptions.querySelector(".delete-list");
  const editOption = listOptions.querySelector(".edit-list");

  titleSection.appendChild(title);
  titleSection.appendChild(listOptions);

  // Set events page
  dialogs.openDialogEvent(
    deleteOption,
    dialogs.showDeleteListDialog,
    lists.getCurrentList()
  );
  dialogs.openDialogEvent(
    editOption,
    dialogs.showEditListDialog,
    lists.getCurrentList()
  );

  refreshTaskElements();
}

function unloadPage() {
  const pageContainer = document.querySelector("#page");
  const emptyPageContainer = document.querySelector(".empty-page");

  pageContainer.classList.add("hide");
  emptyPageContainer.classList.remove("hide");
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
    completeTaskButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent opening task details dialog
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
    completeTaskButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent opening task details dialog
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

function addTaskDetailsDialogEvent(taskElement, list, task) {
  taskElement.addEventListener("click", () => {
    dialogs.showTaskDetailsDialog(list, task);
  });
}

function renderPage() {
  listPage = document.createElement("div");
  listPage.id = "list-page";

  listPage.appendChild(createListContainer());
  listPage.appendChild(emptyPage());

  addNewTaskEvent();
  addExpandTasksEvent();

  document.body.appendChild(listPage);
}

export {
  refreshTaskElements,
  refreshListTitle,
  loadListContent,
  unloadPage,
  renderPage,
};
