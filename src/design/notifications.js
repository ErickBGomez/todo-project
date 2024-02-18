import successNotificationSvg from "../img/svg/others/success-notification.svg";
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

  const notificationIcon = document.createElement("span");
  notificationIcon.className = "notification-icon";
  notificationIcon.innerHTML = successNotificationSvg;

  const notificationLabel = document.createElement("p");
  notificationLabel.className = "notification-label";
  notificationLabel.textContent = label;

  const closeButton = document.createElement("button");
  closeButton.className = "close-notification";

  const closeButtonIcon = document.createElement("span");
  closeButtonIcon.className = "button-icon";
  closeButtonIcon.innerHTML = closeSvg;

  closeButton.appendChild(closeButtonIcon);

  newNotification.appendChild(notificationIcon);
  newNotification.appendChild(notificationLabel);
  newNotification.appendChild(closeButton);

  notificationsContainer.appendChild(newNotification);
};

export { renderNotifications, displayNotification };
