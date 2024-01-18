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

  const showNewListDialog = () => {
    const dialog = document.createElement("dialog");
    dialog.id = "new-list";

    const titleContainer = document.createElement("div");
    titleContainer.className = "title-container";

    const titleIconInput = document.createElement("div");
    titleIconInput.className = "title-icon-input";

    const titleInput = document.createElement("input");
    titleInput.id = "list-title-input";
    titleInput.type = "text";
    titleInput.placeholder = "New list title";

    titleContainer.appendChild(titleIconInput);
    titleContainer.appendChild(titleInput);

    dialog.appendChild(titleContainer);
    dialog.appendChild(appendDialogButtons("Create list"));

    document.body.appendChild(dialog);

    addCloseDialogEvent(dialog);

    dialog.showModal();
  };

  const addCloseDialogEvent = (dialogContainer) => {
    const buttons = dialogContainer.querySelectorAll("button");

    buttons.forEach((button) => button.addEventListener("click", closeDialogs));
  };

  const closeDialogs = () => {
    const dialog = document.querySelector("dialog[open]");
    dialog.close();
    document.body.removeChild(dialog);
  };

  return { showNewListDialog };
})();

export { dialogs };
