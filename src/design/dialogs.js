// Task icons
import dateUnselectedSvg from "../img/svg/tasks/date-nofill.svg";
import dateSelectedSvg from "../img/svg/tasks/date-fill.svg";
import priorityUnselectedSvg from "../img/svg/tasks/priority-nofill.svg";
import prioritySelectedSvg from "../img/svg/tasks/priority-fill.svg";

// List icons
import defaultSvg from "../img/svg/lists/default.svg";
import starSvg from "../img/svg/lists/star.svg";
import heartSvg from "../img/svg/lists/heart.svg";
import sofaSvg from "../img/svg/lists/sofa.svg";
import treeSvg from "../img/svg/lists/tree.svg";
import shoppingSvg from "../img/svg/lists/shopping.svg";
import schoolSvg from "../img/svg/lists/school.svg";
import pencilSvg from "../img/svg/lists/pencil.svg";
import planeSvg from "../img/svg/lists/plane.svg";
import cloudSvg from "../img/svg/lists/cloud.svg";
import lightbulbSvg from "../img/svg/lists/lightbulb.svg";
import bookSvg from "../img/svg/lists/book.svg";

// Dialog icons
import closeSvg from "../img/svg/others/close.svg";
import horizontalOptionsSvg from "../img/svg/others/horizontal-options.svg";
import editSvg from "../img/svg/others/edit.svg";
import deleteSvg from "../img/svg/others/delete.svg";

// Functions
import * as lists from "../lists-and-tasks";
import * as sidebar from "./sidebar.js";
import * as page from "./page.js";
import * as inputs from "./inputs.js";
import * as notifications from "./notifications.js";

const listIcons = [
  defaultSvg,
  starSvg,
  heartSvg,
  sofaSvg,
  treeSvg,
  shoppingSvg,
  schoolSvg,
  pencilSvg,
  planeSvg,
  cloudSvg,
  lightbulbSvg,
  bookSvg,
];

// List dialogs:
const showNewListDialog = () => {
  const dialog = document.createElement("dialog");
  dialog.id = "new-list";

  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "list-title-input";
  titleInput.name = "list-title-input";
  titleInput.placeholder = "List title";
  titleInput.maxLength = "25";
  titleInput.autofocus = true;

  const selectIconInput = inputs.appendSelectInputGrid(
    "select-icon",
    listIcons
  );

  titleContainer.appendChild(selectIconInput);
  titleContainer.appendChild(titleInput);

  const dialogButtons = inputs.appendDialogButtons("Create list");
  const mainButton = dialogButtons.querySelector("button.primary");

  dialog.appendChild(titleContainer);
  dialog.appendChild(dialogButtons);

  document.body.appendChild(dialog);

  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, Array.from(dialogButtons.childNodes));
  addCreateListEvent(dialog);
  disableEmptyDialogEvent(titleInput, mainButton);

  dialog.showModal();
};

const showEditListDialog = (list) => {
  const dialog = document.createElement("dialog");
  dialog.id = "edit-list";

  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "list-title-input";
  titleInput.name = "list-title-input";
  titleInput.placeholder = "List title";
  titleInput.maxLength = "25";
  titleInput.autofocus = true;
  titleInput.value = list.name;

  const selectIconInput = inputs.appendSelectInputGrid(
    "select-icon",
    listIcons
  );
  inputs.selectOptionValueGrid(selectIconInput, listIcons.indexOf(list.icon));

  titleContainer.appendChild(selectIconInput);
  titleContainer.appendChild(titleInput);

  const dialogButtons = inputs.appendDialogButtons("Edit list");
  const mainButton = dialogButtons.querySelector("button.primary");

  dialog.appendChild(titleContainer);
  dialog.appendChild(dialogButtons);

  document.body.appendChild(dialog);

  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, Array.from(dialogButtons.childNodes));
  addEditListEvent(dialog);
  disableEmptyDialogEvent(titleInput, mainButton);

  dialog.showModal();
};

const showDeleteListDialog = (list) => {
  const dialog = document.createElement("dialog");
  dialog.id = "delete-list";

  const message = document.createElement("div");
  message.className = "message";

  const messageTitle = document.createElement("p");
  messageTitle.className = "message-title";
  messageTitle.textContent = "Are you sure you want to delete this list?";

  const listInfo = document.createElement("div");
  listInfo.className = "list-info";

  const listIcon = document.createElement("span");
  listIcon.className = "list-icon";
  listIcon.innerHTML = list.icon;

  const listTitle = document.createElement("p");
  listTitle.className = "list-title";
  listTitle.textContent = list.name;

  listInfo.appendChild(listIcon);
  listInfo.appendChild(listTitle);

  const subMessage = document.createElement("p");
  subMessage.className = "sub-message";
  subMessage.textContent = "This action cannot be undone.";

  const dialogButtons = inputs.appendDialogButtons("Delete");
  const deleteButton = dialogButtons.querySelector("button.primary");

  message.appendChild(messageTitle);
  message.appendChild(listInfo);
  message.appendChild(subMessage);

  dialog.appendChild(message);
  dialog.appendChild(dialogButtons);

  document.body.appendChild(dialog);

  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, Array.from(dialogButtons.childNodes));
  addDeleteListEvent(deleteButton, lists.getCurrentList().name);

  dialog.showModal();
};

// Task dialogs:
const showNewTaskDialog = () => {
  const dialog = document.createElement("dialog");
  dialog.id = "new-task";

  const titleInput = document.createElement("input");
  titleInput.id = "task-title-input";
  titleInput.type = "text";
  titleInput.placeholder = "Task title";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.id = "task-description-input";
  descriptionInput.name = "task-description-input";
  descriptionInput.rows = "4";
  descriptionInput.placeholder = "Task description";

  const selectInputsContainer = document.createElement("div");
  selectInputsContainer.className = "task-select-inputs";

  const dateInput = inputs.appendDateInput("date-input", dateUnselectedSvg);
  const selectPriorityInput = inputs.appendSelectInput(
    "select-priority",
    priorityUnselectedSvg,
    [
      { icon: priorityUnselectedSvg, name: "Priority" },
      { icon: prioritySelectedSvg, name: "Low" },
      { icon: prioritySelectedSvg, name: "Medium" },
      { icon: prioritySelectedSvg, name: "High" },
    ]
  );
  const selectListInput = inputs.appendSelectInput(
    "select-list",
    defaultSvg,
    lists.getListsNamesIcons(),
    lists.getListIndex(lists.getCurrentList().name)
  );

  selectInputsContainer.appendChild(dateInput);
  selectInputsContainer.appendChild(selectPriorityInput);
  selectInputsContainer.appendChild(selectListInput);

  const dialogButtons = inputs.appendDialogButtons("Add task");
  const mainButton = dialogButtons.querySelector("button.primary");

  dialog.appendChild(titleInput);
  dialog.appendChild(descriptionInput);
  dialog.appendChild(selectInputsContainer);
  dialog.appendChild(dialogButtons);

  document.body.appendChild(dialog);

  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, Array.from(dialogButtons.childNodes));
  addCreateTaskEvent(dialog);
  disableEmptyDialogEvent(titleInput, mainButton);

  dialog.showModal();
};

const showEditTaskDialog = (task) => {
  const dialog = document.createElement("dialog");
  dialog.id = "edit-task";

  const titleInput = document.createElement("input");
  titleInput.id = "task-title-input";
  titleInput.type = "text";
  titleInput.placeholder = "Task title";
  titleInput.value = task.title;

  const descriptionInput = document.createElement("textarea");
  descriptionInput.id = "task-description-input";
  descriptionInput.name = "task-description-input";
  descriptionInput.rows = "4";
  descriptionInput.placeholder = "Task description";
  descriptionInput.value = task.description;

  const selectInputsContainer = document.createElement("div");
  selectInputsContainer.className = "task-select-inputs";

  const dateInput = inputs.appendDateInput("date-input", dateUnselectedSvg);
  inputs.selectDateValue(dateInput, task.date);

  const selectPriorityInput = inputs.appendSelectInput(
    "select-priority",
    priorityUnselectedSvg,
    [
      { icon: priorityUnselectedSvg, name: "Priority" },
      { icon: prioritySelectedSvg, name: "Low" },
      { icon: prioritySelectedSvg, name: "Medium" },
      { icon: prioritySelectedSvg, name: "High" },
    ]
  );
  inputs.selectOptionValue(selectPriorityInput, task.priority || "Priority");

  const selectListInput = inputs.appendSelectInput(
    "select-list",
    defaultSvg,
    lists.getListsNamesIcons(),
    lists.getListIndex(lists.getCurrentList().name)
  );

  selectInputsContainer.appendChild(dateInput);
  selectInputsContainer.appendChild(selectPriorityInput);
  selectInputsContainer.appendChild(selectListInput);

  const dialogButtons = inputs.appendDialogButtons("Edit task");
  const mainButton = dialogButtons.querySelector("button.primary");

  dialog.appendChild(titleInput);
  dialog.appendChild(descriptionInput);
  dialog.appendChild(selectInputsContainer);
  dialog.appendChild(dialogButtons);

  document.body.appendChild(dialog);

  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, Array.from(dialogButtons.childNodes));
  addEditTaskEvent(dialog, task.id);
  disableEmptyDialogEvent(titleInput, mainButton);

  dialog.showModal();
};

const showDeleteTaskDialog = (taskId) => {
  const dialog = document.createElement("dialog");
  dialog.id = "delete-task";

  const message = document.createElement("div");
  message.className = "message";

  const messageTitle = document.createElement("p");
  messageTitle.className = "message-title";
  messageTitle.textContent = "Are you sure you want to delete this task?";

  const subMessage = document.createElement("p");
  subMessage.className = "sub-message";
  subMessage.textContent = "This action cannot be undone.";

  const dialogButtons = inputs.appendDialogButtons("Delete");
  const deleteButton = dialogButtons.querySelector("button.primary");

  message.appendChild(messageTitle);
  message.appendChild(subMessage);

  dialog.appendChild(message);
  dialog.appendChild(dialogButtons);

  document.body.appendChild(dialog);

  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, Array.from(dialogButtons.childNodes));
  addDeleteTaskEvent(deleteButton, taskId);

  dialog.showModal();
};

const appendSecondaryInfoElements = (label, icon, elementClass) => {
  const container = document.createElement("div");
  container.classList.add("info-element");
  container.classList.add(elementClass);
  container.dataset.value = label;

  const elementIcon = document.createElement("span");
  elementIcon.className = "icon";
  elementIcon.innerHTML = icon;

  const elementLabel = document.createElement("p");
  elementLabel.className = "label";
  elementLabel.textContent = label;

  container.appendChild(elementIcon);
  container.appendChild(elementLabel);

  return container;
};

const showTaskDetailsDialog = (list, task) => {
  const dialog = document.createElement("dialog");
  dialog.id = "task-details";

  const actionsContainer = document.createElement("div");
  actionsContainer.className = "actions-container";

  const closeDialog = document.createElement("button");
  closeDialog.id = "close-task-details";
  const closeDialogIcon = document.createElement("span");
  closeDialogIcon.className = "button-icon";
  closeDialogIcon.innerHTML = closeSvg;

  closeDialog.appendChild(closeDialogIcon);

  const moreOptions = inputs.appendOptionsButton(
    horizontalOptionsSvg,
    "task-more-options",
    [
      { label: "Edit", icon: editSvg, optionClass: "edit-task" },
      { label: "Delete", icon: deleteSvg, optionClass: "delete-task" },
    ]
  );

  const deleteOption = moreOptions.querySelector(".delete-task");
  const editOption = moreOptions.querySelector(".edit-task");

  actionsContainer.appendChild(closeDialog);
  actionsContainer.appendChild(moreOptions);

  const mainInfo = document.createElement("div");
  mainInfo.className = "main-information";

  const taskTitle = document.createElement("p");
  taskTitle.className = "task-title";
  taskTitle.textContent = task.title;

  const taskDescription = document.createElement("p");
  taskDescription.className = "task-description";
  taskDescription.textContent = task.description || "No description";

  mainInfo.appendChild(taskTitle);
  mainInfo.appendChild(taskDescription);

  const secondaryInfo = document.createElement("div");
  secondaryInfo.className = "secondary-information";

  if (task.date) {
    secondaryInfo.appendChild(
      appendSecondaryInfoElements(task.date, dateSelectedSvg, "task-date")
    );
  }
  if (task.priority) {
    secondaryInfo.appendChild(
      appendSecondaryInfoElements(
        task.priority,
        prioritySelectedSvg,
        "task-priority"
      )
    );
  }
  secondaryInfo.appendChild(
    appendSecondaryInfoElements(list.name, list.icon, "task-list")
  );

  dialog.appendChild(actionsContainer);
  dialog.appendChild(mainInfo);
  dialog.appendChild(secondaryInfo);

  document.body.appendChild(dialog);

  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, closeDialog);
  openDialogEvent(deleteOption, showDeleteTaskDialog, task.id);
  openDialogEvent(editOption, showEditTaskDialog, task);

  dialog.showModal();
};

// Dialog events
const addCreateListEvent = (dialogContainer) => {
  const createButton = dialogContainer.querySelector("button.primary");
  const titleInput = dialogContainer.querySelector("input#list-title-input");
  const selectedIcon = dialogContainer.querySelector(
    "#select-icon .button-icon"
  );

  createButton.addEventListener("click", () => {
    lists.createList(titleInput.value, selectedIcon.innerHTML);
    sidebar.refreshUserSidebarLists();
    notifications.displayNotification("List created successfully.");
  });
};

const addEditListEvent = (dialogContainer) => {
  const editButton = dialogContainer.querySelector("button.primary");
  const titleInput = dialogContainer.querySelector("input#list-title-input");
  const selectedIcon = dialogContainer.querySelector(
    "#select-icon .button-icon"
  );

  editButton.addEventListener("click", () => {
    lists.editList(lists.getCurrentList().name, {
      name: titleInput.value,
      icon: selectedIcon.innerHTML,
    });
    sidebar.refreshUserSidebarLists();
    page.refreshListTitle();
    notifications.displayNotification("List updated successfully.");
  });
};

const addCreateTaskEvent = (dialogContainer) => {
  const createButton = dialogContainer.querySelector("button.primary");
  const titleInput = dialogContainer.querySelector("#task-title-input");
  const descriptionInput = dialogContainer.querySelector(
    "#task-description-input"
  );
  const dateInput = dialogContainer.querySelector("#date-input");
  const priorityInput = dialogContainer.querySelector("#select-priority");
  const selectedList = dialogContainer.querySelector("#select-list");

  createButton.addEventListener("click", () => {
    lists.createTask(selectedList.dataset.value, {
      title: titleInput.value,
      description: descriptionInput.value,
      date: dateInput.dataset.value,
      priority: priorityInput.dataset.value,
    });

    page.refreshTaskElements();
    notifications.displayNotification("Task created successfully.");
  });
};

const addEditTaskEvent = (dialogContainer, taskId) => {
  const taskDetailsDialog = document.querySelector("dialog#task-details");
  const editButton = dialogContainer.querySelector("button.primary");
  const titleInput = dialogContainer.querySelector("#task-title-input");
  const descriptionInput = dialogContainer.querySelector(
    "#task-description-input"
  );
  const dateInput = dialogContainer.querySelector("#date-input");
  const priorityInput = dialogContainer.querySelector("#select-priority");

  editButton.addEventListener("click", () => {
    lists.editTask(lists.getCurrentList().name, taskId, {
      title: titleInput.value,
      description: descriptionInput.value,
      date: dateInput.dataset.value,
      priority: priorityInput.dataset.value,
    });

    page.refreshTaskElements();
    taskDetailsDialog.close();
    notifications.displayNotification("Task updated successfully.");
  });
};

const addCloseDialogEvent = (currentDialog) => {
  currentDialog.addEventListener("close", () =>
    document.body.removeChild(currentDialog)
  );
};

const addCloseDialogButtonsEvent = (currentDialog, closeButtons) => {
  // If closeButtons is not an array. Assign event directly
  if (!Array.isArray(closeButtons)) {
    closeButtons.addEventListener("click", () => currentDialog.close());
    return;
  }

  closeButtons.forEach((button) =>
    button.addEventListener("click", () => currentDialog.close())
  );
};

const disableEmptyDialogEvent = (textInput, mainButton) => {
  // Disable button when opening the dialog
  // If the dialog has default values when opening, don't disable mainButton
  mainButton.disabled = textInput.value.length === 0;

  // Disable main button when:
  // 1. Selected text input is empty
  // 2. In the case of lists, when a list already exists with the current input
  textInput.addEventListener("input", () => {
    mainButton.disabled =
      textInput.value.length <= 0 ||
      lists.getListsNames().some((listName) => listName === textInput.value);
  });
};

const openDialogEvent = (targetElement, dialogCallback, dialogParameter) => {
  targetElement.addEventListener("click", () => {
    dialogCallback(dialogParameter);
  });
};

const addDeleteListEvent = (deleteButton, listName) => {
  deleteButton.addEventListener("click", () => {
    page.unloadPage();
    lists.deleteList(listName);
    sidebar.refreshUserSidebarLists();
    notifications.displayNotification("List deleted successfully.");
  });
};

const addDeleteTaskEvent = (deleteButton, taskId) => {
  const dialogOrigin = document.querySelector("dialog#task-details");

  deleteButton.addEventListener("click", () => {
    lists.deleteTask(lists.getCurrentList().name, taskId);
    dialogOrigin.close();
    page.refreshTaskElements();
    notifications.displayNotification("Task deleted successfully.");
  });
};

export {
  showNewListDialog,
  showEditListDialog,
  showDeleteListDialog,
  showNewTaskDialog,
  showEditTaskDialog,
  showDeleteTaskDialog,
  showTaskDetailsDialog,
  openDialogEvent,
};
