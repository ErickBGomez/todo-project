function renderAppTitle() {
  const appTitle = document.createElement("div");
  appTitle.id = "app-title";
  appTitle.textContent = "To-do app";

  return appTitle;
}

function createSidebarElement(elementLabel) {
  const projectElement = document.createElement("div");
  projectElement.className = "sidebar-element";

  const label = document.createElement("div");
  label.className = "sidebar-element-label";
  label.textContent = elementLabel;

  projectElement.appendChild(label);

  return projectElement;
}

function renderHomeProjectsContainer() {
  const projectsContainer = document.createElement("div");
  projectsContainer.className = "sidebar-projects-container";

  const title = document.createElement("div");
  title.textContent = "Home";

  projectsContainer.appendChild(title);

  return projectsContainer;
}

function renderUserProjectsContainer() {
  const projectsContainer = document.createElement("div");
  projectsContainer.className = "sidebar-projects-container";

  const title = document.createElement("div");
  title.textContent = "My Projects";

  projectsContainer.appendChild(title);

  return projectsContainer;
}

export default function renderSidebar() {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  sidebar.appendChild(renderAppTitle());
  sidebar.appendChild(renderHomeProjectsContainer());
  sidebar.appendChild(renderUserProjectsContainer());

  document.body.appendChild(sidebar);
}
