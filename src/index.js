import "./style.css";
import renderSidebar from "./design/sidebar.js";
import { renderPage } from "./design/page.js";
import lists from "./lists-and-tasks.js";
import dialogs from "./design/dialogs.js";

lists.refreshLists();

renderSidebar();
renderPage();
