/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::after,
*::before {
  box-sizing: border-box;
}

:root {
  /* Typography */
  font-size: 16px;
  font-family: "Poppins", sans-serif;

  /* Colors: */
  --Black: #25272c;
  --Black-75: #25272cbf;
  --Black-50: #25272c80;
  --Black-25: #25272c40;
  --Black-10: #25272c1a;
  --Black-05: #25272c0d;
  --White: #fafafa;
  --Primary: #4c7dfb;
  --Delete-Accent: #ec3a4f;
  --High-Priority: #ee4e39;
  --Medium-Priority: #ea7e1a;
  --Low-Priority: #89715d;
  --Task-List: #2f9e62;
  --List-Background-Gradient: linear-gradient(90deg, #66a2e8 0%, #989be9 100%);
}

body {
  color: var(--Black);
  background-color: var(--White);

  display: flex;
  min-height: 100vh;
  margin: 0;
}

h1,
h2 {
  margin: 0;
  font-weight: 700;
}

h1 {
  font-size: 2.534rem;
}

h2 {
  font-size: 1.6rem;
  font-weight: 600;
}

p {
  margin: 0;
}

/* Sidebar */

#sidebar {
  position: fixed;
  background-color: var(--Black-05);
  padding: 26px 32px;
  border-right: 1px solid var(--Black-25);
  width: 256px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  user-select: none;
}

.app-info-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

#app-icon {
  display: block;
  width: 32px;
  height: 32px;
  fill: var(--Primary);
}

#app-title {
  color: var(--Primary);
  font-weight: 700;
  font-size: 1.5rem;
}

.sidebar-lists-container {
  width: 100%;
  border-top: 1px solid var(--Black-25);
  padding-top: 32px;
}

.sidebar-lists-container .title {
  color: var(--Black-50);
  font-size: 0.9rem;
  font-weight: 400;
}

.user-lists .list-title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

#create-list-button {
  padding: 4px;
  transition: 100ms;
}

#create-list-button:hover {
  background-color: var(--Black-10);
  transition: 100ms;
}

#create-list-button .create-list-icon {
  display: block;
  width: 24px;
  height: 24px;
  fill: var(--Black-50);
}

.lists-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.list-sidebar-element {
  color: var(--Black);
  font-weight: 500;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  gap: 4px;
  transition: 200ms;
}

.list-sidebar-element .list-sidebar-element-icon {
  display: block;
  min-width: 24px;
  max-height: 24px;
}

.list-sidebar-element .list-sidebar-element-label {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.list-sidebar-element.selected {
  font-weight: 700;
  transition: 200ms;
}

.list-sidebar-element:hover,
.list-sidebar-element.selected {
  background-color: var(--Black-10);
  transition: 200ms;
}

.lower-sidebar {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
}

#credits {
  color: var(--Black-50);
  font-size: 0.875rem;
}

#credits a {
  text-decoration: none;
  font-weight: 500;
}

#credits a,
#credits a:visited {
  color: var(--Primary);
}

/* List content */

#list-page {
  display: flex;
  flex-direction: column;
  width: calc(100% - 256px);
  margin-left: auto;
}

#list-background {
  height: 152px;
  background: var(--List-Background-Gradient);
}

.list-container {
  margin: 48px auto;
  width: clamp(400px, 50vw, 832px);
}

.title-section {
  display: grid;
  grid-template-columns: auto max-content;
  align-items: center;
  max-width: 100%;
  min-width: 0;
  min-height: 0;
  gap: 26px;
  margin-bottom: 48px;
  word-wrap: break-word;
}

.title-section #list-title {
  min-width: 0;
  min-height: 0;
}

.title-section .options-controller-button {
  padding: 8px;
  background-color: var(--White);
  transition: background-color 200ms;
}

.title-section .options-controller-button:hover,
.title-section .options-controller-button:focus {
  background-color: var(--Black-10);
  transition: background-color 200ms;
}

.title-section .list-more-options .button-icon {
  fill: var(--Black);
  width: 35px;
  height: 35px;
}

#new-task-button {
  width: 100%;
  padding: 24px 32px;
  font-weight: 400;
  color: var(--Black-50);
  border: 1px solid var(--Black-25);
  border-radius: 8px;
  background-color: var(--White);
  transition: background-color 200ms;
}

#new-task-button:hover {
  background-color: hsl(0, 0%, 94%);
  transition: background-color 200ms;
}

.empty-page {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 48px auto;
  width: clamp(400px, 50vw, 500px);
  text-align: center;
  gap: 24px;
}

.empty-page .empty-title {
  color: var(--Primary);
  font-weight: 700;
  font-size: 2.5rem;
}

.empty-page .empty-subtitle {
  font-size: 1.2rem;
  color: var(--Black-50);
}

.hide {
  display: none;
}

/* Tasks */

#tasks-container,
#completed-tasks-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
}

.task {
  background-color: var(--Black-05);
  padding: 24px 32px;
  border: 1px solid var(--Black-25);
  border-radius: 8px;
  display: grid;
  grid-template-columns: 32px auto max-content;
  align-items: center;
  min-height: 0;
  min-width: 0;
  gap: 32px;
  cursor: pointer;
  transition: background-color 200ms;
}

.task > div {
  min-height: 0;
  min-width: 0;
}

.task:hover {
  background-color: hsl(195, 10%, 87%);
  transition: background-color 200ms;
}

.task .complete-task-button {
  display: block;
  min-width: 32px;
  height: 32px;
  cursor: pointer;
}

.task .main-information {
  display: flex;
  flex-direction: column;
}

.task .title {
  color: var(--Black);
  font-weight: 500;
  font-size: 1.375rem;
}

.task .description {
  color: var(--Black-50);
}

.task .title,
.task .description {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.task .sub-information {
  display: flex;
  gap: 12px;
  font-weight: 400;
}

.task .priority.low {
  color: var(--Low-Priority);
  fill: var(--Low-Priority);
}

.task .priority.medium {
  color: var(--Medium-Priority);
  fill: var(--Medium-Priority);
}

.task .priority.high {
  color: var(--High-Priority);
  fill: var(--High-Priority);
}

.task .priority,
.task .date {
  display: flex;
  gap: 4px;
  align-items: center;
}

.task .date {
  color: var(--Black-75);
  fill: var(--Black-75);
}

.task .date-icon,
.task .priority-icon {
  display: block;
  min-width: 24px;
  max-height: 24px;
}

/* Completed tasks */
.completed-tasks-section {
  border-top: 1px solid var(--Black-25);
  margin-top: 32px;
  padding-top: 32px;
}

.completed-tasks-title-section {
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 24px;
}

#completed-tasks-container {
  display: none;
}

#completed-tasks-container .task .title {
  text-decoration: line-through;
  color: var(--Black-75);
}

.expand-tasks {
  width: 24px;
  height: 24px;
  cursor: pointer;
  /* Set 360 degrees to rotate to right instead to the left */
  transform: rotate(360deg);
  transition: 300ms;
}

.completed-tasks-section.show .expand-tasks {
  transform: rotate(180deg);
  transition: 300ms;
}

.completed-tasks-section.show #completed-tasks-container {
  display: flex;
}

/* Dialogs */

dialog {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: var(--White);
  border: none;
  border-radius: 16px;
  animation-name: showDialog;
  animation-duration: 300ms;
}

dialog.closing {
  animation-name: closeDialog;
  animation-duration: 300ms;
  animation-fill-mode: forwards;
}

dialog::backdrop {
  background-color: #00000099;
  animation-name: showDialogBackdrop;
  animation-duration: 300ms;
}

dialog.closing::backdrop {
  animation-name: closeDialogBackdrop;
  animation-duration: 300ms;
  animation-fill-mode: forwards;
}

dialog#new-list,
dialog#edit-list,
dialog#new-task,
dialog#edit-task {
  gap: 16px;
}

dialog#new-task,
dialog#edit-task {
  width: 550px;
}

dialog .dialog-buttons {
  display: flex;
  flex-direction: row-reverse;
  justify-content: end;
  gap: 8px;
}

input[type="text"] {
  font-family: inherit;
  font-size: 1.375rem;
  font-weight: 500;
  padding: 2px 55px 0 4px;
  background-color: var(--White);
  color: var(--Black);
  border: none;
  border-bottom: 3px solid;
  caret-color: var(--Primary);
  width: 100%;
}

input[type="text"]:placeholder-shown {
  border-bottom-color: var(--Black-25);
  transition: 200ms;
}

input[type="text"]:focus,
input[type="text"]:not(:placeholder-shown) {
  border-bottom-color: var(--Primary);
  transition: 200ms;
}

input[type="text"]:focus {
  outline: none;
}

input[type="text"]::placeholder {
  font-weight: 400;
  color: var(--Black-50);
}

button {
  font-family: inherit;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 600;
  user-select: none;
}

button:focus {
  outline: 2px solid var(--Primary);
  outline-offset: 2px;
}

button.primary {
  background-color: var(--Primary);
  color: var(--White);
  transition: background-color 200ms;
}

button.primary:hover {
  background-color: #79a7fc;
}

button.primary:active {
  background-color: #3352cc;
}

button.primary:disabled {
  background-color: #b3d1ff;
  color: #f0f6ff;
  cursor: not-allowed;
}

button.secondary {
  background-color: #c9cbcf;
  color: var(--Black-75);
  transition: background-color 200ms;
}

button.secondary:hover {
  background-color: #a7a9af;
}

button.secondary:active {
  background-color: #878a92;
}

/* New list dialog */
dialog#new-list,
dialog#edit-list {
  width: 550px;
}

dialog#new-list .title-container,
dialog#edit-list .title-container {
  display: flex;
  gap: 12px;
  align-items: center;
}

dialog#new-list .title-icon-input,
dialog#edit-list .title-icon-input {
  width: 32px;
  height: 32px;
  padding: 4px;
  border: 2px solid var(--Black-25);
  border-radius: 8px;
  cursor: pointer;
}

#list-title-input {
  width: 100%;
}

/* New task dialog */

/* Task information */

textarea {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  color: var(--Black-75);
  background-color: var(--Black-05);
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  width: 100%;
  outline: none;
  resize: none;
}

textarea::placeholder {
  color: var(--Black-50);
}

/* Inputs */

/* Text and textarea input */
.text-input-container,
.textarea-input-container {
  position: relative;
}

.textarea-input-container {
  display: flex;
}

.text-counter {
  position: absolute;
  bottom: 4px;
  opacity: 0;
  font-size: 0.8rem;
  color: var(--Primary);
  user-select: none;
  transition: opacity 200ms;
}

input[type="text"] + .text-counter {
  right: 4px;
}

textarea + .text-counter {
  right: 8px;
}

input[type="text"]:focus + .text-counter,
textarea:focus + .text-counter {
  opacity: 1;
  transition: opacity 200ms;
}

/* Date input */
#date-input input[type="date"] {
  visibility: hidden;
  width: 0;
  height: 0;
  position: absolute;
  bottom: 77px;
}

/* Change button and label color when selecting a date */
#date-input:not([data-value=""]) button {
  border-color: var(--Primary);
  color: var(--Primary);
  fill: var(--Primary);
}

/* Select input grid */
.select-input-grid .select-button {
  padding: 8px;
  border: 1px solid var(--Primary);
}

.select-input-grid .button-icon {
  fill: var(--Primary);
}

.select-input-grid .options-grid {
  position: fixed;
  display: none;
  grid-template-columns: repeat(4, 60px);
  grid-auto-rows: 60px;
  padding: 6px;
  gap: 6px;
}

.select-input-grid.expand .options-grid {
  display: grid;
}

.options-grid .option {
  padding: 10px;
  fill: var(--Black-75);
  border: 1px solid var(--Black-25);
  border-radius: 6px;
  background-color: var(--White);
  cursor: pointer;
  transition: background-color 200ms;
}

.options-grid .option:hover {
  background-color: var(--Black-10);
  transition: background-color 200ms;
}

/* Select inputs */
dialog#new-task .task-select-inputs,
dialog#edit-task .task-select-inputs {
  display: flex;
  align-items: center;
  gap: 8px;
}

.select-input,
.select-input-grid,
.options-controller {
  position: relative;
}

.select-input .select-button,
.select-input-grid .select-button,
#date-input .date-button,
.options-controller .options-controller-button {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--Black-50);
  fill: var(--Black-50);
  font-weight: 400;
  background-color: var(--White);
  border-radius: 8px;
  user-select: none;
}

.select-input .button-icon,
.select-list .button-icon,
#date-input .button-icon {
  min-width: 24px;
  max-height: 24px;
}

.select-input .select-button,
#date-input .date-button {
  padding: 6px 10px;
  border: 1px solid var(--Black-25);
}

#select-list button {
  max-width: 180px;
}

#select-list .button-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.select-input .options,
.select-input-grid .options-grid,
.options-controller .options {
  position: fixed;
  display: none;
  flex-direction: column;
  background-color: var(--White);
  color: var(--Black);
  border: 1px solid #a3a3a3;
  border-radius: 8px;
}

.options :first-child {
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}

.options :last-child {
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}

.options .option {
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: var(--White);
  color: var(--Black);
  fill: var(--Black);
  padding: 8px;
  width: 100%;
  transition: background-color 200ms;
  cursor: pointer;
  user-select: none;
}

.options .option:hover {
  background-color: #e8e8e8;
  transition: background-color 200ms;
}

.select-input.expand .options,
.options-controller.expand .options {
  display: flex;
}

/* Select priority input color depending to selected value */
#select-priority[data-value="Low"] .select-button {
  border-color: var(--Low-Priority);
  color: var(--Low-Priority);
  fill: var(--Low-Priority);
}

#select-priority[data-value="Medium"] .select-button {
  border-color: var(--Medium-Priority);
  color: var(--Medium-Priority);
  fill: var(--Medium-Priority);
}

#select-priority[data-value="High"] .select-button {
  border-color: var(--High-Priority);
  color: var(--High-Priority);
  fill: var(--High-Priority);
}

/* Select priority input elements text color */
#select-priority .option[data-value="Priority"] {
  color: var(--Black-50);
  fill: var(--Black-50);
}

#select-priority .option[data-value="Low"] {
  color: var(--Low-Priority);
  fill: var(--Low-Priority);
}

#select-priority .option[data-value="Medium"] {
  color: var(--Medium-Priority);
  fill: var(--Medium-Priority);
}

#select-priority .option[data-value="High"] {
  color: var(--High-Priority);
  fill: var(--High-Priority);
}

/* List input button color */
#select-list:not([data-value=""]) .select-button {
  border-color: var(--Task-List);
  color: var(--Task-List);
  fill: var(--Task-List);
}

#select-list .option {
  color: var(--Black-75);
  fill: var(--Black-75);
}

/* Options controller colors */
.task-more-options .delete-task,
.list-more-options .delete-list {
  color: var(--Delete-Accent);
  fill: var(--Delete-Accent);
}

/* SVG icons sizes */
.button-icon,
.option-icon {
  width: 24px;
  height: 24px;
}

/* Task details */
dialog#task-details {
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 600px;
}

dialog#task-details .actions-container {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  justify-content: end;
  gap: 4px;
}

dialog#task-details .actions-container button {
  background-color: var(--White);
  padding: 6px;
  fill: var(--Black);
  transition: background-color 200ms;
}

dialog#task-details .actions-container button:hover {
  background-color: var(--Black-10);
  transition: background-color 200ms;
}

dialog#task-details .actions-container .button-icon {
  display: block;
}

dialog#task-details .main-information {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 16px;
}

.main-information .task-title {
  color: var(--Black);
  font-weight: 600;
  font-size: 1.6rem;
  word-wrap: break-word;
}

.main-information .task-description {
  font-size: 1.1rem;
  color: var(--Black-75);
  max-height: 500px;
  white-space: pre-wrap;
  overflow-y: hidden;
  word-wrap: break-word;
}

.task-description.scroll-text {
  overflow-y: scroll;
}

dialog#task-details .secondary-information {
  display: flex;
  gap: 24px;
  border-top: 1px solid var(--Black-25);
  padding-top: 16px;
}

.secondary-information .info-element {
  display: flex;
  gap: 4px;
}

.info-element .icon {
  min-width: 24px;
  max-height: 24px;
}

.info-element.task-date {
  color: var(--Primary);
  fill: var(--Primary);
}

.info-element.task-priority[data-value="Low"] {
  color: var(--Low-Priority);
  fill: var(--Low-Priority);
}

.info-element.task-priority[data-value="Medium"] {
  color: var(--Medium-Priority);
  fill: var(--Medium-Priority);
}

.info-element.task-priority[data-value="High"] {
  color: var(--High-Priority);
  fill: var(--High-Priority);
}

.info-element.task-list {
  max-width: 160px;
  color: var(--Task-List);
  fill: var(--Task-List);
}

.task-list .label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Delete list and Delete task */
dialog#delete-list,
dialog#delete-task {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 32px;
  width: 400px;
  color: var(--Black);
}

dialog#delete-list .message,
dialog#delete-task .message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

dialog#delete-list .message-title,
dialog#delete-task .message-title {
  font-weight: 600;
  font-size: 1.4rem;
}

dialog#delete-list .sub-message,
dialog#delete-task .sub-message {
  color: var(--Black-75);
}

dialog#delete-list button.primary,
dialog#delete-task button.primary {
  background-color: var(--Delete-Accent);
}

.list-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Black-05);
  border-radius: 8px;
  padding: 8px 16px;
}

.list-info .list-icon {
  display: block;
  fill: var(--Primary);
  width: 60px;
  height: 60px;
}

.list-info .list-title {
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--Primary);
}

/* Notifications */
#notifications-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: fixed;
  width: 350px;
  bottom: 16px;
  right: 16px;
}

.notification {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: hsl(143, 47%, 45%);
  color: var(--White);
  padding: 26px 22px;
  border-radius: 8px;
  width: 100%;
  user-select: none;
  animation-name: showNotification;
  animation-duration: 300ms;
}

.notification.closing {
  animation-name: closeNotification;
  animation-duration: 300ms;
  animation-fill-mode: forwards;
}

.notification-icon {
  display: block;
  width: 26px;
  height: 26px;
}

.notification-label {
  font-size: 1.1rem;
  font-weight: 600;
}

.close-notification {
  position: absolute;
  display: block;
  visibility: hidden;
  opacity: 0;
  right: 8px;
  top: 8px;
  background-color: #00000000;
  padding: 6px;
  transition: 200ms;
}

.close-notification:hover {
  background-color: #00000018;
  transition: background-color 200ms;
}

.notification:hover .close-notification {
  visibility: visible;
  opacity: 1;
  transition: 200ms;
}

.notification-icon,
.close-notification .button-icon {
  fill: var(--White);
}

.close-notification .button-icon {
  display: block;
  width: 16px;
  height: 16px;
}

.button-icon svg {
  display: block;
}

/* Animations */

@keyframes showDialog {
  from {
    transform: translate(0px, 100px);
    opacity: 0;
  }
  to {
    transform: translate(0px, 0px);
    opacity: 1;
  }
}

@keyframes showDialogBackdrop {
  from {
    background-color: #00000000;
  }
  to {
    background-color: #00000099;
  }
}

@keyframes closeDialog {
  from {
    transform: translate(0px, 0px);
    opacity: 1;
  }

  to {
    transform: translate(0px, 100px);
    opacity: 0;
  }
}

@keyframes closeDialogBackdrop {
  from {
    background-color: #00000099;
  }
  to {
    background-color: #00000000;
  }
}

@keyframes showNotification {
  from {
    transform: translate(100px, 0px);
    opacity: 0;
  }
  to {
    transform: translate(0px, 0px);
    opacity: 1;
  }
}

@keyframes closeNotification {
  from {
    transform: translate(0px, 0px);
    opacity: 1;
  }
  to {
    transform: translate(100px, 0px);
    opacity: 0;
  }
}

/* Media queries */
@media only screen and (max-width: 1100px) {
  .task .sub-information {
    flex-direction: column;
    gap: 0;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap\");\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\n:root {\n  /* Typography */\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif;\n\n  /* Colors: */\n  --Black: #25272c;\n  --Black-75: #25272cbf;\n  --Black-50: #25272c80;\n  --Black-25: #25272c40;\n  --Black-10: #25272c1a;\n  --Black-05: #25272c0d;\n  --White: #fafafa;\n  --Primary: #4c7dfb;\n  --Delete-Accent: #ec3a4f;\n  --High-Priority: #ee4e39;\n  --Medium-Priority: #ea7e1a;\n  --Low-Priority: #89715d;\n  --Task-List: #2f9e62;\n  --List-Background-Gradient: linear-gradient(90deg, #66a2e8 0%, #989be9 100%);\n}\n\nbody {\n  color: var(--Black);\n  background-color: var(--White);\n\n  display: flex;\n  min-height: 100vh;\n  margin: 0;\n}\n\nh1,\nh2 {\n  margin: 0;\n  font-weight: 700;\n}\n\nh1 {\n  font-size: 2.534rem;\n}\n\nh2 {\n  font-size: 1.6rem;\n  font-weight: 600;\n}\n\np {\n  margin: 0;\n}\n\n/* Sidebar */\n\n#sidebar {\n  position: fixed;\n  background-color: var(--Black-05);\n  padding: 26px 32px;\n  border-right: 1px solid var(--Black-25);\n  width: 256px;\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 32px;\n  user-select: none;\n}\n\n.app-info-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n#app-icon {\n  display: block;\n  width: 32px;\n  height: 32px;\n  fill: var(--Primary);\n}\n\n#app-title {\n  color: var(--Primary);\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n\n.sidebar-lists-container {\n  width: 100%;\n  border-top: 1px solid var(--Black-25);\n  padding-top: 32px;\n}\n\n.sidebar-lists-container .title {\n  color: var(--Black-50);\n  font-size: 0.9rem;\n  font-weight: 400;\n}\n\n.user-lists .list-title-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n#create-list-button {\n  padding: 4px;\n  transition: 100ms;\n}\n\n#create-list-button:hover {\n  background-color: var(--Black-10);\n  transition: 100ms;\n}\n\n#create-list-button .create-list-icon {\n  display: block;\n  width: 24px;\n  height: 24px;\n  fill: var(--Black-50);\n}\n\n.lists-group {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.list-sidebar-element {\n  color: var(--Black);\n  font-weight: 500;\n  border-radius: 8px;\n  padding: 8px;\n  cursor: pointer;\n  display: flex;\n  gap: 4px;\n  transition: 200ms;\n}\n\n.list-sidebar-element .list-sidebar-element-icon {\n  display: block;\n  min-width: 24px;\n  max-height: 24px;\n}\n\n.list-sidebar-element .list-sidebar-element-label {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.list-sidebar-element.selected {\n  font-weight: 700;\n  transition: 200ms;\n}\n\n.list-sidebar-element:hover,\n.list-sidebar-element.selected {\n  background-color: var(--Black-10);\n  transition: 200ms;\n}\n\n.lower-sidebar {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: end;\n  width: 100%;\n}\n\n#credits {\n  color: var(--Black-50);\n  font-size: 0.875rem;\n}\n\n#credits a {\n  text-decoration: none;\n  font-weight: 500;\n}\n\n#credits a,\n#credits a:visited {\n  color: var(--Primary);\n}\n\n/* List content */\n\n#list-page {\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - 256px);\n  margin-left: auto;\n}\n\n#list-background {\n  height: 152px;\n  background: var(--List-Background-Gradient);\n}\n\n.list-container {\n  margin: 48px auto;\n  width: clamp(400px, 50vw, 832px);\n}\n\n.title-section {\n  display: grid;\n  grid-template-columns: auto max-content;\n  align-items: center;\n  max-width: 100%;\n  min-width: 0;\n  min-height: 0;\n  gap: 26px;\n  margin-bottom: 48px;\n  word-wrap: break-word;\n}\n\n.title-section #list-title {\n  min-width: 0;\n  min-height: 0;\n}\n\n.title-section .options-controller-button {\n  padding: 8px;\n  background-color: var(--White);\n  transition: background-color 200ms;\n}\n\n.title-section .options-controller-button:hover,\n.title-section .options-controller-button:focus {\n  background-color: var(--Black-10);\n  transition: background-color 200ms;\n}\n\n.title-section .list-more-options .button-icon {\n  fill: var(--Black);\n  width: 35px;\n  height: 35px;\n}\n\n#new-task-button {\n  width: 100%;\n  padding: 24px 32px;\n  font-weight: 400;\n  color: var(--Black-50);\n  border: 1px solid var(--Black-25);\n  border-radius: 8px;\n  background-color: var(--White);\n  transition: background-color 200ms;\n}\n\n#new-task-button:hover {\n  background-color: hsl(0, 0%, 94%);\n  transition: background-color 200ms;\n}\n\n.empty-page {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 48px auto;\n  width: clamp(400px, 50vw, 500px);\n  text-align: center;\n  gap: 24px;\n}\n\n.empty-page .empty-title {\n  color: var(--Primary);\n  font-weight: 700;\n  font-size: 2.5rem;\n}\n\n.empty-page .empty-subtitle {\n  font-size: 1.2rem;\n  color: var(--Black-50);\n}\n\n.hide {\n  display: none;\n}\n\n/* Tasks */\n\n#tasks-container,\n#completed-tasks-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.task {\n  background-color: var(--Black-05);\n  padding: 24px 32px;\n  border: 1px solid var(--Black-25);\n  border-radius: 8px;\n  display: grid;\n  grid-template-columns: 32px auto max-content;\n  align-items: center;\n  min-height: 0;\n  min-width: 0;\n  gap: 32px;\n  cursor: pointer;\n  transition: background-color 200ms;\n}\n\n.task > div {\n  min-height: 0;\n  min-width: 0;\n}\n\n.task:hover {\n  background-color: hsl(195, 10%, 87%);\n  transition: background-color 200ms;\n}\n\n.task .complete-task-button {\n  display: block;\n  min-width: 32px;\n  height: 32px;\n  cursor: pointer;\n}\n\n.task .main-information {\n  display: flex;\n  flex-direction: column;\n}\n\n.task .title {\n  color: var(--Black);\n  font-weight: 500;\n  font-size: 1.375rem;\n}\n\n.task .description {\n  color: var(--Black-50);\n}\n\n.task .title,\n.task .description {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.task .sub-information {\n  display: flex;\n  gap: 12px;\n  font-weight: 400;\n}\n\n.task .priority.low {\n  color: var(--Low-Priority);\n  fill: var(--Low-Priority);\n}\n\n.task .priority.medium {\n  color: var(--Medium-Priority);\n  fill: var(--Medium-Priority);\n}\n\n.task .priority.high {\n  color: var(--High-Priority);\n  fill: var(--High-Priority);\n}\n\n.task .priority,\n.task .date {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n\n.task .date {\n  color: var(--Black-75);\n  fill: var(--Black-75);\n}\n\n.task .date-icon,\n.task .priority-icon {\n  display: block;\n  min-width: 24px;\n  max-height: 24px;\n}\n\n/* Completed tasks */\n.completed-tasks-section {\n  border-top: 1px solid var(--Black-25);\n  margin-top: 32px;\n  padding-top: 32px;\n}\n\n.completed-tasks-title-section {\n  display: flex;\n  gap: 24px;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n#completed-tasks-container {\n  display: none;\n}\n\n#completed-tasks-container .task .title {\n  text-decoration: line-through;\n  color: var(--Black-75);\n}\n\n.expand-tasks {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  /* Set 360 degrees to rotate to right instead to the left */\n  transform: rotate(360deg);\n  transition: 300ms;\n}\n\n.completed-tasks-section.show .expand-tasks {\n  transform: rotate(180deg);\n  transition: 300ms;\n}\n\n.completed-tasks-section.show #completed-tasks-container {\n  display: flex;\n}\n\n/* Dialogs */\n\ndialog {\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  background-color: var(--White);\n  border: none;\n  border-radius: 16px;\n  animation-name: showDialog;\n  animation-duration: 300ms;\n}\n\ndialog.closing {\n  animation-name: closeDialog;\n  animation-duration: 300ms;\n  animation-fill-mode: forwards;\n}\n\ndialog::backdrop {\n  background-color: #00000099;\n  animation-name: showDialogBackdrop;\n  animation-duration: 300ms;\n}\n\ndialog.closing::backdrop {\n  animation-name: closeDialogBackdrop;\n  animation-duration: 300ms;\n  animation-fill-mode: forwards;\n}\n\ndialog#new-list,\ndialog#edit-list,\ndialog#new-task,\ndialog#edit-task {\n  gap: 16px;\n}\n\ndialog#new-task,\ndialog#edit-task {\n  width: 550px;\n}\n\ndialog .dialog-buttons {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: end;\n  gap: 8px;\n}\n\ninput[type=\"text\"] {\n  font-family: inherit;\n  font-size: 1.375rem;\n  font-weight: 500;\n  padding: 2px 55px 0 4px;\n  background-color: var(--White);\n  color: var(--Black);\n  border: none;\n  border-bottom: 3px solid;\n  caret-color: var(--Primary);\n  width: 100%;\n}\n\ninput[type=\"text\"]:placeholder-shown {\n  border-bottom-color: var(--Black-25);\n  transition: 200ms;\n}\n\ninput[type=\"text\"]:focus,\ninput[type=\"text\"]:not(:placeholder-shown) {\n  border-bottom-color: var(--Primary);\n  transition: 200ms;\n}\n\ninput[type=\"text\"]:focus {\n  outline: none;\n}\n\ninput[type=\"text\"]::placeholder {\n  font-weight: 400;\n  color: var(--Black-50);\n}\n\nbutton {\n  font-family: inherit;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  padding: 10px 16px;\n  font-size: 1rem;\n  font-weight: 600;\n  user-select: none;\n}\n\nbutton:focus {\n  outline: 2px solid var(--Primary);\n  outline-offset: 2px;\n}\n\nbutton.primary {\n  background-color: var(--Primary);\n  color: var(--White);\n  transition: background-color 200ms;\n}\n\nbutton.primary:hover {\n  background-color: #79a7fc;\n}\n\nbutton.primary:active {\n  background-color: #3352cc;\n}\n\nbutton.primary:disabled {\n  background-color: #b3d1ff;\n  color: #f0f6ff;\n  cursor: not-allowed;\n}\n\nbutton.secondary {\n  background-color: #c9cbcf;\n  color: var(--Black-75);\n  transition: background-color 200ms;\n}\n\nbutton.secondary:hover {\n  background-color: #a7a9af;\n}\n\nbutton.secondary:active {\n  background-color: #878a92;\n}\n\n/* New list dialog */\ndialog#new-list,\ndialog#edit-list {\n  width: 550px;\n}\n\ndialog#new-list .title-container,\ndialog#edit-list .title-container {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n\ndialog#new-list .title-icon-input,\ndialog#edit-list .title-icon-input {\n  width: 32px;\n  height: 32px;\n  padding: 4px;\n  border: 2px solid var(--Black-25);\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n#list-title-input {\n  width: 100%;\n}\n\n/* New task dialog */\n\n/* Task information */\n\ntextarea {\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: 400;\n  color: var(--Black-75);\n  background-color: var(--Black-05);\n  border: none;\n  border-radius: 8px;\n  padding: 8px 16px;\n  width: 100%;\n  outline: none;\n  resize: none;\n}\n\ntextarea::placeholder {\n  color: var(--Black-50);\n}\n\n/* Inputs */\n\n/* Text and textarea input */\n.text-input-container,\n.textarea-input-container {\n  position: relative;\n}\n\n.textarea-input-container {\n  display: flex;\n}\n\n.text-counter {\n  position: absolute;\n  bottom: 4px;\n  opacity: 0;\n  font-size: 0.8rem;\n  color: var(--Primary);\n  user-select: none;\n  transition: opacity 200ms;\n}\n\ninput[type=\"text\"] + .text-counter {\n  right: 4px;\n}\n\ntextarea + .text-counter {\n  right: 8px;\n}\n\ninput[type=\"text\"]:focus + .text-counter,\ntextarea:focus + .text-counter {\n  opacity: 1;\n  transition: opacity 200ms;\n}\n\n/* Date input */\n#date-input input[type=\"date\"] {\n  visibility: hidden;\n  width: 0;\n  height: 0;\n  position: absolute;\n  bottom: 77px;\n}\n\n/* Change button and label color when selecting a date */\n#date-input:not([data-value=\"\"]) button {\n  border-color: var(--Primary);\n  color: var(--Primary);\n  fill: var(--Primary);\n}\n\n/* Select input grid */\n.select-input-grid .select-button {\n  padding: 8px;\n  border: 1px solid var(--Primary);\n}\n\n.select-input-grid .button-icon {\n  fill: var(--Primary);\n}\n\n.select-input-grid .options-grid {\n  position: fixed;\n  display: none;\n  grid-template-columns: repeat(4, 60px);\n  grid-auto-rows: 60px;\n  padding: 6px;\n  gap: 6px;\n}\n\n.select-input-grid.expand .options-grid {\n  display: grid;\n}\n\n.options-grid .option {\n  padding: 10px;\n  fill: var(--Black-75);\n  border: 1px solid var(--Black-25);\n  border-radius: 6px;\n  background-color: var(--White);\n  cursor: pointer;\n  transition: background-color 200ms;\n}\n\n.options-grid .option:hover {\n  background-color: var(--Black-10);\n  transition: background-color 200ms;\n}\n\n/* Select inputs */\ndialog#new-task .task-select-inputs,\ndialog#edit-task .task-select-inputs {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.select-input,\n.select-input-grid,\n.options-controller {\n  position: relative;\n}\n\n.select-input .select-button,\n.select-input-grid .select-button,\n#date-input .date-button,\n.options-controller .options-controller-button {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--Black-50);\n  fill: var(--Black-50);\n  font-weight: 400;\n  background-color: var(--White);\n  border-radius: 8px;\n  user-select: none;\n}\n\n.select-input .button-icon,\n.select-list .button-icon,\n#date-input .button-icon {\n  min-width: 24px;\n  max-height: 24px;\n}\n\n.select-input .select-button,\n#date-input .date-button {\n  padding: 6px 10px;\n  border: 1px solid var(--Black-25);\n}\n\n#select-list button {\n  max-width: 180px;\n}\n\n#select-list .button-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.select-input .options,\n.select-input-grid .options-grid,\n.options-controller .options {\n  position: fixed;\n  display: none;\n  flex-direction: column;\n  background-color: var(--White);\n  color: var(--Black);\n  border: 1px solid #a3a3a3;\n  border-radius: 8px;\n}\n\n.options :first-child {\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n}\n\n.options :last-child {\n  border-bottom-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n\n.options .option {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background-color: var(--White);\n  color: var(--Black);\n  fill: var(--Black);\n  padding: 8px;\n  width: 100%;\n  transition: background-color 200ms;\n  cursor: pointer;\n  user-select: none;\n}\n\n.options .option:hover {\n  background-color: #e8e8e8;\n  transition: background-color 200ms;\n}\n\n.select-input.expand .options,\n.options-controller.expand .options {\n  display: flex;\n}\n\n/* Select priority input color depending to selected value */\n#select-priority[data-value=\"Low\"] .select-button {\n  border-color: var(--Low-Priority);\n  color: var(--Low-Priority);\n  fill: var(--Low-Priority);\n}\n\n#select-priority[data-value=\"Medium\"] .select-button {\n  border-color: var(--Medium-Priority);\n  color: var(--Medium-Priority);\n  fill: var(--Medium-Priority);\n}\n\n#select-priority[data-value=\"High\"] .select-button {\n  border-color: var(--High-Priority);\n  color: var(--High-Priority);\n  fill: var(--High-Priority);\n}\n\n/* Select priority input elements text color */\n#select-priority .option[data-value=\"Priority\"] {\n  color: var(--Black-50);\n  fill: var(--Black-50);\n}\n\n#select-priority .option[data-value=\"Low\"] {\n  color: var(--Low-Priority);\n  fill: var(--Low-Priority);\n}\n\n#select-priority .option[data-value=\"Medium\"] {\n  color: var(--Medium-Priority);\n  fill: var(--Medium-Priority);\n}\n\n#select-priority .option[data-value=\"High\"] {\n  color: var(--High-Priority);\n  fill: var(--High-Priority);\n}\n\n/* List input button color */\n#select-list:not([data-value=\"\"]) .select-button {\n  border-color: var(--Task-List);\n  color: var(--Task-List);\n  fill: var(--Task-List);\n}\n\n#select-list .option {\n  color: var(--Black-75);\n  fill: var(--Black-75);\n}\n\n/* Options controller colors */\n.task-more-options .delete-task,\n.list-more-options .delete-list {\n  color: var(--Delete-Accent);\n  fill: var(--Delete-Accent);\n}\n\n/* SVG icons sizes */\n.button-icon,\n.option-icon {\n  width: 24px;\n  height: 24px;\n}\n\n/* Task details */\ndialog#task-details {\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  max-width: 600px;\n}\n\ndialog#task-details .actions-container {\n  display: flex;\n  flex-direction: row-reverse;\n  width: 100%;\n  justify-content: end;\n  gap: 4px;\n}\n\ndialog#task-details .actions-container button {\n  background-color: var(--White);\n  padding: 6px;\n  fill: var(--Black);\n  transition: background-color 200ms;\n}\n\ndialog#task-details .actions-container button:hover {\n  background-color: var(--Black-10);\n  transition: background-color 200ms;\n}\n\ndialog#task-details .actions-container .button-icon {\n  display: block;\n}\n\ndialog#task-details .main-information {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 8px;\n  margin-bottom: 16px;\n}\n\n.main-information .task-title {\n  color: var(--Black);\n  font-weight: 600;\n  font-size: 1.6rem;\n  word-wrap: break-word;\n}\n\n.main-information .task-description {\n  font-size: 1.1rem;\n  color: var(--Black-75);\n  max-height: 500px;\n  white-space: pre-wrap;\n  overflow-y: hidden;\n  word-wrap: break-word;\n}\n\n.task-description.scroll-text {\n  overflow-y: scroll;\n}\n\ndialog#task-details .secondary-information {\n  display: flex;\n  gap: 24px;\n  border-top: 1px solid var(--Black-25);\n  padding-top: 16px;\n}\n\n.secondary-information .info-element {\n  display: flex;\n  gap: 4px;\n}\n\n.info-element .icon {\n  min-width: 24px;\n  max-height: 24px;\n}\n\n.info-element.task-date {\n  color: var(--Primary);\n  fill: var(--Primary);\n}\n\n.info-element.task-priority[data-value=\"Low\"] {\n  color: var(--Low-Priority);\n  fill: var(--Low-Priority);\n}\n\n.info-element.task-priority[data-value=\"Medium\"] {\n  color: var(--Medium-Priority);\n  fill: var(--Medium-Priority);\n}\n\n.info-element.task-priority[data-value=\"High\"] {\n  color: var(--High-Priority);\n  fill: var(--High-Priority);\n}\n\n.info-element.task-list {\n  max-width: 160px;\n  color: var(--Task-List);\n  fill: var(--Task-List);\n}\n\n.task-list .label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* Delete list and Delete task */\ndialog#delete-list,\ndialog#delete-task {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  gap: 32px;\n  width: 400px;\n  color: var(--Black);\n}\n\ndialog#delete-list .message,\ndialog#delete-task .message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\ndialog#delete-list .message-title,\ndialog#delete-task .message-title {\n  font-weight: 600;\n  font-size: 1.4rem;\n}\n\ndialog#delete-list .sub-message,\ndialog#delete-task .sub-message {\n  color: var(--Black-75);\n}\n\ndialog#delete-list button.primary,\ndialog#delete-task button.primary {\n  background-color: var(--Delete-Accent);\n}\n\n.list-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--Black-05);\n  border-radius: 8px;\n  padding: 8px 16px;\n}\n\n.list-info .list-icon {\n  display: block;\n  fill: var(--Primary);\n  width: 60px;\n  height: 60px;\n}\n\n.list-info .list-title {\n  font-weight: 600;\n  font-size: 1.2rem;\n  color: var(--Primary);\n}\n\n/* Notifications */\n#notifications-container {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  position: fixed;\n  width: 350px;\n  bottom: 16px;\n  right: 16px;\n}\n\n.notification {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background-color: hsl(143, 47%, 45%);\n  color: var(--White);\n  padding: 26px 22px;\n  border-radius: 8px;\n  width: 100%;\n  user-select: none;\n  animation-name: showNotification;\n  animation-duration: 300ms;\n}\n\n.notification.closing {\n  animation-name: closeNotification;\n  animation-duration: 300ms;\n  animation-fill-mode: forwards;\n}\n\n.notification-icon {\n  display: block;\n  width: 26px;\n  height: 26px;\n}\n\n.notification-label {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n.close-notification {\n  position: absolute;\n  display: block;\n  visibility: hidden;\n  opacity: 0;\n  right: 8px;\n  top: 8px;\n  background-color: #00000000;\n  padding: 6px;\n  transition: 200ms;\n}\n\n.close-notification:hover {\n  background-color: #00000018;\n  transition: background-color 200ms;\n}\n\n.notification:hover .close-notification {\n  visibility: visible;\n  opacity: 1;\n  transition: 200ms;\n}\n\n.notification-icon,\n.close-notification .button-icon {\n  fill: var(--White);\n}\n\n.close-notification .button-icon {\n  display: block;\n  width: 16px;\n  height: 16px;\n}\n\n.button-icon svg {\n  display: block;\n}\n\n/* Animations */\n\n@keyframes showDialog {\n  from {\n    transform: translate(0px, 100px);\n    opacity: 0;\n  }\n  to {\n    transform: translate(0px, 0px);\n    opacity: 1;\n  }\n}\n\n@keyframes showDialogBackdrop {\n  from {\n    background-color: #00000000;\n  }\n  to {\n    background-color: #00000099;\n  }\n}\n\n@keyframes closeDialog {\n  from {\n    transform: translate(0px, 0px);\n    opacity: 1;\n  }\n\n  to {\n    transform: translate(0px, 100px);\n    opacity: 0;\n  }\n}\n\n@keyframes closeDialogBackdrop {\n  from {\n    background-color: #00000099;\n  }\n  to {\n    background-color: #00000000;\n  }\n}\n\n@keyframes showNotification {\n  from {\n    transform: translate(100px, 0px);\n    opacity: 0;\n  }\n  to {\n    transform: translate(0px, 0px);\n    opacity: 1;\n  }\n}\n\n@keyframes closeNotification {\n  from {\n    transform: translate(0px, 0px);\n    opacity: 1;\n  }\n  to {\n    transform: translate(100px, 0px);\n    opacity: 0;\n  }\n}\n\n/* Media queries */\n@media only screen and (max-width: 1100px) {\n  .task .sub-information {\n    flex-direction: column;\n    gap: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/lists/book.svg":
/*!********************************!*\
  !*** ./src/img/lists/book.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M242.87-71.87q-37.783 0-64.392-26.608-26.609-26.609-26.609-64.392v-634.26q0-37.783 26.609-64.392 26.609-26.609 64.392-26.609h474.26q37.783 0 64.392 26.609 26.609 26.609 26.609 64.392v634.26q0 37.783-26.609 64.392Q754.913-71.87 717.13-71.87H242.87Zm197.847-725.26v240.217q0 13.435 10.935 19.772 10.935 6.337 23.131-.381l42.065-24.934q11.195-6.718 23.369-6.718t23.37 6.718l42.065 24.934q12.196 6.718 23.631.381 11.434-6.337 11.434-19.772V-797.13h-200Z\"></path></svg>"

/***/ }),

/***/ "./src/img/lists/cloud.svg":
/*!*********************************!*\
  !*** ./src/img/lists/cloud.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M260.717-151.869q-94.347 0-161.239-65.153-66.891-65.152-66.891-159.261 0-80.391 47.358-143.663 47.359-63.272 125.033-80.75 26.435-92.956 102.631-150.195 76.195-57.24 172.391-57.24 118.196 0 201.25 81.74 83.054 81.739 85.685 199.695 69.717 10.631 115.098 63.805 45.38 53.174 45.38 123.608 0 78.109-54.652 132.761Q818.109-151.869 740-151.869H260.717Z\"></path></svg>"

/***/ }),

/***/ "./src/img/lists/default.svg":
/*!***********************************!*\
  !*** ./src/img/lists/default.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M361.913-239.283h236.413q17.717 0 29.696-12.097Q640-263.478 640-281.196q0-17.717-11.978-29.695-11.979-11.979-29.696-11.979H361.674q-17.717 0-29.696 11.979Q320-298.913 320-281.196q0 17.718 12.098 29.816 12.098 12.097 29.815 12.097Zm0-160h236.413q17.717 0 29.696-12.097Q640-423.478 640-441.196q0-17.717-11.978-29.695-11.979-11.979-29.696-11.979H361.674q-17.717 0-29.696 11.979Q320-458.913 320-441.196q0 17.718 12.098 29.816 12.098 12.097 29.815 12.097ZM242.87-71.869q-37.783 0-64.392-26.61-26.609-26.608-26.609-64.391v-634.26q0-37.783 26.609-64.392 26.609-26.609 64.392-26.609h282.934q18.153 0 34.685 6.837 16.533 6.837 29.207 19.511l192.087 192.087q12.674 12.674 19.511 29.207 6.837 16.532 6.837 34.685v442.934q0 37.783-26.609 64.392Q754.913-71.87 717.13-71.87H242.87ZM517.13-642.63q0 19.152 13.174 32.326t32.326 13.174h154.5l-200-200v154.5Z\"></path></svg>"

/***/ }),

/***/ "./src/img/lists/heart.svg":
/*!*********************************!*\
  !*** ./src/img/lists/heart.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M479.761-139.826q-16.152 0-32.446-5.837-16.293-5.837-28.967-18.272l-69.479-63.478q-105.521-96.283-191.26-192.62Q71.869-516.37 71.869-634q0-97.587 65.153-162.978 65.152-65.392 162.739-65.392 52.522 0 99.282 21.424 46.761 21.424 80.718 59.467 33.956-38.043 80.717-59.467 46.761-21.424 99.283-21.424 97.587 0 163.098 65.392Q888.37-731.587 888.37-634q0 117.63-85.598 214.467-85.598 96.837-193.12 193.359l-68.239 62.478q-12.674 12.435-29.087 18.153-16.413 5.717-32.565 5.717Z\"></path></svg>"

/***/ }),

/***/ "./src/img/lists/lightbulb.svg":
/*!*************************************!*\
  !*** ./src/img/lists/lightbulb.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M479.992-65.413q-34.188 0-58.525-25.054-24.337-25.054-24.337-60.685h165.74q0 35.631-24.346 60.685-24.345 25.054-58.532 25.054Zm-120.47-127.652q-17.712 0-29.693-12.05-11.981-12.05-11.981-29.863 0-17.712 11.981-29.693 11.981-11.981 29.693-11.981h240.956q17.712 0 29.693 11.982 11.981 11.983 11.981 29.696t-11.981 29.811q-11.981 12.098-29.693 12.098H359.522Zm-31.674-125.5Q256.696-361 214.282-432.033q-42.413-71.032-42.413-154.663 0-128.288 89.864-218.09 89.863-89.801 218.239-89.801t218.267 89.801q89.892 89.802 89.892 218.09 0 83.87-42.413 154.783Q703.304-361 632.152-318.565H327.848Z\"></path></svg>"

/***/ }),

/***/ "./src/img/lists/pencil.svg":
/*!**********************************!*\
  !*** ./src/img/lists/pencil.svg ***!
  \**********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M168.957-114.782q-24.348 5.717-42.001-12.055-17.652-17.772-12.174-42.12l36.435-176.934 194.674 194.674-176.934 36.435Zm240.021-87.348L202.13-408.978 612.022-818.87q26.348-26.348 64.652-26.348t64.652 26.348l77.544 77.544q26.348 26.348 26.348 64.652t-26.348 64.652L408.978-202.13Z\"></path></svg>"

/***/ }),

/***/ "./src/img/lists/plane.svg":
/*!*********************************!*\
  !*** ./src/img/lists/plane.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"m269.456-269.217-100.717-55.718q-12.674-6.956-14.413-20.608-1.739-13.653 7.696-23.087l13.674-13.674q4.717-4.718 11.174-6.577 6.456-1.858 12.652-.619l86.087 12.239L435.63-527.283 166.978-673.848q-16.913-9.195-19.772-28.467-2.858-19.272 10.816-32.946l11.195-11.196q7.957-7.956 17.653-10.315 9.695-2.359 19.891.12l363 93.717 143.608-142.326q18.674-18.674 46.326-18.674 27.653 0 46.327 18.674t18.674 46.326q0 27.653-18.674 46.327L663.174-569.522l93.478 360.761q2.479 11.196-.38 22.131-2.859 10.934-10.815 18.891l-5.718 5.478q-15.674 15.674-36.804 12.435-21.131-3.239-31.326-22.391L527.522-435.391 377.5-285.37l12.239 83.609q1.239 8.196-1.239 15.511-2.478 7.315-8.196 13.033l-5.956 5.956q-11.674 11.674-28.065 9.696-16.392-1.978-24.587-16.891l-52.24-94.761Z\"></path></svg>"

/***/ }),

/***/ "./src/img/lists/school.svg":
/*!**********************************!*\
  !*** ./src/img/lists/school.svg ***!
  \**********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M839.522-320.239v-231.696L523.261-380.043Q502.63-368.848 480-368.728q-22.63.119-43.261-11.315L106.152-560.217q-12.435-6.718-17.772-17.033-5.337-10.315-5.337-22.75t5.337-22.75q5.337-10.315 17.772-17.033l330.587-179.934q10.196-5.718 21.011-8.577 10.815-2.858 22.25-2.858t22.25 2.858q10.815 2.859 21.011 8.577l379.804 207.043q11.196 5.717 17.533 16.533 6.337 10.815 6.337 23.25V-320q0 18.435-12.576 31.011t-31.011 12.576q-18.435 0-31.131-12.696-12.695-12.695-12.695-31.13ZM436.739-140.283 244.391-243.978q-22.63-12.435-35.185-33.946-12.554-21.511-12.554-46.62V-466.5l240.087 130.044Q457.37-325.261 480-325.261q22.63 0 43.261-11.195L763.348-466.5v141.956q0 25.109-12.554 46.62-12.555 21.511-35.185 33.946L523.261-140.283q-10.196 5.718-21.011 8.457-10.815 2.739-22.25 2.739t-22.25-2.739q-10.815-2.739-21.011-8.457Z\"></path></svg>"

/***/ }),

/***/ "./src/img/lists/shopping.svg":
/*!************************************!*\
  !*** ./src/img/lists/shopping.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M280-76.413q-33 0-56.5-23.5t-23.5-56.5q0-33 23.5-56.5t56.5-23.5q33 0 56.5 23.5t23.5 56.5q0 33-23.5 56.5t-56.5 23.5Zm400 0q-33 0-56.5-23.5t-23.5-56.5q0-33 23.5-56.5t56.5-23.5q33 0 56.5 23.5t23.5 56.5q0 33-23.5 56.5t-56.5 23.5ZM210.152-803.587h580.913q27.213 0 41.411 24.087t1.046 48.913l-136.5 246.674q-11.478 20.717-30.803 32.315Q646.894-440 623.913-440H328.065l-41.847 76.413H720q18.524 0 31.056 12.531 12.531 12.532 12.531 31.056t-12.531 31.056Q738.524-276.413 720-276.413H280q-47.63 0-71.587-41.413t-1.761-82.087L259.935-496 117.848-796.413H80q-18.525 0-31.056-12.531Q36.413-821.476 36.413-840t12.531-31.056Q61.475-883.587 80-883.587h63.565q12.674 0 24.013 6.811 11.339 6.811 17.009 19.298l25.565 53.891Z\"></path></svg>"

/***/ }),

/***/ "./src/img/lists/sofa.svg":
/*!********************************!*\
  !*** ./src/img/lists/sofa.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M205.5-103.5q-19.152 0-32.326-13.174T160-149v-43.587q-53.109 0-90.261-37.162Q32.587-266.911 32.587-320v-200q0-34.48 24.695-59.033 24.696-24.554 59.163-24.554 34.466 0 59.011 24.554Q200-554.48 200-520v160h560v-160q0-34.435 24.544-59.011 24.545-24.576 59.011-24.576 34.467 0 59.163 24.554Q927.413-554.48 927.413-520v200q0 53.089-37.162 90.251-37.162 37.162-90.251 37.162V-149q0 19.152-13.174 32.326T754.5-103.5q-19.152 0-32.326-13.174T709-149v-43.587H251V-149q0 19.152-13.174 32.326T205.5-103.5ZM280-440v-80q0-57.391-35.891-101.967-35.892-44.577-91.522-61.62V-720q0-53.089 37.162-90.251 37.162-37.162 90.251-37.162h400q53.089 0 90.251 37.162 37.162 37.162 37.162 90.251v36.413q-56.869 12.565-92.141 58.38Q680-579.391 680-520v80H280Z\"></path></svg>"

/***/ }),

/***/ "./src/img/lists/star.svg":
/*!********************************!*\
  !*** ./src/img/lists/star.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M480-219.913 313.283-119.435q-12.674 7.957-26.348 6.837-13.674-1.119-23.87-9.076-10.196-7.956-15.793-20.011-5.598-12.054-2.12-26.728l44.239-189.717-147.717-127.718q-11.435-10.195-14.294-23.25-2.859-13.054 1.381-25.489 4.239-12.435 13.793-20.631 9.555-8.195 25.228-10.195l194.718-17 75.478-178.957q5.718-13.913 17.533-20.63 11.815-6.718 24.489-6.718 12.674 0 24.489 6.718 11.815 6.717 17.533 20.63L597.5-582.413l194.718 17q15.673 2 25.228 10.195 9.554 8.196 13.793 20.631 4.24 12.435 1.381 25.489-2.859 13.055-14.294 23.25L670.609-358.13l44.239 189.717q3.478 14.674-2.12 26.728-5.597 12.055-15.793 20.011-10.196 7.957-23.87 9.076-13.674 1.12-26.348-6.837L480-219.913Z\"></path></svg>"

/***/ }),

/***/ "./src/img/lists/tree.svg":
/*!********************************!*\
  !*** ./src/img/lists/tree.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M397.935-231.869H190.217q-27.348 0-40.782-23.87-13.435-23.87 2.239-46.739l113.26-169.391h-2.282q-24.478 0-36.098-21.74-11.62-21.739 2.62-41.978l213.282-304.826q6.957-9.435 17.033-14.413 10.076-4.979 20.511-4.979 10.435 0 20.511 4.979 10.076 4.978 17.033 14.413l213.282 304.826q14.24 20.239 2.62 41.978-11.62 21.74-36.098 21.74h-2.282l113.26 169.391q15.674 22.869 2.239 46.739-13.434 23.87-40.782 23.87H562.065v114.499q0 19.153-13.174 32.327T516.565-71.87h-73.13q-19.152 0-32.326-13.174t-13.174-32.327v-114.499Z\"></path></svg>"

/***/ }),

/***/ "./src/img/others/close.svg":
/*!**********************************!*\
  !*** ./src/img/others/close.svg ***!
  \**********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z\"></path></svg>"

/***/ }),

/***/ "./src/img/others/completed-task.svg":
/*!*******************************************!*\
  !*** ./src/img/others/completed-task.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_119_248)\"><path d=\"M11.1902 27.6074L0 16.4172L2.79755 13.6196L11.1902 22.0123L29.2025 4L32 6.79755L11.1902 27.6074Z\" fill=\"#2F9E62\"></path></g><defs><clipPath id=\"clip0_119_248\"><rect width=\"32\" height=\"32\" fill=\"white\"></rect></clipPath></defs></svg>"

/***/ }),

/***/ "./src/img/others/create-list.svg":
/*!****************************************!*\
  !*** ./src/img/others/create-list.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M450.001-450.001h-230v-59.998h230v-230h59.998v230h230v59.998h-230v230h-59.998v-230Z\"></path></svg>"

/***/ }),

/***/ "./src/img/others/delete.svg":
/*!***********************************!*\
  !*** ./src/img/others/delete.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z\"></path></svg>"

/***/ }),

/***/ "./src/img/others/edit.svg":
/*!*********************************!*\
  !*** ./src/img/others/edit.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z\"></path></svg>"

/***/ }),

/***/ "./src/img/others/expand-tasks.svg":
/*!*****************************************!*\
  !*** ./src/img/others/expand-tasks.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 19.8L0 7.8L2.8 5L12 14.2L21.2 5L24 7.8L12 19.8Z\" fill=\"#25272c\"></path></svg>"

/***/ }),

/***/ "./src/img/others/horizontal-options.svg":
/*!***********************************************!*\
  !*** ./src/img/others/horizontal-options.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z\"></path></svg>"

/***/ }),

/***/ "./src/img/others/success-notification.svg":
/*!*************************************************!*\
  !*** ./src/img/others/success-notification.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"m424-408-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-408Zm56 328q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z\"></path></svg>"

/***/ }),

/***/ "./src/img/others/to-complete-button.svg":
/*!***********************************************!*\
  !*** ./src/img/others/to-complete-button.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"16\" r=\"16\" fill=\"#FAFAFA\"></circle><circle cx=\"16\" cy=\"16\" r=\"14.5\" stroke=\"#25272C\" stroke-opacity=\"0.5\" stroke-width=\"3\"></circle></svg>"

/***/ }),

/***/ "./src/img/tasks/date-fill.svg":
/*!*************************************!*\
  !*** ./src/img/tasks/date-fill.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M480-396.923q-14.692 0-25.038-10.346t-10.346-25.038q0-14.692 10.346-25.038T480-467.691q14.692 0 25.038 10.346t10.346 25.038q0 14.692-10.346 25.038T480-396.923Zm-160 0q-14.692 0-25.038-10.346t-10.346-25.038q0-14.692 10.346-25.038T320-467.691q14.692 0 25.038 10.346t10.346 25.038q0 14.692-10.346 25.038T320-396.923Zm320 0q-14.692 0-25.038-10.346t-10.346-25.038q0-14.692 10.346-25.038T640-467.691q14.692 0 25.038 10.346t10.346 25.038q0 14.692-10.346 25.038T640-396.923ZM480-240q-14.692 0-25.038-10.346t-10.346-25.038q0-14.692 10.346-25.038 10.346-10.347 25.038-10.347t25.038 10.347q10.346 10.346 10.346 25.038t-10.346 25.038Q494.692-240 480-240Zm-160 0q-14.692 0-25.038-10.346t-10.346-25.038q0-14.692 10.346-25.038 10.346-10.347 25.038-10.347t25.038 10.347q10.346 10.346 10.346 25.038t-10.346 25.038Q334.692-240 320-240Zm320 0q-14.692 0-25.038-10.346t-10.346-25.038q0-14.692 10.346-25.038 10.346-10.347 25.038-10.347t25.038 10.347q10.346 10.346 10.346 25.038t-10.346 25.038Q654.692-240 640-240ZM212.309-100.001q-30.308 0-51.308-21t-21-51.308v-535.382q0-30.308 21-51.308t51.308-21h55.385v-84.615h61.537v84.615h303.076v-84.615h59.999v84.615h55.385q30.308 0 51.308 21t21 51.308v535.382q0 30.308-21 51.308t-51.308 21H212.309Zm0-59.999h535.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-375.382H200v375.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846Z\"></path></svg>"

/***/ }),

/***/ "./src/img/tasks/date-nofill.svg":
/*!***************************************!*\
  !*** ./src/img/tasks/date-nofill.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M212.309-100.001q-30.308 0-51.308-21t-21-51.308v-535.382q0-30.308 21-51.308t51.308-21h55.385v-84.615h61.537v84.615h303.076v-84.615h59.999v84.615h55.385q30.308 0 51.308 21t21 51.308v535.382q0 30.308-21 51.308t-51.308 21H212.309Zm0-59.999h535.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-375.382H200v375.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846ZM200-607.69h560v-100.001q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H212.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v100.001Zm0 0V-720v112.31Zm280 210.767q-14.692 0-25.038-10.346t-10.346-25.038q0-14.692 10.346-25.038T480-467.691q14.692 0 25.038 10.346t10.346 25.038q0 14.692-10.346 25.038T480-396.923Zm-160 0q-14.692 0-25.038-10.346t-10.346-25.038q0-14.692 10.346-25.038T320-467.691q14.692 0 25.038 10.346t10.346 25.038q0 14.692-10.346 25.038T320-396.923Zm320 0q-14.692 0-25.038-10.346t-10.346-25.038q0-14.692 10.346-25.038T640-467.691q14.692 0 25.038 10.346t10.346 25.038q0 14.692-10.346 25.038T640-396.923ZM480-240q-14.692 0-25.038-10.346t-10.346-25.038q0-14.692 10.346-25.038 10.346-10.347 25.038-10.347t25.038 10.347q10.346 10.346 10.346 25.038t-10.346 25.038Q494.692-240 480-240Zm-160 0q-14.692 0-25.038-10.346t-10.346-25.038q0-14.692 10.346-25.038 10.346-10.347 25.038-10.347t25.038 10.347q10.346 10.346 10.346 25.038t-10.346 25.038Q334.692-240 320-240Zm320 0q-14.692 0-25.038-10.346t-10.346-25.038q0-14.692 10.346-25.038 10.346-10.347 25.038-10.347t25.038 10.347q10.346 10.346 10.346 25.038t-10.346 25.038Q654.692-240 640-240Z\"></path></svg>"

/***/ }),

/***/ "./src/img/tasks/priority-fill.svg":
/*!*****************************************!*\
  !*** ./src/img/tasks/priority-fill.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M220.001-130.001v-649.998h323.844l16 80h220.154v359.998H536.155l-16-80H280v290h-59.999Z\"></path></svg>"

/***/ }),

/***/ "./src/img/tasks/priority-nofill.svg":
/*!*******************************************!*\
  !*** ./src/img/tasks/priority-nofill.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M220.001-130.001v-649.998h323.844l16 80h220.154v359.998H536.155l-16-80H280v290h-59.999ZM500-560Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z\"></path></svg>"

/***/ }),

/***/ "./src/img/todo-app-icon-flat.svg":
/*!****************************************!*\
  !*** ./src/img/todo-app-icon-flat.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 33.866664 33.866664\" version=\"1.1\" id=\"svg1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\"><defs id=\"defs1\"></defs><g id=\"layer1\"><g id=\"g1\" transform=\"matrix(1.1810081,0,0,1.1810081,-4.9989902,-3.0650703)\"><path id=\"rect1\" style=\"color:#000000;display:inline;fill-opacity:1;stroke:none;stroke-linecap:round;stroke-opacity:1;-inkscape-stroke:none\" d=\"m 7.9731567,4.2328166 c -2.0425915,0 -3.7403401,1.6977486 -3.7403401,3.7403401 V 25.892993 c 0,2.042592 1.6977481,3.740858 3.7403401,3.740857 H 25.89351 c 2.042592,1e-6 3.74034,-1.698265 3.74034,-3.740857 V 15.850712 l -3.395141,3.370854 v 6.671427 c 0,0.22085 -0.12435,0.346232 -0.345199,0.346232 H 7.9731567 c -0.2208501,0 -0.3457153,-0.125382 -0.3457153,-0.346232 V 7.9731567 c 0,-0.2208506 0.1248647,-0.3457153 0.3457153,-0.3457153 H 23.013066 l 3.382739,-3.3589681 c -0.164551,-0.023149 -0.33198,-0.035657 -0.502295,-0.035657 z\"></path><path style=\"color:#000000;-inkscape-stroke:none\" d=\"M 29.164062,5.2246094 15.554688,18.857422 11.175781,14.957031 7.65625,18.910156 15.769531,26.132812 32.908203,8.9628906 Z\" id=\"path6\"></path></g></g></svg>"

/***/ }),

/***/ "./src/design/dialogs.js":
/*!*******************************!*\
  !*** ./src/design/dialogs.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openDialogEvent: () => (/* binding */ openDialogEvent),
/* harmony export */   showDeleteListDialog: () => (/* binding */ showDeleteListDialog),
/* harmony export */   showDeleteTaskDialog: () => (/* binding */ showDeleteTaskDialog),
/* harmony export */   showEditListDialog: () => (/* binding */ showEditListDialog),
/* harmony export */   showEditTaskDialog: () => (/* binding */ showEditTaskDialog),
/* harmony export */   showNewListDialog: () => (/* binding */ showNewListDialog),
/* harmony export */   showNewTaskDialog: () => (/* binding */ showNewTaskDialog),
/* harmony export */   showTaskDetailsDialog: () => (/* binding */ showTaskDetailsDialog)
/* harmony export */ });
/* harmony import */ var _img_tasks_date_nofill_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/tasks/date-nofill.svg */ "./src/img/tasks/date-nofill.svg");
/* harmony import */ var _img_tasks_date_nofill_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_tasks_date_nofill_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_tasks_date_fill_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/tasks/date-fill.svg */ "./src/img/tasks/date-fill.svg");
/* harmony import */ var _img_tasks_date_fill_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_tasks_date_fill_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_tasks_priority_nofill_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/tasks/priority-nofill.svg */ "./src/img/tasks/priority-nofill.svg");
/* harmony import */ var _img_tasks_priority_nofill_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_tasks_priority_nofill_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_tasks_priority_fill_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/tasks/priority-fill.svg */ "./src/img/tasks/priority-fill.svg");
/* harmony import */ var _img_tasks_priority_fill_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_tasks_priority_fill_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_lists_default_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/lists/default.svg */ "./src/img/lists/default.svg");
/* harmony import */ var _img_lists_default_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_lists_default_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_lists_star_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/lists/star.svg */ "./src/img/lists/star.svg");
/* harmony import */ var _img_lists_star_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_lists_star_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_lists_heart_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/lists/heart.svg */ "./src/img/lists/heart.svg");
/* harmony import */ var _img_lists_heart_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_lists_heart_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_lists_sofa_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/lists/sofa.svg */ "./src/img/lists/sofa.svg");
/* harmony import */ var _img_lists_sofa_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_lists_sofa_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_lists_tree_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/lists/tree.svg */ "./src/img/lists/tree.svg");
/* harmony import */ var _img_lists_tree_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_lists_tree_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_lists_shopping_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/lists/shopping.svg */ "./src/img/lists/shopping.svg");
/* harmony import */ var _img_lists_shopping_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_lists_shopping_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_lists_school_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/lists/school.svg */ "./src/img/lists/school.svg");
/* harmony import */ var _img_lists_school_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_lists_school_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_lists_pencil_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/lists/pencil.svg */ "./src/img/lists/pencil.svg");
/* harmony import */ var _img_lists_pencil_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_lists_pencil_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_lists_plane_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/lists/plane.svg */ "./src/img/lists/plane.svg");
/* harmony import */ var _img_lists_plane_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_lists_plane_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_lists_cloud_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/lists/cloud.svg */ "./src/img/lists/cloud.svg");
/* harmony import */ var _img_lists_cloud_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_lists_cloud_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_lists_lightbulb_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/lists/lightbulb.svg */ "./src/img/lists/lightbulb.svg");
/* harmony import */ var _img_lists_lightbulb_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_lists_lightbulb_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _img_lists_book_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/lists/book.svg */ "./src/img/lists/book.svg");
/* harmony import */ var _img_lists_book_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_lists_book_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _img_others_close_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/others/close.svg */ "./src/img/others/close.svg");
/* harmony import */ var _img_others_close_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_img_others_close_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _img_others_horizontal_options_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/others/horizontal-options.svg */ "./src/img/others/horizontal-options.svg");
/* harmony import */ var _img_others_horizontal_options_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_img_others_horizontal_options_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _img_others_edit_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/others/edit.svg */ "./src/img/others/edit.svg");
/* harmony import */ var _img_others_edit_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_img_others_edit_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _img_others_delete_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/others/delete.svg */ "./src/img/others/delete.svg");
/* harmony import */ var _img_others_delete_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_img_others_delete_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../lists-and-tasks */ "./src/lists-and-tasks.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sidebar.js */ "./src/design/sidebar.js");
/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./page.js */ "./src/design/page.js");
/* harmony import */ var _inputs_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./inputs.js */ "./src/design/inputs.js");
/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./notifications.js */ "./src/design/notifications.js");
// Task icons





// List icons













// Dialog icons





// Functions






const listIcons = [
  (_img_lists_default_svg__WEBPACK_IMPORTED_MODULE_4___default()),
  (_img_lists_star_svg__WEBPACK_IMPORTED_MODULE_5___default()),
  (_img_lists_heart_svg__WEBPACK_IMPORTED_MODULE_6___default()),
  (_img_lists_sofa_svg__WEBPACK_IMPORTED_MODULE_7___default()),
  (_img_lists_tree_svg__WEBPACK_IMPORTED_MODULE_8___default()),
  (_img_lists_shopping_svg__WEBPACK_IMPORTED_MODULE_9___default()),
  (_img_lists_school_svg__WEBPACK_IMPORTED_MODULE_10___default()),
  (_img_lists_pencil_svg__WEBPACK_IMPORTED_MODULE_11___default()),
  (_img_lists_plane_svg__WEBPACK_IMPORTED_MODULE_12___default()),
  (_img_lists_cloud_svg__WEBPACK_IMPORTED_MODULE_13___default()),
  (_img_lists_lightbulb_svg__WEBPACK_IMPORTED_MODULE_14___default()),
  (_img_lists_book_svg__WEBPACK_IMPORTED_MODULE_15___default()),
];

const listTitleMaxLength = 25;
const taskTitleMaxLength = 50;
const taskDescriptionMaxLength = 300;
const heightOverflow = 156;

// List dialogs:
const showNewListDialog = () => {
  const dialog = document.createElement("dialog");
  dialog.id = "new-list";

  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container";

  const titleInput = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendTextInput(
    "list-title-input",
    "List title",
    listTitleMaxLength,
    true
  );

  const selectIconInput = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendSelectInputGrid(
    "select-icon",
    listIcons
  );

  titleContainer.appendChild(selectIconInput);
  titleContainer.appendChild(titleInput);

  const dialogButtons = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendDialogButtons("Create list");
  const mainButton = dialogButtons.querySelector("button.primary");

  dialog.appendChild(titleContainer);
  dialog.appendChild(dialogButtons);

  document.body.appendChild(dialog);

  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, Array.from(dialogButtons.childNodes));
  addCreateListEvent(dialog);
  disableEmptyDialogEvent(titleInput, mainButton);

  dialog.showModal();
};

const showEditListDialog = (list) => {
  const dialog = document.createElement("dialog");
  dialog.id = "edit-list";

  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container";

  const titleInput = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendTextInput(
    "list-title-input",
    "List title",
    listTitleMaxLength,
    true,
    list.name
  );

  const selectIconInput = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendSelectInputGrid(
    "select-icon",
    listIcons
  );
  _inputs_js__WEBPACK_IMPORTED_MODULE_23__.selectOptionValueGrid(selectIconInput, listIcons.indexOf(list.icon));

  titleContainer.appendChild(selectIconInput);
  titleContainer.appendChild(titleInput);

  const dialogButtons = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendDialogButtons("Edit list");
  const mainButton = dialogButtons.querySelector("button.primary");

  dialog.appendChild(titleContainer);
  dialog.appendChild(dialogButtons);

  document.body.appendChild(dialog);

  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, Array.from(dialogButtons.childNodes));
  addEditListEvent(dialog);
  disableEmptyDialogEvent(titleInput, mainButton);

  dialog.showModal();
};

const showDeleteListDialog = (list) => {
  const dialog = document.createElement("dialog");
  dialog.id = "delete-list";

  const message = document.createElement("div");
  message.className = "message";

  const messageTitle = document.createElement("p");
  messageTitle.className = "message-title";
  messageTitle.textContent = "Are you sure you want to delete this list?";

  const listInfo = document.createElement("div");
  listInfo.className = "list-info";

  const listIcon = document.createElement("span");
  listIcon.className = "list-icon";
  listIcon.innerHTML = list.icon;

  const listTitle = document.createElement("p");
  listTitle.className = "list-title";
  listTitle.textContent = list.name;

  listInfo.appendChild(listIcon);
  listInfo.appendChild(listTitle);

  const subMessage = document.createElement("p");
  subMessage.className = "sub-message";
  subMessage.textContent = "This action cannot be undone.";

  const dialogButtons = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendDialogButtons("Delete");
  const deleteButton = dialogButtons.querySelector("button.primary");

  message.appendChild(messageTitle);
  message.appendChild(listInfo);
  message.appendChild(subMessage);

  dialog.appendChild(message);
  dialog.appendChild(dialogButtons);

  document.body.appendChild(dialog);

  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, Array.from(dialogButtons.childNodes));
  addDeleteListEvent(deleteButton, _lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__.getCurrentList().name);

  dialog.showModal();
};

// Task dialogs:
const showNewTaskDialog = () => {
  const dialog = document.createElement("dialog");
  dialog.id = "new-task";

  const titleInput = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendTextInput(
    "task-title-input",
    "Task title",
    taskTitleMaxLength,
    true
  );

  const descriptionInput = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendTextAreaInput(
    "task-description-input",
    "Task description",
    taskDescriptionMaxLength,
    4,
    false
  );

  const selectInputsContainer = document.createElement("div");
  selectInputsContainer.className = "task-select-inputs";

  const dateInput = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendDateInput("date-input", (_img_tasks_date_nofill_svg__WEBPACK_IMPORTED_MODULE_0___default()));
  const selectPriorityInput = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendSelectInput(
    "select-priority",
    (_img_tasks_priority_nofill_svg__WEBPACK_IMPORTED_MODULE_2___default()),
    [
      { icon: (_img_tasks_priority_nofill_svg__WEBPACK_IMPORTED_MODULE_2___default()), name: "Priority" },
      { icon: (_img_tasks_priority_fill_svg__WEBPACK_IMPORTED_MODULE_3___default()), name: "Low" },
      { icon: (_img_tasks_priority_fill_svg__WEBPACK_IMPORTED_MODULE_3___default()), name: "Medium" },
      { icon: (_img_tasks_priority_fill_svg__WEBPACK_IMPORTED_MODULE_3___default()), name: "High" },
    ]
  );
  const selectListInput = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendSelectInput(
    "select-list",
    (_img_lists_default_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    _lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__.getListsNamesIcons(),
    _lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__.getListIndex(_lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__.getCurrentList().name)
  );

  selectInputsContainer.appendChild(dateInput);
  selectInputsContainer.appendChild(selectPriorityInput);
  selectInputsContainer.appendChild(selectListInput);

  const dialogButtons = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendDialogButtons("Add task");
  const mainButton = dialogButtons.querySelector("button.primary");

  dialog.appendChild(titleInput);
  dialog.appendChild(descriptionInput);
  dialog.appendChild(selectInputsContainer);
  dialog.appendChild(dialogButtons);

  document.body.appendChild(dialog);

  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, Array.from(dialogButtons.childNodes));
  addCreateTaskEvent(dialog);
  disableEmptyDialogEvent(titleInput, mainButton);

  dialog.showModal();
};

const showEditTaskDialog = (task) => {
  const dialog = document.createElement("dialog");
  dialog.id = "edit-task";

  const titleInput = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendTextInput(
    "task-title-input",
    "Task title",
    taskTitleMaxLength,
    true,
    task.title
  );

  const descriptionInput = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendTextAreaInput(
    "task-description-input",
    "Task description",
    taskDescriptionMaxLength,
    4,
    false,
    task.description
  );

  const selectInputsContainer = document.createElement("div");
  selectInputsContainer.className = "task-select-inputs";

  const dateInput = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendDateInput("date-input", (_img_tasks_date_nofill_svg__WEBPACK_IMPORTED_MODULE_0___default()));
  _inputs_js__WEBPACK_IMPORTED_MODULE_23__.selectDateValue(dateInput, task.date);

  const selectPriorityInput = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendSelectInput(
    "select-priority",
    (_img_tasks_priority_nofill_svg__WEBPACK_IMPORTED_MODULE_2___default()),
    [
      { icon: (_img_tasks_priority_nofill_svg__WEBPACK_IMPORTED_MODULE_2___default()), name: "Priority" },
      { icon: (_img_tasks_priority_fill_svg__WEBPACK_IMPORTED_MODULE_3___default()), name: "Low" },
      { icon: (_img_tasks_priority_fill_svg__WEBPACK_IMPORTED_MODULE_3___default()), name: "Medium" },
      { icon: (_img_tasks_priority_fill_svg__WEBPACK_IMPORTED_MODULE_3___default()), name: "High" },
    ]
  );
  _inputs_js__WEBPACK_IMPORTED_MODULE_23__.selectOptionValue(selectPriorityInput, task.priority || "Priority");

  const selectListInput = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendSelectInput(
    "select-list",
    (_img_lists_default_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    _lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__.getListsNamesIcons(),
    _lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__.getListIndex(_lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__.getCurrentList().name)
  );

  selectInputsContainer.appendChild(dateInput);
  selectInputsContainer.appendChild(selectPriorityInput);
  selectInputsContainer.appendChild(selectListInput);

  const dialogButtons = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendDialogButtons("Edit task");
  const mainButton = dialogButtons.querySelector("button.primary");

  dialog.appendChild(titleInput);
  dialog.appendChild(descriptionInput);
  dialog.appendChild(selectInputsContainer);
  dialog.appendChild(dialogButtons);

  document.body.appendChild(dialog);

  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, Array.from(dialogButtons.childNodes));
  addEditTaskEvent(dialog, task.id);
  disableEmptyDialogEvent(titleInput, mainButton);

  dialog.showModal();
};

const showDeleteTaskDialog = (taskId) => {
  const dialog = document.createElement("dialog");
  dialog.id = "delete-task";

  const message = document.createElement("div");
  message.className = "message";

  const messageTitle = document.createElement("p");
  messageTitle.className = "message-title";
  messageTitle.textContent = "Are you sure you want to delete this task?";

  const subMessage = document.createElement("p");
  subMessage.className = "sub-message";
  subMessage.textContent = "This action cannot be undone.";

  const dialogButtons = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendDialogButtons("Delete");
  const deleteButton = dialogButtons.querySelector("button.primary");

  message.appendChild(messageTitle);
  message.appendChild(subMessage);

  dialog.appendChild(message);
  dialog.appendChild(dialogButtons);

  document.body.appendChild(dialog);

  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, Array.from(dialogButtons.childNodes));
  addDeleteTaskEvent(deleteButton, taskId);

  dialog.showModal();
};

const appendSecondaryInfoElements = (label, icon, elementClass) => {
  const container = document.createElement("div");
  container.classList.add("info-element");
  container.classList.add(elementClass);
  container.dataset.value = label;

  const elementIcon = document.createElement("span");
  elementIcon.className = "icon";
  elementIcon.innerHTML = icon;

  const elementLabel = document.createElement("p");
  elementLabel.className = "label";
  elementLabel.textContent = label;

  container.appendChild(elementIcon);
  container.appendChild(elementLabel);

  return container;
};

const showTaskDetailsDialog = (list, task) => {
  const dialog = document.createElement("dialog");
  dialog.id = "task-details";

  const actionsContainer = document.createElement("div");
  actionsContainer.className = "actions-container";

  const closeDialog = document.createElement("button");
  closeDialog.id = "close-task-details";
  const closeDialogIcon = document.createElement("span");
  closeDialogIcon.className = "button-icon";
  closeDialogIcon.innerHTML = (_img_others_close_svg__WEBPACK_IMPORTED_MODULE_16___default());

  closeDialog.appendChild(closeDialogIcon);

  const moreOptions = _inputs_js__WEBPACK_IMPORTED_MODULE_23__.appendOptionsButton(
    (_img_others_horizontal_options_svg__WEBPACK_IMPORTED_MODULE_17___default()),
    "task-more-options",
    [
      { label: "Edit", icon: (_img_others_edit_svg__WEBPACK_IMPORTED_MODULE_18___default()), optionClass: "edit-task" },
      { label: "Delete", icon: (_img_others_delete_svg__WEBPACK_IMPORTED_MODULE_19___default()), optionClass: "delete-task" },
    ]
  );

  const deleteOption = moreOptions.querySelector(".delete-task");
  const editOption = moreOptions.querySelector(".edit-task");

  actionsContainer.appendChild(closeDialog);
  actionsContainer.appendChild(moreOptions);

  const mainInfo = document.createElement("div");
  mainInfo.className = "main-information";

  const taskTitle = document.createElement("p");
  taskTitle.className = "task-title";
  taskTitle.textContent = task.title;

  const taskDescription = document.createElement("p");
  taskDescription.className = "task-description";
  taskDescription.textContent = task.description || "No description";

  mainInfo.appendChild(taskTitle);
  mainInfo.appendChild(taskDescription);

  const secondaryInfo = document.createElement("div");
  secondaryInfo.className = "secondary-information";

  if (task.date) {
    secondaryInfo.appendChild(
      appendSecondaryInfoElements(task.date, (_img_tasks_date_fill_svg__WEBPACK_IMPORTED_MODULE_1___default()), "task-date")
    );
  }
  if (task.priority) {
    secondaryInfo.appendChild(
      appendSecondaryInfoElements(
        task.priority,
        (_img_tasks_priority_fill_svg__WEBPACK_IMPORTED_MODULE_3___default()),
        "task-priority"
      )
    );
  }
  secondaryInfo.appendChild(
    appendSecondaryInfoElements(list.name, list.icon, "task-list")
  );

  dialog.appendChild(actionsContainer);
  dialog.appendChild(mainInfo);
  dialog.appendChild(secondaryInfo);

  document.body.appendChild(dialog);

  addCloseDialogEvent(dialog);
  addCloseDialogButtonsEvent(dialog, closeDialog);
  openDialogEvent(deleteOption, showDeleteTaskDialog, task.id);
  openDialogEvent(editOption, showEditTaskDialog, task);

  dialog.showModal();

  // If description is overflowing: Apply scrollbars
  if (taskDescription.clientHeight > heightOverflow)
    taskDescription.classList.add("scroll-text");
};

// Dialog events
const addCreateListEvent = (dialogContainer) => {
  const createButton = dialogContainer.querySelector("button.primary");
  const titleInput = dialogContainer.querySelector("input#list-title-input");
  const selectedIcon = dialogContainer.querySelector(
    "#select-icon .button-icon"
  );

  createButton.addEventListener("click", () => {
    _lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__.createList(titleInput.value, selectedIcon.innerHTML);
    _sidebar_js__WEBPACK_IMPORTED_MODULE_21__.refreshUserSidebarLists();
    _notifications_js__WEBPACK_IMPORTED_MODULE_24__.displayNotification("List created successfully.");
  });
};

const addEditListEvent = (dialogContainer) => {
  const editButton = dialogContainer.querySelector("button.primary");
  const titleInput = dialogContainer.querySelector("input#list-title-input");
  const selectedIcon = dialogContainer.querySelector(
    "#select-icon .button-icon"
  );

  editButton.addEventListener("click", () => {
    _lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__.editList(_lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__.getCurrentList().name, {
      name: titleInput.value,
      icon: selectedIcon.innerHTML,
    });
    _sidebar_js__WEBPACK_IMPORTED_MODULE_21__.refreshUserSidebarLists();
    _page_js__WEBPACK_IMPORTED_MODULE_22__.refreshListTitle();
    _notifications_js__WEBPACK_IMPORTED_MODULE_24__.displayNotification("List updated successfully.");
  });
};

const addCreateTaskEvent = (dialogContainer) => {
  const createButton = dialogContainer.querySelector("button.primary");
  const titleInput = dialogContainer.querySelector("#task-title-input");
  const descriptionInput = dialogContainer.querySelector(
    "#task-description-input"
  );
  const dateInput = dialogContainer.querySelector("#date-input");
  const priorityInput = dialogContainer.querySelector("#select-priority");
  const selectedList = dialogContainer.querySelector("#select-list");

  createButton.addEventListener("click", () => {
    _lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__.createTask(selectedList.dataset.value, {
      title: titleInput.value,
      description: descriptionInput.value,
      date: dateInput.dataset.value,
      priority: priorityInput.dataset.value,
    });

    _page_js__WEBPACK_IMPORTED_MODULE_22__.refreshTaskElements();
    _notifications_js__WEBPACK_IMPORTED_MODULE_24__.displayNotification("Task created successfully.");
  });
};

const addEditTaskEvent = (dialogContainer, taskId) => {
  const taskDetailsDialog = document.querySelector("dialog#task-details");
  const editButton = dialogContainer.querySelector("button.primary");
  const titleInput = dialogContainer.querySelector("#task-title-input");
  const descriptionInput = dialogContainer.querySelector(
    "#task-description-input"
  );
  const dateInput = dialogContainer.querySelector("#date-input");
  const priorityInput = dialogContainer.querySelector("#select-priority");
  const listInput = dialogContainer.querySelector("#select-list");

  editButton.addEventListener("click", () => {
    _lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__.editTask(listInput.dataset.value, taskId, {
      title: titleInput.value,
      description: descriptionInput.value,
      date: dateInput.dataset.value,
      priority: priorityInput.dataset.value,
    });

    _page_js__WEBPACK_IMPORTED_MODULE_22__.refreshTaskElements();
    closeDialog(taskDetailsDialog);
    _notifications_js__WEBPACK_IMPORTED_MODULE_24__.displayNotification("Task updated successfully.");
  });
};

const closeDialog = (dialog) => {
  dialog.classList.add("closing");

  dialog.addEventListener("animationend", () => {
    dialog.close();
  });
};

const addCloseDialogEvent = (dialog) => {
  dialog.addEventListener("close", () => document.body.removeChild(dialog));
};

const addCloseDialogButtonsEvent = (dialog, closeButtons) => {
  // If closeButtons is not an array. Assign event directly
  if (!Array.isArray(closeButtons)) {
    closeButtons.addEventListener("click", () => closeDialog(dialog));
    return;
  }

  closeButtons.forEach((button) =>
    button.addEventListener("click", () => closeDialog(dialog))
  );
};

const disableEmptyDialogEvent = (textInputContainer, mainButton) => {
  const textInput = textInputContainer.querySelector("input[type='text']");

  // Disable button when opening the dialog
  // If the dialog has default values when opening, don't disable mainButton
  mainButton.disabled = textInput.value.length === 0;

  // Disable main button when:
  // 1. Selected text input is empty
  // 2. In the case of lists, when a list already exists with the current input
  textInput.addEventListener("input", () => {
    mainButton.disabled =
      textInput.value.length <= 0 ||
      _lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__.getListsNames().some((listName) => listName === textInput.value);
  });
};

const openDialogEvent = (targetElement, dialogCallback, dialogParameter) => {
  targetElement.addEventListener("click", () => {
    dialogCallback(dialogParameter);
  });
};

const addDeleteListEvent = (deleteButton, listName) => {
  deleteButton.addEventListener("click", () => {
    _page_js__WEBPACK_IMPORTED_MODULE_22__.unloadPage();
    _lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__.deleteList(listName);
    _sidebar_js__WEBPACK_IMPORTED_MODULE_21__.refreshUserSidebarLists();
    _notifications_js__WEBPACK_IMPORTED_MODULE_24__.displayNotification("List deleted successfully.");
  });
};

const addDeleteTaskEvent = (deleteButton, taskId) => {
  const dialogOrigin = document.querySelector("dialog#task-details");

  deleteButton.addEventListener("click", () => {
    _lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__.deleteTask(_lists_and_tasks__WEBPACK_IMPORTED_MODULE_20__.getCurrentList().name, taskId);
    closeDialog(dialogOrigin);
    _page_js__WEBPACK_IMPORTED_MODULE_22__.refreshTaskElements();
    _notifications_js__WEBPACK_IMPORTED_MODULE_24__.displayNotification("Task deleted successfully.");
  });
};




/***/ }),

/***/ "./src/design/inputs.js":
/*!******************************!*\
  !*** ./src/design/inputs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendDateInput: () => (/* binding */ appendDateInput),
/* harmony export */   appendDialogButtons: () => (/* binding */ appendDialogButtons),
/* harmony export */   appendOptionsButton: () => (/* binding */ appendOptionsButton),
/* harmony export */   appendSelectInput: () => (/* binding */ appendSelectInput),
/* harmony export */   appendSelectInputGrid: () => (/* binding */ appendSelectInputGrid),
/* harmony export */   appendTextAreaInput: () => (/* binding */ appendTextAreaInput),
/* harmony export */   appendTextInput: () => (/* binding */ appendTextInput),
/* harmony export */   selectDateValue: () => (/* binding */ selectDateValue),
/* harmony export */   selectOptionValue: () => (/* binding */ selectOptionValue),
/* harmony export */   selectOptionValueGrid: () => (/* binding */ selectOptionValueGrid)
/* harmony export */ });
/* harmony import */ var _img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/lists/default.svg */ "./src/img/lists/default.svg");
/* harmony import */ var _img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_tasks_date_nofill_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/tasks/date-nofill.svg */ "./src/img/tasks/date-nofill.svg");
/* harmony import */ var _img_tasks_date_nofill_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_tasks_date_nofill_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_tasks_date_fill_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/tasks/date-fill.svg */ "./src/img/tasks/date-fill.svg");
/* harmony import */ var _img_tasks_date_fill_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_tasks_date_fill_svg__WEBPACK_IMPORTED_MODULE_2__);
// Icons




// Custom inputs controllers
const appendDialogButtons = (primaryLabel, secondaryLabel = "Cancel") => {
  const buttons = document.createElement("div");
  buttons.className = "dialog-buttons";

  const primaryButton = document.createElement("button");
  primaryButton.className = "primary";
  primaryButton.textContent = primaryLabel;

  const secondaryButton = document.createElement("button");
  secondaryButton.className = "secondary";
  secondaryButton.textContent = secondaryLabel;

  buttons.appendChild(primaryButton);
  buttons.appendChild(secondaryButton);

  return buttons;
};

const appendTextInput = (
  inputId,
  placeholder,
  maxLength = 10,
  autoFocus = false,
  initialValue = null
) => {
  const container = document.createElement("div");
  container.className = "text-input-container";

  const input = document.createElement("input");
  input.type = "text";
  input.id = inputId;
  input.name = inputId;
  input.placeholder = placeholder;
  input.maxLength = maxLength.toString();
  input.autofocus = autoFocus;
  input.value = initialValue;

  const textCounter = document.createElement("span");
  textCounter.className = "text-counter";

  const currentTextCount = document.createElement("span");
  currentTextCount.className = "current-count";
  currentTextCount.textContent = input.value.length;

  const counterLimit = document.createElement("span");
  counterLimit.className = "counter-limit";
  counterLimit.textContent = ` / ${maxLength}`;

  textCounter.appendChild(currentTextCount);
  textCounter.appendChild(counterLimit);

  container.appendChild(input);
  container.appendChild(textCounter);

  addCountLengthEvent(input, currentTextCount);

  return container;
};

const appendTextAreaInput = (
  inputId,
  placeholder,
  maxLength = 10,
  rows = 1,
  autoFocus = false,
  initialValue = null
) => {
  const container = document.createElement("div");
  container.className = "textarea-input-container";

  const input = document.createElement("textarea");
  input.id = inputId;
  input.name = inputId;
  input.placeholder = placeholder;
  input.maxLength = maxLength.toString();
  input.rows = rows.toString();
  input.autofocus = autoFocus;
  input.value = initialValue;

  const textCounter = document.createElement("span");
  textCounter.className = "text-counter";

  const currentTextCount = document.createElement("span");
  currentTextCount.className = "current-count";
  currentTextCount.textContent = input.value.length;

  const counterLimit = document.createElement("span");
  counterLimit.className = "counter-limit";
  counterLimit.textContent = ` / ${maxLength}`;

  textCounter.appendChild(currentTextCount);
  textCounter.appendChild(counterLimit);

  container.appendChild(input);
  container.appendChild(textCounter);

  addCountLengthEvent(input, currentTextCount);

  return container;
};

const appendSelectInput = (
  inputId,
  icon,
  optionsArray = [{ icon: (_img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0___default()), name: "No options" }],
  initialOptionIndex = 0
) => {
  const container = document.createElement("div");
  container.className = "select-input";
  if (inputId) container.id = inputId;

  const inputButton = document.createElement("button");
  inputButton.className = "select-button";

  const buttonLabel = document.createElement("span");
  buttonLabel.className = "button-label";

  const buttonIcon = document.createElement("span");
  buttonIcon.className = "button-icon";
  buttonIcon.innerHTML = icon;

  // Options
  const optionsContainer = document.createElement("div");
  optionsContainer.className = "options";

  optionsArray.forEach((option) => {
    const optionElement = document.createElement("span");
    optionElement.className = "option";
    optionElement.dataset.value = option.name;

    const optionIcon = document.createElement("span");
    optionIcon.className = "option-icon";
    optionIcon.innerHTML = option.icon;

    const optionLabel = document.createElement("span");
    optionLabel.className = "option-label";
    optionLabel.textContent = option.name;

    optionElement.appendChild(optionIcon);
    optionElement.appendChild(optionLabel);

    optionsContainer.appendChild(optionElement);
  });

  inputButton.appendChild(buttonIcon);
  inputButton.appendChild(buttonLabel);

  container.appendChild(inputButton);
  container.appendChild(optionsContainer);

  // Auto-select first option
  if (initialOptionIndex < 0 || initialOptionIndex >= optionsArray.length)
    initialOptionIndex = 0;

  selectOptionValue(
    container,
    optionsContainer.childNodes[initialOptionIndex].dataset.value
  );

  // Select list Events
  addExpandOptionsEvent(container, inputButton);
  addSelectOptionValueEvent(container);

  return container;
};

const appendSelectInputGrid = (
  inputId,
  optionsArray = [(_img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0___default())],
  initialOptionIndex = 0
) => {
  const container = document.createElement("div");
  container.className = "select-input-grid";
  if (inputId) container.id = inputId;

  const inputButton = document.createElement("button");
  inputButton.className = "select-button";

  const buttonIcon = document.createElement("span");
  buttonIcon.className = "button-icon";

  // Options
  const optionsContainer = document.createElement("div");
  optionsContainer.className = "options-grid";

  optionsArray.forEach((optionIcon) => {
    const optionElement = document.createElement("span");
    optionElement.className = "option";
    optionElement.innerHTML = optionIcon;

    optionsContainer.appendChild(optionElement);
  });

  inputButton.appendChild(buttonIcon);

  container.appendChild(inputButton);
  container.appendChild(optionsContainer);

  // Auto-select first option
  if (initialOptionIndex < 0 || initialOptionIndex >= optionsArray.length)
    initialOptionIndex = 0;

  selectOptionValueGrid(container, initialOptionIndex);

  // Select list grid events
  addExpandOptionsEvent(container, inputButton);
  addSelectOptionValueGridEvent(container);

  return container;
};

const appendDateInput = (inputId, icon) => {
  const container = document.createElement("div");
  container.id = inputId;

  const input = document.createElement("input");
  input.type = "date";
  input.className = "date-element";

  container.dataset.value = input.value;

  const inputButton = document.createElement("button");
  inputButton.className = "date-button";

  const buttonLabel = document.createElement("span");
  buttonLabel.className = "button-label";
  buttonLabel.textContent = "Date";

  const buttonIcon = document.createElement("span");
  buttonIcon.className = "button-icon";
  buttonIcon.innerHTML = icon;

  inputButton.appendChild(buttonIcon);
  inputButton.appendChild(buttonLabel);

  container.appendChild(input);
  container.appendChild(inputButton);

  addShowDatePickerEvent(inputButton, input);
  changeDateValueEvent(container);

  return container;
};

const appendOptionsButton = (
  icon,
  controllerClass,
  optionsArray = [{ label: "Option", icon: (_img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0___default()), optionClass: "option" }]
) => {
  const container = document.createElement("div");
  container.classList.add("options-controller");
  container.classList.add(controllerClass);

  const button = document.createElement("button");
  button.className = "options-controller-button";

  const buttonIcon = document.createElement("span");
  buttonIcon.className = "button-icon";
  buttonIcon.innerHTML = icon;

  const optionsContainer = document.createElement("div");
  optionsContainer.className = "options";

  optionsArray.forEach((option) => {
    const optionElement = document.createElement("span");
    optionElement.classList.add("option");
    optionElement.classList.add(option.optionClass);

    const optionIcon = document.createElement("span");
    optionIcon.className = "option-icon";
    optionIcon.innerHTML = option.icon;

    const optionLabel = document.createElement("span");
    optionLabel.className = "option-label";
    optionLabel.textContent = option.label;

    optionElement.appendChild(optionIcon);
    optionElement.appendChild(optionLabel);

    optionsContainer.appendChild(optionElement);
  });

  button.appendChild(buttonIcon);

  container.appendChild(button);
  container.appendChild(optionsContainer);

  addExpandOptionsEvent(container, button);
  addCloseOptionsEvent(container, optionsContainer.childNodes);

  return container;
};

// Custom inputs events
const addCountLengthEvent = (input, counter) => {
  input.addEventListener(
    "input",
    () => (counter.textContent = input.value.length)
  );
};

const addExpandOptionsEvent = (container, expandButton) => {
  // const button = container.querySelector(".select-button");

  expandButton.addEventListener("click", () =>
    container.classList.toggle("expand")
  );
};

const addCloseOptionsEvent = (container, optionButtons) => {
  optionButtons.forEach((option) =>
    option.addEventListener("click", () => container.classList.remove("expand"))
  );
};

const selectOptionValue = (selectInput, optionValue) => {
  const buttonLabel = selectInput.querySelector(".button-label");
  const buttonIcon = selectInput.querySelector(".button-icon");
  const option = selectInput.querySelector(
    `.option[data-value="${optionValue}"]`
  );
  const optionIcon = option.querySelector(".option-icon");

  selectInput.dataset.value = option.dataset.value;
  buttonLabel.textContent = option.dataset.value;
  buttonIcon.innerHTML = optionIcon.innerHTML; // Fix this
};

const addSelectOptionValueEvent = (selectInput) => {
  const options = selectInput.querySelectorAll(".option");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selectOptionValue(selectInput, option.dataset.value);
      selectInput.classList.remove("expand");
    });
  });
};

const selectOptionValueGrid = (selectInputGrid, optionIndex) => {
  const buttonIcon = selectInputGrid.querySelector(".button-icon");
  const option = selectInputGrid.querySelectorAll(".option")[optionIndex];

  buttonIcon.innerHTML = option.innerHTML;
};

const addSelectOptionValueGridEvent = (selectInputGrid) => {
  const options = selectInputGrid.querySelectorAll(".option");

  options.forEach((option, index) => {
    option.addEventListener("click", () => {
      selectOptionValueGrid(selectInputGrid, index);
      selectInputGrid.classList.remove("expand");
    });
  });
};

const changeDateValueEvent = (inputContainer) => {
  const dateInput = inputContainer.querySelector("input.date-element");

  dateInput.addEventListener("change", () =>
    selectDateValue(inputContainer, dateInput.value)
  );
};

const selectDateValue = (inputContainer, newValue) => {
  const input = inputContainer.querySelector("input.date-element");
  const buttonLabel = inputContainer.querySelector(".button-label");
  const buttonIcon = inputContainer.querySelector(".button-icon");

  inputContainer.dataset.value = newValue;
  input.value = newValue;
  buttonLabel.textContent = newValue || "Date";
  buttonIcon.innerHTML = newValue ? (_img_tasks_date_fill_svg__WEBPACK_IMPORTED_MODULE_2___default()) : (_img_tasks_date_nofill_svg__WEBPACK_IMPORTED_MODULE_1___default());
};

const addShowDatePickerEvent = (inputButton, dateInput) => {
  inputButton.addEventListener("click", () => dateInput.showPicker());
};




/***/ }),

/***/ "./src/design/notifications.js":
/*!*************************************!*\
  !*** ./src/design/notifications.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayNotification: () => (/* binding */ displayNotification),
/* harmony export */   renderNotifications: () => (/* binding */ renderNotifications)
/* harmony export */ });
/* harmony import */ var _img_others_success_notification_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/others/success-notification.svg */ "./src/img/others/success-notification.svg");
/* harmony import */ var _img_others_success_notification_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_others_success_notification_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_others_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/others/close.svg */ "./src/img/others/close.svg");
/* harmony import */ var _img_others_close_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_others_close_svg__WEBPACK_IMPORTED_MODULE_1__);



const closeTimeout = 5000;
let closeTimeoutId;

const renderNotifications = () => {
  const container = document.createElement("div");
  container.id = "notifications-container";

  document.body.appendChild(container);
};

const displayNotification = (label) => {
  const notificationsContainer = document.querySelector(
    "#notifications-container"
  );

  const newNotification = document.createElement("div");
  newNotification.className = "notification";

  const notificationIcon = document.createElement("span");
  notificationIcon.className = "notification-icon";
  notificationIcon.innerHTML = (_img_others_success_notification_svg__WEBPACK_IMPORTED_MODULE_0___default());

  const notificationLabel = document.createElement("p");
  notificationLabel.className = "notification-label";
  notificationLabel.textContent = label;

  const closeButton = document.createElement("button");
  closeButton.className = "close-notification";

  const closeButtonIcon = document.createElement("span");
  closeButtonIcon.className = "button-icon";
  closeButtonIcon.innerHTML = (_img_others_close_svg__WEBPACK_IMPORTED_MODULE_1___default());

  closeButton.appendChild(closeButtonIcon);

  newNotification.appendChild(notificationIcon);
  newNotification.appendChild(notificationLabel);
  newNotification.appendChild(closeButton);

  notificationsContainer.appendChild(newNotification);

  closeTimeoutId = setTimeout(
    closeNotification,
    closeTimeout,
    notificationsContainer,
    newNotification
  );

  closeNotificationEvent(closeButton, notificationsContainer, newNotification);
};

const closeNotification = (container, notification) => {
  notification.classList.add("closing");

  notification.addEventListener("animationend", () =>
    container.removeChild(notification)
  );
};

const closeNotificationEvent = (closeButton, container, notification) => {
  closeButton.addEventListener("click", () => {
    clearTimeout(closeTimeoutId);
    closeNotification(container, notification);
  });
};




/***/ }),

/***/ "./src/design/page.js":
/*!****************************!*\
  !*** ./src/design/page.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadListContent: () => (/* binding */ loadListContent),
/* harmony export */   refreshListTitle: () => (/* binding */ refreshListTitle),
/* harmony export */   refreshTaskElements: () => (/* binding */ refreshTaskElements),
/* harmony export */   renderPage: () => (/* binding */ renderPage),
/* harmony export */   unloadPage: () => (/* binding */ unloadPage)
/* harmony export */ });
/* harmony import */ var _img_tasks_date_fill_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/tasks/date-fill.svg */ "./src/img/tasks/date-fill.svg");
/* harmony import */ var _img_tasks_date_fill_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_tasks_date_fill_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_tasks_priority_fill_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/tasks/priority-fill.svg */ "./src/img/tasks/priority-fill.svg");
/* harmony import */ var _img_tasks_priority_fill_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_tasks_priority_fill_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_others_to_complete_button_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/others/to-complete-button.svg */ "./src/img/others/to-complete-button.svg");
/* harmony import */ var _img_others_to_complete_button_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_others_to_complete_button_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_others_completed_task_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/others/completed-task.svg */ "./src/img/others/completed-task.svg");
/* harmony import */ var _img_others_completed_task_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_others_completed_task_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_others_expand_tasks_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/others/expand-tasks.svg */ "./src/img/others/expand-tasks.svg");
/* harmony import */ var _img_others_expand_tasks_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_others_expand_tasks_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_others_horizontal_options_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/others/horizontal-options.svg */ "./src/img/others/horizontal-options.svg");
/* harmony import */ var _img_others_horizontal_options_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_others_horizontal_options_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_others_edit_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/others/edit.svg */ "./src/img/others/edit.svg");
/* harmony import */ var _img_others_edit_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_others_edit_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_others_delete_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/others/delete.svg */ "./src/img/others/delete.svg");
/* harmony import */ var _img_others_delete_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_others_delete_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lists-and-tasks.js */ "./src/lists-and-tasks.js");
/* harmony import */ var _dialogs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialogs.js */ "./src/design/dialogs.js");
/* harmony import */ var _inputs_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inputs.js */ "./src/design/inputs.js");
// Icons













let listPage;

function createListContainer() {
  const page = document.createElement("div");
  page.id = "page";
  // Hide page when first load
  page.className = "hide";

  const background = document.createElement("div");
  background.id = "list-background";

  const container = document.createElement("div");
  container.className = "list-container";

  const titleSection = document.createElement("div");
  titleSection.className = "title-section";

  const title = document.createElement("h1");
  title.id = "list-title";
  title.textContent = "List title";

  const tasksContaier = document.createElement("div");
  tasksContaier.id = "tasks-container";

  const newTaskButton = document.createElement("button");
  newTaskButton.id = "new-task-button";
  newTaskButton.textContent = "Add new task";

  const completedSection = document.createElement("div");
  completedSection.className = "completed-tasks-section";

  const completedTasksTitleSection = document.createElement("div");
  completedTasksTitleSection.className = "completed-tasks-title-section";

  const completedTitle = document.createElement("h2");
  completedTitle.id = "completed-tasks-title";
  completedTitle.textContent = "Completed tasks ";

  const completedTasksCounter = document.createElement("span");
  completedTasksCounter.className = "completed-tasks-counter";
  completedTasksCounter.textContent = "(0)";

  const expandCompletedTasks = document.createElement("div");
  expandCompletedTasks.className = "expand-tasks";
  expandCompletedTasks.innerHTML = (_img_others_expand_tasks_svg__WEBPACK_IMPORTED_MODULE_4___default());

  completedTitle.appendChild(completedTasksCounter);
  completedTasksTitleSection.appendChild(completedTitle);
  completedTasksTitleSection.appendChild(expandCompletedTasks);

  const completedContainer = document.createElement("div");
  completedContainer.id = "completed-tasks-container";

  completedSection.appendChild(completedTasksTitleSection);
  completedSection.appendChild(completedContainer);

  container.appendChild(titleSection);
  container.appendChild(tasksContaier);
  container.appendChild(newTaskButton);
  container.appendChild(completedSection);

  page.appendChild(background);
  page.appendChild(container);

  return page;
}

function emptyPage() {
  const container = document.createElement("div");
  container.className = "empty-page";

  const emptyTitle = document.createElement("p");
  emptyTitle.className = "empty-title";
  emptyTitle.textContent = "To-Do app";

  const emptySubtitle = document.createElement("p");
  emptySubtitle.className = "empty-subtitle";
  emptySubtitle.textContent =
    "Create a new list by clicking the + button or select an existing one to start adding your tasks.";

  container.appendChild(emptyTitle);
  container.appendChild(emptySubtitle);

  return container;
}

function createNewTaskElement(task, isCompleted) {
  const newTaskElement = document.createElement("div");
  newTaskElement.className = "task";

  newTaskElement.dataset.taskid = task.id;

  const completeTaskButton = document.createElement("div");
  completeTaskButton.className = "complete-task-button";
  completeTaskButton.innerHTML = isCompleted
    ? (_img_others_completed_task_svg__WEBPACK_IMPORTED_MODULE_3___default())
    : (_img_others_to_complete_button_svg__WEBPACK_IMPORTED_MODULE_2___default());

  const mainInformation = document.createElement("div");
  mainInformation.className = "main-information";

  const taskTitle = document.createElement("div");
  taskTitle.className = "title";
  taskTitle.textContent = task.title;

  mainInformation.appendChild(taskTitle);

  if (task.description) {
    const taskDescription = document.createElement("div");
    taskDescription.className = "description";
    taskDescription.textContent = task.description;
    mainInformation.appendChild(taskDescription);
  }
  const subInformation = document.createElement("div");
  subInformation.className = "sub-information";

  const taskPriority = document.createElement("div");
  taskPriority.className = "priority";

  if (task.priority) {
    const priorityIcon = document.createElement("div");
    priorityIcon.className = "priority-icon";
    priorityIcon.innerHTML = (_img_tasks_priority_fill_svg__WEBPACK_IMPORTED_MODULE_1___default());

    const priorityLabel = document.createElement("div");
    priorityLabel.className = "priority-label";

    switch (task.priority) {
      case "Low":
        taskPriority.classList.add("low");
        priorityLabel.textContent = "Low";
        break;

      case "Medium":
        taskPriority.classList.add("medium");
        priorityLabel.textContent = "Medium";
        break;

      case "High":
        taskPriority.classList.add("high");
        priorityLabel.textContent = "High";
        break;
    }

    taskPriority.appendChild(priorityIcon);
    taskPriority.appendChild(priorityLabel);
  }

  const taskDate = document.createElement("div");
  taskDate.className = "date";

  if (task.date) {
    const dateIcon = document.createElement("div");
    dateIcon.className = "date-icon";
    dateIcon.innerHTML = (_img_tasks_date_fill_svg__WEBPACK_IMPORTED_MODULE_0___default());

    const dateLabel = document.createElement("div");
    dateLabel.className = "date-label";
    dateLabel.textContent = task.date;

    taskDate.appendChild(dateIcon);
    taskDate.appendChild(dateLabel);
  }

  subInformation.appendChild(taskPriority);
  subInformation.appendChild(taskDate);

  newTaskElement.appendChild(completeTaskButton);
  newTaskElement.appendChild(mainInformation);
  newTaskElement.appendChild(subInformation);

  addTaskDetailsDialogEvent(newTaskElement, _lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_8__.getCurrentList(), task);

  return newTaskElement;
}

// Refresh all tasks from selected list
function refreshTaskElements() {
  const tasksContainer = listPage.querySelector("#tasks-container");
  const completedSection = listPage.querySelector(".completed-tasks-section");
  const completedContainer = listPage.querySelector(
    "#completed-tasks-container"
  );
  const completedCounter = listPage.querySelector(".completed-tasks-counter");

  // Reset all tasks elements
  tasksContainer.innerHTML = "";
  _lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_8__.getCurrentList().tasks.forEach((task) => {
    tasksContainer.appendChild(createNewTaskElement(task, false));
  });

  addCompleteTaskEvent();

  // Reset all completed tasks elements
  completedContainer.innerHTML = "";
  // Count completed takss
  completedCounter.textContent = `(${_lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_8__.getCompletedLength(
    _lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_8__.getCurrentList().name
  )})`;

  // Add all completed tasks to page
  _lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_8__.getCurrentList().completed.forEach((task) => {
    completedContainer.appendChild(createNewTaskElement(task, true));
  });

  // Hide completed tasks container when completed array is empty
  if (!_lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_8__.getCompletedLength(_lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_8__.getCurrentList().name)) {
    completedSection.classList.add("hide");
  } else {
    completedSection.classList.remove("hide");
  }

  addRestoreTaskEvent();
}

function refreshListTitle() {
  const listTitle = document.querySelector("#list-title");
  listTitle.textContent = _lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_8__.getCurrentList().name;
}

function loadListContent() {
  const emptyContainer = listPage.querySelector(".empty-page");
  const pageContainer = listPage.querySelector("#page");
  const titleSection = listPage.querySelector(".title-section");

  // Hide empty page container
  emptyContainer.classList.add("hide");
  pageContainer.classList.remove("hide");

  // Reload titleSection to load title and options
  titleSection.innerHTML = "";

  const title = document.createElement("h1");
  title.id = "list-title";
  title.textContent = _lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_8__.getCurrentList().name;

  const listOptions = _inputs_js__WEBPACK_IMPORTED_MODULE_10__.appendOptionsButton(
    (_img_others_horizontal_options_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    "list-more-options",
    [
      { label: "Edit", icon: (_img_others_edit_svg__WEBPACK_IMPORTED_MODULE_6___default()), optionClass: "edit-list" },
      { label: "Delete", icon: (_img_others_delete_svg__WEBPACK_IMPORTED_MODULE_7___default()), optionClass: "delete-list" },
    ]
  );
  const deleteOption = listOptions.querySelector(".delete-list");
  const editOption = listOptions.querySelector(".edit-list");

  titleSection.appendChild(title);
  titleSection.appendChild(listOptions);

  // Set events page
  _dialogs_js__WEBPACK_IMPORTED_MODULE_9__.openDialogEvent(
    deleteOption,
    _dialogs_js__WEBPACK_IMPORTED_MODULE_9__.showDeleteListDialog,
    _lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_8__.getCurrentList()
  );
  _dialogs_js__WEBPACK_IMPORTED_MODULE_9__.openDialogEvent(
    editOption,
    _dialogs_js__WEBPACK_IMPORTED_MODULE_9__.showEditListDialog,
    _lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_8__.getCurrentList()
  );

  refreshTaskElements();
}

function unloadPage() {
  const pageContainer = document.querySelector("#page");
  const emptyPageContainer = document.querySelector(".empty-page");

  pageContainer.classList.add("hide");
  emptyPageContainer.classList.remove("hide");
}

function addNewTaskEvent() {
  const newTaskButton = listPage.querySelector("#new-task-button");

  newTaskButton.addEventListener("click", () => {
    _dialogs_js__WEBPACK_IMPORTED_MODULE_9__.showNewTaskDialog();
  });
}

function addCompleteTaskEvent() {
  const tasksContainer = listPage.querySelector("#tasks-container");
  const tasks = Array.from(tasksContainer.querySelectorAll(".task"));

  // Add complete button event to each task element
  tasks.forEach((task) => {
    const completeTaskButton = task.querySelector(".complete-task-button");
    completeTaskButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent opening task details dialog
      _lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_8__.completeTask(_lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_8__.getCurrentList().name, task.dataset.taskid);
      refreshTaskElements();
    });
  });
}

function addRestoreTaskEvent() {
  const completedTasksContainer = listPage.querySelector(
    "#completed-tasks-container"
  );
  const tasks = Array.from(completedTasksContainer.querySelectorAll(".task"));

  // Add complete button event to each task element
  tasks.forEach((task) => {
    const completeTaskButton = task.querySelector(".complete-task-button");
    completeTaskButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent opening task details dialog
      _lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_8__.restoreTask(_lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_8__.getCurrentList().name, task.dataset.taskid);
      refreshTaskElements();
    });
  });
}

function addExpandTasksEvent() {
  const completedTasks = listPage.querySelector(".completed-tasks-section");
  const expandTasksButton = listPage.querySelector(".expand-tasks");

  expandTasksButton.addEventListener("click", () => {
    completedTasks.classList.toggle("show");
  });
}

function addTaskDetailsDialogEvent(taskElement, list, task) {
  taskElement.addEventListener("click", () => {
    _dialogs_js__WEBPACK_IMPORTED_MODULE_9__.showTaskDetailsDialog(list, task);
  });
}

function renderPage() {
  listPage = document.createElement("div");
  listPage.id = "list-page";

  listPage.appendChild(createListContainer());
  listPage.appendChild(emptyPage());

  addNewTaskEvent();
  addExpandTasksEvent();

  document.body.appendChild(listPage);
}




/***/ }),

/***/ "./src/design/sidebar.js":
/*!*******************************!*\
  !*** ./src/design/sidebar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   refreshUserSidebarLists: () => (/* binding */ refreshUserSidebarLists),
/* harmony export */   renderSidebar: () => (/* binding */ renderSidebar)
/* harmony export */ });
/* harmony import */ var _img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/lists/default.svg */ "./src/img/lists/default.svg");
/* harmony import */ var _img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_others_create_list_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/others/create-list.svg */ "./src/img/others/create-list.svg");
/* harmony import */ var _img_others_create_list_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_others_create_list_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_todo_app_icon_flat_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/todo-app-icon-flat.svg */ "./src/img/todo-app-icon-flat.svg");
/* harmony import */ var _img_todo_app_icon_flat_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_todo_app_icon_flat_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ "./src/design/page.js");
/* harmony import */ var _lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lists-and-tasks.js */ "./src/lists-and-tasks.js");
/* harmony import */ var _dialogs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs.js */ "./src/design/dialogs.js");








let userLists;

function createAppTitle() {
  const container = document.createElement("div");
  container.className = "app-info-container";

  const appIcon = document.createElement("span");
  appIcon.id = "app-icon";
  appIcon.innerHTML = (_img_todo_app_icon_flat_svg__WEBPACK_IMPORTED_MODULE_2___default());

  const appTitle = document.createElement("div");
  appTitle.id = "app-title";
  appTitle.textContent = "To-Do app";

  container.appendChild(appIcon);
  container.appendChild(appTitle);

  return container;
}

function createListSidebar(listLabel, listIcon = (_img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0___default())) {
  const list = document.createElement("div");
  list.className = "list-sidebar-element";
  list.dataset.listName = listLabel;

  const icon = document.createElement("div");
  icon.className = "list-sidebar-element-icon";
  icon.innerHTML = listIcon;

  const label = document.createElement("div");
  label.className = "list-sidebar-element-label";
  label.textContent = listLabel;

  list.appendChild(icon);
  list.appendChild(label);

  return list;
}

function refreshUserSidebarLists() {
  const listsContent = _lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_4__.getListsNamesIcons();

  // Reset sidebar lists
  userLists.innerHTML = "";

  // Add lists to the sidebar
  listsContent.forEach((list) => {
    userLists.appendChild(createListSidebar(list.name, list.icon));
  });

  // Add loading events to each list created by the user
  userLists.childNodes.forEach((listElement) => {
    listElement.addEventListener("click", () => {
      _lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_4__.setCurrentList(listElement.dataset.listName);
      _page__WEBPACK_IMPORTED_MODULE_3__.loadListContent();
      highlightSelectedList(userLists.childNodes, listElement);
    });
  });
}

function highlightSelectedList(lists, selectedList) {
  lists.forEach((list) => list.classList.remove("selected"));
  selectedList.classList.add("selected");
}

function createUserListsContainer() {
  const listsContainer = document.createElement("div");
  listsContainer.className = "sidebar-lists-container user-lists";

  const listTitleContainer = document.createElement("div");
  listTitleContainer.className = "list-title-container";

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = "My Lists";

  const createListButton = document.createElement("button");
  createListButton.id = "create-list-button";

  const createListIcon = document.createElement("span");
  createListIcon.className = "create-list-icon";
  createListIcon.innerHTML = (_img_others_create_list_svg__WEBPACK_IMPORTED_MODULE_1___default());

  createListButton.appendChild(createListIcon);

  listTitleContainer.appendChild(title);
  listTitleContainer.appendChild(createListButton);

  userLists = document.createElement("div");
  userLists.className = "lists-group";

  refreshUserSidebarLists();

  listsContainer.appendChild(listTitleContainer);
  listsContainer.appendChild(userLists);

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

function createUserListEvent(sidebar) {
  const createListButton = sidebar.querySelector("#create-list-button");
  createListButton.addEventListener("click", () => _dialogs_js__WEBPACK_IMPORTED_MODULE_5__.showNewListDialog());
}

function renderSidebar() {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  sidebar.appendChild(createAppTitle());
  sidebar.appendChild(createUserListsContainer());
  sidebar.appendChild(createLowerSidebar());

  createUserListEvent(sidebar);

  document.body.appendChild(sidebar);
}




/***/ }),

/***/ "./src/lists-and-tasks.js":
/*!********************************!*\
  !*** ./src/lists-and-tasks.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   completeTask: () => (/* binding */ completeTask),
/* harmony export */   createList: () => (/* binding */ createList),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteList: () => (/* binding */ deleteList),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editList: () => (/* binding */ editList),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   getCompletedLength: () => (/* binding */ getCompletedLength),
/* harmony export */   getCurrentList: () => (/* binding */ getCurrentList),
/* harmony export */   getListIndex: () => (/* binding */ getListIndex),
/* harmony export */   getListsNames: () => (/* binding */ getListsNames),
/* harmony export */   getListsNamesIcons: () => (/* binding */ getListsNamesIcons),
/* harmony export */   refreshLists: () => (/* binding */ refreshLists),
/* harmony export */   restoreTask: () => (/* binding */ restoreTask),
/* harmony export */   setCurrentList: () => (/* binding */ setCurrentList)
/* harmony export */ });
/* harmony import */ var _img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/lists/default.svg */ "./src/img/lists/default.svg");
/* harmony import */ var _img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0__);


class Task {
  constructor(title, description, date, priority) {
    this.id = Date.now().toString(16);
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

class List {
  constructor(listName, icon) {
    this.name = listName;
    this.icon = icon;
    this.tasks = [];
    this.completed = [];
  }
}

let content;
let currentList;

const saveLists = () => {
  localStorage.setItem("lists", JSON.stringify(content));
};

const refreshLists = () => {
  // If lists is not created in localStorage, create an empty array
  if (!localStorage.getItem("lists")) {
    content = [];
    createList("My tasks", (_img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0___default()));
    saveLists();
  }

  content = JSON.parse(localStorage.getItem("lists"));
};

const createList = (listName, icon) => {
  // Avoid creating duplicated lists
  if (!getList(listName)) {
    content.push(new List(listName, icon));
    saveLists();
  }
};

const editList = (listName, newList = { name: "Name", icon: (_img_lists_default_svg__WEBPACK_IMPORTED_MODULE_0___default()) }) => {
  const selectedList = getList(listName);

  selectedList.name = newList.name;
  selectedList.icon = newList.icon;

  saveLists();
};

const deleteList = (listName) => {
  const listIndex = getListIndex(listName);

  if (listIndex !== -1) {
    content.splice(listIndex, 1);
    saveLists();
  }
};

const getList = (listName) => content.find((list) => list.name === listName);

const createTask = (
  listName,
  newTask = {
    title: "Title",
    description: "Description",
    date: "Date",
    priority: "Priority",
  }
) => {
  const selectedList = getList(listName);

  // Remove any other possible value to priority that is not equal to the specified below
  if (
    !(
      newTask.priority === "Low" ||
      newTask.priority == "Medium" ||
      newTask.priority === "High"
    )
  )
    newTask.priority = "";

  selectedList.tasks.push(
    new Task(newTask.title, newTask.description, newTask.date, newTask.priority)
  );
  saveLists();
};

const getTask = (list, taskId) => {
  for (let key in list) {
    if (key === "tasks" || key === "completed") {
      const taskFound = list[key].find((task) => task.id === taskId);
      // If task is not found in "tasks" array, continue to "completed" array
      if (taskFound) return taskFound;
    }
  }
};

const getTaskIndex = (list, taskArray, taskId) =>
  list[taskArray].indexOf(getTask(list, taskId));

const completeTask = (listName, taskId) => {
  const selectedList = getList(listName);
  // Find task index to use it in splice() arguments
  const taskIndex = getTaskIndex(selectedList, "tasks", taskId);
  // Remove task from array and convert it to object (index 0)
  const completedTask = selectedList.tasks.splice(taskIndex, 1)[0];
  // Add task to the front of completed array
  selectedList.completed.unshift(completedTask);
  saveLists();
};

const restoreTask = (listName, taskId) => {
  const selectedList = getList(listName);
  // Find task index to use it in splice() arguments
  const taskIndex = getTaskIndex(selectedList, "completed", taskId);
  // Remove task from array and convert it to object (index 0)
  const completedTask = selectedList.completed.splice(taskIndex, 1)[0];
  // Add task to the front of completed array
  selectedList.tasks.push(completedTask);
  saveLists();
};

const moveTask = (taskId, fromListName, toListName) => {
  const fromList = getList(fromListName);
  const toList = getList(toListName);

  for (let key in fromList) {
    if (key === "tasks" || key === "completed") {
      const taskIndex = getTaskIndex(fromList, key, taskId);

      if (taskIndex !== -1) {
        const movedTask = fromList[key].splice(taskIndex, 1)[0];
        toList[key].push(movedTask);
        return;
      }
    }
  }
};

const editTask = (
  listName,
  taskId,
  newTask = {
    title: "Title",
    description: "Description",
    date: "Date",
    priority: "Priority",
  }
) => {
  if (listName !== currentList.name) {
    moveTask(taskId, currentList.name, listName);
  }

  const selectedList = getList(listName);
  const selectedTask = getTask(selectedList, taskId);

  // Remove any other possible value to priority that is not equal to the specified below
  if (
    !(
      newTask.priority === "Low" ||
      newTask.priority == "Medium" ||
      newTask.priority === "High"
    )
  )
    newTask.priority = "";

  selectedTask.title = newTask.title;
  selectedTask.description = newTask.description;
  selectedTask.date = newTask.date;
  selectedTask.priority = newTask.priority;

  saveLists();
};

const deleteTask = (listName, taskId) => {
  const selectedList = getList(listName);

  for (let key in selectedList) {
    // Iterate only in tasks and completed arrays to find tasks
    if (key === "tasks" || key === "completed") {
      const taskIndex = getTaskIndex(selectedList, key, taskId);

      if (taskIndex !== -1) {
        selectedList[key].splice(taskIndex, 1);
        saveLists();
        return;
      }
    }
  }
};

const setCurrentList = (listName) => {
  currentList = getList(listName);
};

const getCurrentList = () => currentList;

const getCompletedLength = (listName) => getList(listName).completed.length;

const getListsNames = () => {
  const namesArray = [];
  content.forEach((list) => namesArray.push(list.name));
  return namesArray;
};

const getListsNamesIcons = () => {
  const namesIconsArray = [];

  content.forEach((list) => {
    const propertiesToFilter = ["name", "icon"];

    // Return a new object with only "name" and "icon" properties
    const filteredList = Object.keys(list)
      .filter((key) => propertiesToFilter.includes(key))
      .reduce((object, key) => {
        object[key] = list[key];
        return object;
      }, {});

    namesIconsArray.push(filteredList);
  });

  return namesIconsArray;
};

const getListIndex = (listName) =>
  content.indexOf(content.find((list) => list.name == listName));




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _design_sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./design/sidebar.js */ "./src/design/sidebar.js");
/* harmony import */ var _design_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./design/page.js */ "./src/design/page.js");
/* harmony import */ var _lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lists-and-tasks.js */ "./src/lists-and-tasks.js");
/* harmony import */ var _design_notifications_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./design/notifications.js */ "./src/design/notifications.js");






_lists_and_tasks_js__WEBPACK_IMPORTED_MODULE_3__.refreshLists();
_design_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.renderSidebar();
_design_page_js__WEBPACK_IMPORTED_MODULE_2__.renderPage();
_design_notifications_js__WEBPACK_IMPORTED_MODULE_4__.renderNotifications();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsZ0hBQWdILElBQUksSUFBSSxrQkFBa0I7QUFDMUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtGQUFrRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sUUFBUSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxhQUFhLGNBQWMsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxXQUFXLFlBQVksT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksV0FBVyxNQUFNLE9BQU8sWUFBWSxPQUFPLFFBQVEsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE9BQU8sWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxX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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiwrREFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QiwrREFBVSx5QkFBeUI7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0Msb0JBQW9CLCtEQUFVLEVBQUU7QUFDeEU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBSTs7QUFFWDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQWtCRTs7Ozs7OztVQzNQRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMEI7QUFDTjtBQUNLO0FBQ2E7O0FBRTNELDZEQUFrQjtBQUNsQiw2REFBcUI7QUFDckIsdURBQWU7QUFDZix5RUFBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy9saXN0cy9ib29rLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL2xpc3RzL2Nsb3VkLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL2xpc3RzL2RlZmF1bHQuc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvbGlzdHMvaGVhcnQuc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvbGlzdHMvbGlnaHRidWxiLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL2xpc3RzL3BlbmNpbC5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy9saXN0cy9wbGFuZS5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy9saXN0cy9zY2hvb2wuc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvbGlzdHMvc2hvcHBpbmcuc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvbGlzdHMvc29mYS5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy9saXN0cy9zdGFyLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL2xpc3RzL3RyZWUuc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvb3RoZXJzL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL290aGVycy9jb21wbGV0ZWQtdGFzay5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy9vdGhlcnMvY3JlYXRlLWxpc3Quc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvb3RoZXJzL2RlbGV0ZS5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy9vdGhlcnMvZWRpdC5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy9vdGhlcnMvZXhwYW5kLXRhc2tzLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL290aGVycy9ob3Jpem9udGFsLW9wdGlvbnMuc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvb3RoZXJzL3N1Y2Nlc3Mtbm90aWZpY2F0aW9uLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL290aGVycy90by1jb21wbGV0ZS1idXR0b24uc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvdGFza3MvZGF0ZS1maWxsLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL3Rhc2tzL2RhdGUtbm9maWxsLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL3Rhc2tzL3ByaW9yaXR5LWZpbGwuc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvdGFza3MvcHJpb3JpdHktbm9maWxsLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL3RvZG8tYXBwLWljb24tZmxhdC5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2Rlc2lnbi9kaWFsb2dzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9kZXNpZ24vaW5wdXRzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9kZXNpZ24vbm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvZGVzaWduL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2Rlc2lnbi9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9saXN0cy1hbmQtdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcbiAgLyogVHlwb2dyYXBoeSAqL1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcblxuICAvKiBDb2xvcnM6ICovXG4gIC0tQmxhY2s6ICMyNTI3MmM7XG4gIC0tQmxhY2stNzU6ICMyNTI3MmNiZjtcbiAgLS1CbGFjay01MDogIzI1MjcyYzgwO1xuICAtLUJsYWNrLTI1OiAjMjUyNzJjNDA7XG4gIC0tQmxhY2stMTA6ICMyNTI3MmMxYTtcbiAgLS1CbGFjay0wNTogIzI1MjcyYzBkO1xuICAtLVdoaXRlOiAjZmFmYWZhO1xuICAtLVByaW1hcnk6ICM0YzdkZmI7XG4gIC0tRGVsZXRlLUFjY2VudDogI2VjM2E0ZjtcbiAgLS1IaWdoLVByaW9yaXR5OiAjZWU0ZTM5O1xuICAtLU1lZGl1bS1Qcmlvcml0eTogI2VhN2UxYTtcbiAgLS1Mb3ctUHJpb3JpdHk6ICM4OTcxNWQ7XG4gIC0tVGFzay1MaXN0OiAjMmY5ZTYyO1xuICAtLUxpc3QtQmFja2dyb3VuZC1HcmFkaWVudDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNjZhMmU4IDAlLCAjOTg5YmU5IDEwMCUpO1xufVxuXG5ib2R5IHtcbiAgY29sb3I6IHZhcigtLUJsYWNrKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG59XG5cbmgxLFxuaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyLjUzNHJlbTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogU2lkZWJhciAqL1xuXG4jc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmxhY2stMDUpO1xuICBwYWRkaW5nOiAyNnB4IDMycHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLUJsYWNrLTI1KTtcbiAgd2lkdGg6IDI1NnB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMzJweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5hcHAtaW5mby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuI2FwcC1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGZpbGw6IHZhcigtLVByaW1hcnkpO1xufVxuXG4jYXBwLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLVByaW1hcnkpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnNpZGViYXItbGlzdHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1CbGFjay0yNSk7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xufVxuXG4uc2lkZWJhci1saXN0cy1jb250YWluZXIgLnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLUJsYWNrLTUwKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi51c2VyLWxpc3RzIC5saXN0LXRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuI2NyZWF0ZS1saXN0LWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDRweDtcbiAgdHJhbnNpdGlvbjogMTAwbXM7XG59XG5cbiNjcmVhdGUtbGlzdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CbGFjay0xMCk7XG4gIHRyYW5zaXRpb246IDEwMG1zO1xufVxuXG4jY3JlYXRlLWxpc3QtYnV0dG9uIC5jcmVhdGUtbGlzdC1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGZpbGw6IHZhcigtLUJsYWNrLTUwKTtcbn1cblxuLmxpc3RzLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG59XG5cbi5saXN0LXNpZGViYXItZWxlbWVudCB7XG4gIGNvbG9yOiB2YXIoLS1CbGFjayk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xuICB0cmFuc2l0aW9uOiAyMDBtcztcbn1cblxuLmxpc3Qtc2lkZWJhci1lbGVtZW50IC5saXN0LXNpZGViYXItZWxlbWVudC1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogMjRweDtcbiAgbWF4LWhlaWdodDogMjRweDtcbn1cblxuLmxpc3Qtc2lkZWJhci1lbGVtZW50IC5saXN0LXNpZGViYXItZWxlbWVudC1sYWJlbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubGlzdC1zaWRlYmFyLWVsZW1lbnQuc2VsZWN0ZWQge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0cmFuc2l0aW9uOiAyMDBtcztcbn1cblxuLmxpc3Qtc2lkZWJhci1lbGVtZW50OmhvdmVyLFxuLmxpc3Qtc2lkZWJhci1lbGVtZW50LnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmxhY2stMTApO1xuICB0cmFuc2l0aW9uOiAyMDBtcztcbn1cblxuLmxvd2VyLXNpZGViYXIge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNjcmVkaXRzIHtcbiAgY29sb3I6IHZhcigtLUJsYWNrLTUwKTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cblxuI2NyZWRpdHMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI2NyZWRpdHMgYSxcbiNjcmVkaXRzIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcbn1cblxuLyogTGlzdCBjb250ZW50ICovXG5cbiNsaXN0LXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjU2cHgpO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuI2xpc3QtYmFja2dyb3VuZCB7XG4gIGhlaWdodDogMTUycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLUxpc3QtQmFja2dyb3VuZC1HcmFkaWVudCk7XG59XG5cbi5saXN0LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogNDhweCBhdXRvO1xuICB3aWR0aDogY2xhbXAoNDAwcHgsIDUwdncsIDgzMnB4KTtcbn1cblxuLnRpdGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWF4LWNvbnRlbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAwO1xuICBtaW4taGVpZ2h0OiAwO1xuICBnYXA6IDI2cHg7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnRpdGxlLXNlY3Rpb24gI2xpc3QtdGl0bGUge1xuICBtaW4td2lkdGg6IDA7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi50aXRsZS1zZWN0aW9uIC5vcHRpb25zLWNvbnRyb2xsZXItYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbi50aXRsZS1zZWN0aW9uIC5vcHRpb25zLWNvbnRyb2xsZXItYnV0dG9uOmhvdmVyLFxuLnRpdGxlLXNlY3Rpb24gLm9wdGlvbnMtY29udHJvbGxlci1idXR0b246Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CbGFjay0xMCk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbi50aXRsZS1zZWN0aW9uIC5saXN0LW1vcmUtb3B0aW9ucyAuYnV0dG9uLWljb24ge1xuICBmaWxsOiB2YXIoLS1CbGFjayk7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbiNuZXctdGFzay1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjRweCAzMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tQmxhY2stNTApO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1CbGFjay0yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuXG4jbmV3LXRhc2stYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NCUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuXG4uZW1wdHktcGFnZSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDQ4cHggYXV0bztcbiAgd2lkdGg6IGNsYW1wKDQwMHB4LCA1MHZ3LCA1MDBweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ2FwOiAyNHB4O1xufVxuXG4uZW1wdHktcGFnZSAuZW1wdHktdGl0bGUge1xuICBjb2xvcjogdmFyKC0tUHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uZW1wdHktcGFnZSAuZW1wdHktc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHZhcigtLUJsYWNrLTUwKTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBUYXNrcyAqL1xuXG4jdGFza3MtY29udGFpbmVyLFxuI2NvbXBsZXRlZC10YXNrcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4udGFzayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJsYWNrLTA1KTtcbiAgcGFkZGluZzogMjRweCAzMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1CbGFjay0yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMnB4IGF1dG8gbWF4LWNvbnRlbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIG1pbi13aWR0aDogMDtcbiAgZ2FwOiAzMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbi50YXNrID4gZGl2IHtcbiAgbWluLWhlaWdodDogMDtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4udGFzazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxOTUsIDEwJSwgODclKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcbn1cblxuLnRhc2sgLmNvbXBsZXRlLXRhc2stYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrIC5tYWluLWluZm9ybWF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRhc2sgLnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLUJsYWNrKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcbn1cblxuLnRhc2sgLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLUJsYWNrLTUwKTtcbn1cblxuLnRhc2sgLnRpdGxlLFxuLnRhc2sgLmRlc2NyaXB0aW9uIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50YXNrIC5zdWItaW5mb3JtYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi50YXNrIC5wcmlvcml0eS5sb3cge1xuICBjb2xvcjogdmFyKC0tTG93LVByaW9yaXR5KTtcbiAgZmlsbDogdmFyKC0tTG93LVByaW9yaXR5KTtcbn1cblxuLnRhc2sgLnByaW9yaXR5Lm1lZGl1bSB7XG4gIGNvbG9yOiB2YXIoLS1NZWRpdW0tUHJpb3JpdHkpO1xuICBmaWxsOiB2YXIoLS1NZWRpdW0tUHJpb3JpdHkpO1xufVxuXG4udGFzayAucHJpb3JpdHkuaGlnaCB7XG4gIGNvbG9yOiB2YXIoLS1IaWdoLVByaW9yaXR5KTtcbiAgZmlsbDogdmFyKC0tSGlnaC1Qcmlvcml0eSk7XG59XG5cbi50YXNrIC5wcmlvcml0eSxcbi50YXNrIC5kYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrIC5kYXRlIHtcbiAgY29sb3I6IHZhcigtLUJsYWNrLTc1KTtcbiAgZmlsbDogdmFyKC0tQmxhY2stNzUpO1xufVxuXG4udGFzayAuZGF0ZS1pY29uLFxuLnRhc2sgLnByaW9yaXR5LWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLXdpZHRoOiAyNHB4O1xuICBtYXgtaGVpZ2h0OiAyNHB4O1xufVxuXG4vKiBDb21wbGV0ZWQgdGFza3MgKi9cbi5jb21wbGV0ZWQtdGFza3Mtc2VjdGlvbiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1CbGFjay0yNSk7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xufVxuXG4uY29tcGxldGVkLXRhc2tzLXRpdGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDI0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbiNjb21wbGV0ZWQtdGFza3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2NvbXBsZXRlZC10YXNrcy1jb250YWluZXIgLnRhc2sgLnRpdGxlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiB2YXIoLS1CbGFjay03NSk7XG59XG5cbi5leHBhbmQtdGFza3Mge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIFNldCAzNjAgZGVncmVlcyB0byByb3RhdGUgdG8gcmlnaHQgaW5zdGVhZCB0byB0aGUgbGVmdCAqL1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB0cmFuc2l0aW9uOiAzMDBtcztcbn1cblxuLmNvbXBsZXRlZC10YXNrcy1zZWN0aW9uLnNob3cgLmV4cGFuZC10YXNrcyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHRyYW5zaXRpb246IDMwMG1zO1xufVxuXG4uY29tcGxldGVkLXRhc2tzLXNlY3Rpb24uc2hvdyAjY29tcGxldGVkLXRhc2tzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi8qIERpYWxvZ3MgKi9cblxuZGlhbG9nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGFuaW1hdGlvbi1uYW1lOiBzaG93RGlhbG9nO1xuICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xufVxuXG5kaWFsb2cuY2xvc2luZyB7XG4gIGFuaW1hdGlvbi1uYW1lOiBjbG9zZURpYWxvZztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOTk7XG4gIGFuaW1hdGlvbi1uYW1lOiBzaG93RGlhbG9nQmFja2Ryb3A7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XG59XG5cbmRpYWxvZy5jbG9zaW5nOjpiYWNrZHJvcCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBjbG9zZURpYWxvZ0JhY2tkcm9wO1xuICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuZGlhbG9nI25ldy1saXN0LFxuZGlhbG9nI2VkaXQtbGlzdCxcbmRpYWxvZyNuZXctdGFzayxcbmRpYWxvZyNlZGl0LXRhc2sge1xuICBnYXA6IDE2cHg7XG59XG5cbmRpYWxvZyNuZXctdGFzayxcbmRpYWxvZyNlZGl0LXRhc2sge1xuICB3aWR0aDogNTUwcHg7XG59XG5cbmRpYWxvZyAuZGlhbG9nLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBnYXA6IDhweDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMnB4IDU1cHggMCA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcbiAgY29sb3I6IHZhcigtLUJsYWNrKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOnBsYWNlaG9sZGVyLXNob3duIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tQmxhY2stMjUpO1xuICB0cmFuc2l0aW9uOiAyMDBtcztcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLVByaW1hcnkpO1xuICB0cmFuc2l0aW9uOiAyMDBtcztcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXTo6cGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tQmxhY2stNTApO1xufVxuXG5idXR0b24ge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tUHJpbWFyeSk7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG59XG5cbmJ1dHRvbi5wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5YTdmYztcbn1cblxuYnV0dG9uLnByaW1hcnk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNTJjYztcbn1cblxuYnV0dG9uLnByaW1hcnk6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNkMWZmO1xuICBjb2xvcjogI2YwZjZmZjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuYnV0dG9uLnNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWNiY2Y7XG4gIGNvbG9yOiB2YXIoLS1CbGFjay03NSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbmJ1dHRvbi5zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdhOWFmO1xufVxuXG5idXR0b24uc2Vjb25kYXJ5OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NzhhOTI7XG59XG5cbi8qIE5ldyBsaXN0IGRpYWxvZyAqL1xuZGlhbG9nI25ldy1saXN0LFxuZGlhbG9nI2VkaXQtbGlzdCB7XG4gIHdpZHRoOiA1NTBweDtcbn1cblxuZGlhbG9nI25ldy1saXN0IC50aXRsZS1jb250YWluZXIsXG5kaWFsb2cjZWRpdC1saXN0IC50aXRsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmRpYWxvZyNuZXctbGlzdCAudGl0bGUtaWNvbi1pbnB1dCxcbmRpYWxvZyNlZGl0LWxpc3QgLnRpdGxlLWljb24taW5wdXQge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLUJsYWNrLTI1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNsaXN0LXRpdGxlLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIE5ldyB0YXNrIGRpYWxvZyAqL1xuXG4vKiBUYXNrIGluZm9ybWF0aW9uICovXG5cbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLUJsYWNrLTc1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmxhY2stMDUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICByZXNpemU6IG5vbmU7XG59XG5cbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1CbGFjay01MCk7XG59XG5cbi8qIElucHV0cyAqL1xuXG4vKiBUZXh0IGFuZCB0ZXh0YXJlYSBpbnB1dCAqL1xuLnRleHQtaW5wdXQtY29udGFpbmVyLFxuLnRleHRhcmVhLWlucHV0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRleHRhcmVhLWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50ZXh0LWNvdW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNHB4O1xuICBvcGFjaXR5OiAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLVByaW1hcnkpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0gKyAudGV4dC1jb3VudGVyIHtcbiAgcmlnaHQ6IDRweDtcbn1cblxudGV4dGFyZWEgKyAudGV4dC1jb3VudGVyIHtcbiAgcmlnaHQ6IDhweDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMgKyAudGV4dC1jb3VudGVyLFxudGV4dGFyZWE6Zm9jdXMgKyAudGV4dC1jb3VudGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbn1cblxuLyogRGF0ZSBpbnB1dCAqL1xuI2RhdGUtaW5wdXQgaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA3N3B4O1xufVxuXG4vKiBDaGFuZ2UgYnV0dG9uIGFuZCBsYWJlbCBjb2xvciB3aGVuIHNlbGVjdGluZyBhIGRhdGUgKi9cbiNkYXRlLWlucHV0Om5vdChbZGF0YS12YWx1ZT1cIlwiXSkgYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLVByaW1hcnkpO1xuICBmaWxsOiB2YXIoLS1QcmltYXJ5KTtcbn1cblxuLyogU2VsZWN0IGlucHV0IGdyaWQgKi9cbi5zZWxlY3QtaW5wdXQtZ3JpZCAuc2VsZWN0LWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tUHJpbWFyeSk7XG59XG5cbi5zZWxlY3QtaW5wdXQtZ3JpZCAuYnV0dG9uLWljb24ge1xuICBmaWxsOiB2YXIoLS1QcmltYXJ5KTtcbn1cblxuLnNlbGVjdC1pbnB1dC1ncmlkIC5vcHRpb25zLWdyaWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDYwcHgpO1xuICBncmlkLWF1dG8tcm93czogNjBweDtcbiAgcGFkZGluZzogNnB4O1xuICBnYXA6IDZweDtcbn1cblxuLnNlbGVjdC1pbnB1dC1ncmlkLmV4cGFuZCAub3B0aW9ucy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLm9wdGlvbnMtZ3JpZCAub3B0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZmlsbDogdmFyKC0tQmxhY2stNzUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1CbGFjay0yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbi5vcHRpb25zLWdyaWQgLm9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJsYWNrLTEwKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcbn1cblxuLyogU2VsZWN0IGlucHV0cyAqL1xuZGlhbG9nI25ldy10YXNrIC50YXNrLXNlbGVjdC1pbnB1dHMsXG5kaWFsb2cjZWRpdC10YXNrIC50YXNrLXNlbGVjdC1pbnB1dHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLnNlbGVjdC1pbnB1dCxcbi5zZWxlY3QtaW5wdXQtZ3JpZCxcbi5vcHRpb25zLWNvbnRyb2xsZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWxlY3QtaW5wdXQgLnNlbGVjdC1idXR0b24sXG4uc2VsZWN0LWlucHV0LWdyaWQgLnNlbGVjdC1idXR0b24sXG4jZGF0ZS1pbnB1dCAuZGF0ZS1idXR0b24sXG4ub3B0aW9ucy1jb250cm9sbGVyIC5vcHRpb25zLWNvbnRyb2xsZXItYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1CbGFjay01MCk7XG4gIGZpbGw6IHZhcigtLUJsYWNrLTUwKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc2VsZWN0LWlucHV0IC5idXR0b24taWNvbixcbi5zZWxlY3QtbGlzdCAuYnV0dG9uLWljb24sXG4jZGF0ZS1pbnB1dCAuYnV0dG9uLWljb24ge1xuICBtaW4td2lkdGg6IDI0cHg7XG4gIG1heC1oZWlnaHQ6IDI0cHg7XG59XG5cbi5zZWxlY3QtaW5wdXQgLnNlbGVjdC1idXR0b24sXG4jZGF0ZS1pbnB1dCAuZGF0ZS1idXR0b24ge1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tQmxhY2stMjUpO1xufVxuXG4jc2VsZWN0LWxpc3QgYnV0dG9uIHtcbiAgbWF4LXdpZHRoOiAxODBweDtcbn1cblxuI3NlbGVjdC1saXN0IC5idXR0b24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNlbGVjdC1pbnB1dCAub3B0aW9ucyxcbi5zZWxlY3QtaW5wdXQtZ3JpZCAub3B0aW9ucy1ncmlkLFxuLm9wdGlvbnMtY29udHJvbGxlciAub3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xuICBjb2xvcjogdmFyKC0tQmxhY2spO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5vcHRpb25zIDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbn1cblxuLm9wdGlvbnMgOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG59XG5cbi5vcHRpb25zIC5vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xuICBjb2xvcjogdmFyKC0tQmxhY2spO1xuICBmaWxsOiB2YXIoLS1CbGFjayk7XG4gIHBhZGRpbmc6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5vcHRpb25zIC5vcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuXG4uc2VsZWN0LWlucHV0LmV4cGFuZCAub3B0aW9ucyxcbi5vcHRpb25zLWNvbnRyb2xsZXIuZXhwYW5kIC5vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLyogU2VsZWN0IHByaW9yaXR5IGlucHV0IGNvbG9yIGRlcGVuZGluZyB0byBzZWxlY3RlZCB2YWx1ZSAqL1xuI3NlbGVjdC1wcmlvcml0eVtkYXRhLXZhbHVlPVwiTG93XCJdIC5zZWxlY3QtYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1Mb3ctUHJpb3JpdHkpO1xuICBjb2xvcjogdmFyKC0tTG93LVByaW9yaXR5KTtcbiAgZmlsbDogdmFyKC0tTG93LVByaW9yaXR5KTtcbn1cblxuI3NlbGVjdC1wcmlvcml0eVtkYXRhLXZhbHVlPVwiTWVkaXVtXCJdIC5zZWxlY3QtYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1NZWRpdW0tUHJpb3JpdHkpO1xuICBjb2xvcjogdmFyKC0tTWVkaXVtLVByaW9yaXR5KTtcbiAgZmlsbDogdmFyKC0tTWVkaXVtLVByaW9yaXR5KTtcbn1cblxuI3NlbGVjdC1wcmlvcml0eVtkYXRhLXZhbHVlPVwiSGlnaFwiXSAuc2VsZWN0LWJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tSGlnaC1Qcmlvcml0eSk7XG4gIGNvbG9yOiB2YXIoLS1IaWdoLVByaW9yaXR5KTtcbiAgZmlsbDogdmFyKC0tSGlnaC1Qcmlvcml0eSk7XG59XG5cbi8qIFNlbGVjdCBwcmlvcml0eSBpbnB1dCBlbGVtZW50cyB0ZXh0IGNvbG9yICovXG4jc2VsZWN0LXByaW9yaXR5IC5vcHRpb25bZGF0YS12YWx1ZT1cIlByaW9yaXR5XCJdIHtcbiAgY29sb3I6IHZhcigtLUJsYWNrLTUwKTtcbiAgZmlsbDogdmFyKC0tQmxhY2stNTApO1xufVxuXG4jc2VsZWN0LXByaW9yaXR5IC5vcHRpb25bZGF0YS12YWx1ZT1cIkxvd1wiXSB7XG4gIGNvbG9yOiB2YXIoLS1Mb3ctUHJpb3JpdHkpO1xuICBmaWxsOiB2YXIoLS1Mb3ctUHJpb3JpdHkpO1xufVxuXG4jc2VsZWN0LXByaW9yaXR5IC5vcHRpb25bZGF0YS12YWx1ZT1cIk1lZGl1bVwiXSB7XG4gIGNvbG9yOiB2YXIoLS1NZWRpdW0tUHJpb3JpdHkpO1xuICBmaWxsOiB2YXIoLS1NZWRpdW0tUHJpb3JpdHkpO1xufVxuXG4jc2VsZWN0LXByaW9yaXR5IC5vcHRpb25bZGF0YS12YWx1ZT1cIkhpZ2hcIl0ge1xuICBjb2xvcjogdmFyKC0tSGlnaC1Qcmlvcml0eSk7XG4gIGZpbGw6IHZhcigtLUhpZ2gtUHJpb3JpdHkpO1xufVxuXG4vKiBMaXN0IGlucHV0IGJ1dHRvbiBjb2xvciAqL1xuI3NlbGVjdC1saXN0Om5vdChbZGF0YS12YWx1ZT1cIlwiXSkgLnNlbGVjdC1idXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLVRhc2stTGlzdCk7XG4gIGNvbG9yOiB2YXIoLS1UYXNrLUxpc3QpO1xuICBmaWxsOiB2YXIoLS1UYXNrLUxpc3QpO1xufVxuXG4jc2VsZWN0LWxpc3QgLm9wdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1CbGFjay03NSk7XG4gIGZpbGw6IHZhcigtLUJsYWNrLTc1KTtcbn1cblxuLyogT3B0aW9ucyBjb250cm9sbGVyIGNvbG9ycyAqL1xuLnRhc2stbW9yZS1vcHRpb25zIC5kZWxldGUtdGFzayxcbi5saXN0LW1vcmUtb3B0aW9ucyAuZGVsZXRlLWxpc3Qge1xuICBjb2xvcjogdmFyKC0tRGVsZXRlLUFjY2VudCk7XG4gIGZpbGw6IHZhcigtLURlbGV0ZS1BY2NlbnQpO1xufVxuXG4vKiBTVkcgaWNvbnMgc2l6ZXMgKi9cbi5idXR0b24taWNvbixcbi5vcHRpb24taWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi8qIFRhc2sgZGV0YWlscyAqL1xuZGlhbG9nI3Rhc2stZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA2MDBweDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cblxuZGlhbG9nI3Rhc2stZGV0YWlscyAuYWN0aW9ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgZ2FwOiA0cHg7XG59XG5cbmRpYWxvZyN0YXNrLWRldGFpbHMgLmFjdGlvbnMtY29udGFpbmVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcbiAgcGFkZGluZzogNnB4O1xuICBmaWxsOiB2YXIoLS1CbGFjayk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbmRpYWxvZyN0YXNrLWRldGFpbHMgLmFjdGlvbnMtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJsYWNrLTEwKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcbn1cblxuZGlhbG9nI3Rhc2stZGV0YWlscyAuYWN0aW9ucy1jb250YWluZXIgLmJ1dHRvbi1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmRpYWxvZyN0YXNrLWRldGFpbHMgLm1haW4taW5mb3JtYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubWFpbi1pbmZvcm1hdGlvbiAudGFzay10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1CbGFjayk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5tYWluLWluZm9ybWF0aW9uIC50YXNrLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiB2YXIoLS1CbGFjay03NSk7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4udGFzay1kZXNjcmlwdGlvbi5zY3JvbGwtdGV4dCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuZGlhbG9nI3Rhc2stZGV0YWlscyAuc2Vjb25kYXJ5LWluZm9ybWF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tQmxhY2stMjUpO1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuLnNlY29uZGFyeS1pbmZvcm1hdGlvbiAuaW5mby1lbGVtZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0cHg7XG59XG5cbi5pbmZvLWVsZW1lbnQgLmljb24ge1xuICBtaW4td2lkdGg6IDI0cHg7XG4gIG1heC1oZWlnaHQ6IDI0cHg7XG59XG5cbi5pbmZvLWVsZW1lbnQudGFzay1kYXRlIHtcbiAgY29sb3I6IHZhcigtLVByaW1hcnkpO1xuICBmaWxsOiB2YXIoLS1QcmltYXJ5KTtcbn1cblxuLmluZm8tZWxlbWVudC50YXNrLXByaW9yaXR5W2RhdGEtdmFsdWU9XCJMb3dcIl0ge1xuICBjb2xvcjogdmFyKC0tTG93LVByaW9yaXR5KTtcbiAgZmlsbDogdmFyKC0tTG93LVByaW9yaXR5KTtcbn1cblxuLmluZm8tZWxlbWVudC50YXNrLXByaW9yaXR5W2RhdGEtdmFsdWU9XCJNZWRpdW1cIl0ge1xuICBjb2xvcjogdmFyKC0tTWVkaXVtLVByaW9yaXR5KTtcbiAgZmlsbDogdmFyKC0tTWVkaXVtLVByaW9yaXR5KTtcbn1cblxuLmluZm8tZWxlbWVudC50YXNrLXByaW9yaXR5W2RhdGEtdmFsdWU9XCJIaWdoXCJdIHtcbiAgY29sb3I6IHZhcigtLUhpZ2gtUHJpb3JpdHkpO1xuICBmaWxsOiB2YXIoLS1IaWdoLVByaW9yaXR5KTtcbn1cblxuLmluZm8tZWxlbWVudC50YXNrLWxpc3Qge1xuICBtYXgtd2lkdGg6IDE2MHB4O1xuICBjb2xvcjogdmFyKC0tVGFzay1MaXN0KTtcbiAgZmlsbDogdmFyKC0tVGFzay1MaXN0KTtcbn1cblxuLnRhc2stbGlzdCAubGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogRGVsZXRlIGxpc3QgYW5kIERlbGV0ZSB0YXNrICovXG5kaWFsb2cjZGVsZXRlLWxpc3QsXG5kaWFsb2cjZGVsZXRlLXRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogMzJweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBjb2xvcjogdmFyKC0tQmxhY2spO1xufVxuXG5kaWFsb2cjZGVsZXRlLWxpc3QgLm1lc3NhZ2UsXG5kaWFsb2cjZGVsZXRlLXRhc2sgLm1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG59XG5cbmRpYWxvZyNkZWxldGUtbGlzdCAubWVzc2FnZS10aXRsZSxcbmRpYWxvZyNkZWxldGUtdGFzayAubWVzc2FnZS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG5kaWFsb2cjZGVsZXRlLWxpc3QgLnN1Yi1tZXNzYWdlLFxuZGlhbG9nI2RlbGV0ZS10YXNrIC5zdWItbWVzc2FnZSB7XG4gIGNvbG9yOiB2YXIoLS1CbGFjay03NSk7XG59XG5cbmRpYWxvZyNkZWxldGUtbGlzdCBidXR0b24ucHJpbWFyeSxcbmRpYWxvZyNkZWxldGUtdGFzayBidXR0b24ucHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLURlbGV0ZS1BY2NlbnQpO1xufVxuXG4ubGlzdC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmxhY2stMDUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xufVxuXG4ubGlzdC1pbmZvIC5saXN0LWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmlsbDogdmFyKC0tUHJpbWFyeSk7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5saXN0LWluZm8gLmxpc3QtdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHZhcigtLVByaW1hcnkpO1xufVxuXG4vKiBOb3RpZmljYXRpb25zICovXG4jbm90aWZpY2F0aW9ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDM1MHB4O1xuICBib3R0b206IDE2cHg7XG4gIHJpZ2h0OiAxNnB4O1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxNDMsIDQ3JSwgNDUlKTtcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcbiAgcGFkZGluZzogMjZweCAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYW5pbWF0aW9uLW5hbWU6IHNob3dOb3RpZmljYXRpb247XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XG59XG5cbi5ub3RpZmljYXRpb24uY2xvc2luZyB7XG4gIGFuaW1hdGlvbi1uYW1lOiBjbG9zZU5vdGlmaWNhdGlvbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5ub3RpZmljYXRpb24taWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xufVxuXG4ubm90aWZpY2F0aW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jbG9zZS1ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHJpZ2h0OiA4cHg7XG4gIHRvcDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XG4gIHBhZGRpbmc6IDZweDtcbiAgdHJhbnNpdGlvbjogMjAwbXM7XG59XG5cbi5jbG9zZS1ub3RpZmljYXRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbi5ub3RpZmljYXRpb246aG92ZXIgLmNsb3NlLW5vdGlmaWNhdGlvbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IDIwMG1zO1xufVxuXG4ubm90aWZpY2F0aW9uLWljb24sXG4uY2xvc2Utbm90aWZpY2F0aW9uIC5idXR0b24taWNvbiB7XG4gIGZpbGw6IHZhcigtLVdoaXRlKTtcbn1cblxuLmNsb3NlLW5vdGlmaWNhdGlvbiAuYnV0dG9uLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmJ1dHRvbi1pY29uIHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBBbmltYXRpb25zICovXG5cbkBrZXlmcmFtZXMgc2hvd0RpYWxvZyB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hvd0RpYWxvZ0JhY2tkcm9wIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xuICB9XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOTk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjbG9zZURpYWxvZyB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjbG9zZURpYWxvZ0JhY2tkcm9wIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDk5O1xuICB9XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzaG93Tm90aWZpY2F0aW9uIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjbG9zZU5vdGlmaWNhdGlvbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDBweCwgMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi8qIE1lZGlhIHF1ZXJpZXMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC50YXNrIC5zdWItaW5mb3JtYXRpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0NBQWtDOztFQUVsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7O0VBRTlCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBOztFQUVFLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFD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QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxlQUFlOztBQUVmO0VBQ0U7SUFDRSxnQ0FBZ0M7SUFDaEMsVUFBVTtFQUNaO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDhCQUE4QjtJQUM5QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdDQUFnQztJQUNoQyxVQUFVO0VBQ1o7RUFDQTtJQUNFLDhCQUE4QjtJQUM5QixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLFVBQVU7RUFDWjtBQUNGOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLE1BQU07RUFDUjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLyogVHlwb2dyYXBoeSAqL1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qIENvbG9yczogKi9cXG4gIC0tQmxhY2s6ICMyNTI3MmM7XFxuICAtLUJsYWNrLTc1OiAjMjUyNzJjYmY7XFxuICAtLUJsYWNrLTUwOiAjMjUyNzJjODA7XFxuICAtLUJsYWNrLTI1OiAjMjUyNzJjNDA7XFxuICAtLUJsYWNrLTEwOiAjMjUyNzJjMWE7XFxuICAtLUJsYWNrLTA1OiAjMjUyNzJjMGQ7XFxuICAtLVdoaXRlOiAjZmFmYWZhO1xcbiAgLS1QcmltYXJ5OiAjNGM3ZGZiO1xcbiAgLS1EZWxldGUtQWNjZW50OiAjZWMzYTRmO1xcbiAgLS1IaWdoLVByaW9yaXR5OiAjZWU0ZTM5O1xcbiAgLS1NZWRpdW0tUHJpb3JpdHk6ICNlYTdlMWE7XFxuICAtLUxvdy1Qcmlvcml0eTogIzg5NzE1ZDtcXG4gIC0tVGFzay1MaXN0OiAjMmY5ZTYyO1xcbiAgLS1MaXN0LUJhY2tncm91bmQtR3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzY2YTJlOCAwJSwgIzk4OWJlOSAxMDAlKTtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogdmFyKC0tQmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDIuNTM0cmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuXFxuI3NpZGViYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmxhY2stMDUpO1xcbiAgcGFkZGluZzogMjZweCAzMnB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tQmxhY2stMjUpO1xcbiAgd2lkdGg6IDI1NnB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzJweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYXBwLWluZm8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbiNhcHAtaWNvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgZmlsbDogdmFyKC0tUHJpbWFyeSk7XFxufVxcblxcbiNhcHAtdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLVByaW1hcnkpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uc2lkZWJhci1saXN0cy1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tQmxhY2stMjUpO1xcbiAgcGFkZGluZy10b3A6IDMycHg7XFxufVxcblxcbi5zaWRlYmFyLWxpc3RzLWNvbnRhaW5lciAudGl0bGUge1xcbiAgY29sb3I6IHZhcigtLUJsYWNrLTUwKTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnVzZXItbGlzdHMgLmxpc3QtdGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuI2NyZWF0ZS1saXN0LWJ1dHRvbiB7XFxuICBwYWRkaW5nOiA0cHg7XFxuICB0cmFuc2l0aW9uOiAxMDBtcztcXG59XFxuXFxuI2NyZWF0ZS1saXN0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CbGFjay0xMCk7XFxuICB0cmFuc2l0aW9uOiAxMDBtcztcXG59XFxuXFxuI2NyZWF0ZS1saXN0LWJ1dHRvbiAuY3JlYXRlLWxpc3QtaWNvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZmlsbDogdmFyKC0tQmxhY2stNTApO1xcbn1cXG5cXG4ubGlzdHMtZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLmxpc3Qtc2lkZWJhci1lbGVtZW50IHtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjayk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxufVxcblxcbi5saXN0LXNpZGViYXItZWxlbWVudCAubGlzdC1zaWRlYmFyLWVsZW1lbnQtaWNvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1pbi13aWR0aDogMjRweDtcXG4gIG1heC1oZWlnaHQ6IDI0cHg7XFxufVxcblxcbi5saXN0LXNpZGViYXItZWxlbWVudCAubGlzdC1zaWRlYmFyLWVsZW1lbnQtbGFiZWwge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLmxpc3Qtc2lkZWJhci1lbGVtZW50LnNlbGVjdGVkIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuXFxuLmxpc3Qtc2lkZWJhci1lbGVtZW50OmhvdmVyLFxcbi5saXN0LXNpZGViYXItZWxlbWVudC5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CbGFjay0xMCk7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuXFxuLmxvd2VyLXNpZGViYXIge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2NyZWRpdHMge1xcbiAgY29sb3I6IHZhcigtLUJsYWNrLTUwKTtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxufVxcblxcbiNjcmVkaXRzIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI2NyZWRpdHMgYSxcXG4jY3JlZGl0cyBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IHZhcigtLVByaW1hcnkpO1xcbn1cXG5cXG4vKiBMaXN0IGNvbnRlbnQgKi9cXG5cXG4jbGlzdC1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1NnB4KTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4jbGlzdC1iYWNrZ3JvdW5kIHtcXG4gIGhlaWdodDogMTUycHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1MaXN0LUJhY2tncm91bmQtR3JhZGllbnQpO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgbWFyZ2luOiA0OHB4IGF1dG87XFxuICB3aWR0aDogY2xhbXAoNDAwcHgsIDUwdncsIDgzMnB4KTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBtYXgtY29udGVudDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDA7XFxuICBtaW4taGVpZ2h0OiAwO1xcbiAgZ2FwOiAyNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gI2xpc3QtdGl0bGUge1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgbWluLWhlaWdodDogMDtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gLm9wdGlvbnMtY29udHJvbGxlci1idXR0b24ge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gLm9wdGlvbnMtY29udHJvbGxlci1idXR0b246aG92ZXIsXFxuLnRpdGxlLXNlY3Rpb24gLm9wdGlvbnMtY29udHJvbGxlci1idXR0b246Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmxhY2stMTApO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gLmxpc3QtbW9yZS1vcHRpb25zIC5idXR0b24taWNvbiB7XFxuICBmaWxsOiB2YXIoLS1CbGFjayk7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuI25ldy10YXNrLWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDI0cHggMzJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogdmFyKC0tQmxhY2stNTApO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tQmxhY2stMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcXG59XFxuXFxuI25ldy10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk0JSk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xcbn1cXG5cXG4uZW1wdHktcGFnZSB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogNDhweCBhdXRvO1xcbiAgd2lkdGg6IGNsYW1wKDQwMHB4LCA1MHZ3LCA1MDBweCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi5lbXB0eS1wYWdlIC5lbXB0eS10aXRsZSB7XFxuICBjb2xvcjogdmFyKC0tUHJpbWFyeSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5lbXB0eS1wYWdlIC5lbXB0eS1zdWJ0aXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjay01MCk7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIFRhc2tzICovXFxuXFxuI3Rhc2tzLWNvbnRhaW5lcixcXG4jY29tcGxldGVkLXRhc2tzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CbGFjay0wNSk7XFxuICBwYWRkaW5nOiAyNHB4IDMycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1CbGFjay0yNSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMnB4IGF1dG8gbWF4LWNvbnRlbnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMDtcXG4gIG1pbi13aWR0aDogMDtcXG4gIGdhcDogMzJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxufVxcblxcbi50YXNrID4gZGl2IHtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxOTUsIDEwJSwgODclKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxufVxcblxcbi50YXNrIC5jb21wbGV0ZS10YXNrLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1pbi13aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2sgLm1haW4taW5mb3JtYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrIC50aXRsZSB7XFxuICBjb2xvcjogdmFyKC0tQmxhY2spO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XFxufVxcblxcbi50YXNrIC5kZXNjcmlwdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tQmxhY2stNTApO1xcbn1cXG5cXG4udGFzayAudGl0bGUsXFxuLnRhc2sgLmRlc2NyaXB0aW9uIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi50YXNrIC5zdWItaW5mb3JtYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi50YXNrIC5wcmlvcml0eS5sb3cge1xcbiAgY29sb3I6IHZhcigtLUxvdy1Qcmlvcml0eSk7XFxuICBmaWxsOiB2YXIoLS1Mb3ctUHJpb3JpdHkpO1xcbn1cXG5cXG4udGFzayAucHJpb3JpdHkubWVkaXVtIHtcXG4gIGNvbG9yOiB2YXIoLS1NZWRpdW0tUHJpb3JpdHkpO1xcbiAgZmlsbDogdmFyKC0tTWVkaXVtLVByaW9yaXR5KTtcXG59XFxuXFxuLnRhc2sgLnByaW9yaXR5LmhpZ2gge1xcbiAgY29sb3I6IHZhcigtLUhpZ2gtUHJpb3JpdHkpO1xcbiAgZmlsbDogdmFyKC0tSGlnaC1Qcmlvcml0eSk7XFxufVxcblxcbi50YXNrIC5wcmlvcml0eSxcXG4udGFzayAuZGF0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzayAuZGF0ZSB7XFxuICBjb2xvcjogdmFyKC0tQmxhY2stNzUpO1xcbiAgZmlsbDogdmFyKC0tQmxhY2stNzUpO1xcbn1cXG5cXG4udGFzayAuZGF0ZS1pY29uLFxcbi50YXNrIC5wcmlvcml0eS1pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWluLXdpZHRoOiAyNHB4O1xcbiAgbWF4LWhlaWdodDogMjRweDtcXG59XFxuXFxuLyogQ29tcGxldGVkIHRhc2tzICovXFxuLmNvbXBsZXRlZC10YXNrcy1zZWN0aW9uIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1CbGFjay0yNSk7XFxuICBtYXJnaW4tdG9wOiAzMnB4O1xcbiAgcGFkZGluZy10b3A6IDMycHg7XFxufVxcblxcbi5jb21wbGV0ZWQtdGFza3MtdGl0bGUtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyNHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcblxcbiNjb21wbGV0ZWQtdGFza3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjb21wbGV0ZWQtdGFza3MtY29udGFpbmVyIC50YXNrIC50aXRsZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjay03NSk7XFxufVxcblxcbi5leHBhbmQtdGFza3Mge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAvKiBTZXQgMzYwIGRlZ3JlZXMgdG8gcm90YXRlIHRvIHJpZ2h0IGluc3RlYWQgdG8gdGhlIGxlZnQgKi9cXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG59XFxuXFxuLmNvbXBsZXRlZC10YXNrcy1zZWN0aW9uLnNob3cgLmV4cGFuZC10YXNrcyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxufVxcblxcbi5jb21wbGV0ZWQtdGFza3Mtc2VjdGlvbi5zaG93ICNjb21wbGV0ZWQtdGFza3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIERpYWxvZ3MgKi9cXG5cXG5kaWFsb2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzaG93RGlhbG9nO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG59XFxuXFxuZGlhbG9nLmNsb3Npbmcge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGNsb3NlRGlhbG9nO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5OTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzaG93RGlhbG9nQmFja2Ryb3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xcbn1cXG5cXG5kaWFsb2cuY2xvc2luZzo6YmFja2Ryb3Age1xcbiAgYW5pbWF0aW9uLW5hbWU6IGNsb3NlRGlhbG9nQmFja2Ryb3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbmRpYWxvZyNuZXctbGlzdCxcXG5kaWFsb2cjZWRpdC1saXN0LFxcbmRpYWxvZyNuZXctdGFzayxcXG5kaWFsb2cjZWRpdC10YXNrIHtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuZGlhbG9nI25ldy10YXNrLFxcbmRpYWxvZyNlZGl0LXRhc2sge1xcbiAgd2lkdGg6IDU1MHB4O1xcbn1cXG5cXG5kaWFsb2cgLmRpYWxvZy1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuMzc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDJweCA1NXB4IDAgNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLUJsYWNrKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06cGxhY2Vob2xkZXItc2hvd24ge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tQmxhY2stMjUpO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tUHJpbWFyeSk7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjay01MCk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1QcmltYXJ5KTtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxufVxcblxcbmJ1dHRvbi5wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxufVxcblxcbmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OWE3ZmM7XFxufVxcblxcbmJ1dHRvbi5wcmltYXJ5OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM1MmNjO1xcbn1cXG5cXG5idXR0b24ucHJpbWFyeTpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNkMWZmO1xcbiAgY29sb3I6ICNmMGY2ZmY7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG5idXR0b24uc2Vjb25kYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWNiY2Y7XFxuICBjb2xvcjogdmFyKC0tQmxhY2stNzUpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcXG59XFxuXFxuYnV0dG9uLnNlY29uZGFyeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdhOWFmO1xcbn1cXG5cXG5idXR0b24uc2Vjb25kYXJ5OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODc4YTkyO1xcbn1cXG5cXG4vKiBOZXcgbGlzdCBkaWFsb2cgKi9cXG5kaWFsb2cjbmV3LWxpc3QsXFxuZGlhbG9nI2VkaXQtbGlzdCB7XFxuICB3aWR0aDogNTUwcHg7XFxufVxcblxcbmRpYWxvZyNuZXctbGlzdCAudGl0bGUtY29udGFpbmVyLFxcbmRpYWxvZyNlZGl0LWxpc3QgLnRpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGlhbG9nI25ldy1saXN0IC50aXRsZS1pY29uLWlucHV0LFxcbmRpYWxvZyNlZGl0LWxpc3QgLnRpdGxlLWljb24taW5wdXQge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1CbGFjay0yNSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNsaXN0LXRpdGxlLWlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBOZXcgdGFzayBkaWFsb2cgKi9cXG5cXG4vKiBUYXNrIGluZm9ybWF0aW9uICovXFxuXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHZhcigtLUJsYWNrLTc1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJsYWNrLTA1KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLUJsYWNrLTUwKTtcXG59XFxuXFxuLyogSW5wdXRzICovXFxuXFxuLyogVGV4dCBhbmQgdGV4dGFyZWEgaW5wdXQgKi9cXG4udGV4dC1pbnB1dC1jb250YWluZXIsXFxuLnRleHRhcmVhLWlucHV0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50ZXh0YXJlYS1pbnB1dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRleHQtY291bnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDRweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdICsgLnRleHQtY291bnRlciB7XFxuICByaWdodDogNHB4O1xcbn1cXG5cXG50ZXh0YXJlYSArIC50ZXh0LWNvdW50ZXIge1xcbiAgcmlnaHQ6IDhweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzICsgLnRleHQtY291bnRlcixcXG50ZXh0YXJlYTpmb2N1cyArIC50ZXh0LWNvdW50ZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XFxufVxcblxcbi8qIERhdGUgaW5wdXQgKi9cXG4jZGF0ZS1pbnB1dCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDc3cHg7XFxufVxcblxcbi8qIENoYW5nZSBidXR0b24gYW5kIGxhYmVsIGNvbG9yIHdoZW4gc2VsZWN0aW5nIGEgZGF0ZSAqL1xcbiNkYXRlLWlucHV0Om5vdChbZGF0YS12YWx1ZT1cXFwiXFxcIl0pIGJ1dHRvbiB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLVByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLVByaW1hcnkpO1xcbiAgZmlsbDogdmFyKC0tUHJpbWFyeSk7XFxufVxcblxcbi8qIFNlbGVjdCBpbnB1dCBncmlkICovXFxuLnNlbGVjdC1pbnB1dC1ncmlkIC5zZWxlY3QtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLVByaW1hcnkpO1xcbn1cXG5cXG4uc2VsZWN0LWlucHV0LWdyaWQgLmJ1dHRvbi1pY29uIHtcXG4gIGZpbGw6IHZhcigtLVByaW1hcnkpO1xcbn1cXG5cXG4uc2VsZWN0LWlucHV0LWdyaWQgLm9wdGlvbnMtZ3JpZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgNjBweCk7XFxuICBncmlkLWF1dG8tcm93czogNjBweDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGdhcDogNnB4O1xcbn1cXG5cXG4uc2VsZWN0LWlucHV0LWdyaWQuZXhwYW5kIC5vcHRpb25zLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm9wdGlvbnMtZ3JpZCAub3B0aW9uIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmaWxsOiB2YXIoLS1CbGFjay03NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1CbGFjay0yNSk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xcbn1cXG5cXG4ub3B0aW9ucy1ncmlkIC5vcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmxhY2stMTApO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcXG59XFxuXFxuLyogU2VsZWN0IGlucHV0cyAqL1xcbmRpYWxvZyNuZXctdGFzayAudGFzay1zZWxlY3QtaW5wdXRzLFxcbmRpYWxvZyNlZGl0LXRhc2sgLnRhc2stc2VsZWN0LWlucHV0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uc2VsZWN0LWlucHV0LFxcbi5zZWxlY3QtaW5wdXQtZ3JpZCxcXG4ub3B0aW9ucy1jb250cm9sbGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlbGVjdC1pbnB1dCAuc2VsZWN0LWJ1dHRvbixcXG4uc2VsZWN0LWlucHV0LWdyaWQgLnNlbGVjdC1idXR0b24sXFxuI2RhdGUtaW5wdXQgLmRhdGUtYnV0dG9uLFxcbi5vcHRpb25zLWNvbnRyb2xsZXIgLm9wdGlvbnMtY29udHJvbGxlci1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjay01MCk7XFxuICBmaWxsOiB2YXIoLS1CbGFjay01MCk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5zZWxlY3QtaW5wdXQgLmJ1dHRvbi1pY29uLFxcbi5zZWxlY3QtbGlzdCAuYnV0dG9uLWljb24sXFxuI2RhdGUtaW5wdXQgLmJ1dHRvbi1pY29uIHtcXG4gIG1pbi13aWR0aDogMjRweDtcXG4gIG1heC1oZWlnaHQ6IDI0cHg7XFxufVxcblxcbi5zZWxlY3QtaW5wdXQgLnNlbGVjdC1idXR0b24sXFxuI2RhdGUtaW5wdXQgLmRhdGUtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tQmxhY2stMjUpO1xcbn1cXG5cXG4jc2VsZWN0LWxpc3QgYnV0dG9uIHtcXG4gIG1heC13aWR0aDogMTgwcHg7XFxufVxcblxcbiNzZWxlY3QtbGlzdCAuYnV0dG9uLWxhYmVsIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5zZWxlY3QtaW5wdXQgLm9wdGlvbnMsXFxuLnNlbGVjdC1pbnB1dC1ncmlkIC5vcHRpb25zLWdyaWQsXFxuLm9wdGlvbnMtY29udHJvbGxlciAub3B0aW9ucyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjayk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ub3B0aW9ucyA6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcXG59XFxuXFxuLm9wdGlvbnMgOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcXG59XFxuXFxuLm9wdGlvbnMgLm9wdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLUJsYWNrKTtcXG4gIGZpbGw6IHZhcigtLUJsYWNrKTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ub3B0aW9ucyAub3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xcbn1cXG5cXG4uc2VsZWN0LWlucHV0LmV4cGFuZCAub3B0aW9ucyxcXG4ub3B0aW9ucy1jb250cm9sbGVyLmV4cGFuZCAub3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBTZWxlY3QgcHJpb3JpdHkgaW5wdXQgY29sb3IgZGVwZW5kaW5nIHRvIHNlbGVjdGVkIHZhbHVlICovXFxuI3NlbGVjdC1wcmlvcml0eVtkYXRhLXZhbHVlPVxcXCJMb3dcXFwiXSAuc2VsZWN0LWJ1dHRvbiB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLUxvdy1Qcmlvcml0eSk7XFxuICBjb2xvcjogdmFyKC0tTG93LVByaW9yaXR5KTtcXG4gIGZpbGw6IHZhcigtLUxvdy1Qcmlvcml0eSk7XFxufVxcblxcbiNzZWxlY3QtcHJpb3JpdHlbZGF0YS12YWx1ZT1cXFwiTWVkaXVtXFxcIl0gLnNlbGVjdC1idXR0b24ge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1NZWRpdW0tUHJpb3JpdHkpO1xcbiAgY29sb3I6IHZhcigtLU1lZGl1bS1Qcmlvcml0eSk7XFxuICBmaWxsOiB2YXIoLS1NZWRpdW0tUHJpb3JpdHkpO1xcbn1cXG5cXG4jc2VsZWN0LXByaW9yaXR5W2RhdGEtdmFsdWU9XFxcIkhpZ2hcXFwiXSAuc2VsZWN0LWJ1dHRvbiB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLUhpZ2gtUHJpb3JpdHkpO1xcbiAgY29sb3I6IHZhcigtLUhpZ2gtUHJpb3JpdHkpO1xcbiAgZmlsbDogdmFyKC0tSGlnaC1Qcmlvcml0eSk7XFxufVxcblxcbi8qIFNlbGVjdCBwcmlvcml0eSBpbnB1dCBlbGVtZW50cyB0ZXh0IGNvbG9yICovXFxuI3NlbGVjdC1wcmlvcml0eSAub3B0aW9uW2RhdGEtdmFsdWU9XFxcIlByaW9yaXR5XFxcIl0ge1xcbiAgY29sb3I6IHZhcigtLUJsYWNrLTUwKTtcXG4gIGZpbGw6IHZhcigtLUJsYWNrLTUwKTtcXG59XFxuXFxuI3NlbGVjdC1wcmlvcml0eSAub3B0aW9uW2RhdGEtdmFsdWU9XFxcIkxvd1xcXCJdIHtcXG4gIGNvbG9yOiB2YXIoLS1Mb3ctUHJpb3JpdHkpO1xcbiAgZmlsbDogdmFyKC0tTG93LVByaW9yaXR5KTtcXG59XFxuXFxuI3NlbGVjdC1wcmlvcml0eSAub3B0aW9uW2RhdGEtdmFsdWU9XFxcIk1lZGl1bVxcXCJdIHtcXG4gIGNvbG9yOiB2YXIoLS1NZWRpdW0tUHJpb3JpdHkpO1xcbiAgZmlsbDogdmFyKC0tTWVkaXVtLVByaW9yaXR5KTtcXG59XFxuXFxuI3NlbGVjdC1wcmlvcml0eSAub3B0aW9uW2RhdGEtdmFsdWU9XFxcIkhpZ2hcXFwiXSB7XFxuICBjb2xvcjogdmFyKC0tSGlnaC1Qcmlvcml0eSk7XFxuICBmaWxsOiB2YXIoLS1IaWdoLVByaW9yaXR5KTtcXG59XFxuXFxuLyogTGlzdCBpbnB1dCBidXR0b24gY29sb3IgKi9cXG4jc2VsZWN0LWxpc3Q6bm90KFtkYXRhLXZhbHVlPVxcXCJcXFwiXSkgLnNlbGVjdC1idXR0b24ge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1UYXNrLUxpc3QpO1xcbiAgY29sb3I6IHZhcigtLVRhc2stTGlzdCk7XFxuICBmaWxsOiB2YXIoLS1UYXNrLUxpc3QpO1xcbn1cXG5cXG4jc2VsZWN0LWxpc3QgLm9wdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tQmxhY2stNzUpO1xcbiAgZmlsbDogdmFyKC0tQmxhY2stNzUpO1xcbn1cXG5cXG4vKiBPcHRpb25zIGNvbnRyb2xsZXIgY29sb3JzICovXFxuLnRhc2stbW9yZS1vcHRpb25zIC5kZWxldGUtdGFzayxcXG4ubGlzdC1tb3JlLW9wdGlvbnMgLmRlbGV0ZS1saXN0IHtcXG4gIGNvbG9yOiB2YXIoLS1EZWxldGUtQWNjZW50KTtcXG4gIGZpbGw6IHZhcigtLURlbGV0ZS1BY2NlbnQpO1xcbn1cXG5cXG4vKiBTVkcgaWNvbnMgc2l6ZXMgKi9cXG4uYnV0dG9uLWljb24sXFxuLm9wdGlvbi1pY29uIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4vKiBUYXNrIGRldGFpbHMgKi9cXG5kaWFsb2cjdGFzay1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuZGlhbG9nI3Rhc2stZGV0YWlscyAuYWN0aW9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuZGlhbG9nI3Rhc2stZGV0YWlscyAuYWN0aW9ucy1jb250YWluZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGZpbGw6IHZhcigtLUJsYWNrKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxufVxcblxcbmRpYWxvZyN0YXNrLWRldGFpbHMgLmFjdGlvbnMtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CbGFjay0xMCk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xcbn1cXG5cXG5kaWFsb2cjdGFzay1kZXRhaWxzIC5hY3Rpb25zLWNvbnRhaW5lciAuYnV0dG9uLWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmRpYWxvZyN0YXNrLWRldGFpbHMgLm1haW4taW5mb3JtYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5tYWluLWluZm9ybWF0aW9uIC50YXNrLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjayk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5tYWluLWluZm9ybWF0aW9uIC50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY29sb3I6IHZhcigtLUJsYWNrLTc1KTtcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbi5zY3JvbGwtdGV4dCB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbmRpYWxvZyN0YXNrLWRldGFpbHMgLnNlY29uZGFyeS1pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyNHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLUJsYWNrLTI1KTtcXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xcbn1cXG5cXG4uc2Vjb25kYXJ5LWluZm9ybWF0aW9uIC5pbmZvLWVsZW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4uaW5mby1lbGVtZW50IC5pY29uIHtcXG4gIG1pbi13aWR0aDogMjRweDtcXG4gIG1heC1oZWlnaHQ6IDI0cHg7XFxufVxcblxcbi5pbmZvLWVsZW1lbnQudGFzay1kYXRlIHtcXG4gIGNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcXG4gIGZpbGw6IHZhcigtLVByaW1hcnkpO1xcbn1cXG5cXG4uaW5mby1lbGVtZW50LnRhc2stcHJpb3JpdHlbZGF0YS12YWx1ZT1cXFwiTG93XFxcIl0ge1xcbiAgY29sb3I6IHZhcigtLUxvdy1Qcmlvcml0eSk7XFxuICBmaWxsOiB2YXIoLS1Mb3ctUHJpb3JpdHkpO1xcbn1cXG5cXG4uaW5mby1lbGVtZW50LnRhc2stcHJpb3JpdHlbZGF0YS12YWx1ZT1cXFwiTWVkaXVtXFxcIl0ge1xcbiAgY29sb3I6IHZhcigtLU1lZGl1bS1Qcmlvcml0eSk7XFxuICBmaWxsOiB2YXIoLS1NZWRpdW0tUHJpb3JpdHkpO1xcbn1cXG5cXG4uaW5mby1lbGVtZW50LnRhc2stcHJpb3JpdHlbZGF0YS12YWx1ZT1cXFwiSGlnaFxcXCJdIHtcXG4gIGNvbG9yOiB2YXIoLS1IaWdoLVByaW9yaXR5KTtcXG4gIGZpbGw6IHZhcigtLUhpZ2gtUHJpb3JpdHkpO1xcbn1cXG5cXG4uaW5mby1lbGVtZW50LnRhc2stbGlzdCB7XFxuICBtYXgtd2lkdGg6IDE2MHB4O1xcbiAgY29sb3I6IHZhcigtLVRhc2stTGlzdCk7XFxuICBmaWxsOiB2YXIoLS1UYXNrLUxpc3QpO1xcbn1cXG5cXG4udGFzay1saXN0IC5sYWJlbCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4vKiBEZWxldGUgbGlzdCBhbmQgRGVsZXRlIHRhc2sgKi9cXG5kaWFsb2cjZGVsZXRlLWxpc3QsXFxuZGlhbG9nI2RlbGV0ZS10YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZ2FwOiAzMnB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgY29sb3I6IHZhcigtLUJsYWNrKTtcXG59XFxuXFxuZGlhbG9nI2RlbGV0ZS1saXN0IC5tZXNzYWdlLFxcbmRpYWxvZyNkZWxldGUtdGFzayAubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbmRpYWxvZyNkZWxldGUtbGlzdCAubWVzc2FnZS10aXRsZSxcXG5kaWFsb2cjZGVsZXRlLXRhc2sgLm1lc3NhZ2UtdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG5kaWFsb2cjZGVsZXRlLWxpc3QgLnN1Yi1tZXNzYWdlLFxcbmRpYWxvZyNkZWxldGUtdGFzayAuc3ViLW1lc3NhZ2Uge1xcbiAgY29sb3I6IHZhcigtLUJsYWNrLTc1KTtcXG59XFxuXFxuZGlhbG9nI2RlbGV0ZS1saXN0IGJ1dHRvbi5wcmltYXJ5LFxcbmRpYWxvZyNkZWxldGUtdGFzayBidXR0b24ucHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1EZWxldGUtQWNjZW50KTtcXG59XFxuXFxuLmxpc3QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CbGFjay0wNSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG59XFxuXFxuLmxpc3QtaW5mbyAubGlzdC1pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmlsbDogdmFyKC0tUHJpbWFyeSk7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuLmxpc3QtaW5mbyAubGlzdC10aXRsZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogdmFyKC0tUHJpbWFyeSk7XFxufVxcblxcbi8qIE5vdGlmaWNhdGlvbnMgKi9cXG4jbm90aWZpY2F0aW9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMzUwcHg7XFxuICBib3R0b206IDE2cHg7XFxuICByaWdodDogMTZweDtcXG59XFxuXFxuLm5vdGlmaWNhdGlvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxNDMsIDQ3JSwgNDUlKTtcXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxuICBwYWRkaW5nOiAyNnB4IDIycHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNob3dOb3RpZmljYXRpb247XFxuICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9uLmNsb3Npbmcge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGNsb3NlTm90aWZpY2F0aW9uO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9uLWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjZweDtcXG4gIGhlaWdodDogMjZweDtcXG59XFxuXFxuLm5vdGlmaWNhdGlvbi1sYWJlbCB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jbG9zZS1ub3RpZmljYXRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgcmlnaHQ6IDhweDtcXG4gIHRvcDogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxufVxcblxcbi5jbG9zZS1ub3RpZmljYXRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDE4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcXG59XFxuXFxuLm5vdGlmaWNhdGlvbjpob3ZlciAuY2xvc2Utbm90aWZpY2F0aW9uIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxufVxcblxcbi5ub3RpZmljYXRpb24taWNvbixcXG4uY2xvc2Utbm90aWZpY2F0aW9uIC5idXR0b24taWNvbiB7XFxuICBmaWxsOiB2YXIoLS1XaGl0ZSk7XFxufVxcblxcbi5jbG9zZS1ub3RpZmljYXRpb24gLmJ1dHRvbi1pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcblxcbi5idXR0b24taWNvbiBzdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIEFuaW1hdGlvbnMgKi9cXG5cXG5Aa2V5ZnJhbWVzIHNob3dEaWFsb2cge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTAwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hvd0RpYWxvZ0JhY2tkcm9wIHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XFxuICB9XFxuICB0byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5OTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBjbG9zZURpYWxvZyB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDEwMHB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBjbG9zZURpYWxvZ0JhY2tkcm9wIHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOTk7XFxuICB9XFxuICB0byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaG93Tm90aWZpY2F0aW9uIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDBweCwgMHB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNsb3NlTm90aWZpY2F0aW9uIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMHB4LCAwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gIC50YXNrIC5zdWItaW5mb3JtYXRpb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDA7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNMjQyLjg3LTcxLjg3cS0zNy43ODMgMC02NC4zOTItMjYuNjA4LTI2LjYwOS0yNi42MDktMjYuNjA5LTY0LjM5MnYtNjM0LjI2cTAtMzcuNzgzIDI2LjYwOS02NC4zOTIgMjYuNjA5LTI2LjYwOSA2NC4zOTItMjYuNjA5aDQ3NC4yNnEzNy43ODMgMCA2NC4zOTIgMjYuNjA5IDI2LjYwOSAyNi42MDkgMjYuNjA5IDY0LjM5MnY2MzQuMjZxMCAzNy43ODMtMjYuNjA5IDY0LjM5MlE3NTQuOTEzLTcxLjg3IDcxNy4xMy03MS44N0gyNDIuODdabTE5Ny44NDctNzI1LjI2djI0MC4yMTdxMCAxMy40MzUgMTAuOTM1IDE5Ljc3MiAxMC45MzUgNi4zMzcgMjMuMTMxLS4zODFsNDIuMDY1LTI0LjkzNHExMS4xOTUtNi43MTggMjMuMzY5LTYuNzE4dDIzLjM3IDYuNzE4bDQyLjA2NSAyNC45MzRxMTIuMTk2IDYuNzE4IDIzLjYzMS4zODEgMTEuNDM0LTYuMzM3IDExLjQzNC0xOS43NzJWLTc5Ny4xM2gtMjAwWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTI2MC43MTctMTUxLjg2OXEtOTQuMzQ3IDAtMTYxLjIzOS02NS4xNTMtNjYuODkxLTY1LjE1Mi02Ni44OTEtMTU5LjI2MSAwLTgwLjM5MSA0Ny4zNTgtMTQzLjY2MyA0Ny4zNTktNjMuMjcyIDEyNS4wMzMtODAuNzUgMjYuNDM1LTkyLjk1NiAxMDIuNjMxLTE1MC4xOTUgNzYuMTk1LTU3LjI0IDE3Mi4zOTEtNTcuMjQgMTE4LjE5NiAwIDIwMS4yNSA4MS43NCA4My4wNTQgODEuNzM5IDg1LjY4NSAxOTkuNjk1IDY5LjcxNyAxMC42MzEgMTE1LjA5OCA2My44MDUgNDUuMzggNTMuMTc0IDQ1LjM4IDEyMy42MDggMCA3OC4xMDktNTQuNjUyIDEzMi43NjFRODE4LjEwOS0xNTEuODY5IDc0MC0xNTEuODY5SDI2MC43MTdaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNMzYxLjkxMy0yMzkuMjgzaDIzNi40MTNxMTcuNzE3IDAgMjkuNjk2LTEyLjA5N1E2NDAtMjYzLjQ3OCA2NDAtMjgxLjE5NnEwLTE3LjcxNy0xMS45NzgtMjkuNjk1LTExLjk3OS0xMS45NzktMjkuNjk2LTExLjk3OUgzNjEuNjc0cS0xNy43MTcgMC0yOS42OTYgMTEuOTc5UTMyMC0yOTguOTEzIDMyMC0yODEuMTk2cTAgMTcuNzE4IDEyLjA5OCAyOS44MTYgMTIuMDk4IDEyLjA5NyAyOS44MTUgMTIuMDk3Wm0wLTE2MGgyMzYuNDEzcTE3LjcxNyAwIDI5LjY5Ni0xMi4wOTdRNjQwLTQyMy40NzggNjQwLTQ0MS4xOTZxMC0xNy43MTctMTEuOTc4LTI5LjY5NS0xMS45NzktMTEuOTc5LTI5LjY5Ni0xMS45NzlIMzYxLjY3NHEtMTcuNzE3IDAtMjkuNjk2IDExLjk3OVEzMjAtNDU4LjkxMyAzMjAtNDQxLjE5NnEwIDE3LjcxOCAxMi4wOTggMjkuODE2IDEyLjA5OCAxMi4wOTcgMjkuODE1IDEyLjA5N1pNMjQyLjg3LTcxLjg2OXEtMzcuNzgzIDAtNjQuMzkyLTI2LjYxLTI2LjYwOS0yNi42MDgtMjYuNjA5LTY0LjM5MXYtNjM0LjI2cTAtMzcuNzgzIDI2LjYwOS02NC4zOTIgMjYuNjA5LTI2LjYwOSA2NC4zOTItMjYuNjA5aDI4Mi45MzRxMTguMTUzIDAgMzQuNjg1IDYuODM3IDE2LjUzMyA2LjgzNyAyOS4yMDcgMTkuNTExbDE5Mi4wODcgMTkyLjA4N3ExMi42NzQgMTIuNjc0IDE5LjUxMSAyOS4yMDcgNi44MzcgMTYuNTMyIDYuODM3IDM0LjY4NXY0NDIuOTM0cTAgMzcuNzgzLTI2LjYwOSA2NC4zOTJRNzU0LjkxMy03MS44NyA3MTcuMTMtNzEuODdIMjQyLjg3Wk01MTcuMTMtNjQyLjYzcTAgMTkuMTUyIDEzLjE3NCAzMi4zMjZ0MzIuMzI2IDEzLjE3NGgxNTQuNWwtMjAwLTIwMHYxNTQuNVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk00NzkuNzYxLTEzOS44MjZxLTE2LjE1MiAwLTMyLjQ0Ni01LjgzNy0xNi4yOTMtNS44MzctMjguOTY3LTE4LjI3MmwtNjkuNDc5LTYzLjQ3OHEtMTA1LjUyMS05Ni4yODMtMTkxLjI2LTE5Mi42MlE3MS44NjktNTE2LjM3IDcxLjg2OS02MzRxMC05Ny41ODcgNjUuMTUzLTE2Mi45NzggNjUuMTUyLTY1LjM5MiAxNjIuNzM5LTY1LjM5MiA1Mi41MjIgMCA5OS4yODIgMjEuNDI0IDQ2Ljc2MSAyMS40MjQgODAuNzE4IDU5LjQ2NyAzMy45NTYtMzguMDQzIDgwLjcxNy01OS40NjcgNDYuNzYxLTIxLjQyNCA5OS4yODMtMjEuNDI0IDk3LjU4NyAwIDE2My4wOTggNjUuMzkyUTg4OC4zNy03MzEuNTg3IDg4OC4zNy02MzRxMCAxMTcuNjMtODUuNTk4IDIxNC40NjctODUuNTk4IDk2LjgzNy0xOTMuMTIgMTkzLjM1OWwtNjguMjM5IDYyLjQ3OHEtMTIuNjc0IDEyLjQzNS0yOS4wODcgMTguMTUzLTE2LjQxMyA1LjcxNy0zMi41NjUgNS43MTdaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNNDc5Ljk5Mi02NS40MTNxLTM0LjE4OCAwLTU4LjUyNS0yNS4wNTQtMjQuMzM3LTI1LjA1NC0yNC4zMzctNjAuNjg1aDE2NS43NHEwIDM1LjYzMS0yNC4zNDYgNjAuNjg1LTI0LjM0NSAyNS4wNTQtNTguNTMyIDI1LjA1NFptLTEyMC40Ny0xMjcuNjUycS0xNy43MTIgMC0yOS42OTMtMTIuMDUtMTEuOTgxLTEyLjA1LTExLjk4MS0yOS44NjMgMC0xNy43MTIgMTEuOTgxLTI5LjY5MyAxMS45ODEtMTEuOTgxIDI5LjY5My0xMS45ODFoMjQwLjk1NnExNy43MTIgMCAyOS42OTMgMTEuOTgyIDExLjk4MSAxMS45ODMgMTEuOTgxIDI5LjY5NnQtMTEuOTgxIDI5LjgxMXEtMTEuOTgxIDEyLjA5OC0yOS42OTMgMTIuMDk4SDM1OS41MjJabS0zMS42NzQtMTI1LjVRMjU2LjY5Ni0zNjEgMjE0LjI4Mi00MzIuMDMzcS00Mi40MTMtNzEuMDMyLTQyLjQxMy0xNTQuNjYzIDAtMTI4LjI4OCA4OS44NjQtMjE4LjA5IDg5Ljg2My04OS44MDEgMjE4LjIzOS04OS44MDF0MjE4LjI2NyA4OS44MDFxODkuODkyIDg5LjgwMiA4OS44OTIgMjE4LjA5IDAgODMuODctNDIuNDEzIDE1NC43ODNRNzAzLjMwNC0zNjEgNjMyLjE1Mi0zMTguNTY1SDMyNy44NDhaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNMTY4Ljk1Ny0xMTQuNzgycS0yNC4zNDggNS43MTctNDIuMDAxLTEyLjA1NS0xNy42NTItMTcuNzcyLTEyLjE3NC00Mi4xMmwzNi40MzUtMTc2LjkzNCAxOTQuNjc0IDE5NC42NzQtMTc2LjkzNCAzNi40MzVabTI0MC4wMjEtODcuMzQ4TDIwMi4xMy00MDguOTc4IDYxMi4wMjItODE4Ljg3cTI2LjM0OC0yNi4zNDggNjQuNjUyLTI2LjM0OHQ2NC42NTIgMjYuMzQ4bDc3LjU0NCA3Ny41NDRxMjYuMzQ4IDI2LjM0OCAyNi4zNDggNjQuNjUydC0yNi4zNDggNjQuNjUyTDQwOC45NzgtMjAyLjEzWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwibTI2OS40NTYtMjY5LjIxNy0xMDAuNzE3LTU1LjcxOHEtMTIuNjc0LTYuOTU2LTE0LjQxMy0yMC42MDgtMS43MzktMTMuNjUzIDcuNjk2LTIzLjA4N2wxMy42NzQtMTMuNjc0cTQuNzE3LTQuNzE4IDExLjE3NC02LjU3NyA2LjQ1Ni0xLjg1OCAxMi42NTItLjYxOWw4Ni4wODcgMTIuMjM5TDQzNS42My01MjcuMjgzIDE2Ni45NzgtNjczLjg0OHEtMTYuOTEzLTkuMTk1LTE5Ljc3Mi0yOC40NjctMi44NTgtMTkuMjcyIDEwLjgxNi0zMi45NDZsMTEuMTk1LTExLjE5NnE3Ljk1Ny03Ljk1NiAxNy42NTMtMTAuMzE1IDkuNjk1LTIuMzU5IDE5Ljg5MS4xMmwzNjMgOTMuNzE3IDE0My42MDgtMTQyLjMyNnExOC42NzQtMTguNjc0IDQ2LjMyNi0xOC42NzQgMjcuNjUzIDAgNDYuMzI3IDE4LjY3NHQxOC42NzQgNDYuMzI2cTAgMjcuNjUzLTE4LjY3NCA0Ni4zMjdMNjYzLjE3NC01NjkuNTIybDkzLjQ3OCAzNjAuNzYxcTIuNDc5IDExLjE5Ni0uMzggMjIuMTMxLTIuODU5IDEwLjkzNC0xMC44MTUgMTguODkxbC01LjcxOCA1LjQ3OHEtMTUuNjc0IDE1LjY3NC0zNi44MDQgMTIuNDM1LTIxLjEzMS0zLjIzOS0zMS4zMjYtMjIuMzkxTDUyNy41MjItNDM1LjM5MSAzNzcuNS0yODUuMzdsMTIuMjM5IDgzLjYwOXExLjIzOSA4LjE5Ni0xLjIzOSAxNS41MTEtMi40NzggNy4zMTUtOC4xOTYgMTMuMDMzbC01Ljk1NiA1Ljk1NnEtMTEuNjc0IDExLjY3NC0yOC4wNjUgOS42OTYtMTYuMzkyLTEuOTc4LTI0LjU4Ny0xNi44OTFsLTUyLjI0LTk0Ljc2MVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk04MzkuNTIyLTMyMC4yMzl2LTIzMS42OTZMNTIzLjI2MS0zODAuMDQzUTUwMi42My0zNjguODQ4IDQ4MC0zNjguNzI4cS0yMi42My4xMTktNDMuMjYxLTExLjMxNUwxMDYuMTUyLTU2MC4yMTdxLTEyLjQzNS02LjcxOC0xNy43NzItMTcuMDMzLTUuMzM3LTEwLjMxNS01LjMzNy0yMi43NXQ1LjMzNy0yMi43NXE1LjMzNy0xMC4zMTUgMTcuNzcyLTE3LjAzM2wzMzAuNTg3LTE3OS45MzRxMTAuMTk2LTUuNzE4IDIxLjAxMS04LjU3NyAxMC44MTUtMi44NTggMjIuMjUtMi44NTh0MjIuMjUgMi44NThxMTAuODE1IDIuODU5IDIxLjAxMSA4LjU3N2wzNzkuODA0IDIwNy4wNDNxMTEuMTk2IDUuNzE3IDE3LjUzMyAxNi41MzMgNi4zMzcgMTAuODE1IDYuMzM3IDIzLjI1Vi0zMjBxMCAxOC40MzUtMTIuNTc2IDMxLjAxMXQtMzEuMDExIDEyLjU3NnEtMTguNDM1IDAtMzEuMTMxLTEyLjY5Ni0xMi42OTUtMTIuNjk1LTEyLjY5NS0zMS4xM1pNNDM2LjczOS0xNDAuMjgzIDI0NC4zOTEtMjQzLjk3OHEtMjIuNjMtMTIuNDM1LTM1LjE4NS0zMy45NDYtMTIuNTU0LTIxLjUxMS0xMi41NTQtNDYuNjJWLTQ2Ni41bDI0MC4wODcgMTMwLjA0NFE0NTcuMzctMzI1LjI2MSA0ODAtMzI1LjI2MXEyMi42MyAwIDQzLjI2MS0xMS4xOTVMNzYzLjM0OC00NjYuNXYxNDEuOTU2cTAgMjUuMTA5LTEyLjU1NCA0Ni42Mi0xMi41NTUgMjEuNTExLTM1LjE4NSAzMy45NDZMNTIzLjI2MS0xNDAuMjgzcS0xMC4xOTYgNS43MTgtMjEuMDExIDguNDU3LTEwLjgxNSAyLjczOS0yMi4yNSAyLjczOXQtMjIuMjUtMi43MzlxLTEwLjgxNS0yLjczOS0yMS4wMTEtOC40NTdaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNMjgwLTc2LjQxM3EtMzMgMC01Ni41LTIzLjV0LTIzLjUtNTYuNXEwLTMzIDIzLjUtNTYuNXQ1Ni41LTIzLjVxMzMgMCA1Ni41IDIzLjV0MjMuNSA1Ni41cTAgMzMtMjMuNSA1Ni41dC01Ni41IDIzLjVabTQwMCAwcS0zMyAwLTU2LjUtMjMuNXQtMjMuNS01Ni41cTAtMzMgMjMuNS01Ni41dDU2LjUtMjMuNXEzMyAwIDU2LjUgMjMuNXQyMy41IDU2LjVxMCAzMy0yMy41IDU2LjV0LTU2LjUgMjMuNVpNMjEwLjE1Mi04MDMuNTg3aDU4MC45MTNxMjcuMjEzIDAgNDEuNDExIDI0LjA4N3QxLjA0NiA0OC45MTNsLTEzNi41IDI0Ni42NzRxLTExLjQ3OCAyMC43MTctMzAuODAzIDMyLjMxNVE2NDYuODk0LTQ0MCA2MjMuOTEzLTQ0MEgzMjguMDY1bC00MS44NDcgNzYuNDEzSDcyMHExOC41MjQgMCAzMS4wNTYgMTIuNTMxIDEyLjUzMSAxMi41MzIgMTIuNTMxIDMxLjA1NnQtMTIuNTMxIDMxLjA1NlE3MzguNTI0LTI3Ni40MTMgNzIwLTI3Ni40MTNIMjgwcS00Ny42MyAwLTcxLjU4Ny00MS40MTN0LTEuNzYxLTgyLjA4N0wyNTkuOTM1LTQ5NiAxMTcuODQ4LTc5Ni40MTNIODBxLTE4LjUyNSAwLTMxLjA1Ni0xMi41MzFRMzYuNDEzLTgyMS40NzYgMzYuNDEzLTg0MHQxMi41MzEtMzEuMDU2UTYxLjQ3NS04ODMuNTg3IDgwLTg4My41ODdoNjMuNTY1cTEyLjY3NCAwIDI0LjAxMyA2LjgxMSAxMS4zMzkgNi44MTEgMTcuMDA5IDE5LjI5OGwyNS41NjUgNTMuODkxWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTIwNS41LTEwMy41cS0xOS4xNTIgMC0zMi4zMjYtMTMuMTc0VDE2MC0xNDl2LTQzLjU4N3EtNTMuMTA5IDAtOTAuMjYxLTM3LjE2MlEzMi41ODctMjY2LjkxMSAzMi41ODctMzIwdi0yMDBxMC0zNC40OCAyNC42OTUtNTkuMDMzIDI0LjY5Ni0yNC41NTQgNTkuMTYzLTI0LjU1NCAzNC40NjYgMCA1OS4wMTEgMjQuNTU0UTIwMC01NTQuNDggMjAwLTUyMHYxNjBoNTYwdi0xNjBxMC0zNC40MzUgMjQuNTQ0LTU5LjAxMSAyNC41NDUtMjQuNTc2IDU5LjAxMS0yNC41NzYgMzQuNDY3IDAgNTkuMTYzIDI0LjU1NFE5MjcuNDEzLTU1NC40OCA5MjcuNDEzLTUyMHYyMDBxMCA1My4wODktMzcuMTYyIDkwLjI1MS0zNy4xNjIgMzcuMTYyLTkwLjI1MSAzNy4xNjJWLTE0OXEwIDE5LjE1Mi0xMy4xNzQgMzIuMzI2VDc1NC41LTEwMy41cS0xOS4xNTIgMC0zMi4zMjYtMTMuMTc0VDcwOS0xNDl2LTQzLjU4N0gyNTFWLTE0OXEwIDE5LjE1Mi0xMy4xNzQgMzIuMzI2VDIwNS41LTEwMy41Wk0yODAtNDQwdi04MHEwLTU3LjM5MS0zNS44OTEtMTAxLjk2Ny0zNS44OTItNDQuNTc3LTkxLjUyMi02MS42MlYtNzIwcTAtNTMuMDg5IDM3LjE2Mi05MC4yNTEgMzcuMTYyLTM3LjE2MiA5MC4yNTEtMzcuMTYyaDQwMHE1My4wODkgMCA5MC4yNTEgMzcuMTYyIDM3LjE2MiAzNy4xNjIgMzcuMTYyIDkwLjI1MXYzNi40MTNxLTU2Ljg2OSAxMi41NjUtOTIuMTQxIDU4LjM4UTY4MC01NzkuMzkxIDY4MC01MjB2ODBIMjgwWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTQ4MC0yMTkuOTEzIDMxMy4yODMtMTE5LjQzNXEtMTIuNjc0IDcuOTU3LTI2LjM0OCA2LjgzNy0xMy42NzQtMS4xMTktMjMuODctOS4wNzYtMTAuMTk2LTcuOTU2LTE1Ljc5My0yMC4wMTEtNS41OTgtMTIuMDU0LTIuMTItMjYuNzI4bDQ0LjIzOS0xODkuNzE3LTE0Ny43MTctMTI3LjcxOHEtMTEuNDM1LTEwLjE5NS0xNC4yOTQtMjMuMjUtMi44NTktMTMuMDU0IDEuMzgxLTI1LjQ4OSA0LjIzOS0xMi40MzUgMTMuNzkzLTIwLjYzMSA5LjU1NS04LjE5NSAyNS4yMjgtMTAuMTk1bDE5NC43MTgtMTcgNzUuNDc4LTE3OC45NTdxNS43MTgtMTMuOTEzIDE3LjUzMy0yMC42MyAxMS44MTUtNi43MTggMjQuNDg5LTYuNzE4IDEyLjY3NCAwIDI0LjQ4OSA2LjcxOCAxMS44MTUgNi43MTcgMTcuNTMzIDIwLjYzTDU5Ny41LTU4Mi40MTNsMTk0LjcxOCAxN3ExNS42NzMgMiAyNS4yMjggMTAuMTk1IDkuNTU0IDguMTk2IDEzLjc5MyAyMC42MzEgNC4yNCAxMi40MzUgMS4zODEgMjUuNDg5LTIuODU5IDEzLjA1NS0xNC4yOTQgMjMuMjVMNjcwLjYwOS0zNTguMTNsNDQuMjM5IDE4OS43MTdxMy40NzggMTQuNjc0LTIuMTIgMjYuNzI4LTUuNTk3IDEyLjA1NS0xNS43OTMgMjAuMDExLTEwLjE5NiA3Ljk1Ny0yMy44NyA5LjA3Ni0xMy42NzQgMS4xMi0yNi4zNDgtNi44MzdMNDgwLTIxOS45MTNaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNMzk3LjkzNS0yMzEuODY5SDE5MC4yMTdxLTI3LjM0OCAwLTQwLjc4Mi0yMy44Ny0xMy40MzUtMjMuODcgMi4yMzktNDYuNzM5bDExMy4yNi0xNjkuMzkxaC0yLjI4MnEtMjQuNDc4IDAtMzYuMDk4LTIxLjc0LTExLjYyLTIxLjczOSAyLjYyLTQxLjk3OGwyMTMuMjgyLTMwNC44MjZxNi45NTctOS40MzUgMTcuMDMzLTE0LjQxMyAxMC4wNzYtNC45NzkgMjAuNTExLTQuOTc5IDEwLjQzNSAwIDIwLjUxMSA0Ljk3OSAxMC4wNzYgNC45NzggMTcuMDMzIDE0LjQxM2wyMTMuMjgyIDMwNC44MjZxMTQuMjQgMjAuMjM5IDIuNjIgNDEuOTc4LTExLjYyIDIxLjc0LTM2LjA5OCAyMS43NGgtMi4yODJsMTEzLjI2IDE2OS4zOTFxMTUuNjc0IDIyLjg2OSAyLjIzOSA0Ni43MzktMTMuNDM0IDIzLjg3LTQwLjc4MiAyMy44N0g1NjIuMDY1djExNC40OTlxMCAxOS4xNTMtMTMuMTc0IDMyLjMyN1Q1MTYuNTY1LTcxLjg3aC03My4xM3EtMTkuMTUyIDAtMzIuMzI2LTEzLjE3NHQtMTMuMTc0LTMyLjMyN3YtMTE0LjQ5OVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIm0yNTYtMjAwLTU2LTU2IDIyNC0yMjQtMjI0LTIyNCA1Ni01NiAyMjQgMjI0IDIyNC0yMjQgNTYgNTYtMjI0IDIyNCAyMjQgMjI0LTU2IDU2LTIyNC0yMjQtMjI0IDIyNFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzMiAzMlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48ZyBjbGlwLXBhdGg9XFxcInVybCgjY2xpcDBfMTE5XzI0OClcXFwiPjxwYXRoIGQ9XFxcIk0xMS4xOTAyIDI3LjYwNzRMMCAxNi40MTcyTDIuNzk3NTUgMTMuNjE5NkwxMS4xOTAyIDIyLjAxMjNMMjkuMjAyNSA0TDMyIDYuNzk3NTVMMTEuMTkwMiAyNy42MDc0WlxcXCIgZmlsbD1cXFwiIzJGOUU2MlxcXCI+PC9wYXRoPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9XFxcImNsaXAwXzExOV8yNDhcXFwiPjxyZWN0IHdpZHRoPVxcXCIzMlxcXCIgaGVpZ2h0PVxcXCIzMlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiPjwvcmVjdD48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk00NTAuMDAxLTQ1MC4wMDFoLTIzMHYtNTkuOTk4aDIzMHYtMjMwaDU5Ljk5OHYyMzBoMjMwdjU5Ljk5OGgtMjMwdjIzMGgtNTkuOTk4di0yMzBaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNMjgwLTEyMHEtMzMgMC01Ni41LTIzLjVUMjAwLTIwMHYtNTIwaC00MHYtODBoMjAwdi00MGgyNDB2NDBoMjAwdjgwaC00MHY1MjBxMCAzMy0yMy41IDU2LjVUNjgwLTEyMEgyODBabTQwMC02MDBIMjgwdjUyMGg0MDB2LTUyMFpNMzYwLTI4MGg4MHYtMzYwaC04MHYzNjBabTE2MCAwaDgwdi0zNjBoLTgwdjM2MFpNMjgwLTcyMHY1MjAtNTIwWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTIwMC0yMDBoNTdsMzkxLTM5MS01Ny01Ny0zOTEgMzkxdjU3Wm0tODAgODB2LTE3MGw1MjgtNTI3cTEyLTExIDI2LjUtMTd0MzAuNS02cTE2IDAgMzEgNnQyNiAxOGw1NSA1NnExMiAxMSAxNy41IDI2dDUuNSAzMHEwIDE2LTUuNSAzMC41VDgxNy02NDdMMjkwLTEyMEgxMjBabTY0MC01ODQtNTYtNTYgNTYgNTZabS0xNDEgODUtMjgtMjkgNTcgNTctMjktMjhaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTEyIDE5LjhMMCA3LjhMMi44IDVMMTIgMTQuMkwyMS4yIDVMMjQgNy44TDEyIDE5LjhaXFxcIiBmaWxsPVxcXCIjMjUyNzJjXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNMjQwLTQwMHEtMzMgMC01Ni41LTIzLjVUMTYwLTQ4MHEwLTMzIDIzLjUtNTYuNVQyNDAtNTYwcTMzIDAgNTYuNSAyMy41VDMyMC00ODBxMCAzMy0yMy41IDU2LjVUMjQwLTQwMFptMjQwIDBxLTMzIDAtNTYuNS0yMy41VDQwMC00ODBxMC0zMyAyMy41LTU2LjVUNDgwLTU2MHEzMyAwIDU2LjUgMjMuNVQ1NjAtNDgwcTAgMzMtMjMuNSA1Ni41VDQ4MC00MDBabTI0MCAwcS0zMyAwLTU2LjUtMjMuNVQ2NDAtNDgwcTAtMzMgMjMuNS01Ni41VDcyMC01NjBxMzMgMCA1Ni41IDIzLjVUODAwLTQ4MHEwIDMzLTIzLjUgNTYuNVQ3MjAtNDAwWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwibTQyNC00MDgtODYtODZxLTExLTExLTI4LTExdC0yOCAxMXEtMTEgMTEtMTEgMjh0MTEgMjhsMTE0IDExNHExMiAxMiAyOCAxMnQyOC0xMmwyMjYtMjI2cTExLTExIDExLTI4dC0xMS0yOHEtMTEtMTEtMjgtMTF0LTI4IDExTDQyNC00MDhabTU2IDMyOHEtODMgMC0xNTYtMzEuNVQxOTctMTk3cS01NC01NC04NS41LTEyN1Q4MC00ODBxMC04MyAzMS41LTE1NlQxOTctNzYzcTU0LTU0IDEyNy04NS41VDQ4MC04ODBxODMgMCAxNTYgMzEuNVQ3NjMtNzYzcTU0IDU0IDg1LjUgMTI3VDg4MC00ODBxMCA4My0zMS41IDE1NlQ3NjMtMTk3cS01NCA1NC0xMjcgODUuNVQ0ODAtODBaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzIgMzJcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PGNpcmNsZSBjeD1cXFwiMTZcXFwiIGN5PVxcXCIxNlxcXCIgcj1cXFwiMTZcXFwiIGZpbGw9XFxcIiNGQUZBRkFcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE2XFxcIiBjeT1cXFwiMTZcXFwiIHI9XFxcIjE0LjVcXFwiIHN0cm9rZT1cXFwiIzI1MjcyQ1xcXCIgc3Ryb2tlLW9wYWNpdHk9XFxcIjAuNVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzXFxcIj48L2NpcmNsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk00ODAtMzk2LjkyM3EtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4VDQ4MC00NjcuNjkxcTE0LjY5MiAwIDI1LjAzOCAxMC4zNDZ0MTAuMzQ2IDI1LjAzOHEwIDE0LjY5Mi0xMC4zNDYgMjUuMDM4VDQ4MC0zOTYuOTIzWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQzMjAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQzMjAtMzk2LjkyM1ptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQ2NDAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQ2NDAtMzk2LjkyM1pNNDgwLTI0MHEtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4IDEwLjM0Ni0xMC4zNDcgMjUuMDM4LTEwLjM0N3QyNS4wMzggMTAuMzQ3cTEwLjM0NiAxMC4zNDYgMTAuMzQ2IDI1LjAzOHQtMTAuMzQ2IDI1LjAzOFE0OTQuNjkyLTI0MCA0ODAtMjQwWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRMzM0LjY5Mi0yNDAgMzIwLTI0MFptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRNjU0LjY5Mi0yNDAgNjQwLTI0MFpNMjEyLjMwOS0xMDAuMDAxcS0zMC4zMDggMC01MS4zMDgtMjF0LTIxLTUxLjMwOHYtNTM1LjM4MnEwLTMwLjMwOCAyMS01MS4zMDh0NTEuMzA4LTIxaDU1LjM4NXYtODQuNjE1aDYxLjUzN3Y4NC42MTVoMzAzLjA3NnYtODQuNjE1aDU5Ljk5OXY4NC42MTVoNTUuMzg1cTMwLjMwOCAwIDUxLjMwOCAyMXQyMSA1MS4zMDh2NTM1LjM4MnEwIDMwLjMwOC0yMSA1MS4zMDh0LTUxLjMwOCAyMUgyMTIuMzA5Wm0wLTU5Ljk5OWg1MzUuMzgycTQuNjE2IDAgOC40NjMtMy44NDYgMy44NDYtMy44NDcgMy44NDYtOC40NjN2LTM3NS4zODJIMjAwdjM3NS4zODJxMCA0LjYxNiAzLjg0NiA4LjQ2MyAzLjg0NyAzLjg0NiA4LjQ2MyAzLjg0NlpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk0yMTIuMzA5LTEwMC4wMDFxLTMwLjMwOCAwLTUxLjMwOC0yMXQtMjEtNTEuMzA4di01MzUuMzgycTAtMzAuMzA4IDIxLTUxLjMwOHQ1MS4zMDgtMjFoNTUuMzg1di04NC42MTVoNjEuNTM3djg0LjYxNWgzMDMuMDc2di04NC42MTVoNTkuOTk5djg0LjYxNWg1NS4zODVxMzAuMzA4IDAgNTEuMzA4IDIxdDIxIDUxLjMwOHY1MzUuMzgycTAgMzAuMzA4LTIxIDUxLjMwOHQtNTEuMzA4IDIxSDIxMi4zMDlabTAtNTkuOTk5aDUzNS4zODJxNC42MTYgMCA4LjQ2My0zLjg0NiAzLjg0Ni0zLjg0NyAzLjg0Ni04LjQ2M3YtMzc1LjM4MkgyMDB2Mzc1LjM4MnEwIDQuNjE2IDMuODQ2IDguNDYzIDMuODQ3IDMuODQ2IDguNDYzIDMuODQ2Wk0yMDAtNjA3LjY5aDU2MHYtMTAwLjAwMXEwLTQuNjE2LTMuODQ2LTguNDYzLTMuODQ3LTMuODQ2LTguNDYzLTMuODQ2SDIxMi4zMDlxLTQuNjE2IDAtOC40NjMgMy44NDYtMy44NDYgMy44NDctMy44NDYgOC40NjN2MTAwLjAwMVptMCAwVi03MjB2MTEyLjMxWm0yODAgMjEwLjc2N3EtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4VDQ4MC00NjcuNjkxcTE0LjY5MiAwIDI1LjAzOCAxMC4zNDZ0MTAuMzQ2IDI1LjAzOHEwIDE0LjY5Mi0xMC4zNDYgMjUuMDM4VDQ4MC0zOTYuOTIzWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQzMjAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQzMjAtMzk2LjkyM1ptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQ2NDAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQ2NDAtMzk2LjkyM1pNNDgwLTI0MHEtMTQuNjkyIDAtMjUuMDM4LTEwLjM0NnQtMTAuMzQ2LTI1LjAzOHEwLTE0LjY5MiAxMC4zNDYtMjUuMDM4IDEwLjM0Ni0xMC4zNDcgMjUuMDM4LTEwLjM0N3QyNS4wMzggMTAuMzQ3cTEwLjM0NiAxMC4zNDYgMTAuMzQ2IDI1LjAzOHQtMTAuMzQ2IDI1LjAzOFE0OTQuNjkyLTI0MCA0ODAtMjQwWm0tMTYwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRMzM0LjY5Mi0yNDAgMzIwLTI0MFptMzIwIDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRNjU0LjY5Mi0yNDAgNjQwLTI0MFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk0yMjAuMDAxLTEzMC4wMDF2LTY0OS45OThoMzIzLjg0NGwxNiA4MGgyMjAuMTU0djM1OS45OThINTM2LjE1NWwtMTYtODBIMjgwdjI5MGgtNTkuOTk5WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTIyMC4wMDEtMTMwLjAwMXYtNjQ5Ljk5OGgzMjMuODQ0bDE2IDgwaDIyMC4xNTR2MzU5Ljk5OEg1MzYuMTU1bC0xNi04MEgyODB2MjkwaC01OS45OTlaTTUwMC01NjBabTg2IDE2MGgxMzR2LTI0MEg1MTBsLTE2LTgwSDI4MHYyNDBoMjkwbDE2IDgwWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDMzLjg2NjY2NCAzMy44NjY2NjRcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcInN2ZzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6c3ZnPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PGRlZnMgaWQ9XFxcImRlZnMxXFxcIj48L2RlZnM+PGcgaWQ9XFxcImxheWVyMVxcXCI+PGcgaWQ9XFxcImcxXFxcIiB0cmFuc2Zvcm09XFxcIm1hdHJpeCgxLjE4MTAwODEsMCwwLDEuMTgxMDA4MSwtNC45OTg5OTAyLC0zLjA2NTA3MDMpXFxcIj48cGF0aCBpZD1cXFwicmVjdDFcXFwiIHN0eWxlPVxcXCJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1vcGFjaXR5OjE7LWlua3NjYXBlLXN0cm9rZTpub25lXFxcIiBkPVxcXCJtIDcuOTczMTU2Nyw0LjIzMjgxNjYgYyAtMi4wNDI1OTE1LDAgLTMuNzQwMzQwMSwxLjY5Nzc0ODYgLTMuNzQwMzQwMSwzLjc0MDM0MDEgViAyNS44OTI5OTMgYyAwLDIuMDQyNTkyIDEuNjk3NzQ4MSwzLjc0MDg1OCAzLjc0MDM0MDEsMy43NDA4NTcgSCAyNS44OTM1MSBjIDIuMDQyNTkyLDFlLTYgMy43NDAzNCwtMS42OTgyNjUgMy43NDAzNCwtMy43NDA4NTcgViAxNS44NTA3MTIgbCAtMy4zOTUxNDEsMy4zNzA4NTQgdiA2LjY3MTQyNyBjIDAsMC4yMjA4NSAtMC4xMjQzNSwwLjM0NjIzMiAtMC4zNDUxOTksMC4zNDYyMzIgSCA3Ljk3MzE1NjcgYyAtMC4yMjA4NTAxLDAgLTAuMzQ1NzE1MywtMC4xMjUzODIgLTAuMzQ1NzE1MywtMC4zNDYyMzIgViA3Ljk3MzE1NjcgYyAwLC0wLjIyMDg1MDYgMC4xMjQ4NjQ3LC0wLjM0NTcxNTMgMC4zNDU3MTUzLC0wLjM0NTcxNTMgSCAyMy4wMTMwNjYgbCAzLjM4MjczOSwtMy4zNTg5NjgxIGMgLTAuMTY0NTUxLC0wLjAyMzE0OSAtMC4zMzE5OCwtMC4wMzU2NTcgLTAuNTAyMjk1LC0wLjAzNTY1NyB6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImNvbG9yOiMwMDAwMDA7LWlua3NjYXBlLXN0cm9rZTpub25lXFxcIiBkPVxcXCJNIDI5LjE2NDA2Miw1LjIyNDYwOTQgMTUuNTU0Njg4LDE4Ljg1NzQyMiAxMS4xNzU3ODEsMTQuOTU3MDMxIDcuNjU2MjUsMTguOTEwMTU2IDE1Ljc2OTUzMSwyNi4xMzI4MTIgMzIuOTA4MjAzLDguOTYyODkwNiBaXFxcIiBpZD1cXFwicGF0aDZcXFwiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPlwiIiwiLy8gVGFzayBpY29uc1xuaW1wb3J0IGRhdGVVbnNlbGVjdGVkU3ZnIGZyb20gXCIuLi9pbWcvdGFza3MvZGF0ZS1ub2ZpbGwuc3ZnXCI7XG5pbXBvcnQgZGF0ZVNlbGVjdGVkU3ZnIGZyb20gXCIuLi9pbWcvdGFza3MvZGF0ZS1maWxsLnN2Z1wiO1xuaW1wb3J0IHByaW9yaXR5VW5zZWxlY3RlZFN2ZyBmcm9tIFwiLi4vaW1nL3Rhc2tzL3ByaW9yaXR5LW5vZmlsbC5zdmdcIjtcbmltcG9ydCBwcmlvcml0eVNlbGVjdGVkU3ZnIGZyb20gXCIuLi9pbWcvdGFza3MvcHJpb3JpdHktZmlsbC5zdmdcIjtcblxuLy8gTGlzdCBpY29uc1xuaW1wb3J0IGRlZmF1bHRTdmcgZnJvbSBcIi4uL2ltZy9saXN0cy9kZWZhdWx0LnN2Z1wiO1xuaW1wb3J0IHN0YXJTdmcgZnJvbSBcIi4uL2ltZy9saXN0cy9zdGFyLnN2Z1wiO1xuaW1wb3J0IGhlYXJ0U3ZnIGZyb20gXCIuLi9pbWcvbGlzdHMvaGVhcnQuc3ZnXCI7XG5pbXBvcnQgc29mYVN2ZyBmcm9tIFwiLi4vaW1nL2xpc3RzL3NvZmEuc3ZnXCI7XG5pbXBvcnQgdHJlZVN2ZyBmcm9tIFwiLi4vaW1nL2xpc3RzL3RyZWUuc3ZnXCI7XG5pbXBvcnQgc2hvcHBpbmdTdmcgZnJvbSBcIi4uL2ltZy9saXN0cy9zaG9wcGluZy5zdmdcIjtcbmltcG9ydCBzY2hvb2xTdmcgZnJvbSBcIi4uL2ltZy9saXN0cy9zY2hvb2wuc3ZnXCI7XG5pbXBvcnQgcGVuY2lsU3ZnIGZyb20gXCIuLi9pbWcvbGlzdHMvcGVuY2lsLnN2Z1wiO1xuaW1wb3J0IHBsYW5lU3ZnIGZyb20gXCIuLi9pbWcvbGlzdHMvcGxhbmUuc3ZnXCI7XG5pbXBvcnQgY2xvdWRTdmcgZnJvbSBcIi4uL2ltZy9saXN0cy9jbG91ZC5zdmdcIjtcbmltcG9ydCBsaWdodGJ1bGJTdmcgZnJvbSBcIi4uL2ltZy9saXN0cy9saWdodGJ1bGIuc3ZnXCI7XG5pbXBvcnQgYm9va1N2ZyBmcm9tIFwiLi4vaW1nL2xpc3RzL2Jvb2suc3ZnXCI7XG5cbi8vIERpYWxvZyBpY29uc1xuaW1wb3J0IGNsb3NlU3ZnIGZyb20gXCIuLi9pbWcvb3RoZXJzL2Nsb3NlLnN2Z1wiO1xuaW1wb3J0IGhvcml6b250YWxPcHRpb25zU3ZnIGZyb20gXCIuLi9pbWcvb3RoZXJzL2hvcml6b250YWwtb3B0aW9ucy5zdmdcIjtcbmltcG9ydCBlZGl0U3ZnIGZyb20gXCIuLi9pbWcvb3RoZXJzL2VkaXQuc3ZnXCI7XG5pbXBvcnQgZGVsZXRlU3ZnIGZyb20gXCIuLi9pbWcvb3RoZXJzL2RlbGV0ZS5zdmdcIjtcblxuLy8gRnVuY3Rpb25zXG5pbXBvcnQgKiBhcyBsaXN0cyBmcm9tIFwiLi4vbGlzdHMtYW5kLXRhc2tzXCI7XG5pbXBvcnQgKiBhcyBzaWRlYmFyIGZyb20gXCIuL3NpZGViYXIuanNcIjtcbmltcG9ydCAqIGFzIHBhZ2UgZnJvbSBcIi4vcGFnZS5qc1wiO1xuaW1wb3J0ICogYXMgaW5wdXRzIGZyb20gXCIuL2lucHV0cy5qc1wiO1xuaW1wb3J0ICogYXMgbm90aWZpY2F0aW9ucyBmcm9tIFwiLi9ub3RpZmljYXRpb25zLmpzXCI7XG5cbmNvbnN0IGxpc3RJY29ucyA9IFtcbiAgZGVmYXVsdFN2ZyxcbiAgc3RhclN2ZyxcbiAgaGVhcnRTdmcsXG4gIHNvZmFTdmcsXG4gIHRyZWVTdmcsXG4gIHNob3BwaW5nU3ZnLFxuICBzY2hvb2xTdmcsXG4gIHBlbmNpbFN2ZyxcbiAgcGxhbmVTdmcsXG4gIGNsb3VkU3ZnLFxuICBsaWdodGJ1bGJTdmcsXG4gIGJvb2tTdmcsXG5dO1xuXG5jb25zdCBsaXN0VGl0bGVNYXhMZW5ndGggPSAyNTtcbmNvbnN0IHRhc2tUaXRsZU1heExlbmd0aCA9IDUwO1xuY29uc3QgdGFza0Rlc2NyaXB0aW9uTWF4TGVuZ3RoID0gMzAwO1xuY29uc3QgaGVpZ2h0T3ZlcmZsb3cgPSAxNTY7XG5cbi8vIExpc3QgZGlhbG9nczpcbmNvbnN0IHNob3dOZXdMaXN0RGlhbG9nID0gKCkgPT4ge1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICBkaWFsb2cuaWQgPSBcIm5ldy1saXN0XCI7XG5cbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRpdGxlLWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBpbnB1dHMuYXBwZW5kVGV4dElucHV0KFxuICAgIFwibGlzdC10aXRsZS1pbnB1dFwiLFxuICAgIFwiTGlzdCB0aXRsZVwiLFxuICAgIGxpc3RUaXRsZU1heExlbmd0aCxcbiAgICB0cnVlXG4gICk7XG5cbiAgY29uc3Qgc2VsZWN0SWNvbklucHV0ID0gaW5wdXRzLmFwcGVuZFNlbGVjdElucHV0R3JpZChcbiAgICBcInNlbGVjdC1pY29uXCIsXG4gICAgbGlzdEljb25zXG4gICk7XG5cbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0SWNvbklucHV0KTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgY29uc3QgZGlhbG9nQnV0dG9ucyA9IGlucHV0cy5hcHBlbmREaWFsb2dCdXR0b25zKFwiQ3JlYXRlIGxpc3RcIik7XG4gIGNvbnN0IG1haW5CdXR0b24gPSBkaWFsb2dCdXR0b25zLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24ucHJpbWFyeVwiKTtcblxuICBkaWFsb2cuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZGlhbG9nQnV0dG9ucyk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2cpO1xuXG4gIGFkZENsb3NlRGlhbG9nRXZlbnQoZGlhbG9nKTtcbiAgYWRkQ2xvc2VEaWFsb2dCdXR0b25zRXZlbnQoZGlhbG9nLCBBcnJheS5mcm9tKGRpYWxvZ0J1dHRvbnMuY2hpbGROb2RlcykpO1xuICBhZGRDcmVhdGVMaXN0RXZlbnQoZGlhbG9nKTtcbiAgZGlzYWJsZUVtcHR5RGlhbG9nRXZlbnQodGl0bGVJbnB1dCwgbWFpbkJ1dHRvbik7XG5cbiAgZGlhbG9nLnNob3dNb2RhbCgpO1xufTtcblxuY29uc3Qgc2hvd0VkaXRMaXN0RGlhbG9nID0gKGxpc3QpID0+IHtcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgZGlhbG9nLmlkID0gXCJlZGl0LWxpc3RcIjtcblxuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGl0bGUtY29udGFpbmVyXCI7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGlucHV0cy5hcHBlbmRUZXh0SW5wdXQoXG4gICAgXCJsaXN0LXRpdGxlLWlucHV0XCIsXG4gICAgXCJMaXN0IHRpdGxlXCIsXG4gICAgbGlzdFRpdGxlTWF4TGVuZ3RoLFxuICAgIHRydWUsXG4gICAgbGlzdC5uYW1lXG4gICk7XG5cbiAgY29uc3Qgc2VsZWN0SWNvbklucHV0ID0gaW5wdXRzLmFwcGVuZFNlbGVjdElucHV0R3JpZChcbiAgICBcInNlbGVjdC1pY29uXCIsXG4gICAgbGlzdEljb25zXG4gICk7XG4gIGlucHV0cy5zZWxlY3RPcHRpb25WYWx1ZUdyaWQoc2VsZWN0SWNvbklucHV0LCBsaXN0SWNvbnMuaW5kZXhPZihsaXN0Lmljb24pKTtcblxuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RJY29uSW5wdXQpO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBkaWFsb2dCdXR0b25zID0gaW5wdXRzLmFwcGVuZERpYWxvZ0J1dHRvbnMoXCJFZGl0IGxpc3RcIik7XG4gIGNvbnN0IG1haW5CdXR0b24gPSBkaWFsb2dCdXR0b25zLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24ucHJpbWFyeVwiKTtcblxuICBkaWFsb2cuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZGlhbG9nQnV0dG9ucyk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2cpO1xuXG4gIGFkZENsb3NlRGlhbG9nRXZlbnQoZGlhbG9nKTtcbiAgYWRkQ2xvc2VEaWFsb2dCdXR0b25zRXZlbnQoZGlhbG9nLCBBcnJheS5mcm9tKGRpYWxvZ0J1dHRvbnMuY2hpbGROb2RlcykpO1xuICBhZGRFZGl0TGlzdEV2ZW50KGRpYWxvZyk7XG4gIGRpc2FibGVFbXB0eURpYWxvZ0V2ZW50KHRpdGxlSW5wdXQsIG1haW5CdXR0b24pO1xuXG4gIGRpYWxvZy5zaG93TW9kYWwoKTtcbn07XG5cbmNvbnN0IHNob3dEZWxldGVMaXN0RGlhbG9nID0gKGxpc3QpID0+IHtcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgZGlhbG9nLmlkID0gXCJkZWxldGUtbGlzdFwiO1xuXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZXNzYWdlLmNsYXNzTmFtZSA9IFwibWVzc2FnZVwiO1xuXG4gIGNvbnN0IG1lc3NhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtZXNzYWdlVGl0bGUuY2xhc3NOYW1lID0gXCJtZXNzYWdlLXRpdGxlXCI7XG4gIG1lc3NhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGxpc3Q/XCI7XG5cbiAgY29uc3QgbGlzdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsaXN0SW5mby5jbGFzc05hbWUgPSBcImxpc3QtaW5mb1wiO1xuXG4gIGNvbnN0IGxpc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxpc3RJY29uLmNsYXNzTmFtZSA9IFwibGlzdC1pY29uXCI7XG4gIGxpc3RJY29uLmlubmVySFRNTCA9IGxpc3QuaWNvbjtcblxuICBjb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGlzdFRpdGxlLmNsYXNzTmFtZSA9IFwibGlzdC10aXRsZVwiO1xuICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBsaXN0Lm5hbWU7XG5cbiAgbGlzdEluZm8uYXBwZW5kQ2hpbGQobGlzdEljb24pO1xuICBsaXN0SW5mby5hcHBlbmRDaGlsZChsaXN0VGl0bGUpO1xuXG4gIGNvbnN0IHN1Yk1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc3ViTWVzc2FnZS5jbGFzc05hbWUgPSBcInN1Yi1tZXNzYWdlXCI7XG4gIHN1Yk1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuXCI7XG5cbiAgY29uc3QgZGlhbG9nQnV0dG9ucyA9IGlucHV0cy5hcHBlbmREaWFsb2dCdXR0b25zKFwiRGVsZXRlXCIpO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBkaWFsb2dCdXR0b25zLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24ucHJpbWFyeVwiKTtcblxuICBtZXNzYWdlLmFwcGVuZENoaWxkKG1lc3NhZ2VUaXRsZSk7XG4gIG1lc3NhZ2UuYXBwZW5kQ2hpbGQobGlzdEluZm8pO1xuICBtZXNzYWdlLmFwcGVuZENoaWxkKHN1Yk1lc3NhZ2UpO1xuXG4gIGRpYWxvZy5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGRpYWxvZ0J1dHRvbnMpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcblxuICBhZGRDbG9zZURpYWxvZ0V2ZW50KGRpYWxvZyk7XG4gIGFkZENsb3NlRGlhbG9nQnV0dG9uc0V2ZW50KGRpYWxvZywgQXJyYXkuZnJvbShkaWFsb2dCdXR0b25zLmNoaWxkTm9kZXMpKTtcbiAgYWRkRGVsZXRlTGlzdEV2ZW50KGRlbGV0ZUJ1dHRvbiwgbGlzdHMuZ2V0Q3VycmVudExpc3QoKS5uYW1lKTtcblxuICBkaWFsb2cuc2hvd01vZGFsKCk7XG59O1xuXG4vLyBUYXNrIGRpYWxvZ3M6XG5jb25zdCBzaG93TmV3VGFza0RpYWxvZyA9ICgpID0+IHtcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgZGlhbG9nLmlkID0gXCJuZXctdGFza1wiO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBpbnB1dHMuYXBwZW5kVGV4dElucHV0KFxuICAgIFwidGFzay10aXRsZS1pbnB1dFwiLFxuICAgIFwiVGFzayB0aXRsZVwiLFxuICAgIHRhc2tUaXRsZU1heExlbmd0aCxcbiAgICB0cnVlXG4gICk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGlucHV0cy5hcHBlbmRUZXh0QXJlYUlucHV0KFxuICAgIFwidGFzay1kZXNjcmlwdGlvbi1pbnB1dFwiLFxuICAgIFwiVGFzayBkZXNjcmlwdGlvblwiLFxuICAgIHRhc2tEZXNjcmlwdGlvbk1heExlbmd0aCxcbiAgICA0LFxuICAgIGZhbHNlXG4gICk7XG5cbiAgY29uc3Qgc2VsZWN0SW5wdXRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VsZWN0SW5wdXRzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFzay1zZWxlY3QtaW5wdXRzXCI7XG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gaW5wdXRzLmFwcGVuZERhdGVJbnB1dChcImRhdGUtaW5wdXRcIiwgZGF0ZVVuc2VsZWN0ZWRTdmcpO1xuICBjb25zdCBzZWxlY3RQcmlvcml0eUlucHV0ID0gaW5wdXRzLmFwcGVuZFNlbGVjdElucHV0KFxuICAgIFwic2VsZWN0LXByaW9yaXR5XCIsXG4gICAgcHJpb3JpdHlVbnNlbGVjdGVkU3ZnLFxuICAgIFtcbiAgICAgIHsgaWNvbjogcHJpb3JpdHlVbnNlbGVjdGVkU3ZnLCBuYW1lOiBcIlByaW9yaXR5XCIgfSxcbiAgICAgIHsgaWNvbjogcHJpb3JpdHlTZWxlY3RlZFN2ZywgbmFtZTogXCJMb3dcIiB9LFxuICAgICAgeyBpY29uOiBwcmlvcml0eVNlbGVjdGVkU3ZnLCBuYW1lOiBcIk1lZGl1bVwiIH0sXG4gICAgICB7IGljb246IHByaW9yaXR5U2VsZWN0ZWRTdmcsIG5hbWU6IFwiSGlnaFwiIH0sXG4gICAgXVxuICApO1xuICBjb25zdCBzZWxlY3RMaXN0SW5wdXQgPSBpbnB1dHMuYXBwZW5kU2VsZWN0SW5wdXQoXG4gICAgXCJzZWxlY3QtbGlzdFwiLFxuICAgIGRlZmF1bHRTdmcsXG4gICAgbGlzdHMuZ2V0TGlzdHNOYW1lc0ljb25zKCksXG4gICAgbGlzdHMuZ2V0TGlzdEluZGV4KGxpc3RzLmdldEN1cnJlbnRMaXN0KCkubmFtZSlcbiAgKTtcblxuICBzZWxlY3RJbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgc2VsZWN0SW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5SW5wdXQpO1xuICBzZWxlY3RJbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0TGlzdElucHV0KTtcblxuICBjb25zdCBkaWFsb2dCdXR0b25zID0gaW5wdXRzLmFwcGVuZERpYWxvZ0J1dHRvbnMoXCJBZGQgdGFza1wiKTtcbiAgY29uc3QgbWFpbkJ1dHRvbiA9IGRpYWxvZ0J1dHRvbnMucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5wcmltYXJ5XCIpO1xuXG4gIGRpYWxvZy5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoc2VsZWN0SW5wdXRzQ29udGFpbmVyKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGRpYWxvZ0J1dHRvbnMpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcblxuICBhZGRDbG9zZURpYWxvZ0V2ZW50KGRpYWxvZyk7XG4gIGFkZENsb3NlRGlhbG9nQnV0dG9uc0V2ZW50KGRpYWxvZywgQXJyYXkuZnJvbShkaWFsb2dCdXR0b25zLmNoaWxkTm9kZXMpKTtcbiAgYWRkQ3JlYXRlVGFza0V2ZW50KGRpYWxvZyk7XG4gIGRpc2FibGVFbXB0eURpYWxvZ0V2ZW50KHRpdGxlSW5wdXQsIG1haW5CdXR0b24pO1xuXG4gIGRpYWxvZy5zaG93TW9kYWwoKTtcbn07XG5cbmNvbnN0IHNob3dFZGl0VGFza0RpYWxvZyA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIGRpYWxvZy5pZCA9IFwiZWRpdC10YXNrXCI7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGlucHV0cy5hcHBlbmRUZXh0SW5wdXQoXG4gICAgXCJ0YXNrLXRpdGxlLWlucHV0XCIsXG4gICAgXCJUYXNrIHRpdGxlXCIsXG4gICAgdGFza1RpdGxlTWF4TGVuZ3RoLFxuICAgIHRydWUsXG4gICAgdGFzay50aXRsZVxuICApO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBpbnB1dHMuYXBwZW5kVGV4dEFyZWFJbnB1dChcbiAgICBcInRhc2stZGVzY3JpcHRpb24taW5wdXRcIixcbiAgICBcIlRhc2sgZGVzY3JpcHRpb25cIixcbiAgICB0YXNrRGVzY3JpcHRpb25NYXhMZW5ndGgsXG4gICAgNCxcbiAgICBmYWxzZSxcbiAgICB0YXNrLmRlc2NyaXB0aW9uXG4gICk7XG5cbiAgY29uc3Qgc2VsZWN0SW5wdXRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VsZWN0SW5wdXRzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFzay1zZWxlY3QtaW5wdXRzXCI7XG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gaW5wdXRzLmFwcGVuZERhdGVJbnB1dChcImRhdGUtaW5wdXRcIiwgZGF0ZVVuc2VsZWN0ZWRTdmcpO1xuICBpbnB1dHMuc2VsZWN0RGF0ZVZhbHVlKGRhdGVJbnB1dCwgdGFzay5kYXRlKTtcblxuICBjb25zdCBzZWxlY3RQcmlvcml0eUlucHV0ID0gaW5wdXRzLmFwcGVuZFNlbGVjdElucHV0KFxuICAgIFwic2VsZWN0LXByaW9yaXR5XCIsXG4gICAgcHJpb3JpdHlVbnNlbGVjdGVkU3ZnLFxuICAgIFtcbiAgICAgIHsgaWNvbjogcHJpb3JpdHlVbnNlbGVjdGVkU3ZnLCBuYW1lOiBcIlByaW9yaXR5XCIgfSxcbiAgICAgIHsgaWNvbjogcHJpb3JpdHlTZWxlY3RlZFN2ZywgbmFtZTogXCJMb3dcIiB9LFxuICAgICAgeyBpY29uOiBwcmlvcml0eVNlbGVjdGVkU3ZnLCBuYW1lOiBcIk1lZGl1bVwiIH0sXG4gICAgICB7IGljb246IHByaW9yaXR5U2VsZWN0ZWRTdmcsIG5hbWU6IFwiSGlnaFwiIH0sXG4gICAgXVxuICApO1xuICBpbnB1dHMuc2VsZWN0T3B0aW9uVmFsdWUoc2VsZWN0UHJpb3JpdHlJbnB1dCwgdGFzay5wcmlvcml0eSB8fCBcIlByaW9yaXR5XCIpO1xuXG4gIGNvbnN0IHNlbGVjdExpc3RJbnB1dCA9IGlucHV0cy5hcHBlbmRTZWxlY3RJbnB1dChcbiAgICBcInNlbGVjdC1saXN0XCIsXG4gICAgZGVmYXVsdFN2ZyxcbiAgICBsaXN0cy5nZXRMaXN0c05hbWVzSWNvbnMoKSxcbiAgICBsaXN0cy5nZXRMaXN0SW5kZXgobGlzdHMuZ2V0Q3VycmVudExpc3QoKS5uYW1lKVxuICApO1xuXG4gIHNlbGVjdElucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICBzZWxlY3RJbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0UHJpb3JpdHlJbnB1dCk7XG4gIHNlbGVjdElucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RMaXN0SW5wdXQpO1xuXG4gIGNvbnN0IGRpYWxvZ0J1dHRvbnMgPSBpbnB1dHMuYXBwZW5kRGlhbG9nQnV0dG9ucyhcIkVkaXQgdGFza1wiKTtcbiAgY29uc3QgbWFpbkJ1dHRvbiA9IGRpYWxvZ0J1dHRvbnMucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5wcmltYXJ5XCIpO1xuXG4gIGRpYWxvZy5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoc2VsZWN0SW5wdXRzQ29udGFpbmVyKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGRpYWxvZ0J1dHRvbnMpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcblxuICBhZGRDbG9zZURpYWxvZ0V2ZW50KGRpYWxvZyk7XG4gIGFkZENsb3NlRGlhbG9nQnV0dG9uc0V2ZW50KGRpYWxvZywgQXJyYXkuZnJvbShkaWFsb2dCdXR0b25zLmNoaWxkTm9kZXMpKTtcbiAgYWRkRWRpdFRhc2tFdmVudChkaWFsb2csIHRhc2suaWQpO1xuICBkaXNhYmxlRW1wdHlEaWFsb2dFdmVudCh0aXRsZUlucHV0LCBtYWluQnV0dG9uKTtcblxuICBkaWFsb2cuc2hvd01vZGFsKCk7XG59O1xuXG5jb25zdCBzaG93RGVsZXRlVGFza0RpYWxvZyA9ICh0YXNrSWQpID0+IHtcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgZGlhbG9nLmlkID0gXCJkZWxldGUtdGFza1wiO1xuXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZXNzYWdlLmNsYXNzTmFtZSA9IFwibWVzc2FnZVwiO1xuXG4gIGNvbnN0IG1lc3NhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtZXNzYWdlVGl0bGUuY2xhc3NOYW1lID0gXCJtZXNzYWdlLXRpdGxlXCI7XG4gIG1lc3NhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/XCI7XG5cbiAgY29uc3Qgc3ViTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzdWJNZXNzYWdlLmNsYXNzTmFtZSA9IFwic3ViLW1lc3NhZ2VcIjtcbiAgc3ViTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiVGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS5cIjtcblxuICBjb25zdCBkaWFsb2dCdXR0b25zID0gaW5wdXRzLmFwcGVuZERpYWxvZ0J1dHRvbnMoXCJEZWxldGVcIik7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRpYWxvZ0J1dHRvbnMucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5wcmltYXJ5XCIpO1xuXG4gIG1lc3NhZ2UuYXBwZW5kQ2hpbGQobWVzc2FnZVRpdGxlKTtcbiAgbWVzc2FnZS5hcHBlbmRDaGlsZChzdWJNZXNzYWdlKTtcblxuICBkaWFsb2cuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dCdXR0b25zKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG5cbiAgYWRkQ2xvc2VEaWFsb2dFdmVudChkaWFsb2cpO1xuICBhZGRDbG9zZURpYWxvZ0J1dHRvbnNFdmVudChkaWFsb2csIEFycmF5LmZyb20oZGlhbG9nQnV0dG9ucy5jaGlsZE5vZGVzKSk7XG4gIGFkZERlbGV0ZVRhc2tFdmVudChkZWxldGVCdXR0b24sIHRhc2tJZCk7XG5cbiAgZGlhbG9nLnNob3dNb2RhbCgpO1xufTtcblxuY29uc3QgYXBwZW5kU2Vjb25kYXJ5SW5mb0VsZW1lbnRzID0gKGxhYmVsLCBpY29uLCBlbGVtZW50Q2xhc3MpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWVsZW1lbnRcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGVsZW1lbnRDbGFzcyk7XG4gIGNvbnRhaW5lci5kYXRhc2V0LnZhbHVlID0gbGFiZWw7XG5cbiAgY29uc3QgZWxlbWVudEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZWxlbWVudEljb24uY2xhc3NOYW1lID0gXCJpY29uXCI7XG4gIGVsZW1lbnRJY29uLmlubmVySFRNTCA9IGljb247XG5cbiAgY29uc3QgZWxlbWVudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVsZW1lbnRMYWJlbC5jbGFzc05hbWUgPSBcImxhYmVsXCI7XG4gIGVsZW1lbnRMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50SWNvbik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50TGFiZWwpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5jb25zdCBzaG93VGFza0RldGFpbHNEaWFsb2cgPSAobGlzdCwgdGFzaykgPT4ge1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICBkaWFsb2cuaWQgPSBcInRhc2stZGV0YWlsc1wiO1xuXG4gIGNvbnN0IGFjdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhY3Rpb25zQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYWN0aW9ucy1jb250YWluZXJcIjtcblxuICBjb25zdCBjbG9zZURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNsb3NlRGlhbG9nLmlkID0gXCJjbG9zZS10YXNrLWRldGFpbHNcIjtcbiAgY29uc3QgY2xvc2VEaWFsb2dJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNsb3NlRGlhbG9nSWNvbi5jbGFzc05hbWUgPSBcImJ1dHRvbi1pY29uXCI7XG4gIGNsb3NlRGlhbG9nSWNvbi5pbm5lckhUTUwgPSBjbG9zZVN2ZztcblxuICBjbG9zZURpYWxvZy5hcHBlbmRDaGlsZChjbG9zZURpYWxvZ0ljb24pO1xuXG4gIGNvbnN0IG1vcmVPcHRpb25zID0gaW5wdXRzLmFwcGVuZE9wdGlvbnNCdXR0b24oXG4gICAgaG9yaXpvbnRhbE9wdGlvbnNTdmcsXG4gICAgXCJ0YXNrLW1vcmUtb3B0aW9uc1wiLFxuICAgIFtcbiAgICAgIHsgbGFiZWw6IFwiRWRpdFwiLCBpY29uOiBlZGl0U3ZnLCBvcHRpb25DbGFzczogXCJlZGl0LXRhc2tcIiB9LFxuICAgICAgeyBsYWJlbDogXCJEZWxldGVcIiwgaWNvbjogZGVsZXRlU3ZnLCBvcHRpb25DbGFzczogXCJkZWxldGUtdGFza1wiIH0sXG4gICAgXVxuICApO1xuXG4gIGNvbnN0IGRlbGV0ZU9wdGlvbiA9IG1vcmVPcHRpb25zLnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLXRhc2tcIik7XG4gIGNvbnN0IGVkaXRPcHRpb24gPSBtb3JlT3B0aW9ucy5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFza1wiKTtcblxuICBhY3Rpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlRGlhbG9nKTtcbiAgYWN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb3JlT3B0aW9ucyk7XG5cbiAgY29uc3QgbWFpbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluSW5mby5jbGFzc05hbWUgPSBcIm1haW4taW5mb3JtYXRpb25cIjtcblxuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza1RpdGxlLmNsYXNzTmFtZSA9IFwidGFzay10aXRsZVwiO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0YXNrRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJ0YXNrLWRlc2NyaXB0aW9uXCI7XG4gIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb24gfHwgXCJObyBkZXNjcmlwdGlvblwiO1xuXG4gIG1haW5JbmZvLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gIG1haW5JbmZvLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG5cbiAgY29uc3Qgc2Vjb25kYXJ5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlY29uZGFyeUluZm8uY2xhc3NOYW1lID0gXCJzZWNvbmRhcnktaW5mb3JtYXRpb25cIjtcblxuICBpZiAodGFzay5kYXRlKSB7XG4gICAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZChcbiAgICAgIGFwcGVuZFNlY29uZGFyeUluZm9FbGVtZW50cyh0YXNrLmRhdGUsIGRhdGVTZWxlY3RlZFN2ZywgXCJ0YXNrLWRhdGVcIilcbiAgICApO1xuICB9XG4gIGlmICh0YXNrLnByaW9yaXR5KSB7XG4gICAgc2Vjb25kYXJ5SW5mby5hcHBlbmRDaGlsZChcbiAgICAgIGFwcGVuZFNlY29uZGFyeUluZm9FbGVtZW50cyhcbiAgICAgICAgdGFzay5wcmlvcml0eSxcbiAgICAgICAgcHJpb3JpdHlTZWxlY3RlZFN2ZyxcbiAgICAgICAgXCJ0YXNrLXByaW9yaXR5XCJcbiAgICAgIClcbiAgICApO1xuICB9XG4gIHNlY29uZGFyeUluZm8uYXBwZW5kQ2hpbGQoXG4gICAgYXBwZW5kU2Vjb25kYXJ5SW5mb0VsZW1lbnRzKGxpc3QubmFtZSwgbGlzdC5pY29uLCBcInRhc2stbGlzdFwiKVxuICApO1xuXG4gIGRpYWxvZy5hcHBlbmRDaGlsZChhY3Rpb25zQ29udGFpbmVyKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKG1haW5JbmZvKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKHNlY29uZGFyeUluZm8pO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcblxuICBhZGRDbG9zZURpYWxvZ0V2ZW50KGRpYWxvZyk7XG4gIGFkZENsb3NlRGlhbG9nQnV0dG9uc0V2ZW50KGRpYWxvZywgY2xvc2VEaWFsb2cpO1xuICBvcGVuRGlhbG9nRXZlbnQoZGVsZXRlT3B0aW9uLCBzaG93RGVsZXRlVGFza0RpYWxvZywgdGFzay5pZCk7XG4gIG9wZW5EaWFsb2dFdmVudChlZGl0T3B0aW9uLCBzaG93RWRpdFRhc2tEaWFsb2csIHRhc2spO1xuXG4gIGRpYWxvZy5zaG93TW9kYWwoKTtcblxuICAvLyBJZiBkZXNjcmlwdGlvbiBpcyBvdmVyZmxvd2luZzogQXBwbHkgc2Nyb2xsYmFyc1xuICBpZiAodGFza0Rlc2NyaXB0aW9uLmNsaWVudEhlaWdodCA+IGhlaWdodE92ZXJmbG93KVxuICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsLXRleHRcIik7XG59O1xuXG4vLyBEaWFsb2cgZXZlbnRzXG5jb25zdCBhZGRDcmVhdGVMaXN0RXZlbnQgPSAoZGlhbG9nQ29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnByaW1hcnlcIik7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkaWFsb2dDb250YWluZXIucXVlcnlTZWxlY3RvcihcImlucHV0I2xpc3QtdGl0bGUtaW5wdXRcIik7XG4gIGNvbnN0IHNlbGVjdGVkSWNvbiA9IGRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3NlbGVjdC1pY29uIC5idXR0b24taWNvblwiXG4gICk7XG5cbiAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGlzdHMuY3JlYXRlTGlzdCh0aXRsZUlucHV0LnZhbHVlLCBzZWxlY3RlZEljb24uaW5uZXJIVE1MKTtcbiAgICBzaWRlYmFyLnJlZnJlc2hVc2VyU2lkZWJhckxpc3RzKCk7XG4gICAgbm90aWZpY2F0aW9ucy5kaXNwbGF5Tm90aWZpY2F0aW9uKFwiTGlzdCBjcmVhdGVkIHN1Y2Nlc3NmdWxseS5cIik7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkRWRpdExpc3RFdmVudCA9IChkaWFsb2dDb250YWluZXIpID0+IHtcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnByaW1hcnlcIik7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkaWFsb2dDb250YWluZXIucXVlcnlTZWxlY3RvcihcImlucHV0I2xpc3QtdGl0bGUtaW5wdXRcIik7XG4gIGNvbnN0IHNlbGVjdGVkSWNvbiA9IGRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3NlbGVjdC1pY29uIC5idXR0b24taWNvblwiXG4gICk7XG5cbiAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxpc3RzLmVkaXRMaXN0KGxpc3RzLmdldEN1cnJlbnRMaXN0KCkubmFtZSwge1xuICAgICAgbmFtZTogdGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgIGljb246IHNlbGVjdGVkSWNvbi5pbm5lckhUTUwsXG4gICAgfSk7XG4gICAgc2lkZWJhci5yZWZyZXNoVXNlclNpZGViYXJMaXN0cygpO1xuICAgIHBhZ2UucmVmcmVzaExpc3RUaXRsZSgpO1xuICAgIG5vdGlmaWNhdGlvbnMuZGlzcGxheU5vdGlmaWNhdGlvbihcIkxpc3QgdXBkYXRlZCBzdWNjZXNzZnVsbHkuXCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZENyZWF0ZVRhc2tFdmVudCA9IChkaWFsb2dDb250YWluZXIpID0+IHtcbiAgY29uc3QgY3JlYXRlQnV0dG9uID0gZGlhbG9nQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24ucHJpbWFyeVwiKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGUtaW5wdXRcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkaWFsb2dDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICBcIiN0YXNrLWRlc2NyaXB0aW9uLWlucHV0XCJcbiAgKTtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZGlhbG9nQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS1pbnB1dFwiKTtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1wcmlvcml0eVwiKTtcbiAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gZGlhbG9nQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0LWxpc3RcIik7XG5cbiAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGlzdHMuY3JlYXRlVGFzayhzZWxlY3RlZExpc3QuZGF0YXNldC52YWx1ZSwge1xuICAgICAgdGl0bGU6IHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICAgIGRhdGU6IGRhdGVJbnB1dC5kYXRhc2V0LnZhbHVlLFxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5SW5wdXQuZGF0YXNldC52YWx1ZSxcbiAgICB9KTtcblxuICAgIHBhZ2UucmVmcmVzaFRhc2tFbGVtZW50cygpO1xuICAgIG5vdGlmaWNhdGlvbnMuZGlzcGxheU5vdGlmaWNhdGlvbihcIlRhc2sgY3JlYXRlZCBzdWNjZXNzZnVsbHkuXCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZEVkaXRUYXNrRXZlbnQgPSAoZGlhbG9nQ29udGFpbmVyLCB0YXNrSWQpID0+IHtcbiAgY29uc3QgdGFza0RldGFpbHNEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nI3Rhc2stZGV0YWlsc1wiKTtcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnByaW1hcnlcIik7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkaWFsb2dDb250YWluZXIucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlLWlucHV0XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZGlhbG9nQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjdGFzay1kZXNjcmlwdGlvbi1pbnB1dFwiXG4gICk7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtaW5wdXRcIik7XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkaWFsb2dDb250YWluZXIucXVlcnlTZWxlY3RvcihcIiNzZWxlY3QtcHJpb3JpdHlcIik7XG4gIGNvbnN0IGxpc3RJbnB1dCA9IGRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1saXN0XCIpO1xuXG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsaXN0cy5lZGl0VGFzayhsaXN0SW5wdXQuZGF0YXNldC52YWx1ZSwgdGFza0lkLCB7XG4gICAgICB0aXRsZTogdGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgZGF0ZTogZGF0ZUlucHV0LmRhdGFzZXQudmFsdWUsXG4gICAgICBwcmlvcml0eTogcHJpb3JpdHlJbnB1dC5kYXRhc2V0LnZhbHVlLFxuICAgIH0pO1xuXG4gICAgcGFnZS5yZWZyZXNoVGFza0VsZW1lbnRzKCk7XG4gICAgY2xvc2VEaWFsb2codGFza0RldGFpbHNEaWFsb2cpO1xuICAgIG5vdGlmaWNhdGlvbnMuZGlzcGxheU5vdGlmaWNhdGlvbihcIlRhc2sgdXBkYXRlZCBzdWNjZXNzZnVsbHkuXCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNsb3NlRGlhbG9nID0gKGRpYWxvZykgPT4ge1xuICBkaWFsb2cuY2xhc3NMaXN0LmFkZChcImNsb3NpbmdcIik7XG5cbiAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4ge1xuICAgIGRpYWxvZy5jbG9zZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZENsb3NlRGlhbG9nRXZlbnQgPSAoZGlhbG9nKSA9PiB7XG4gIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgKCkgPT4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaWFsb2cpKTtcbn07XG5cbmNvbnN0IGFkZENsb3NlRGlhbG9nQnV0dG9uc0V2ZW50ID0gKGRpYWxvZywgY2xvc2VCdXR0b25zKSA9PiB7XG4gIC8vIElmIGNsb3NlQnV0dG9ucyBpcyBub3QgYW4gYXJyYXkuIEFzc2lnbiBldmVudCBkaXJlY3RseVxuICBpZiAoIUFycmF5LmlzQXJyYXkoY2xvc2VCdXR0b25zKSkge1xuICAgIGNsb3NlQnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VEaWFsb2coZGlhbG9nKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY2xvc2VCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlRGlhbG9nKGRpYWxvZykpXG4gICk7XG59O1xuXG5jb25zdCBkaXNhYmxlRW1wdHlEaWFsb2dFdmVudCA9ICh0ZXh0SW5wdXRDb250YWluZXIsIG1haW5CdXR0b24pID0+IHtcbiAgY29uc3QgdGV4dElucHV0ID0gdGV4dElucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZXh0J11cIik7XG5cbiAgLy8gRGlzYWJsZSBidXR0b24gd2hlbiBvcGVuaW5nIHRoZSBkaWFsb2dcbiAgLy8gSWYgdGhlIGRpYWxvZyBoYXMgZGVmYXVsdCB2YWx1ZXMgd2hlbiBvcGVuaW5nLCBkb24ndCBkaXNhYmxlIG1haW5CdXR0b25cbiAgbWFpbkJ1dHRvbi5kaXNhYmxlZCA9IHRleHRJbnB1dC52YWx1ZS5sZW5ndGggPT09IDA7XG5cbiAgLy8gRGlzYWJsZSBtYWluIGJ1dHRvbiB3aGVuOlxuICAvLyAxLiBTZWxlY3RlZCB0ZXh0IGlucHV0IGlzIGVtcHR5XG4gIC8vIDIuIEluIHRoZSBjYXNlIG9mIGxpc3RzLCB3aGVuIGEgbGlzdCBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoZSBjdXJyZW50IGlucHV0XG4gIHRleHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgIG1haW5CdXR0b24uZGlzYWJsZWQgPVxuICAgICAgdGV4dElucHV0LnZhbHVlLmxlbmd0aCA8PSAwIHx8XG4gICAgICBsaXN0cy5nZXRMaXN0c05hbWVzKCkuc29tZSgobGlzdE5hbWUpID0+IGxpc3ROYW1lID09PSB0ZXh0SW5wdXQudmFsdWUpO1xuICB9KTtcbn07XG5cbmNvbnN0IG9wZW5EaWFsb2dFdmVudCA9ICh0YXJnZXRFbGVtZW50LCBkaWFsb2dDYWxsYmFjaywgZGlhbG9nUGFyYW1ldGVyKSA9PiB7XG4gIHRhcmdldEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaWFsb2dDYWxsYmFjayhkaWFsb2dQYXJhbWV0ZXIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZERlbGV0ZUxpc3RFdmVudCA9IChkZWxldGVCdXR0b24sIGxpc3ROYW1lKSA9PiB7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBhZ2UudW5sb2FkUGFnZSgpO1xuICAgIGxpc3RzLmRlbGV0ZUxpc3QobGlzdE5hbWUpO1xuICAgIHNpZGViYXIucmVmcmVzaFVzZXJTaWRlYmFyTGlzdHMoKTtcbiAgICBub3RpZmljYXRpb25zLmRpc3BsYXlOb3RpZmljYXRpb24oXCJMaXN0IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGREZWxldGVUYXNrRXZlbnQgPSAoZGVsZXRlQnV0dG9uLCB0YXNrSWQpID0+IHtcbiAgY29uc3QgZGlhbG9nT3JpZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZyN0YXNrLWRldGFpbHNcIik7XG5cbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGlzdHMuZGVsZXRlVGFzayhsaXN0cy5nZXRDdXJyZW50TGlzdCgpLm5hbWUsIHRhc2tJZCk7XG4gICAgY2xvc2VEaWFsb2coZGlhbG9nT3JpZ2luKTtcbiAgICBwYWdlLnJlZnJlc2hUYXNrRWxlbWVudHMoKTtcbiAgICBub3RpZmljYXRpb25zLmRpc3BsYXlOb3RpZmljYXRpb24oXCJUYXNrIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBzaG93TmV3TGlzdERpYWxvZyxcbiAgc2hvd0VkaXRMaXN0RGlhbG9nLFxuICBzaG93RGVsZXRlTGlzdERpYWxvZyxcbiAgc2hvd05ld1Rhc2tEaWFsb2csXG4gIHNob3dFZGl0VGFza0RpYWxvZyxcbiAgc2hvd0RlbGV0ZVRhc2tEaWFsb2csXG4gIHNob3dUYXNrRGV0YWlsc0RpYWxvZyxcbiAgb3BlbkRpYWxvZ0V2ZW50LFxufTtcbiIsIi8vIEljb25zXG5pbXBvcnQgZGVmYXVsdFN2ZyBmcm9tIFwiLi4vaW1nL2xpc3RzL2RlZmF1bHQuc3ZnXCI7XG5pbXBvcnQgZGF0ZVVuc2VsZWN0ZWRTdmcgZnJvbSBcIi4uL2ltZy90YXNrcy9kYXRlLW5vZmlsbC5zdmdcIjtcbmltcG9ydCBkYXRlU2VsZWN0ZWRTdmcgZnJvbSBcIi4uL2ltZy90YXNrcy9kYXRlLWZpbGwuc3ZnXCI7XG5cbi8vIEN1c3RvbSBpbnB1dHMgY29udHJvbGxlcnNcbmNvbnN0IGFwcGVuZERpYWxvZ0J1dHRvbnMgPSAocHJpbWFyeUxhYmVsLCBzZWNvbmRhcnlMYWJlbCA9IFwiQ2FuY2VsXCIpID0+IHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbnMuY2xhc3NOYW1lID0gXCJkaWFsb2ctYnV0dG9uc1wiO1xuXG4gIGNvbnN0IHByaW1hcnlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwcmltYXJ5QnV0dG9uLmNsYXNzTmFtZSA9IFwicHJpbWFyeVwiO1xuICBwcmltYXJ5QnV0dG9uLnRleHRDb250ZW50ID0gcHJpbWFyeUxhYmVsO1xuXG4gIGNvbnN0IHNlY29uZGFyeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNlY29uZGFyeUJ1dHRvbi5jbGFzc05hbWUgPSBcInNlY29uZGFyeVwiO1xuICBzZWNvbmRhcnlCdXR0b24udGV4dENvbnRlbnQgPSBzZWNvbmRhcnlMYWJlbDtcblxuICBidXR0b25zLmFwcGVuZENoaWxkKHByaW1hcnlCdXR0b24pO1xuICBidXR0b25zLmFwcGVuZENoaWxkKHNlY29uZGFyeUJ1dHRvbik7XG5cbiAgcmV0dXJuIGJ1dHRvbnM7XG59O1xuXG5jb25zdCBhcHBlbmRUZXh0SW5wdXQgPSAoXG4gIGlucHV0SWQsXG4gIHBsYWNlaG9sZGVyLFxuICBtYXhMZW5ndGggPSAxMCxcbiAgYXV0b0ZvY3VzID0gZmFsc2UsXG4gIGluaXRpYWxWYWx1ZSA9IG51bGxcbikgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJ0ZXh0LWlucHV0LWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIGlucHV0LmlkID0gaW5wdXRJZDtcbiAgaW5wdXQubmFtZSA9IGlucHV0SWQ7XG4gIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gIGlucHV0Lm1heExlbmd0aCA9IG1heExlbmd0aC50b1N0cmluZygpO1xuICBpbnB1dC5hdXRvZm9jdXMgPSBhdXRvRm9jdXM7XG4gIGlucHV0LnZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIGNvbnN0IHRleHRDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRleHRDb3VudGVyLmNsYXNzTmFtZSA9IFwidGV4dC1jb3VudGVyXCI7XG5cbiAgY29uc3QgY3VycmVudFRleHRDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjdXJyZW50VGV4dENvdW50LmNsYXNzTmFtZSA9IFwiY3VycmVudC1jb3VudFwiO1xuICBjdXJyZW50VGV4dENvdW50LnRleHRDb250ZW50ID0gaW5wdXQudmFsdWUubGVuZ3RoO1xuXG4gIGNvbnN0IGNvdW50ZXJMaW1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb3VudGVyTGltaXQuY2xhc3NOYW1lID0gXCJjb3VudGVyLWxpbWl0XCI7XG4gIGNvdW50ZXJMaW1pdC50ZXh0Q29udGVudCA9IGAgLyAke21heExlbmd0aH1gO1xuXG4gIHRleHRDb3VudGVyLmFwcGVuZENoaWxkKGN1cnJlbnRUZXh0Q291bnQpO1xuICB0ZXh0Q291bnRlci5hcHBlbmRDaGlsZChjb3VudGVyTGltaXQpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0Q291bnRlcik7XG5cbiAgYWRkQ291bnRMZW5ndGhFdmVudChpbnB1dCwgY3VycmVudFRleHRDb3VudCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGFwcGVuZFRleHRBcmVhSW5wdXQgPSAoXG4gIGlucHV0SWQsXG4gIHBsYWNlaG9sZGVyLFxuICBtYXhMZW5ndGggPSAxMCxcbiAgcm93cyA9IDEsXG4gIGF1dG9Gb2N1cyA9IGZhbHNlLFxuICBpbml0aWFsVmFsdWUgPSBudWxsXG4pID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGV4dGFyZWEtaW5wdXQtY29udGFpbmVyXCI7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGlucHV0LmlkID0gaW5wdXRJZDtcbiAgaW5wdXQubmFtZSA9IGlucHV0SWQ7XG4gIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gIGlucHV0Lm1heExlbmd0aCA9IG1heExlbmd0aC50b1N0cmluZygpO1xuICBpbnB1dC5yb3dzID0gcm93cy50b1N0cmluZygpO1xuICBpbnB1dC5hdXRvZm9jdXMgPSBhdXRvRm9jdXM7XG4gIGlucHV0LnZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIGNvbnN0IHRleHRDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRleHRDb3VudGVyLmNsYXNzTmFtZSA9IFwidGV4dC1jb3VudGVyXCI7XG5cbiAgY29uc3QgY3VycmVudFRleHRDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjdXJyZW50VGV4dENvdW50LmNsYXNzTmFtZSA9IFwiY3VycmVudC1jb3VudFwiO1xuICBjdXJyZW50VGV4dENvdW50LnRleHRDb250ZW50ID0gaW5wdXQudmFsdWUubGVuZ3RoO1xuXG4gIGNvbnN0IGNvdW50ZXJMaW1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb3VudGVyTGltaXQuY2xhc3NOYW1lID0gXCJjb3VudGVyLWxpbWl0XCI7XG4gIGNvdW50ZXJMaW1pdC50ZXh0Q29udGVudCA9IGAgLyAke21heExlbmd0aH1gO1xuXG4gIHRleHRDb3VudGVyLmFwcGVuZENoaWxkKGN1cnJlbnRUZXh0Q291bnQpO1xuICB0ZXh0Q291bnRlci5hcHBlbmRDaGlsZChjb3VudGVyTGltaXQpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0Q291bnRlcik7XG5cbiAgYWRkQ291bnRMZW5ndGhFdmVudChpbnB1dCwgY3VycmVudFRleHRDb3VudCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGFwcGVuZFNlbGVjdElucHV0ID0gKFxuICBpbnB1dElkLFxuICBpY29uLFxuICBvcHRpb25zQXJyYXkgPSBbeyBpY29uOiBkZWZhdWx0U3ZnLCBuYW1lOiBcIk5vIG9wdGlvbnNcIiB9XSxcbiAgaW5pdGlhbE9wdGlvbkluZGV4ID0gMFxuKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNlbGVjdC1pbnB1dFwiO1xuICBpZiAoaW5wdXRJZCkgY29udGFpbmVyLmlkID0gaW5wdXRJZDtcblxuICBjb25zdCBpbnB1dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGlucHV0QnV0dG9uLmNsYXNzTmFtZSA9IFwic2VsZWN0LWJ1dHRvblwiO1xuXG4gIGNvbnN0IGJ1dHRvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGJ1dHRvbkxhYmVsLmNsYXNzTmFtZSA9IFwiYnV0dG9uLWxhYmVsXCI7XG5cbiAgY29uc3QgYnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBidXR0b25JY29uLmNsYXNzTmFtZSA9IFwiYnV0dG9uLWljb25cIjtcbiAgYnV0dG9uSWNvbi5pbm5lckhUTUwgPSBpY29uO1xuXG4gIC8vIE9wdGlvbnNcbiAgY29uc3Qgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9wdGlvbnNDb250YWluZXIuY2xhc3NOYW1lID0gXCJvcHRpb25zXCI7XG5cbiAgb3B0aW9uc0FycmF5LmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBvcHRpb25FbGVtZW50LmNsYXNzTmFtZSA9IFwib3B0aW9uXCI7XG4gICAgb3B0aW9uRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gb3B0aW9uLm5hbWU7XG5cbiAgICBjb25zdCBvcHRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgb3B0aW9uSWNvbi5jbGFzc05hbWUgPSBcIm9wdGlvbi1pY29uXCI7XG4gICAgb3B0aW9uSWNvbi5pbm5lckhUTUwgPSBvcHRpb24uaWNvbjtcblxuICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgb3B0aW9uTGFiZWwuY2xhc3NOYW1lID0gXCJvcHRpb24tbGFiZWxcIjtcbiAgICBvcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IG9wdGlvbi5uYW1lO1xuXG4gICAgb3B0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25JY29uKTtcbiAgICBvcHRpb25FbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkxhYmVsKTtcblxuICAgIG9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gIH0pO1xuXG4gIGlucHV0QnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkljb24pO1xuICBpbnB1dEJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25MYWJlbCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0QnV0dG9uKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbnNDb250YWluZXIpO1xuXG4gIC8vIEF1dG8tc2VsZWN0IGZpcnN0IG9wdGlvblxuICBpZiAoaW5pdGlhbE9wdGlvbkluZGV4IDwgMCB8fCBpbml0aWFsT3B0aW9uSW5kZXggPj0gb3B0aW9uc0FycmF5Lmxlbmd0aClcbiAgICBpbml0aWFsT3B0aW9uSW5kZXggPSAwO1xuXG4gIHNlbGVjdE9wdGlvblZhbHVlKFxuICAgIGNvbnRhaW5lcixcbiAgICBvcHRpb25zQ29udGFpbmVyLmNoaWxkTm9kZXNbaW5pdGlhbE9wdGlvbkluZGV4XS5kYXRhc2V0LnZhbHVlXG4gICk7XG5cbiAgLy8gU2VsZWN0IGxpc3QgRXZlbnRzXG4gIGFkZEV4cGFuZE9wdGlvbnNFdmVudChjb250YWluZXIsIGlucHV0QnV0dG9uKTtcbiAgYWRkU2VsZWN0T3B0aW9uVmFsdWVFdmVudChjb250YWluZXIpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5jb25zdCBhcHBlbmRTZWxlY3RJbnB1dEdyaWQgPSAoXG4gIGlucHV0SWQsXG4gIG9wdGlvbnNBcnJheSA9IFtkZWZhdWx0U3ZnXSxcbiAgaW5pdGlhbE9wdGlvbkluZGV4ID0gMFxuKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNlbGVjdC1pbnB1dC1ncmlkXCI7XG4gIGlmIChpbnB1dElkKSBjb250YWluZXIuaWQgPSBpbnB1dElkO1xuXG4gIGNvbnN0IGlucHV0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaW5wdXRCdXR0b24uY2xhc3NOYW1lID0gXCJzZWxlY3QtYnV0dG9uXCI7XG5cbiAgY29uc3QgYnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBidXR0b25JY29uLmNsYXNzTmFtZSA9IFwiYnV0dG9uLWljb25cIjtcblxuICAvLyBPcHRpb25zXG4gIGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvcHRpb25zQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwib3B0aW9ucy1ncmlkXCI7XG5cbiAgb3B0aW9uc0FycmF5LmZvckVhY2goKG9wdGlvbkljb24pID0+IHtcbiAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgb3B0aW9uRWxlbWVudC5jbGFzc05hbWUgPSBcIm9wdGlvblwiO1xuICAgIG9wdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gb3B0aW9uSWNvbjtcblxuICAgIG9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gIH0pO1xuXG4gIGlucHV0QnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkljb24pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEJ1dHRvbik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25zQ29udGFpbmVyKTtcblxuICAvLyBBdXRvLXNlbGVjdCBmaXJzdCBvcHRpb25cbiAgaWYgKGluaXRpYWxPcHRpb25JbmRleCA8IDAgfHwgaW5pdGlhbE9wdGlvbkluZGV4ID49IG9wdGlvbnNBcnJheS5sZW5ndGgpXG4gICAgaW5pdGlhbE9wdGlvbkluZGV4ID0gMDtcblxuICBzZWxlY3RPcHRpb25WYWx1ZUdyaWQoY29udGFpbmVyLCBpbml0aWFsT3B0aW9uSW5kZXgpO1xuXG4gIC8vIFNlbGVjdCBsaXN0IGdyaWQgZXZlbnRzXG4gIGFkZEV4cGFuZE9wdGlvbnNFdmVudChjb250YWluZXIsIGlucHV0QnV0dG9uKTtcbiAgYWRkU2VsZWN0T3B0aW9uVmFsdWVHcmlkRXZlbnQoY29udGFpbmVyKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuY29uc3QgYXBwZW5kRGF0ZUlucHV0ID0gKGlucHV0SWQsIGljb24pID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmlkID0gaW5wdXRJZDtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICBpbnB1dC5jbGFzc05hbWUgPSBcImRhdGUtZWxlbWVudFwiO1xuXG4gIGNvbnRhaW5lci5kYXRhc2V0LnZhbHVlID0gaW5wdXQudmFsdWU7XG5cbiAgY29uc3QgaW5wdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBpbnB1dEJ1dHRvbi5jbGFzc05hbWUgPSBcImRhdGUtYnV0dG9uXCI7XG5cbiAgY29uc3QgYnV0dG9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYnV0dG9uTGFiZWwuY2xhc3NOYW1lID0gXCJidXR0b24tbGFiZWxcIjtcbiAgYnV0dG9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGVcIjtcblxuICBjb25zdCBidXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGJ1dHRvbkljb24uY2xhc3NOYW1lID0gXCJidXR0b24taWNvblwiO1xuICBidXR0b25JY29uLmlubmVySFRNTCA9IGljb247XG5cbiAgaW5wdXRCdXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uSWNvbik7XG4gIGlucHV0QnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkxhYmVsKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRCdXR0b24pO1xuXG4gIGFkZFNob3dEYXRlUGlja2VyRXZlbnQoaW5wdXRCdXR0b24sIGlucHV0KTtcbiAgY2hhbmdlRGF0ZVZhbHVlRXZlbnQoY29udGFpbmVyKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuY29uc3QgYXBwZW5kT3B0aW9uc0J1dHRvbiA9IChcbiAgaWNvbixcbiAgY29udHJvbGxlckNsYXNzLFxuICBvcHRpb25zQXJyYXkgPSBbeyBsYWJlbDogXCJPcHRpb25cIiwgaWNvbjogZGVmYXVsdFN2Zywgb3B0aW9uQ2xhc3M6IFwib3B0aW9uXCIgfV1cbikgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9wdGlvbnMtY29udHJvbGxlclwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY29udHJvbGxlckNsYXNzKTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NOYW1lID0gXCJvcHRpb25zLWNvbnRyb2xsZXItYnV0dG9uXCI7XG5cbiAgY29uc3QgYnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBidXR0b25JY29uLmNsYXNzTmFtZSA9IFwiYnV0dG9uLWljb25cIjtcbiAgYnV0dG9uSWNvbi5pbm5lckhUTUwgPSBpY29uO1xuXG4gIGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvcHRpb25zQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwib3B0aW9uc1wiO1xuXG4gIG9wdGlvbnNBcnJheS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgb3B0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChvcHRpb24ub3B0aW9uQ2xhc3MpO1xuXG4gICAgY29uc3Qgb3B0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG9wdGlvbkljb24uY2xhc3NOYW1lID0gXCJvcHRpb24taWNvblwiO1xuICAgIG9wdGlvbkljb24uaW5uZXJIVE1MID0gb3B0aW9uLmljb247XG5cbiAgICBjb25zdCBvcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG9wdGlvbkxhYmVsLmNsYXNzTmFtZSA9IFwib3B0aW9uLWxhYmVsXCI7XG4gICAgb3B0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBvcHRpb24ubGFiZWw7XG5cbiAgICBvcHRpb25FbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkljb24pO1xuICAgIG9wdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uTGFiZWwpO1xuXG4gICAgb3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcbiAgfSk7XG5cbiAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkljb24pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uc0NvbnRhaW5lcik7XG5cbiAgYWRkRXhwYW5kT3B0aW9uc0V2ZW50KGNvbnRhaW5lciwgYnV0dG9uKTtcbiAgYWRkQ2xvc2VPcHRpb25zRXZlbnQoY29udGFpbmVyLCBvcHRpb25zQ29udGFpbmVyLmNoaWxkTm9kZXMpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG4vLyBDdXN0b20gaW5wdXRzIGV2ZW50c1xuY29uc3QgYWRkQ291bnRMZW5ndGhFdmVudCA9IChpbnB1dCwgY291bnRlcikgPT4ge1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiaW5wdXRcIixcbiAgICAoKSA9PiAoY291bnRlci50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlLmxlbmd0aClcbiAgKTtcbn07XG5cbmNvbnN0IGFkZEV4cGFuZE9wdGlvbnNFdmVudCA9IChjb250YWluZXIsIGV4cGFuZEJ1dHRvbikgPT4ge1xuICAvLyBjb25zdCBidXR0b24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5zZWxlY3QtYnV0dG9uXCIpO1xuXG4gIGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZFwiKVxuICApO1xufTtcblxuY29uc3QgYWRkQ2xvc2VPcHRpb25zRXZlbnQgPSAoY29udGFpbmVyLCBvcHRpb25CdXR0b25zKSA9PiB7XG4gIG9wdGlvbkJ1dHRvbnMuZm9yRWFjaCgob3B0aW9uKSA9PlxuICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRcIikpXG4gICk7XG59O1xuXG5jb25zdCBzZWxlY3RPcHRpb25WYWx1ZSA9IChzZWxlY3RJbnB1dCwgb3B0aW9uVmFsdWUpID0+IHtcbiAgY29uc3QgYnV0dG9uTGFiZWwgPSBzZWxlY3RJbnB1dC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1sYWJlbFwiKTtcbiAgY29uc3QgYnV0dG9uSWNvbiA9IHNlbGVjdElucHV0LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWljb25cIik7XG4gIGNvbnN0IG9wdGlvbiA9IHNlbGVjdElucHV0LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5vcHRpb25bZGF0YS12YWx1ZT1cIiR7b3B0aW9uVmFsdWV9XCJdYFxuICApO1xuICBjb25zdCBvcHRpb25JY29uID0gb3B0aW9uLnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uLWljb25cIik7XG5cbiAgc2VsZWN0SW5wdXQuZGF0YXNldC52YWx1ZSA9IG9wdGlvbi5kYXRhc2V0LnZhbHVlO1xuICBidXR0b25MYWJlbC50ZXh0Q29udGVudCA9IG9wdGlvbi5kYXRhc2V0LnZhbHVlO1xuICBidXR0b25JY29uLmlubmVySFRNTCA9IG9wdGlvbkljb24uaW5uZXJIVE1MOyAvLyBGaXggdGhpc1xufTtcblxuY29uc3QgYWRkU2VsZWN0T3B0aW9uVmFsdWVFdmVudCA9IChzZWxlY3RJbnB1dCkgPT4ge1xuICBjb25zdCBvcHRpb25zID0gc2VsZWN0SW5wdXQucXVlcnlTZWxlY3RvckFsbChcIi5vcHRpb25cIik7XG5cbiAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNlbGVjdE9wdGlvblZhbHVlKHNlbGVjdElucHV0LCBvcHRpb24uZGF0YXNldC52YWx1ZSk7XG4gICAgICBzZWxlY3RJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kXCIpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHNlbGVjdE9wdGlvblZhbHVlR3JpZCA9IChzZWxlY3RJbnB1dEdyaWQsIG9wdGlvbkluZGV4KSA9PiB7XG4gIGNvbnN0IGJ1dHRvbkljb24gPSBzZWxlY3RJbnB1dEdyaWQucXVlcnlTZWxlY3RvcihcIi5idXR0b24taWNvblwiKTtcbiAgY29uc3Qgb3B0aW9uID0gc2VsZWN0SW5wdXRHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3B0aW9uXCIpW29wdGlvbkluZGV4XTtcblxuICBidXR0b25JY29uLmlubmVySFRNTCA9IG9wdGlvbi5pbm5lckhUTUw7XG59O1xuXG5jb25zdCBhZGRTZWxlY3RPcHRpb25WYWx1ZUdyaWRFdmVudCA9IChzZWxlY3RJbnB1dEdyaWQpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHNlbGVjdElucHV0R3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wdGlvblwiKTtcblxuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNlbGVjdE9wdGlvblZhbHVlR3JpZChzZWxlY3RJbnB1dEdyaWQsIGluZGV4KTtcbiAgICAgIHNlbGVjdElucHV0R3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kXCIpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGNoYW5nZURhdGVWYWx1ZUV2ZW50ID0gKGlucHV0Q29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGlucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dC5kYXRlLWVsZW1lbnRcIik7XG5cbiAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT5cbiAgICBzZWxlY3REYXRlVmFsdWUoaW5wdXRDb250YWluZXIsIGRhdGVJbnB1dC52YWx1ZSlcbiAgKTtcbn07XG5cbmNvbnN0IHNlbGVjdERhdGVWYWx1ZSA9IChpbnB1dENvbnRhaW5lciwgbmV3VmFsdWUpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBpbnB1dENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuZGF0ZS1lbGVtZW50XCIpO1xuICBjb25zdCBidXR0b25MYWJlbCA9IGlucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWxhYmVsXCIpO1xuICBjb25zdCBidXR0b25JY29uID0gaW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idXR0b24taWNvblwiKTtcblxuICBpbnB1dENvbnRhaW5lci5kYXRhc2V0LnZhbHVlID0gbmV3VmFsdWU7XG4gIGlucHV0LnZhbHVlID0gbmV3VmFsdWU7XG4gIGJ1dHRvbkxhYmVsLnRleHRDb250ZW50ID0gbmV3VmFsdWUgfHwgXCJEYXRlXCI7XG4gIGJ1dHRvbkljb24uaW5uZXJIVE1MID0gbmV3VmFsdWUgPyBkYXRlU2VsZWN0ZWRTdmcgOiBkYXRlVW5zZWxlY3RlZFN2Zztcbn07XG5cbmNvbnN0IGFkZFNob3dEYXRlUGlja2VyRXZlbnQgPSAoaW5wdXRCdXR0b24sIGRhdGVJbnB1dCkgPT4ge1xuICBpbnB1dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGF0ZUlucHV0LnNob3dQaWNrZXIoKSk7XG59O1xuXG5leHBvcnQge1xuICBhcHBlbmREaWFsb2dCdXR0b25zLFxuICBhcHBlbmRUZXh0SW5wdXQsXG4gIGFwcGVuZFRleHRBcmVhSW5wdXQsXG4gIGFwcGVuZFNlbGVjdElucHV0LFxuICBhcHBlbmRTZWxlY3RJbnB1dEdyaWQsXG4gIGFwcGVuZERhdGVJbnB1dCxcbiAgYXBwZW5kT3B0aW9uc0J1dHRvbixcbiAgc2VsZWN0T3B0aW9uVmFsdWUsXG4gIHNlbGVjdE9wdGlvblZhbHVlR3JpZCxcbiAgc2VsZWN0RGF0ZVZhbHVlLFxufTtcbiIsImltcG9ydCBzdWNjZXNzTm90aWZpY2F0aW9uU3ZnIGZyb20gXCIuLi9pbWcvb3RoZXJzL3N1Y2Nlc3Mtbm90aWZpY2F0aW9uLnN2Z1wiO1xuaW1wb3J0IGNsb3NlU3ZnIGZyb20gXCIuLi9pbWcvb3RoZXJzL2Nsb3NlLnN2Z1wiO1xuXG5jb25zdCBjbG9zZVRpbWVvdXQgPSA1MDAwO1xubGV0IGNsb3NlVGltZW91dElkO1xuXG5jb25zdCByZW5kZXJOb3RpZmljYXRpb25zID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuaWQgPSBcIm5vdGlmaWNhdGlvbnMtY29udGFpbmVyXCI7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufTtcblxuY29uc3QgZGlzcGxheU5vdGlmaWNhdGlvbiA9IChsYWJlbCkgPT4ge1xuICBjb25zdCBub3RpZmljYXRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNub3RpZmljYXRpb25zLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY29uc3QgbmV3Tm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3Tm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9IFwibm90aWZpY2F0aW9uXCI7XG5cbiAgY29uc3Qgbm90aWZpY2F0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBub3RpZmljYXRpb25JY29uLmNsYXNzTmFtZSA9IFwibm90aWZpY2F0aW9uLWljb25cIjtcbiAgbm90aWZpY2F0aW9uSWNvbi5pbm5lckhUTUwgPSBzdWNjZXNzTm90aWZpY2F0aW9uU3ZnO1xuXG4gIGNvbnN0IG5vdGlmaWNhdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG5vdGlmaWNhdGlvbkxhYmVsLmNsYXNzTmFtZSA9IFwibm90aWZpY2F0aW9uLWxhYmVsXCI7XG4gIG5vdGlmaWNhdGlvbkxhYmVsLnRleHRDb250ZW50ID0gbGFiZWw7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSBcImNsb3NlLW5vdGlmaWNhdGlvblwiO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjbG9zZUJ1dHRvbkljb24uY2xhc3NOYW1lID0gXCJidXR0b24taWNvblwiO1xuICBjbG9zZUJ1dHRvbkljb24uaW5uZXJIVE1MID0gY2xvc2VTdmc7XG5cbiAgY2xvc2VCdXR0b24uYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b25JY29uKTtcblxuICBuZXdOb3RpZmljYXRpb24uYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uSWNvbik7XG4gIG5ld05vdGlmaWNhdGlvbi5hcHBlbmRDaGlsZChub3RpZmljYXRpb25MYWJlbCk7XG4gIG5ld05vdGlmaWNhdGlvbi5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgbm90aWZpY2F0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdOb3RpZmljYXRpb24pO1xuXG4gIGNsb3NlVGltZW91dElkID0gc2V0VGltZW91dChcbiAgICBjbG9zZU5vdGlmaWNhdGlvbixcbiAgICBjbG9zZVRpbWVvdXQsXG4gICAgbm90aWZpY2F0aW9uc0NvbnRhaW5lcixcbiAgICBuZXdOb3RpZmljYXRpb25cbiAgKTtcblxuICBjbG9zZU5vdGlmaWNhdGlvbkV2ZW50KGNsb3NlQnV0dG9uLCBub3RpZmljYXRpb25zQ29udGFpbmVyLCBuZXdOb3RpZmljYXRpb24pO1xufTtcblxuY29uc3QgY2xvc2VOb3RpZmljYXRpb24gPSAoY29udGFpbmVyLCBub3RpZmljYXRpb24pID0+IHtcbiAgbm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJjbG9zaW5nXCIpO1xuXG4gIG5vdGlmaWNhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG5vdGlmaWNhdGlvbilcbiAgKTtcbn07XG5cbmNvbnN0IGNsb3NlTm90aWZpY2F0aW9uRXZlbnQgPSAoY2xvc2VCdXR0b24sIGNvbnRhaW5lciwgbm90aWZpY2F0aW9uKSA9PiB7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KGNsb3NlVGltZW91dElkKTtcbiAgICBjbG9zZU5vdGlmaWNhdGlvbihjb250YWluZXIsIG5vdGlmaWNhdGlvbik7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyTm90aWZpY2F0aW9ucywgZGlzcGxheU5vdGlmaWNhdGlvbiB9O1xuIiwiLy8gSWNvbnNcbmltcG9ydCBkYXRlU3ZnIGZyb20gXCIuLi9pbWcvdGFza3MvZGF0ZS1maWxsLnN2Z1wiO1xuaW1wb3J0IHByaW9yaXR5U3ZnIGZyb20gXCIuLi9pbWcvdGFza3MvcHJpb3JpdHktZmlsbC5zdmdcIjtcbmltcG9ydCB0b0NvbXBsZXRlQnV0dG9uU3ZnIGZyb20gXCIuLi9pbWcvb3RoZXJzL3RvLWNvbXBsZXRlLWJ1dHRvbi5zdmdcIjtcbmltcG9ydCBjb21wbGV0ZWRUYXNrU3ZnIGZyb20gXCIuLi9pbWcvb3RoZXJzL2NvbXBsZXRlZC10YXNrLnN2Z1wiO1xuaW1wb3J0IGV4cGFuZFRhc2tzU3ZnIGZyb20gXCIuLi9pbWcvb3RoZXJzL2V4cGFuZC10YXNrcy5zdmdcIjtcbmltcG9ydCBob3Jpem9udGFsT3B0aW9uc1N2ZyBmcm9tIFwiLi4vaW1nL290aGVycy9ob3Jpem9udGFsLW9wdGlvbnMuc3ZnXCI7XG5pbXBvcnQgZWRpdFN2ZyBmcm9tIFwiLi4vaW1nL290aGVycy9lZGl0LnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZVN2ZyBmcm9tIFwiLi4vaW1nL290aGVycy9kZWxldGUuc3ZnXCI7XG5cbmltcG9ydCAqIGFzIGxpc3RzIGZyb20gXCIuLi9saXN0cy1hbmQtdGFza3MuanNcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcIi4vZGlhbG9ncy5qc1wiO1xuaW1wb3J0ICogYXMgaW5wdXRzIGZyb20gXCIuL2lucHV0cy5qc1wiO1xuXG5sZXQgbGlzdFBhZ2U7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RDb250YWluZXIoKSB7XG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwYWdlLmlkID0gXCJwYWdlXCI7XG4gIC8vIEhpZGUgcGFnZSB3aGVuIGZpcnN0IGxvYWRcbiAgcGFnZS5jbGFzc05hbWUgPSBcImhpZGVcIjtcblxuICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmFja2dyb3VuZC5pZCA9IFwibGlzdC1iYWNrZ3JvdW5kXCI7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwibGlzdC1jb250YWluZXJcIjtcblxuICBjb25zdCB0aXRsZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZVNlY3Rpb24uY2xhc3NOYW1lID0gXCJ0aXRsZS1zZWN0aW9uXCI7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLmlkID0gXCJsaXN0LXRpdGxlXCI7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJMaXN0IHRpdGxlXCI7XG5cbiAgY29uc3QgdGFza3NDb250YWllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tzQ29udGFpZXIuaWQgPSBcInRhc2tzLWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdUYXNrQnV0dG9uLmlkID0gXCJuZXctdGFzay1idXR0b25cIjtcbiAgbmV3VGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIG5ldyB0YXNrXCI7XG5cbiAgY29uc3QgY29tcGxldGVkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbXBsZXRlZFNlY3Rpb24uY2xhc3NOYW1lID0gXCJjb21wbGV0ZWQtdGFza3Mtc2VjdGlvblwiO1xuXG4gIGNvbnN0IGNvbXBsZXRlZFRhc2tzVGl0bGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29tcGxldGVkVGFza3NUaXRsZVNlY3Rpb24uY2xhc3NOYW1lID0gXCJjb21wbGV0ZWQtdGFza3MtdGl0bGUtc2VjdGlvblwiO1xuXG4gIGNvbnN0IGNvbXBsZXRlZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb21wbGV0ZWRUaXRsZS5pZCA9IFwiY29tcGxldGVkLXRhc2tzLXRpdGxlXCI7XG4gIGNvbXBsZXRlZFRpdGxlLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWQgdGFza3MgXCI7XG5cbiAgY29uc3QgY29tcGxldGVkVGFza3NDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbXBsZXRlZFRhc2tzQ291bnRlci5jbGFzc05hbWUgPSBcImNvbXBsZXRlZC10YXNrcy1jb3VudGVyXCI7XG4gIGNvbXBsZXRlZFRhc2tzQ291bnRlci50ZXh0Q29udGVudCA9IFwiKDApXCI7XG5cbiAgY29uc3QgZXhwYW5kQ29tcGxldGVkVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBleHBhbmRDb21wbGV0ZWRUYXNrcy5jbGFzc05hbWUgPSBcImV4cGFuZC10YXNrc1wiO1xuICBleHBhbmRDb21wbGV0ZWRUYXNrcy5pbm5lckhUTUwgPSBleHBhbmRUYXNrc1N2ZztcblxuICBjb21wbGV0ZWRUaXRsZS5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc0NvdW50ZXIpO1xuICBjb21wbGV0ZWRUYXNrc1RpdGxlU2VjdGlvbi5hcHBlbmRDaGlsZChjb21wbGV0ZWRUaXRsZSk7XG4gIGNvbXBsZXRlZFRhc2tzVGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKGV4cGFuZENvbXBsZXRlZFRhc2tzKTtcblxuICBjb25zdCBjb21wbGV0ZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb21wbGV0ZWRDb250YWluZXIuaWQgPSBcImNvbXBsZXRlZC10YXNrcy1jb250YWluZXJcIjtcblxuICBjb21wbGV0ZWRTZWN0aW9uLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzVGl0bGVTZWN0aW9uKTtcbiAgY29tcGxldGVkU2VjdGlvbi5hcHBlbmRDaGlsZChjb21wbGV0ZWRDb250YWluZXIpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZVNlY3Rpb24pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza3NDb250YWllcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9uKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlZFNlY3Rpb24pO1xuXG4gIHBhZ2UuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG4gIHBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICByZXR1cm4gcGFnZTtcbn1cblxuZnVuY3Rpb24gZW1wdHlQYWdlKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJlbXB0eS1wYWdlXCI7XG5cbiAgY29uc3QgZW1wdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBlbXB0eVRpdGxlLmNsYXNzTmFtZSA9IFwiZW1wdHktdGl0bGVcIjtcbiAgZW1wdHlUaXRsZS50ZXh0Q29udGVudCA9IFwiVG8tRG8gYXBwXCI7XG5cbiAgY29uc3QgZW1wdHlTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBlbXB0eVN1YnRpdGxlLmNsYXNzTmFtZSA9IFwiZW1wdHktc3VidGl0bGVcIjtcbiAgZW1wdHlTdWJ0aXRsZS50ZXh0Q29udGVudCA9XG4gICAgXCJDcmVhdGUgYSBuZXcgbGlzdCBieSBjbGlja2luZyB0aGUgKyBidXR0b24gb3Igc2VsZWN0IGFuIGV4aXN0aW5nIG9uZSB0byBzdGFydCBhZGRpbmcgeW91ciB0YXNrcy5cIjtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlUaXRsZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eVN1YnRpdGxlKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrRWxlbWVudCh0YXNrLCBpc0NvbXBsZXRlZCkge1xuICBjb25zdCBuZXdUYXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld1Rhc2tFbGVtZW50LmNsYXNzTmFtZSA9IFwidGFza1wiO1xuXG4gIG5ld1Rhc2tFbGVtZW50LmRhdGFzZXQudGFza2lkID0gdGFzay5pZDtcblxuICBjb25zdCBjb21wbGV0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb21wbGV0ZVRhc2tCdXR0b24uY2xhc3NOYW1lID0gXCJjb21wbGV0ZS10YXNrLWJ1dHRvblwiO1xuICBjb21wbGV0ZVRhc2tCdXR0b24uaW5uZXJIVE1MID0gaXNDb21wbGV0ZWRcbiAgICA/IGNvbXBsZXRlZFRhc2tTdmdcbiAgICA6IHRvQ29tcGxldGVCdXR0b25Tdmc7XG5cbiAgY29uc3QgbWFpbkluZm9ybWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkluZm9ybWF0aW9uLmNsYXNzTmFtZSA9IFwibWFpbi1pbmZvcm1hdGlvblwiO1xuXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tUaXRsZS5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgbWFpbkluZm9ybWF0aW9uLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cbiAgaWYgKHRhc2suZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBtYWluSW5mb3JtYXRpb24uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgfVxuICBjb25zdCBzdWJJbmZvcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1YkluZm9ybWF0aW9uLmNsYXNzTmFtZSA9IFwic3ViLWluZm9ybWF0aW9uXCI7XG5cbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza1ByaW9yaXR5LmNsYXNzTmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICBpZiAodGFzay5wcmlvcml0eSkge1xuICAgIGNvbnN0IHByaW9yaXR5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJpb3JpdHlJY29uLmNsYXNzTmFtZSA9IFwicHJpb3JpdHktaWNvblwiO1xuICAgIHByaW9yaXR5SWNvbi5pbm5lckhUTUwgPSBwcmlvcml0eVN2ZztcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXR5TGFiZWwuY2xhc3NOYW1lID0gXCJwcmlvcml0eS1sYWJlbFwiO1xuXG4gICAgc3dpdGNoICh0YXNrLnByaW9yaXR5KSB7XG4gICAgICBjYXNlIFwiTG93XCI6XG4gICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJNZWRpdW1cIjpcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1cIik7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIkhpZ2hcIjpcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJoaWdoXCIpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eUljb24pO1xuICAgIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgfVxuXG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0RhdGUuY2xhc3NOYW1lID0gXCJkYXRlXCI7XG5cbiAgaWYgKHRhc2suZGF0ZSkge1xuICAgIGNvbnN0IGRhdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlSWNvbi5jbGFzc05hbWUgPSBcImRhdGUtaWNvblwiO1xuICAgIGRhdGVJY29uLmlubmVySFRNTCA9IGRhdGVTdmc7XG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRhdGVMYWJlbC5jbGFzc05hbWUgPSBcImRhdGUtbGFiZWxcIjtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSB0YXNrLmRhdGU7XG5cbiAgICB0YXNrRGF0ZS5hcHBlbmRDaGlsZChkYXRlSWNvbik7XG4gICAgdGFza0RhdGUuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgfVxuXG4gIHN1YkluZm9ybWF0aW9uLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gIHN1YkluZm9ybWF0aW9uLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcblxuICBuZXdUYXNrRWxlbWVudC5hcHBlbmRDaGlsZChjb21wbGV0ZVRhc2tCdXR0b24pO1xuICBuZXdUYXNrRWxlbWVudC5hcHBlbmRDaGlsZChtYWluSW5mb3JtYXRpb24pO1xuICBuZXdUYXNrRWxlbWVudC5hcHBlbmRDaGlsZChzdWJJbmZvcm1hdGlvbik7XG5cbiAgYWRkVGFza0RldGFpbHNEaWFsb2dFdmVudChuZXdUYXNrRWxlbWVudCwgbGlzdHMuZ2V0Q3VycmVudExpc3QoKSwgdGFzayk7XG5cbiAgcmV0dXJuIG5ld1Rhc2tFbGVtZW50O1xufVxuXG4vLyBSZWZyZXNoIGFsbCB0YXNrcyBmcm9tIHNlbGVjdGVkIGxpc3RcbmZ1bmN0aW9uIHJlZnJlc2hUYXNrRWxlbWVudHMoKSB7XG4gIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gbGlzdFBhZ2UucXVlcnlTZWxlY3RvcihcIiN0YXNrcy1jb250YWluZXJcIik7XG4gIGNvbnN0IGNvbXBsZXRlZFNlY3Rpb24gPSBsaXN0UGFnZS5xdWVyeVNlbGVjdG9yKFwiLmNvbXBsZXRlZC10YXNrcy1zZWN0aW9uXCIpO1xuICBjb25zdCBjb21wbGV0ZWRDb250YWluZXIgPSBsaXN0UGFnZS5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2NvbXBsZXRlZC10YXNrcy1jb250YWluZXJcIlxuICApO1xuICBjb25zdCBjb21wbGV0ZWRDb3VudGVyID0gbGlzdFBhZ2UucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZWQtdGFza3MtY291bnRlclwiKTtcblxuICAvLyBSZXNldCBhbGwgdGFza3MgZWxlbWVudHNcbiAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgbGlzdHMuZ2V0Q3VycmVudExpc3QoKS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3VGFza0VsZW1lbnQodGFzaywgZmFsc2UpKTtcbiAgfSk7XG5cbiAgYWRkQ29tcGxldGVUYXNrRXZlbnQoKTtcblxuICAvLyBSZXNldCBhbGwgY29tcGxldGVkIHRhc2tzIGVsZW1lbnRzXG4gIGNvbXBsZXRlZENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAvLyBDb3VudCBjb21wbGV0ZWQgdGFrc3NcbiAgY29tcGxldGVkQ291bnRlci50ZXh0Q29udGVudCA9IGAoJHtsaXN0cy5nZXRDb21wbGV0ZWRMZW5ndGgoXG4gICAgbGlzdHMuZ2V0Q3VycmVudExpc3QoKS5uYW1lXG4gICl9KWA7XG5cbiAgLy8gQWRkIGFsbCBjb21wbGV0ZWQgdGFza3MgdG8gcGFnZVxuICBsaXN0cy5nZXRDdXJyZW50TGlzdCgpLmNvbXBsZXRlZC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29tcGxldGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5ld1Rhc2tFbGVtZW50KHRhc2ssIHRydWUpKTtcbiAgfSk7XG5cbiAgLy8gSGlkZSBjb21wbGV0ZWQgdGFza3MgY29udGFpbmVyIHdoZW4gY29tcGxldGVkIGFycmF5IGlzIGVtcHR5XG4gIGlmICghbGlzdHMuZ2V0Q29tcGxldGVkTGVuZ3RoKGxpc3RzLmdldEN1cnJlbnRMaXN0KCkubmFtZSkpIHtcbiAgICBjb21wbGV0ZWRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbXBsZXRlZFNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIH1cblxuICBhZGRSZXN0b3JlVGFza0V2ZW50KCk7XG59XG5cbmZ1bmN0aW9uIHJlZnJlc2hMaXN0VGl0bGUoKSB7XG4gIGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdC10aXRsZVwiKTtcbiAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gbGlzdHMuZ2V0Q3VycmVudExpc3QoKS5uYW1lO1xufVxuXG5mdW5jdGlvbiBsb2FkTGlzdENvbnRlbnQoKSB7XG4gIGNvbnN0IGVtcHR5Q29udGFpbmVyID0gbGlzdFBhZ2UucXVlcnlTZWxlY3RvcihcIi5lbXB0eS1wYWdlXCIpO1xuICBjb25zdCBwYWdlQ29udGFpbmVyID0gbGlzdFBhZ2UucXVlcnlTZWxlY3RvcihcIiNwYWdlXCIpO1xuICBjb25zdCB0aXRsZVNlY3Rpb24gPSBsaXN0UGFnZS5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLXNlY3Rpb25cIik7XG5cbiAgLy8gSGlkZSBlbXB0eSBwYWdlIGNvbnRhaW5lclxuICBlbXB0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgcGFnZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcblxuICAvLyBSZWxvYWQgdGl0bGVTZWN0aW9uIHRvIGxvYWQgdGl0bGUgYW5kIG9wdGlvbnNcbiAgdGl0bGVTZWN0aW9uLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLmlkID0gXCJsaXN0LXRpdGxlXCI7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbGlzdHMuZ2V0Q3VycmVudExpc3QoKS5uYW1lO1xuXG4gIGNvbnN0IGxpc3RPcHRpb25zID0gaW5wdXRzLmFwcGVuZE9wdGlvbnNCdXR0b24oXG4gICAgaG9yaXpvbnRhbE9wdGlvbnNTdmcsXG4gICAgXCJsaXN0LW1vcmUtb3B0aW9uc1wiLFxuICAgIFtcbiAgICAgIHsgbGFiZWw6IFwiRWRpdFwiLCBpY29uOiBlZGl0U3ZnLCBvcHRpb25DbGFzczogXCJlZGl0LWxpc3RcIiB9LFxuICAgICAgeyBsYWJlbDogXCJEZWxldGVcIiwgaWNvbjogZGVsZXRlU3ZnLCBvcHRpb25DbGFzczogXCJkZWxldGUtbGlzdFwiIH0sXG4gICAgXVxuICApO1xuICBjb25zdCBkZWxldGVPcHRpb24gPSBsaXN0T3B0aW9ucy5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1saXN0XCIpO1xuICBjb25zdCBlZGl0T3B0aW9uID0gbGlzdE9wdGlvbnMucXVlcnlTZWxlY3RvcihcIi5lZGl0LWxpc3RcIik7XG5cbiAgdGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgdGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKGxpc3RPcHRpb25zKTtcblxuICAvLyBTZXQgZXZlbnRzIHBhZ2VcbiAgZGlhbG9ncy5vcGVuRGlhbG9nRXZlbnQoXG4gICAgZGVsZXRlT3B0aW9uLFxuICAgIGRpYWxvZ3Muc2hvd0RlbGV0ZUxpc3REaWFsb2csXG4gICAgbGlzdHMuZ2V0Q3VycmVudExpc3QoKVxuICApO1xuICBkaWFsb2dzLm9wZW5EaWFsb2dFdmVudChcbiAgICBlZGl0T3B0aW9uLFxuICAgIGRpYWxvZ3Muc2hvd0VkaXRMaXN0RGlhbG9nLFxuICAgIGxpc3RzLmdldEN1cnJlbnRMaXN0KClcbiAgKTtcblxuICByZWZyZXNoVGFza0VsZW1lbnRzKCk7XG59XG5cbmZ1bmN0aW9uIHVubG9hZFBhZ2UoKSB7XG4gIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2VcIik7XG4gIGNvbnN0IGVtcHR5UGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW1wdHktcGFnZVwiKTtcblxuICBwYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICBlbXB0eVBhZ2VDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2tFdmVudCgpIHtcbiAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGxpc3RQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stYnV0dG9uXCIpO1xuXG4gIG5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaWFsb2dzLnNob3dOZXdUYXNrRGlhbG9nKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRDb21wbGV0ZVRhc2tFdmVudCgpIHtcbiAgY29uc3QgdGFza3NDb250YWluZXIgPSBsaXN0UGFnZS5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgdGFza3MgPSBBcnJheS5mcm9tKHRhc2tzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKSk7XG5cbiAgLy8gQWRkIGNvbXBsZXRlIGJ1dHRvbiBldmVudCB0byBlYWNoIHRhc2sgZWxlbWVudFxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgY29tcGxldGVUYXNrQnV0dG9uID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiLmNvbXBsZXRlLXRhc2stYnV0dG9uXCIpO1xuICAgIGNvbXBsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFByZXZlbnQgb3BlbmluZyB0YXNrIGRldGFpbHMgZGlhbG9nXG4gICAgICBsaXN0cy5jb21wbGV0ZVRhc2sobGlzdHMuZ2V0Q3VycmVudExpc3QoKS5uYW1lLCB0YXNrLmRhdGFzZXQudGFza2lkKTtcbiAgICAgIHJlZnJlc2hUYXNrRWxlbWVudHMoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFJlc3RvcmVUYXNrRXZlbnQoKSB7XG4gIGNvbnN0IGNvbXBsZXRlZFRhc2tzQ29udGFpbmVyID0gbGlzdFBhZ2UucXVlcnlTZWxlY3RvcihcbiAgICBcIiNjb21wbGV0ZWQtdGFza3MtY29udGFpbmVyXCJcbiAgKTtcbiAgY29uc3QgdGFza3MgPSBBcnJheS5mcm9tKGNvbXBsZXRlZFRhc2tzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKSk7XG5cbiAgLy8gQWRkIGNvbXBsZXRlIGJ1dHRvbiBldmVudCB0byBlYWNoIHRhc2sgZWxlbWVudFxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgY29tcGxldGVUYXNrQnV0dG9uID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiLmNvbXBsZXRlLXRhc2stYnV0dG9uXCIpO1xuICAgIGNvbXBsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFByZXZlbnQgb3BlbmluZyB0YXNrIGRldGFpbHMgZGlhbG9nXG4gICAgICBsaXN0cy5yZXN0b3JlVGFzayhsaXN0cy5nZXRDdXJyZW50TGlzdCgpLm5hbWUsIHRhc2suZGF0YXNldC50YXNraWQpO1xuICAgICAgcmVmcmVzaFRhc2tFbGVtZW50cygpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXhwYW5kVGFza3NFdmVudCgpIHtcbiAgY29uc3QgY29tcGxldGVkVGFza3MgPSBsaXN0UGFnZS5xdWVyeVNlbGVjdG9yKFwiLmNvbXBsZXRlZC10YXNrcy1zZWN0aW9uXCIpO1xuICBjb25zdCBleHBhbmRUYXNrc0J1dHRvbiA9IGxpc3RQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIuZXhwYW5kLXRhc2tzXCIpO1xuXG4gIGV4cGFuZFRhc2tzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29tcGxldGVkVGFza3MuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrRGV0YWlsc0RpYWxvZ0V2ZW50KHRhc2tFbGVtZW50LCBsaXN0LCB0YXNrKSB7XG4gIHRhc2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGlhbG9ncy5zaG93VGFza0RldGFpbHNEaWFsb2cobGlzdCwgdGFzayk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQYWdlKCkge1xuICBsaXN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxpc3RQYWdlLmlkID0gXCJsaXN0LXBhZ2VcIjtcblxuICBsaXN0UGFnZS5hcHBlbmRDaGlsZChjcmVhdGVMaXN0Q29udGFpbmVyKCkpO1xuICBsaXN0UGFnZS5hcHBlbmRDaGlsZChlbXB0eVBhZ2UoKSk7XG5cbiAgYWRkTmV3VGFza0V2ZW50KCk7XG4gIGFkZEV4cGFuZFRhc2tzRXZlbnQoKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpc3RQYWdlKTtcbn1cblxuZXhwb3J0IHtcbiAgcmVmcmVzaFRhc2tFbGVtZW50cyxcbiAgcmVmcmVzaExpc3RUaXRsZSxcbiAgbG9hZExpc3RDb250ZW50LFxuICB1bmxvYWRQYWdlLFxuICByZW5kZXJQYWdlLFxufTtcbiIsImltcG9ydCBkZWZhdWx0TGlzdFN2ZyBmcm9tIFwiLi4vaW1nL2xpc3RzL2RlZmF1bHQuc3ZnXCI7XG5pbXBvcnQgY3JlYXRlTGlzdFN2ZyBmcm9tIFwiLi4vaW1nL290aGVycy9jcmVhdGUtbGlzdC5zdmdcIjtcbmltcG9ydCBhcHBJY29uU3ZnIGZyb20gXCIuLi9pbWcvdG9kby1hcHAtaWNvbi1mbGF0LnN2Z1wiO1xuXG5pbXBvcnQgKiBhcyBwYWdlIGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCAqIGFzIGxpc3RzIGZyb20gXCIuLi9saXN0cy1hbmQtdGFza3MuanNcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcIi4vZGlhbG9ncy5qc1wiO1xuXG5sZXQgdXNlckxpc3RzO1xuXG5mdW5jdGlvbiBjcmVhdGVBcHBUaXRsZSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYXBwLWluZm8tY29udGFpbmVyXCI7XG5cbiAgY29uc3QgYXBwSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBhcHBJY29uLmlkID0gXCJhcHAtaWNvblwiO1xuICBhcHBJY29uLmlubmVySFRNTCA9IGFwcEljb25Tdmc7XG5cbiAgY29uc3QgYXBwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhcHBUaXRsZS5pZCA9IFwiYXBwLXRpdGxlXCI7XG4gIGFwcFRpdGxlLnRleHRDb250ZW50ID0gXCJUby1EbyBhcHBcIjtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXBwSWNvbik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhcHBUaXRsZSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdFNpZGViYXIobGlzdExhYmVsLCBsaXN0SWNvbiA9IGRlZmF1bHRMaXN0U3ZnKSB7XG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsaXN0LmNsYXNzTmFtZSA9IFwibGlzdC1zaWRlYmFyLWVsZW1lbnRcIjtcbiAgbGlzdC5kYXRhc2V0Lmxpc3ROYW1lID0gbGlzdExhYmVsO1xuXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpY29uLmNsYXNzTmFtZSA9IFwibGlzdC1zaWRlYmFyLWVsZW1lbnQtaWNvblwiO1xuICBpY29uLmlubmVySFRNTCA9IGxpc3RJY29uO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGFiZWwuY2xhc3NOYW1lID0gXCJsaXN0LXNpZGViYXItZWxlbWVudC1sYWJlbFwiO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IGxpc3RMYWJlbDtcblxuICBsaXN0LmFwcGVuZENoaWxkKGljb24pO1xuICBsaXN0LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICByZXR1cm4gbGlzdDtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaFVzZXJTaWRlYmFyTGlzdHMoKSB7XG4gIGNvbnN0IGxpc3RzQ29udGVudCA9IGxpc3RzLmdldExpc3RzTmFtZXNJY29ucygpO1xuXG4gIC8vIFJlc2V0IHNpZGViYXIgbGlzdHNcbiAgdXNlckxpc3RzLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgLy8gQWRkIGxpc3RzIHRvIHRoZSBzaWRlYmFyXG4gIGxpc3RzQ29udGVudC5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgdXNlckxpc3RzLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RTaWRlYmFyKGxpc3QubmFtZSwgbGlzdC5pY29uKSk7XG4gIH0pO1xuXG4gIC8vIEFkZCBsb2FkaW5nIGV2ZW50cyB0byBlYWNoIGxpc3QgY3JlYXRlZCBieSB0aGUgdXNlclxuICB1c2VyTGlzdHMuY2hpbGROb2Rlcy5mb3JFYWNoKChsaXN0RWxlbWVudCkgPT4ge1xuICAgIGxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsaXN0cy5zZXRDdXJyZW50TGlzdChsaXN0RWxlbWVudC5kYXRhc2V0Lmxpc3ROYW1lKTtcbiAgICAgIHBhZ2UubG9hZExpc3RDb250ZW50KCk7XG4gICAgICBoaWdobGlnaHRTZWxlY3RlZExpc3QodXNlckxpc3RzLmNoaWxkTm9kZXMsIGxpc3RFbGVtZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZ2hsaWdodFNlbGVjdGVkTGlzdChsaXN0cywgc2VsZWN0ZWRMaXN0KSB7XG4gIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IGxpc3QuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpKTtcbiAgc2VsZWN0ZWRMaXN0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVXNlckxpc3RzQ29udGFpbmVyKCkge1xuICBjb25zdCBsaXN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxpc3RzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2lkZWJhci1saXN0cy1jb250YWluZXIgdXNlci1saXN0c1wiO1xuXG4gIGNvbnN0IGxpc3RUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxpc3RUaXRsZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImxpc3QtdGl0bGUtY29udGFpbmVyXCI7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJNeSBMaXN0c1wiO1xuXG4gIGNvbnN0IGNyZWF0ZUxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjcmVhdGVMaXN0QnV0dG9uLmlkID0gXCJjcmVhdGUtbGlzdC1idXR0b25cIjtcblxuICBjb25zdCBjcmVhdGVMaXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjcmVhdGVMaXN0SWNvbi5jbGFzc05hbWUgPSBcImNyZWF0ZS1saXN0LWljb25cIjtcbiAgY3JlYXRlTGlzdEljb24uaW5uZXJIVE1MID0gY3JlYXRlTGlzdFN2ZztcblxuICBjcmVhdGVMaXN0QnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RJY29uKTtcblxuICBsaXN0VGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBsaXN0VGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdEJ1dHRvbik7XG5cbiAgdXNlckxpc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdXNlckxpc3RzLmNsYXNzTmFtZSA9IFwibGlzdHMtZ3JvdXBcIjtcblxuICByZWZyZXNoVXNlclNpZGViYXJMaXN0cygpO1xuXG4gIGxpc3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RUaXRsZUNvbnRhaW5lcik7XG4gIGxpc3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHVzZXJMaXN0cyk7XG5cbiAgcmV0dXJuIGxpc3RzQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDcmVkaXRzKCkge1xuICBjb25zdCBjcmVkaXRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3JlZGl0c0NvbnRhaW5lci5pZCA9IFwiY3JlZGl0c1wiO1xuICBjcmVkaXRzQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJNYWRlIGJ5IFwiO1xuXG4gIGNvbnN0IGNyZWRpdHNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNyZWRpdHNMaW5rLnRleHRDb250ZW50ID0gXCJFcmljayBCLiBHw7NtZXpcIjtcbiAgY3JlZGl0c0xpbmsuaHJlZiA9IFwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9Fcmlja0JHb21lelwiO1xuICBjcmVkaXRzTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuXG4gIGNyZWRpdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlZGl0c0xpbmspO1xuXG4gIHJldHVybiBjcmVkaXRzQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb3dlclNpZGViYXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImxvd2VyLXNpZGViYXJcIjtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ3JlZGl0cygpKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVc2VyTGlzdEV2ZW50KHNpZGViYXIpIHtcbiAgY29uc3QgY3JlYXRlTGlzdEJ1dHRvbiA9IHNpZGViYXIucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtbGlzdC1idXR0b25cIik7XG4gIGNyZWF0ZUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRpYWxvZ3Muc2hvd05ld0xpc3REaWFsb2coKSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNpZGViYXIoKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyLmlkID0gXCJzaWRlYmFyXCI7XG5cbiAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVBcHBUaXRsZSgpKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVVc2VyTGlzdHNDb250YWluZXIoKSk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoY3JlYXRlTG93ZXJTaWRlYmFyKCkpO1xuXG4gIGNyZWF0ZVVzZXJMaXN0RXZlbnQoc2lkZWJhcik7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbn1cblxuZXhwb3J0IHsgcmVmcmVzaFVzZXJTaWRlYmFyTGlzdHMsIHJlbmRlclNpZGViYXIgfTtcbiIsImltcG9ydCBkZWZhdWx0U3ZnIGZyb20gXCIuL2ltZy9saXN0cy9kZWZhdWx0LnN2Z1wiO1xuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKDE2KTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihsaXN0TmFtZSwgaWNvbikge1xuICAgIHRoaXMubmFtZSA9IGxpc3ROYW1lO1xuICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMuY29tcGxldGVkID0gW107XG4gIH1cbn1cblxubGV0IGNvbnRlbnQ7XG5sZXQgY3VycmVudExpc3Q7XG5cbmNvbnN0IHNhdmVMaXN0cyA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0c1wiLCBKU09OLnN0cmluZ2lmeShjb250ZW50KSk7XG59O1xuXG5jb25zdCByZWZyZXNoTGlzdHMgPSAoKSA9PiB7XG4gIC8vIElmIGxpc3RzIGlzIG5vdCBjcmVhdGVkIGluIGxvY2FsU3RvcmFnZSwgY3JlYXRlIGFuIGVtcHR5IGFycmF5XG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0c1wiKSkge1xuICAgIGNvbnRlbnQgPSBbXTtcbiAgICBjcmVhdGVMaXN0KFwiTXkgdGFza3NcIiwgZGVmYXVsdFN2Zyk7XG4gICAgc2F2ZUxpc3RzKCk7XG4gIH1cblxuICBjb250ZW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RzXCIpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAobGlzdE5hbWUsIGljb24pID0+IHtcbiAgLy8gQXZvaWQgY3JlYXRpbmcgZHVwbGljYXRlZCBsaXN0c1xuICBpZiAoIWdldExpc3QobGlzdE5hbWUpKSB7XG4gICAgY29udGVudC5wdXNoKG5ldyBMaXN0KGxpc3ROYW1lLCBpY29uKSk7XG4gICAgc2F2ZUxpc3RzKCk7XG4gIH1cbn07XG5cbmNvbnN0IGVkaXRMaXN0ID0gKGxpc3ROYW1lLCBuZXdMaXN0ID0geyBuYW1lOiBcIk5hbWVcIiwgaWNvbjogZGVmYXVsdFN2ZyB9KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGdldExpc3QobGlzdE5hbWUpO1xuXG4gIHNlbGVjdGVkTGlzdC5uYW1lID0gbmV3TGlzdC5uYW1lO1xuICBzZWxlY3RlZExpc3QuaWNvbiA9IG5ld0xpc3QuaWNvbjtcblxuICBzYXZlTGlzdHMoKTtcbn07XG5cbmNvbnN0IGRlbGV0ZUxpc3QgPSAobGlzdE5hbWUpID0+IHtcbiAgY29uc3QgbGlzdEluZGV4ID0gZ2V0TGlzdEluZGV4KGxpc3ROYW1lKTtcblxuICBpZiAobGlzdEluZGV4ICE9PSAtMSkge1xuICAgIGNvbnRlbnQuc3BsaWNlKGxpc3RJbmRleCwgMSk7XG4gICAgc2F2ZUxpc3RzKCk7XG4gIH1cbn07XG5cbmNvbnN0IGdldExpc3QgPSAobGlzdE5hbWUpID0+IGNvbnRlbnQuZmluZCgobGlzdCkgPT4gbGlzdC5uYW1lID09PSBsaXN0TmFtZSk7XG5cbmNvbnN0IGNyZWF0ZVRhc2sgPSAoXG4gIGxpc3ROYW1lLFxuICBuZXdUYXNrID0ge1xuICAgIHRpdGxlOiBcIlRpdGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIixcbiAgICBkYXRlOiBcIkRhdGVcIixcbiAgICBwcmlvcml0eTogXCJQcmlvcml0eVwiLFxuICB9XG4pID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gZ2V0TGlzdChsaXN0TmFtZSk7XG5cbiAgLy8gUmVtb3ZlIGFueSBvdGhlciBwb3NzaWJsZSB2YWx1ZSB0byBwcmlvcml0eSB0aGF0IGlzIG5vdCBlcXVhbCB0byB0aGUgc3BlY2lmaWVkIGJlbG93XG4gIGlmIChcbiAgICAhKFxuICAgICAgbmV3VGFzay5wcmlvcml0eSA9PT0gXCJMb3dcIiB8fFxuICAgICAgbmV3VGFzay5wcmlvcml0eSA9PSBcIk1lZGl1bVwiIHx8XG4gICAgICBuZXdUYXNrLnByaW9yaXR5ID09PSBcIkhpZ2hcIlxuICAgIClcbiAgKVxuICAgIG5ld1Rhc2sucHJpb3JpdHkgPSBcIlwiO1xuXG4gIHNlbGVjdGVkTGlzdC50YXNrcy5wdXNoKFxuICAgIG5ldyBUYXNrKG5ld1Rhc2sudGl0bGUsIG5ld1Rhc2suZGVzY3JpcHRpb24sIG5ld1Rhc2suZGF0ZSwgbmV3VGFzay5wcmlvcml0eSlcbiAgKTtcbiAgc2F2ZUxpc3RzKCk7XG59O1xuXG5jb25zdCBnZXRUYXNrID0gKGxpc3QsIHRhc2tJZCkgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4gbGlzdCkge1xuICAgIGlmIChrZXkgPT09IFwidGFza3NcIiB8fCBrZXkgPT09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgIGNvbnN0IHRhc2tGb3VuZCA9IGxpc3Rba2V5XS5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgICAgLy8gSWYgdGFzayBpcyBub3QgZm91bmQgaW4gXCJ0YXNrc1wiIGFycmF5LCBjb250aW51ZSB0byBcImNvbXBsZXRlZFwiIGFycmF5XG4gICAgICBpZiAodGFza0ZvdW5kKSByZXR1cm4gdGFza0ZvdW5kO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZ2V0VGFza0luZGV4ID0gKGxpc3QsIHRhc2tBcnJheSwgdGFza0lkKSA9PlxuICBsaXN0W3Rhc2tBcnJheV0uaW5kZXhPZihnZXRUYXNrKGxpc3QsIHRhc2tJZCkpO1xuXG5jb25zdCBjb21wbGV0ZVRhc2sgPSAobGlzdE5hbWUsIHRhc2tJZCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZExpc3QgPSBnZXRMaXN0KGxpc3ROYW1lKTtcbiAgLy8gRmluZCB0YXNrIGluZGV4IHRvIHVzZSBpdCBpbiBzcGxpY2UoKSBhcmd1bWVudHNcbiAgY29uc3QgdGFza0luZGV4ID0gZ2V0VGFza0luZGV4KHNlbGVjdGVkTGlzdCwgXCJ0YXNrc1wiLCB0YXNrSWQpO1xuICAvLyBSZW1vdmUgdGFzayBmcm9tIGFycmF5IGFuZCBjb252ZXJ0IGl0IHRvIG9iamVjdCAoaW5kZXggMClcbiAgY29uc3QgY29tcGxldGVkVGFzayA9IHNlbGVjdGVkTGlzdC50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKVswXTtcbiAgLy8gQWRkIHRhc2sgdG8gdGhlIGZyb250IG9mIGNvbXBsZXRlZCBhcnJheVxuICBzZWxlY3RlZExpc3QuY29tcGxldGVkLnVuc2hpZnQoY29tcGxldGVkVGFzayk7XG4gIHNhdmVMaXN0cygpO1xufTtcblxuY29uc3QgcmVzdG9yZVRhc2sgPSAobGlzdE5hbWUsIHRhc2tJZCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZExpc3QgPSBnZXRMaXN0KGxpc3ROYW1lKTtcbiAgLy8gRmluZCB0YXNrIGluZGV4IHRvIHVzZSBpdCBpbiBzcGxpY2UoKSBhcmd1bWVudHNcbiAgY29uc3QgdGFza0luZGV4ID0gZ2V0VGFza0luZGV4KHNlbGVjdGVkTGlzdCwgXCJjb21wbGV0ZWRcIiwgdGFza0lkKTtcbiAgLy8gUmVtb3ZlIHRhc2sgZnJvbSBhcnJheSBhbmQgY29udmVydCBpdCB0byBvYmplY3QgKGluZGV4IDApXG4gIGNvbnN0IGNvbXBsZXRlZFRhc2sgPSBzZWxlY3RlZExpc3QuY29tcGxldGVkLnNwbGljZSh0YXNrSW5kZXgsIDEpWzBdO1xuICAvLyBBZGQgdGFzayB0byB0aGUgZnJvbnQgb2YgY29tcGxldGVkIGFycmF5XG4gIHNlbGVjdGVkTGlzdC50YXNrcy5wdXNoKGNvbXBsZXRlZFRhc2spO1xuICBzYXZlTGlzdHMoKTtcbn07XG5cbmNvbnN0IG1vdmVUYXNrID0gKHRhc2tJZCwgZnJvbUxpc3ROYW1lLCB0b0xpc3ROYW1lKSA9PiB7XG4gIGNvbnN0IGZyb21MaXN0ID0gZ2V0TGlzdChmcm9tTGlzdE5hbWUpO1xuICBjb25zdCB0b0xpc3QgPSBnZXRMaXN0KHRvTGlzdE5hbWUpO1xuXG4gIGZvciAobGV0IGtleSBpbiBmcm9tTGlzdCkge1xuICAgIGlmIChrZXkgPT09IFwidGFza3NcIiB8fCBrZXkgPT09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGdldFRhc2tJbmRleChmcm9tTGlzdCwga2V5LCB0YXNrSWQpO1xuXG4gICAgICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCBtb3ZlZFRhc2sgPSBmcm9tTGlzdFtrZXldLnNwbGljZSh0YXNrSW5kZXgsIDEpWzBdO1xuICAgICAgICB0b0xpc3Rba2V5XS5wdXNoKG1vdmVkVGFzayk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGVkaXRUYXNrID0gKFxuICBsaXN0TmFtZSxcbiAgdGFza0lkLFxuICBuZXdUYXNrID0ge1xuICAgIHRpdGxlOiBcIlRpdGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIixcbiAgICBkYXRlOiBcIkRhdGVcIixcbiAgICBwcmlvcml0eTogXCJQcmlvcml0eVwiLFxuICB9XG4pID0+IHtcbiAgaWYgKGxpc3ROYW1lICE9PSBjdXJyZW50TGlzdC5uYW1lKSB7XG4gICAgbW92ZVRhc2sodGFza0lkLCBjdXJyZW50TGlzdC5uYW1lLCBsaXN0TmFtZSk7XG4gIH1cblxuICBjb25zdCBzZWxlY3RlZExpc3QgPSBnZXRMaXN0KGxpc3ROYW1lKTtcbiAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gZ2V0VGFzayhzZWxlY3RlZExpc3QsIHRhc2tJZCk7XG5cbiAgLy8gUmVtb3ZlIGFueSBvdGhlciBwb3NzaWJsZSB2YWx1ZSB0byBwcmlvcml0eSB0aGF0IGlzIG5vdCBlcXVhbCB0byB0aGUgc3BlY2lmaWVkIGJlbG93XG4gIGlmIChcbiAgICAhKFxuICAgICAgbmV3VGFzay5wcmlvcml0eSA9PT0gXCJMb3dcIiB8fFxuICAgICAgbmV3VGFzay5wcmlvcml0eSA9PSBcIk1lZGl1bVwiIHx8XG4gICAgICBuZXdUYXNrLnByaW9yaXR5ID09PSBcIkhpZ2hcIlxuICAgIClcbiAgKVxuICAgIG5ld1Rhc2sucHJpb3JpdHkgPSBcIlwiO1xuXG4gIHNlbGVjdGVkVGFzay50aXRsZSA9IG5ld1Rhc2sudGl0bGU7XG4gIHNlbGVjdGVkVGFzay5kZXNjcmlwdGlvbiA9IG5ld1Rhc2suZGVzY3JpcHRpb247XG4gIHNlbGVjdGVkVGFzay5kYXRlID0gbmV3VGFzay5kYXRlO1xuICBzZWxlY3RlZFRhc2sucHJpb3JpdHkgPSBuZXdUYXNrLnByaW9yaXR5O1xuXG4gIHNhdmVMaXN0cygpO1xufTtcblxuY29uc3QgZGVsZXRlVGFzayA9IChsaXN0TmFtZSwgdGFza0lkKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGdldExpc3QobGlzdE5hbWUpO1xuXG4gIGZvciAobGV0IGtleSBpbiBzZWxlY3RlZExpc3QpIHtcbiAgICAvLyBJdGVyYXRlIG9ubHkgaW4gdGFza3MgYW5kIGNvbXBsZXRlZCBhcnJheXMgdG8gZmluZCB0YXNrc1xuICAgIGlmIChrZXkgPT09IFwidGFza3NcIiB8fCBrZXkgPT09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGdldFRhc2tJbmRleChzZWxlY3RlZExpc3QsIGtleSwgdGFza0lkKTtcblxuICAgICAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgc2VsZWN0ZWRMaXN0W2tleV0uc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICAgIHNhdmVMaXN0cygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzZXRDdXJyZW50TGlzdCA9IChsaXN0TmFtZSkgPT4ge1xuICBjdXJyZW50TGlzdCA9IGdldExpc3QobGlzdE5hbWUpO1xufTtcblxuY29uc3QgZ2V0Q3VycmVudExpc3QgPSAoKSA9PiBjdXJyZW50TGlzdDtcblxuY29uc3QgZ2V0Q29tcGxldGVkTGVuZ3RoID0gKGxpc3ROYW1lKSA9PiBnZXRMaXN0KGxpc3ROYW1lKS5jb21wbGV0ZWQubGVuZ3RoO1xuXG5jb25zdCBnZXRMaXN0c05hbWVzID0gKCkgPT4ge1xuICBjb25zdCBuYW1lc0FycmF5ID0gW107XG4gIGNvbnRlbnQuZm9yRWFjaCgobGlzdCkgPT4gbmFtZXNBcnJheS5wdXNoKGxpc3QubmFtZSkpO1xuICByZXR1cm4gbmFtZXNBcnJheTtcbn07XG5cbmNvbnN0IGdldExpc3RzTmFtZXNJY29ucyA9ICgpID0+IHtcbiAgY29uc3QgbmFtZXNJY29uc0FycmF5ID0gW107XG5cbiAgY29udGVudC5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgY29uc3QgcHJvcGVydGllc1RvRmlsdGVyID0gW1wibmFtZVwiLCBcImljb25cIl07XG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgb2JqZWN0IHdpdGggb25seSBcIm5hbWVcIiBhbmQgXCJpY29uXCIgcHJvcGVydGllc1xuICAgIGNvbnN0IGZpbHRlcmVkTGlzdCA9IE9iamVjdC5rZXlzKGxpc3QpXG4gICAgICAuZmlsdGVyKChrZXkpID0+IHByb3BlcnRpZXNUb0ZpbHRlci5pbmNsdWRlcyhrZXkpKVxuICAgICAgLnJlZHVjZSgob2JqZWN0LCBrZXkpID0+IHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSBsaXN0W2tleV07XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICB9LCB7fSk7XG5cbiAgICBuYW1lc0ljb25zQXJyYXkucHVzaChmaWx0ZXJlZExpc3QpO1xuICB9KTtcblxuICByZXR1cm4gbmFtZXNJY29uc0FycmF5O1xufTtcblxuY29uc3QgZ2V0TGlzdEluZGV4ID0gKGxpc3ROYW1lKSA9PlxuICBjb250ZW50LmluZGV4T2YoY29udGVudC5maW5kKChsaXN0KSA9PiBsaXN0Lm5hbWUgPT0gbGlzdE5hbWUpKTtcblxuZXhwb3J0IHtcbiAgcmVmcmVzaExpc3RzLFxuICBjcmVhdGVMaXN0LFxuICBlZGl0TGlzdCxcbiAgZGVsZXRlTGlzdCxcbiAgY3JlYXRlVGFzayxcbiAgY29tcGxldGVUYXNrLFxuICByZXN0b3JlVGFzayxcbiAgZWRpdFRhc2ssXG4gIGRlbGV0ZVRhc2ssXG4gIHNldEN1cnJlbnRMaXN0LFxuICBnZXRDdXJyZW50TGlzdCxcbiAgZ2V0Q29tcGxldGVkTGVuZ3RoLFxuICBnZXRMaXN0c05hbWVzLFxuICBnZXRMaXN0c05hbWVzSWNvbnMsXG4gIGdldExpc3RJbmRleCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0ICogYXMgc2lkZWJhciBmcm9tIFwiLi9kZXNpZ24vc2lkZWJhci5qc1wiO1xuaW1wb3J0ICogYXMgcGFnZSBmcm9tIFwiLi9kZXNpZ24vcGFnZS5qc1wiO1xuaW1wb3J0ICogYXMgbGlzdHMgZnJvbSBcIi4vbGlzdHMtYW5kLXRhc2tzLmpzXCI7XG5pbXBvcnQgKiBhcyBub3RpZmljYXRpb25zIGZyb20gXCIuL2Rlc2lnbi9ub3RpZmljYXRpb25zLmpzXCI7XG5cbmxpc3RzLnJlZnJlc2hMaXN0cygpO1xuc2lkZWJhci5yZW5kZXJTaWRlYmFyKCk7XG5wYWdlLnJlbmRlclBhZ2UoKTtcbm5vdGlmaWNhdGlvbnMucmVuZGVyTm90aWZpY2F0aW9ucygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9