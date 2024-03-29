import successNotificationSvg from "../img/others/success-notification.svg";
import closeSvg from "../img/others/close.svg";

const closeTimeout = 5000;
let closeTimeoutId;

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

  closeTimeoutId = setTimeout(
    closeNotification,
    closeTimeout,
    notificationsContainer,
    newNotification
  );

  closeNotificationEvent(closeButton, notificationsContainer, newNotification);
};

const closeNotification = (container, notification) => {
  notification.classList.add("closing");

  notification.addEventListener("animationend", () =>
    container.removeChild(notification)
  );
};

const closeNotificationEvent = (closeButton, container, notification) => {
  closeButton.addEventListener("click", () => {
    clearTimeout(closeTimeoutId);
    closeNotification(container, notification);
  });
};

export { renderNotifications, displayNotification };
