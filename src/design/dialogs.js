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

  const showCreateListDialog = () => {
    const dialog = document.createElement("dialog");

    dialog.appendChild(appendDialogButtons("Create list"));

    document.body.appendChild(dialog);

    dialog.showModal();
  };

  return { showCreateListDialog };
})();

export { dialogs };
