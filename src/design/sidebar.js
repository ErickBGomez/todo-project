// Icons
import allTasksSvg from "../img/svg/all-tasks.svg";
import todaySvg from "../img/svg/today.svg";
import thisWeekSvg from "../img/svg/this-week.svg";
import defaultListSvg from "../img/svg/default-list.svg";

function createAppTitle() {
  const appTitle = document.createElement("div");
  appTitle.id = "app-title";
  appTitle.textContent = "To-do app";

  return appTitle;
}

function createListSidebar(listLabel, listIcon = defaultListSvg) {
  const list = document.createElement("div");
  list.className = "list-sidebar-element";

  const icon = new Image();
  icon.src = listIcon;

  const label = document.createElement("div");
  label.className = "list-sidebar-element-label";
  label.textContent = listLabel;

  list.appendChild(icon);
  list.appendChild(label);

  return list;
}

function createHomeListsContainer() {
  const listsContainer = document.createElement("div");
  listsContainer.className = "sidebar-lists-container";

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = "Home";

  const listsGroup = document.createElement("div");
  listsGroup.className = "lists-group";

  listsGroup.appendChild(createListSidebar("All Tasks", allTasksSvg));
  listsGroup.appendChild(createListSidebar("Today", todaySvg));
  listsGroup.appendChild(createListSidebar("This week", thisWeekSvg));

  listsContainer.appendChild(title);
  listsContainer.appendChild(listsGroup);

  return listsContainer;
}

// * Experimental:
// function refreshSidebarLists(listsGroup) {
//   for (let e in localStorage) {
//     listsGroup.appendChild(createListSidebar(e));
//   }
// }

function createUserListsContainer() {
  const listsContainer = document.createElement("div");
  listsContainer.className = "sidebar-lists-container";

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = "My Lists";

  const listsGroup = document.createElement("div");
  listsGroup.className = "lists-group";

  // refreshSidebarLists(listsGroup);

  listsContainer.appendChild(title);
  listsContainer.appendChild(listsGroup);

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

export default function renderSidebar() {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  sidebar.appendChild(createAppTitle());
  sidebar.appendChild(createHomeListsContainer());
  sidebar.appendChild(createUserListsContainer());
  sidebar.appendChild(createLowerSidebar());

  document.body.appendChild(sidebar);
}
