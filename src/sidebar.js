function renderAppTitle() {
  const appTitle = document.createElement("div");
  appTitle.id = "app-title";
  appTitle.textContent = "To-do app";

  return appTitle;
}

function createList(listLabel) {
  const projectElement = document.createElement("div");
  projectElement.className = "sidebar-element";

  const label = document.createElement("div");
  label.className = "sidebar-element-label";
  label.textContent = listLabel;

  projectElement.appendChild(label);

  return projectElement;
}

function renderHomeListsContainer() {
  const listsContainer = document.createElement("div");
  listsContainer.className = "sidebar-lists-container";

  const title = document.createElement("div");
  title.textContent = "Home";

  listsContainer.appendChild(title);

  return listsContainer;
}

function renderUserListsContainer() {
  const listsContainer = document.createElement("div");
  listsContainer.className = "sidebar-lists-container";

  const title = document.createElement("div");
  title.textContent = "My Lists";

  listsContainer.appendChild(title);

  return listsContainer;
}

export default function renderSidebar() {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  sidebar.appendChild(renderAppTitle());
  sidebar.appendChild(renderHomeListsContainer());
  sidebar.appendChild(renderUserListsContainer());

  document.body.appendChild(sidebar);
}
