import "./style.css";
import * as sidebar from "./design/sidebar.js";
import * as page from "./design/page.js";
import * as lists from "./lists-and-tasks.js";
import * as notifications from "./design/notifications.js";

lists.refreshLists();
sidebar.renderSidebar();
page.renderPage();
notifications.renderNotifications();
