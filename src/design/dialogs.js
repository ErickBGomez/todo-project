import dateUnselectedSvg from "../img/svg/dialog-icons/date-unselected.svg";
import priorityUnselectedSvg from "../img/svg/dialog-icons/priority-unselected.svg";
import listUnselectedSvg from "../img/svg/dialog-icons/list-unselected.svg";
import priorityLowSvg from "../img/svg/task-priority-low.svg";
import priorityMediumSvg from "../img/svg/task-priority-medium.svg";
import priorityHighSvg from "../img/svg/task-priority-high.svg";
import lists from "../lists-and-tasks";
import * as sidebar from "./sidebar.js";
import * as page from "./page.js";

const dialogs = (() => {
  const appendDialogButtons = (primaryLabel, secondaryLabel = "Cancel") => {
    const buttons = document.createElement("div");
    buttons.className = "dialog-buttons";

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
    addCloseDialogButtonsEvent(dialog);
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
  const appendSelectInput = (
    label,
    icon,
    optionsArray = [{ icon: "", value: "No options" }]
  ) => {
    const container = document.createElement("div");
    container.className = "select-input";
    container.dataset.value = optionsArray[0].value;

    const inputButton = document.createElement("button");
    inputButton.className = "select-button";

    const buttonLabel = document.createElement("span");
    buttonLabel.className = "button-label";
    buttonLabel.textContent = label;

    const buttonIcon = new Image();
    buttonIcon.className = "button-icon";
    buttonIcon.src = icon;

    // Options
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options";

    optionsArray.forEach((option) => {
      const optionElement = document.createElement("span");
      optionElement.className = "option";
      optionElement.dataset.value = option.value;

      const optionIcon = new Image();
      optionIcon.className = "option-icon";
      optionIcon.src = option.icon;

      const optionLabel = document.createElement("span");
      optionLabel.className = "option-label";
      optionLabel.textContent = option.value;

      optionElement.appendChild(optionIcon);
      optionElement.appendChild(optionLabel);

      optionsContainer.appendChild(optionElement);
    });

    inputButton.appendChild(buttonIcon);
    inputButton.appendChild(buttonLabel);

    container.appendChild(inputButton);
    container.appendChild(optionsContainer);

    addExpandOptionsEvent(container);
    addSelectOptionValueEvent(container);

    return container;
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

    const selectInputsContainer = document.createElement("div");
    selectInputsContainer.className = "task-select-inputs";

    selectInputsContainer.appendChild(
      appendSelectInput("Date", dateUnselectedSvg)
    );
    selectInputsContainer.appendChild(
      appendSelectInput("No Priority", priorityUnselectedSvg, [
        { icon: priorityUnselectedSvg, value: "No Priority" },
        { icon: priorityLowSvg, value: "Low" },
        { icon: priorityMediumSvg, value: "Medium" },
        { icon: priorityHighSvg, value: "High" },
      ])
    );
    selectInputsContainer.appendChild(
      appendSelectInput("List", listUnselectedSvg)
    );

    dialog.appendChild(titleInput);
    dialog.appendChild(descriptionInput);
    dialog.appendChild(selectInputsContainer);
    dialog.appendChild(appendDialogButtons("Add task"));

    document.body.appendChild(dialog);

    addCloseDialogEvent(dialog);
    addCloseDialogButtonsEvent(dialog);
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

  const addExpandOptionsEvent = (selectInput) => {
    const button = selectInput.querySelector(".select-button");

    button.addEventListener("click", () =>
      selectInput.classList.toggle("expand")
    );
  };

  const addSelectOptionValueEvent = (selectInput) => {
    const buttonLabel = selectInput.querySelector(".button-label");
    const buttonIcon = selectInput.querySelector(".button-icon");
    const options = selectInput.querySelectorAll(".option");

    options.forEach((option) => {
      option.addEventListener("click", () => {
        const optionIcon = option.querySelector(".option-icon");
        const optionLabel = option.querySelector(".option-label");

        selectInput.dataset.value = option.dataset.value;
        buttonLabel.textContent = option.dataset.value;
        buttonIcon.src = optionIcon.src;
        selectInput.classList.toggle("expand");

        console.log(selectInput.dataset.value);
      });
    });
  };

  // All dialogs:
  const addCloseDialogEvent = (currentDialog) => {
    currentDialog.addEventListener("close", () =>
      document.body.removeChild(currentDialog)
    );
  };

  const addCloseDialogButtonsEvent = (currentDialog) => {
    const dialogButtonsContainer =
      currentDialog.querySelector(".dialog-buttons");
    const buttons = dialogButtonsContainer.querySelectorAll("button");

    buttons.forEach((button) =>
      button.addEventListener("click", () => currentDialog.close())
    );
  };

  return { showNewListDialog, showNewTaskDialog };
})();

export default dialogs;
