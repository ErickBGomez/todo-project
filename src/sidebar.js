function renderAppTitle() {
  const appTitle = document.createElement("div");
  appTitle.id = "app-title";
  appTitle.textContent = "To-do app";

  return appTitle;
}

function createListSidebar(listLabel) {
  const list = document.createElement("div");
  list.className = "list-sidebar-element";

  const label = document.createElement("div");
  label.className = "list-sidebar-element-label";
  label.textContent = listLabel;

  list.appendChild(label);

  return list;
}

function renderHomeListsContainer() {
  const listsContainer = document.createElement("div");
  listsContainer.className = "sidebar-lists-container";

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = "Home";

  const listsGroup = document.createElement("div");
  listsGroup.className = "lists-group";

  listsGroup.appendChild(createListSidebar("All Tasks"));
  listsGroup.appendChild(createListSidebar("Today"));
  listsGroup.appendChild(createListSidebar("This week"));

  listsContainer.appendChild(title);
  listsContainer.appendChild(listsGroup);

  return listsContainer;
}

function renderUserListsContainer() {
  const listsContainer = document.createElement("div");
  listsContainer.className = "sidebar-lists-container";

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = "My Lists";

  const listsGroup = document.createElement("div");
  listsGroup.className = "lists-group";

  listsGroup.appendChild(createListSidebar("List 1"));
  listsGroup.appendChild(createListSidebar("List 2"));
  listsGroup.appendChild(createListSidebar("List 3"));

  listsContainer.appendChild(title);
  listsContainer.appendChild(listsGroup);

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
