import "./style.css";
import renderSidebar from "./design/sidebar.js";
import { renderPage } from "./design/page.js";
import * as lists from "./lists-and-tasks.js";
import * as dialogs from "./design/dialogs.js";

lists.refreshLists();

renderSidebar();
renderPage();
