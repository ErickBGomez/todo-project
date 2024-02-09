import dateUnselectedSvg from "../img/svg/tasks/date-nofill.svg";
import dateSelectedSvg from "../img/svg/tasks/date-fill.svg";
import priorityUnselectedSvg from "../img/svg/tasks/priority-nofill.svg";
import prioritySelectedSvg from "../img/svg/tasks/priority-fill.svg";
import listUnselectedSvg from "../img/svg/lists/default.svg";

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
  const appendDateInput = (inputId, icon) => {
    const container = document.createElement("div");
    container.id = inputId;

    const input = document.createElement("input");
    input.type = "date";
    input.className = "date-element";

    container.dataset.value = input.value;

    const inputButton = document.createElement("button");
    inputButton.className = "date-button";

    const buttonLabel = document.createElement("span");
    buttonLabel.className = "button-label";
    buttonLabel.textContent = "Date";

    const buttonIcon = document.createElement("span");
    buttonIcon.className = "button-icon";
    buttonIcon.innerHTML = icon;

    inputButton.appendChild(buttonIcon);
    inputButton.appendChild(buttonLabel);

    container.appendChild(input);
    container.appendChild(inputButton);

    addShowDatePickerEvent(inputButton, input);
    changeDateValueEvent(container);

    return container;
  };

  const appendSelectInput = (
    inputId,
    icon,
    optionsArray = [{ icon: listUnselectedSvg, name: "No options" }]
  ) => {
    const container = document.createElement("div");
    container.className = "select-input";
    if (inputId) container.id = inputId;

    const inputButton = document.createElement("button");
    inputButton.className = "select-button";

    const buttonLabel = document.createElement("span");
    buttonLabel.className = "button-label";

    const buttonIcon = document.createElement("span");
    buttonIcon.className = "button-icon";
    buttonIcon.innerHTML = icon;

    // Options
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options";

    optionsArray.forEach((option) => {
      const optionElement = document.createElement("span");
      optionElement.className = "option";
      optionElement.dataset.value = option.name;

      const optionIcon = document.createElement("span");
      optionIcon.className = "option-icon";
      optionIcon.innerHTML = option.icon;

      const optionLabel = document.createElement("span");
      optionLabel.className = "option-label";
      optionLabel.textContent = option.name;

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

    // Auto-select first option
    selectOptionValue(container, optionsContainer.childNodes[0]);

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
      appendDateInput("date-input", dateUnselectedSvg)
    );
    selectInputsContainer.appendChild(
      appendSelectInput("select-priority", priorityUnselectedSvg, [
        { icon: priorityUnselectedSvg, name: "Priority" },
        { icon: prioritySelectedSvg, name: "Low" },
        { icon: prioritySelectedSvg, name: "Medium" },
        { icon: prioritySelectedSvg, name: "High" },
      ])
    );
    selectInputsContainer.appendChild(
      appendSelectInput(
        "select-list",
        listUnselectedSvg,
        lists.getListsNamesIcons()
      )
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
    const priorityInput = dialogContainer.querySelector("#select-priority");

    createButton.addEventListener("click", () => {
      lists.addNewTask(
        lists.getCurrentList().name,
        titleInput.value,
        descriptionInput.value,
        "22-Jan-2024",
        priorityInput.dataset.value
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

  const selectOptionValue = (selectInput, optionValue) => {
    const buttonLabel = selectInput.querySelector(".button-label");
    const buttonIcon = selectInput.querySelector(".button-icon");
    const optionIcon = optionValue.querySelector(".option-icon");

    selectInput.dataset.value = optionValue.dataset.value;
    buttonLabel.textContent = optionValue.dataset.value;
    buttonIcon.innerHTML = optionIcon.innerHTML; // Fix this
  };

  const addSelectOptionValueEvent = (selectInput) => {
    const options = selectInput.querySelectorAll(".option");

    options.forEach((option) => {
      option.addEventListener("click", () => {
        selectOptionValue(selectInput, option);
        selectInput.classList.toggle("expand");
      });
    });
  };

  const addShowDatePickerEvent = (inputButton, dateInput) => {
    inputButton.addEventListener("click", () => dateInput.showPicker());
  };

  const changeDateValueEvent = (inputContainer) => {
    const buttonLabel = inputContainer.querySelector(".button-label");
    const dateInput = inputContainer.querySelector("input.date-element");

    dateInput.addEventListener("change", () => {
      inputContainer.dataset.value = dateInput.value;
      buttonLabel.textContent = dateInput.value ? dateInput.value : "Date";
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
