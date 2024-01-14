import "./style.css";
import renderSidebar from "./design/sidebar.js";
import { renderPage } from "./design/page.js";
import { createList, lists } from "./tasks.js";

renderSidebar();
renderPage();

console.log(lists);
createList("Test");
console.log(lists);
