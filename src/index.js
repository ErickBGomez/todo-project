import "./style.css";
import renderSidebar from "./design/sidebar.js";
import { renderPage } from "./design/page.js";
import { createList, lists, refreshLists, saveLists } from "./tasks.js";

renderSidebar();
renderPage();

refreshLists();
console.log(lists);
createList("Test");
console.log(lists);
saveLists();
