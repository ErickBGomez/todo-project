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

// New list:
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

  titleContainer.appendChild(
    inputs.appendSelectInputGrid("select-icon", [
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
    ])
  );
  titleContainer.appendChild(titleInput);

  dialog.appendChild(titleContainer);
  dialog.appendChild(inputs.appendDialogButtons("Create list"));

  document.body.appendChild(dialog);

  const closeButtons = Array.from(
    document.querySelectorAll(".dialog-buttons button")
  );
  const mainButton = document.querySelector(".dialog-buttons .primary");

  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, closeButtons);
  addCreateListEvent(dialog);
  disableEmptyDialogEvent(titleInput, mainButton);

  dialog.showModal();
};

const addCreateListEvent = (dialogContainer) => {
  const createButton = dialogContainer.querySelector("button.primary");
  const titleInput = dialogContainer.querySelector("input#list-title-input");
  const selectedIcon = dialogContainer.querySelector(
    "#select-icon .button-icon"
  );

  createButton.addEventListener("click", () => {
    lists.createList(titleInput.value, selectedIcon.innerHTML);
    sidebar.refreshUserSidebarLists();
  });
};

// New task:
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

  selectInputsContainer.appendChild(
    inputs.appendDateInput("date-input", dateUnselectedSvg)
  );
  selectInputsContainer.appendChild(
    inputs.appendSelectInput("select-priority", priorityUnselectedSvg, [
      { icon: priorityUnselectedSvg, name: "Priority" },
      { icon: prioritySelectedSvg, name: "Low" },
      { icon: prioritySelectedSvg, name: "Medium" },
      { icon: prioritySelectedSvg, name: "High" },
    ])
  );
  selectInputsContainer.appendChild(
    inputs.appendSelectInput(
      "select-list",
      defaultSvg,
      lists.getListsNamesIcons(),
      lists.getCurrentListIndex()
    )
  );

  dialog.appendChild(titleInput);
  dialog.appendChild(descriptionInput);
  dialog.appendChild(selectInputsContainer);
  dialog.appendChild(inputs.appendDialogButtons("Add task"));

  document.body.appendChild(dialog);

  const closeButtons = Array.from(
    document.querySelectorAll(".dialog-buttons button")
  );

  const mainButton = document.querySelector(".dialog-buttons .primary");

  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, closeButtons);
  addCreateTaskEvent(dialog);
  disableEmptyDialogEvent(titleInput, mainButton);

  dialog.showModal();
};

// Task details:
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

  // Actions container
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

  actionsContainer.appendChild(closeDialog);
  actionsContainer.appendChild(moreOptions);

  // Task main information
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

  // Task secondary information

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

  // Events
  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, closeDialog);
  addDeleteTaskEvent(moreOptions, ".delete-task", task.id, dialog);

  dialog.showModal();
};

// Dialog events
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
    lists.addNewTask(
      selectedList.dataset.value,
      titleInput.value,
      descriptionInput.value,
      dateInput.dataset.value,
      priorityInput.dataset.value
    );

    page.refreshTaskElements();
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
  mainButton.disabled = true;

  // Disable main button when:
  // 1. Selected text input is empty
  // 2. In the case of lists, when a list already exists with the current input
  textInput.addEventListener("input", () => {
    mainButton.disabled =
      textInput.value.length <= 0 ||
      lists.getListsNames().some((listName) => listName === textInput.value);
  });
};

const addDeleteTaskEvent = (
  optionsController,
  optionQuery,
  taskId,
  currentDialog
) => {
  const optionElement = optionsController.querySelector(optionQuery);

  optionElement.addEventListener("click", () => {
    lists.deleteTask(lists.getCurrentList().name, taskId);
    currentDialog.close();
    page.refreshTaskElements();
  });
};

export { showNewListDialog, showNewTaskDialog, showTaskDetailsDialog };
