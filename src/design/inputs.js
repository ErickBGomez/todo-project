// Icons
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

const appendTextInput = (
  inputId,
  placeholder,
  maxLength = 10,
  autoFocus = false,
  initialValue = null
) => {
  const container = document.createElement("div");
  container.className = "text-input-container";

  const input = document.createElement("input");
  input.type = "text";
  input.id = inputId;
  input.name = inputId;
  input.placeholder = placeholder;
  input.maxLength = maxLength.toString();
  input.autofocus = autoFocus;
  input.value = initialValue;

  const textCounter = document.createElement("span");
  textCounter.className = "text-counter";

  const currentTextCount = document.createElement("span");
  currentTextCount.className = "current-count";
  currentTextCount.textContent = input.value.length;

  const counterLimit = document.createElement("span");
  counterLimit.className = "counter-limit";
  counterLimit.textContent = ` / ${maxLength}`;

  textCounter.appendChild(currentTextCount);
  textCounter.appendChild(counterLimit);

  container.appendChild(input);
  container.appendChild(textCounter);

  addCountLengthEvent(input, currentTextCount);

  return container;
};

const appendTextAreaInput = (
  inputId,
  placeholder,
  maxLength = 10,
  rows = 1,
  autoFocus = false,
  initialValue = null
) => {
  const container = document.createElement("div");
  container.className = "textarea-input-container";

  const input = document.createElement("textarea");
  input.id = inputId;
  input.name = inputId;
  input.placeholder = placeholder;
  input.maxLength = maxLength.toString();
  input.rows = rows.toString();
  input.autofocus = autoFocus;
  input.value = initialValue;

  const textCounter = document.createElement("span");
  textCounter.className = "text-counter";

  const currentTextCount = document.createElement("span");
  currentTextCount.className = "current-count";
  currentTextCount.textContent = input.value.length;

  const counterLimit = document.createElement("span");
  counterLimit.className = "counter-limit";
  counterLimit.textContent = ` / ${maxLength}`;

  textCounter.appendChild(currentTextCount);
  textCounter.appendChild(counterLimit);

  container.appendChild(input);
  container.appendChild(textCounter);

  addCountLengthEvent(input, currentTextCount);

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
  addCloseOptionsEvent(container, optionsContainer.childNodes);

  return container;
};

// Custom inputs events
const addCountLengthEvent = (input, counter) => {
  input.addEventListener(
    "input",
    () => (counter.textContent = input.value.length)
  );
};

const addExpandOptionsEvent = (container, expandButton) => {
  // const button = container.querySelector(".select-button");

  expandButton.addEventListener("click", () =>
    container.classList.toggle("expand")
  );
};

const addCloseOptionsEvent = (container, optionButtons) => {
  optionButtons.forEach((option) =>
    option.addEventListener("click", () => container.classList.remove("expand"))
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

const changeDateValueEvent = (inputContainer) => {
  const dateInput = inputContainer.querySelector("input.date-element");

  dateInput.addEventListener("change", () =>
    selectDateValue(inputContainer, dateInput.value)
  );
};

const selectDateValue = (inputContainer, newValue) => {
  const input = inputContainer.querySelector("input.date-element");
  const buttonLabel = inputContainer.querySelector(".button-label");
  const buttonIcon = inputContainer.querySelector(".button-icon");

  inputContainer.dataset.value = newValue;
  input.value = newValue;
  buttonLabel.textContent = newValue || "Date";
  buttonIcon.innerHTML = newValue ? dateSelectedSvg : dateUnselectedSvg;
};

const addShowDatePickerEvent = (inputButton, dateInput) => {
  inputButton.addEventListener("click", () => dateInput.showPicker());
};

export {
  appendDialogButtons,
  appendTextInput,
  appendTextAreaInput,
  appendSelectInput,
  appendSelectInputGrid,
  appendDateInput,
  appendOptionsButton,
  selectOptionValue,
  selectOptionValueGrid,
  selectDateValue,
};
