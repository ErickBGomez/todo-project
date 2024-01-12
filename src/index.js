import "./style.css";
import renderSidebar from "./design/sidebar.js";
import renderPage from "./design/page.js";
import { createNewList } from "./tasks.js";

renderSidebar();
renderPage();

if (!localStorage.default) createNewList("default");
