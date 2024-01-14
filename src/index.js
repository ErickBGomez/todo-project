import "./style.css";
import renderSidebar from "./design/sidebar.js";
import { renderPage } from "./design/page.js";
import { addNewTask, createList, lists, refreshLists } from "./tasks.js";

renderSidebar();
renderPage();

refreshLists();
console.log(lists);
createList("Test");
createList("Test2");
console.log(lists);
addNewTask("Test", "Title1", "Description 1", "11-Jan-2024", 0);
console.log(lists);
