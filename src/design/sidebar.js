import defaultListSvg from "../img/svg/lists/default.svg";
import { loadListContent } from "./page";
import lists from "../lists-and-tasks.js";
import dialogs from "./dialogs.js";

let userLists;

function createAppTitle() {
  const appTitle = document.createElement("div");
  appTitle.id = "app-title";
  appTitle.textContent = "To-do app";

  return appTitle;
}

function createListSidebar(listLabel, listIcon = defaultListSvg) {
  const list = document.createElement("div");
  list.className = "list-sidebar-element";
  list.dataset.listName = listLabel;

  const icon = document.createElement("div");
  icon.className = "list-sidebar-element-icon";
  icon.innerHTML = listIcon;

  const label = document.createElement("div");
  label.className = "list-sidebar-element-label";
  label.textContent = listLabel;

  list.appendChild(icon);
  list.appendChild(label);

  return list;
}

export function refreshUserSidebarLists() {
  const listsContent = JSON.parse(localStorage.getItem("lists"));

  // Reset sidebar lists
  userLists.innerHTML = "";

  // Add lists to the sidebar
  listsContent.forEach((list) => {
    userLists.appendChild(createListSidebar(list.name));
  });

  // Add loading events to each list created by the user
  userLists.childNodes.forEach((listElement) => {
    listElement.addEventListener("click", () => {
      lists.setCurrentList(listElement.dataset.listName);
      loadListContent();
    });
  });
}

function createUserListsContainer() {
  const listsContainer = document.createElement("div");
  listsContainer.className = "sidebar-lists-container user-lists";

  const listTitleContainer = document.createElement("div");
  listTitleContainer.className = "list-title-container";

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = "My Lists";

  const createListButton = document.createElement("button");
  createListButton.id = "create-list-button";
  createListButton.textContent = "+";

  listTitleContainer.appendChild(title);
  listTitleContainer.appendChild(createListButton);

  userLists = document.createElement("div");
  userLists.className = "lists-group";

  refreshUserSidebarLists();

  listsContainer.appendChild(listTitleContainer);
  listsContainer.appendChild(userLists);

  return listsContainer;
}

function createCredits() {
  const creditsContainer = document.createElement("div");
  creditsContainer.id = "credits";
  creditsContainer.textContent = "Made by ";

  const creditsLink = document.createElement("a");
  creditsLink.textContent = "Erick B. Gómez";
  creditsLink.href = "https://www.github.com/ErickBGomez";
  creditsLink.target = "_blank";

  creditsContainer.appendChild(creditsLink);

  return creditsContainer;
}

function createLowerSidebar() {
  const container = document.createElement("div");
  container.className = "lower-sidebar";

  container.appendChild(createCredits());

  return container;
}

function createUserListEvent(sidebar) {
  const createListButton = sidebar.querySelector("#create-list-button");
  createListButton.addEventListener("click", () => dialogs.showNewListDialog());
}

export default function renderSidebar() {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  sidebar.appendChild(createAppTitle());
  sidebar.appendChild(createUserListsContainer());
  sidebar.appendChild(createLowerSidebar());

  createUserListEvent(sidebar);

  document.body.appendChild(sidebar);
}
