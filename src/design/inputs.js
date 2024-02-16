import defaultSvg from "../img/svg/lists/default.svg";
import dateUnselectedSvg from "../img/svg/tasks/date-nofill.svg";
import dateSelectedSvg from "../img/svg/tasks/date-fill.svg";

// Custom inputs controllers
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
  addExpandOptionsEvent(container, inputButton);
  addSelectOptionValueEvent(container);

  return container;
};

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
  addExpandOptionsEvent(container, inputButton);
  addSelectOptionValueGridEvent(container);

  return container;
};

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

const appendOptionsButton = (
  icon,
  controllerClass,
  optionsArray = [{ label: "Option", icon: defaultSvg, optionClass: "option" }]
) => {
  const container = document.createElement("div");
  container.classList.add("options-controller");
  container.classList.add(controllerClass);

  const button = document.createElement("button");
  button.className = "options-controller-button";

  const buttonIcon = document.createElement("span");
  buttonIcon.className = "button-icon";
  buttonIcon.innerHTML = icon;

  const optionsContainer = document.createElement("div");
  optionsContainer.className = "options";

  optionsArray.forEach((option) => {
    const optionElement = document.createElement("span");
    optionElement.classList.add("option");
    optionElement.classList.add(option.optionClass);

    const optionIcon = document.createElement("span");
    optionIcon.className = "option-icon";
    optionIcon.innerHTML = option.icon;

    const optionLabel = document.createElement("span");
    optionLabel.className = "option-label";
    optionLabel.textContent = option.label;

    optionElement.appendChild(optionIcon);
    optionElement.appendChild(optionLabel);

    optionsContainer.appendChild(optionElement);
  });

  button.appendChild(buttonIcon);

  container.appendChild(button);
  container.appendChild(optionsContainer);

  addExpandOptionsEvent(container, button);

  return container;
};

// Custom inputs events
const addExpandOptionsEvent = (container, expandButton) => {
  // const button = container.querySelector(".select-button");

  expandButton.addEventListener("click", () =>
    container.classList.toggle("expand")
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

export {
  appendDialogButtons,
  appendSelectInput,
  appendSelectInputGrid,
  appendDateInput,
  appendOptionsButton,
};
