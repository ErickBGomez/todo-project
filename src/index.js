import "./style.css";
import renderSidebar from "./design/sidebar.js";
import renderPage from "./design/page.js";
import { defaultList } from "./tasks.js";

renderSidebar();
renderPage();

defaultList.completeTask(1);
defaultList.completeTask(1);
