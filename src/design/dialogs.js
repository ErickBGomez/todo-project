import lists from "../lists-and-tasks";
import * as sidebar from "./sidebar.js";

const dialogs = (() => {
  const appendDialogButtons = (primaryLabel, secondaryLabel = "Cancel") => {
    const buttons = document.createElement("div");
    buttons.className = "buttons";

    const primaryButton = document.createElement("button");
    primaryButton.className = "primary";
    primaryButton.textContent = primaryLabel;

    const secondaryButton = document.createElement("button");
    secondaryButton.className = "secondary";
    secondaryButton.textContent = secondaryLabel;

    buttons.appendChild(primaryButton);
    buttons.appendChild(secondaryButton);

    return buttons;
  };

  // New list:
  const showNewListDialog = () => {
    const dialog = document.createElement("dialog");
    dialog.id = "new-list";

    const titleContainer = document.createElement("div");
    titleContainer.className = "title-container";

    const titleIconInput = document.createElement("div");
    titleIconInput.className = "title-icon-input";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "list-title-input";
    titleInput.name = "list-title-input";
    titleInput.placeholder = "List title";

    titleContainer.appendChild(titleIconInput);
    titleContainer.appendChild(titleInput);

    dialog.appendChild(titleContainer);
    dialog.appendChild(appendDialogButtons("Create list"));

    document.body.appendChild(dialog);

    addCloseDialogEvent(dialog);
    addCreateListEvent(dialog);

    dialog.showModal();
  };

  const addCreateListEvent = (dialogContainer) => {
    const createButton = dialogContainer.querySelector("button.primary");
    const titleInput = dialogContainer.querySelector("input#list-title-input");

    createButton.addEventListener("click", () => {
      lists.createList(titleInput.value);
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

    const taskOptions = document.createElement("div");
    taskOptions.className = "task-options";

    const dateInput = document.createElement("div");
    dateInput.id = "task-date-input";
    dateInput.textContent = "Date";

    const priorityInput = document.createElement("div");
    priorityInput.id = "task-priority-input";
    priorityInput.textContent = "Priority";

    const listInput = document.createElement("div");
    listInput.id = "task-list-input";
    listInput.textContent = "List";

    taskOptions.appendChild(dateInput);
    taskOptions.appendChild(priorityInput);
    taskOptions.appendChild(listInput);

    dialog.appendChild(titleInput);
    dialog.appendChild(descriptionInput);
    dialog.appendChild(taskOptions);
    dialog.appendChild(appendDialogButtons("Add task"));

    document.body.appendChild(dialog);

    addCloseDialogEvent(dialog);

    dialog.showModal();
  };

  // All dialogs:
  const closeDialogs = () => {
    const dialog = document.querySelector("dialog[open]");
    dialog.close();
    document.body.removeChild(dialog);
  };

  const addCloseDialogEvent = (dialogContainer) => {
    const buttons = dialogContainer.querySelectorAll("button");

    buttons.forEach((button) => button.addEventListener("click", closeDialogs));
  };

  return { showNewListDialog, showNewTaskDialog };
})();

export { dialogs };
