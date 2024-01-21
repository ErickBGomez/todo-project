import dateUnselectedSvg from "../img/svg/dialog-icons/date-unselected.svg";
import priorityUnselectedSvg from "../img/svg/dialog-icons/priority-unselected.svg";
import listUnselectedSvg from "../img/svg/dialog-icons/list-unselected.svg";
import lists from "../lists-and-tasks";
import * as sidebar from "./sidebar.js";
import * as page from "./page.js";

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
  const appendTaskOption = (label, icon) => {
    const optionContainer = document.createElement("div");
    optionContainer.className = "task-option";

    const optionIcon = new Image();
    optionIcon.src = icon;

    const optionLabel = document.createElement("span");
    optionLabel.textContent = label;

    optionContainer.appendChild(optionIcon);
    optionContainer.appendChild(optionLabel);

    return optionContainer;
  };

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

    const priorityInput = document.createElement("div");
    priorityInput.textContent = "Priority";

    const listInput = document.createElement("div");
    listInput.textContent = "List";

    taskOptions.appendChild(appendTaskOption("Date", dateUnselectedSvg));
    taskOptions.appendChild(
      appendTaskOption("Priority", priorityUnselectedSvg)
    );
    taskOptions.appendChild(appendTaskOption("List", listUnselectedSvg));

    dialog.appendChild(titleInput);
    dialog.appendChild(descriptionInput);
    dialog.appendChild(taskOptions);
    dialog.appendChild(appendDialogButtons("Add task"));

    document.body.appendChild(dialog);

    addCloseDialogEvent(dialog);
    addCreateTaskEvent(dialog);

    dialog.showModal();
  };

  const addCreateTaskEvent = (dialogContainer) => {
    const createButton = dialogContainer.querySelector("button.primary");
    const titleInput = dialogContainer.querySelector("#task-title-input");
    const descriptionInput = dialogContainer.querySelector(
      "#task-description-input"
    );

    createButton.addEventListener("click", () => {
      lists.addNewTask(
        lists.getCurrentList().name,
        titleInput.value,
        descriptionInput.value
      );

      page.refreshTaskElements();
    });
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

export default dialogs;
