import closeSvg from "../img/svg/others/close.svg";

const renderNotifications = () => {
  const container = document.createElement("div");
  container.id = "notifications-container";

  document.body.appendChild(container);
};

const displayNotification = (label) => {
  const notificationsContainer = document.querySelector(
    "#notifications-container"
  );

  const newNotification = document.createElement("div");
  newNotification.className = "notification";

  const notificationLabel = document.createElement("p");
  notificationLabel.className = "notification-label";
  notificationLabel.textContent = label;

  const closeButton = document.createElement("button");
  closeButton.className = "close-notification-button";

  const closeButtonIcon = document.createElement("span");
  closeButtonIcon.className = "button-icon";
  closeButtonIcon.innerHTML = closeSvg;

  closeButton.appendChild(closeButtonIcon);

  newNotification.appendChild(notificationLabel);
  newNotification.appendChild(closeButton);

  notificationsContainer.appendChild(newNotification);
};

export { renderNotifications, displayNotification };
