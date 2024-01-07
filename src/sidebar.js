export default function renderSidebar() {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  const appTitle = document.createElement("div");
  appTitle.id = "app-title";
  appTitle.textContent = "To-do app";

  sidebar.appendChild(appTitle);

  document.body.appendChild(sidebar);
}
