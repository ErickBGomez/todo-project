import dateUnselectedSvg from "../img/svg/tasks/date-nofill.svg";
import dateSelectedSvg from "../img/svg/tasks/date-fill.svg";
import priorityUnselectedSvg from "../img/svg/tasks/priority-nofill.svg";
import prioritySelectedSvg from "../img/svg/tasks/priority-fill.svg";

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
  const appendSelectInputGrid = (
    inputId,
    optionsArray = [defaultSvg],
    initialOptionIndex = 0
  ) => {
    const container = document.createElement("div");
    container.className = "select-input-grid";
    if (inputId) container.id = inputId;

    const inputButton = document.createElement("button");
    inputButton.className = "select-button";

    const buttonIcon = document.createElement("span");
    buttonIcon.className = "button-icon";

    // Options
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options-grid";

    optionsArray.forEach((optionIcon) => {
      const optionElement = document.createElement("span");
      optionElement.className = "option";
      optionElement.innerHTML = optionIcon;

      optionsContainer.appendChild(optionElement);
    });

    inputButton.appendChild(buttonIcon);

    container.appendChild(inputButton);
    container.appendChild(optionsContainer);

    // Auto-select first option
    if (initialOptionIndex < 0 || initialOptionIndex >= optionsArray.length)
      initialOptionIndex = 0;

    selectOptionValueGrid(container, initialOptionIndex);

    // Select list grid events
    addExpandOptionsEvent(container);
    addSelectOptionValueGridEvent(container);

    return container;
  };

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

    titleContainer.appendChild(
      appendSelectInputGrid("select-icon", [
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
    dialog.appendChild(appendDialogButtons("Create list"));

    document.body.appendChild(dialog);

    addCloseDialogEvent(dialog);
    addCloseDialogButtonsEvent(dialog);
    addCreateListEvent(dialog);

    dialog.showModal();
  };

  const selectOptionValueGrid = (selectInputGrid, optionIndex) => {
    const buttonIcon = selectInputGrid.querySelector(".button-icon");
    const option = selectInputGrid.querySelectorAll(".option")[optionIndex];

    buttonIcon.innerHTML = option.innerHTML;
  };

  const addSelectOptionValueGridEvent = (selectInputGrid) => {
    const options = selectInputGrid.querySelectorAll(".option");

    options.forEach((option, index) => {
      option.addEventListener("click", () => {
        selectOptionValueGrid(selectInputGrid, index);
        selectInputGrid.classList.remove("expand");
      });
    });
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
    optionsArray = [{ icon: defaultSvg, name: "No options" }],
    initialOptionIndex = 0
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

    // Auto-select first option
    if (initialOptionIndex < 0 || initialOptionIndex >= optionsArray.length)
      initialOptionIndex = 0;

    selectOptionValue(
      container,
      optionsContainer.childNodes[initialOptionIndex].dataset.value
    );

    // Select list Events
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
        defaultSvg,
        lists.getListsNamesIcons(),
        lists.getCurrentListIndex()
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
    const dateInput = dialogContainer.querySelector("#date-input");
    const priorityInput = dialogContainer.querySelector("#select-priority");

    createButton.addEventListener("click", () => {
      lists.addNewTask(
        lists.getCurrentList().name,
        titleInput.value,
        descriptionInput.value,
        dateInput.dataset.value,
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
    const option = selectInput.querySelector(
      `.option[data-value="${optionValue}"]`
    );
    const optionIcon = option.querySelector(".option-icon");

    selectInput.dataset.value = option.dataset.value;
    buttonLabel.textContent = option.dataset.value;
    buttonIcon.innerHTML = optionIcon.innerHTML; // Fix this
  };

  const addSelectOptionValueEvent = (selectInput) => {
    const options = selectInput.querySelectorAll(".option");

    options.forEach((option) => {
      option.addEventListener("click", () => {
        selectOptionValue(selectInput, option.dataset.value);
        selectInput.classList.remove("expand");
      });
    });
  };

  const addShowDatePickerEvent = (inputButton, dateInput) => {
    inputButton.addEventListener("click", () => dateInput.showPicker());
  };

  const changeDateValueEvent = (inputContainer) => {
    const buttonLabel = inputContainer.querySelector(".button-label");
    const buttonIcon = inputContainer.querySelector(".button-icon");
    const dateInput = inputContainer.querySelector("input.date-element");

    dateInput.addEventListener("change", () => {
      inputContainer.dataset.value = dateInput.value;
      buttonLabel.textContent = dateInput.value ? dateInput.value : "Date";
      buttonIcon.innerHTML = dateInput.value
        ? dateSelectedSvg
        : dateUnselectedSvg;
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
