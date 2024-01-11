import "./style.css";
import renderSidebar from "./design/sidebar.js";
import renderPage from "./design/page.js";
import { createList } from "./tasks.js";

renderSidebar();
renderPage();

if (!localStorage.default) createList("default");
