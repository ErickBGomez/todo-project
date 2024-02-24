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
    "Create a new list by clicking the + button or select an existing one to create adding your tasks.";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGdIQUFnSCxJQUFJLElBQUksa0JBQWtCO0FBQzFJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxrRkFBa0YsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sV0FBVyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFFBQVEsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE9BQU8sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sV0FBVyxZQUFZLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE9BQU8sVUFBVSxZQUFZLFdBQVcsTUFBTSxPQUFPLFlBQVksT0FBTyxRQUFRLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLFlBQVksYUFBYSxPQUFPLFlBQVksT0FBTyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFL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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsK0RBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUIsK0RBQVUseUJBQXlCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIs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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLG9CQUFvQiwrREFBVSxFQUFFO0FBQ3hFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLElBQUk7O0FBRVg7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFrQkU7Ozs7Ozs7VUMzUEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzBCO0FBQ047QUFDSztBQUNhOztBQUUzRCw2REFBa0I7QUFDbEIsNkRBQXFCO0FBQ3JCLHVEQUFlO0FBQ2YseUVBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvbGlzdHMvYm9vay5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy9saXN0cy9jbG91ZC5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy9saXN0cy9kZWZhdWx0LnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL2xpc3RzL2hlYXJ0LnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL2xpc3RzL2xpZ2h0YnVsYi5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy9saXN0cy9wZW5jaWwuc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvbGlzdHMvcGxhbmUuc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvbGlzdHMvc2Nob29sLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL2xpc3RzL3Nob3BwaW5nLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL2xpc3RzL3NvZmEuc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvbGlzdHMvc3Rhci5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy9saXN0cy90cmVlLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL290aGVycy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy9vdGhlcnMvY29tcGxldGVkLXRhc2suc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvb3RoZXJzL2NyZWF0ZS1saXN0LnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL290aGVycy9kZWxldGUuc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvb3RoZXJzL2VkaXQuc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbWcvb3RoZXJzL2V4cGFuZC10YXNrcy5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy9vdGhlcnMvaG9yaXpvbnRhbC1vcHRpb25zLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL290aGVycy9zdWNjZXNzLW5vdGlmaWNhdGlvbi5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy9vdGhlcnMvdG8tY29tcGxldGUtYnV0dG9uLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL3Rhc2tzL2RhdGUtZmlsbC5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy90YXNrcy9kYXRlLW5vZmlsbC5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy90YXNrcy9wcmlvcml0eS1maWxsLnN2ZyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW1nL3Rhc2tzL3ByaW9yaXR5LW5vZmlsbC5zdmciLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2ltZy90b2RvLWFwcC1pY29uLWZsYXQuc3ZnIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9kZXNpZ24vZGlhbG9ncy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvZGVzaWduL2lucHV0cy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvZGVzaWduL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2Rlc2lnbi9wYWdlLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9kZXNpZ24vc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvbGlzdHMtYW5kLXRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gIC8qIFR5cG9ncmFwaHkgKi9cbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG5cbiAgLyogQ29sb3JzOiAqL1xuICAtLUJsYWNrOiAjMjUyNzJjO1xuICAtLUJsYWNrLTc1OiAjMjUyNzJjYmY7XG4gIC0tQmxhY2stNTA6ICMyNTI3MmM4MDtcbiAgLS1CbGFjay0yNTogIzI1MjcyYzQwO1xuICAtLUJsYWNrLTEwOiAjMjUyNzJjMWE7XG4gIC0tQmxhY2stMDU6ICMyNTI3MmMwZDtcbiAgLS1XaGl0ZTogI2ZhZmFmYTtcbiAgLS1QcmltYXJ5OiAjNGM3ZGZiO1xuICAtLURlbGV0ZS1BY2NlbnQ6ICNlYzNhNGY7XG4gIC0tSGlnaC1Qcmlvcml0eTogI2VlNGUzOTtcbiAgLS1NZWRpdW0tUHJpb3JpdHk6ICNlYTdlMWE7XG4gIC0tTG93LVByaW9yaXR5OiAjODk3MTVkO1xuICAtLVRhc2stTGlzdDogIzJmOWU2MjtcbiAgLS1MaXN0LUJhY2tncm91bmQtR3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzY2YTJlOCAwJSwgIzk4OWJlOSAxMDAlKTtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiB2YXIoLS1CbGFjayk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xufVxuXG5oMSxcbmgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMi41MzRyZW07XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIFNpZGViYXIgKi9cblxuI3NpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJsYWNrLTA1KTtcbiAgcGFkZGluZzogMjZweCAzMnB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1CbGFjay0yNSk7XG4gIHdpZHRoOiAyNTZweDtcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDMycHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYXBwLWluZm8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbiNhcHAtaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmaWxsOiB2YXIoLS1QcmltYXJ5KTtcbn1cblxuI2FwcC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5zaWRlYmFyLWxpc3RzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tQmxhY2stMjUpO1xuICBwYWRkaW5nLXRvcDogMzJweDtcbn1cblxuLnNpZGViYXItbGlzdHMtY29udGFpbmVyIC50aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1CbGFjay01MCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udXNlci1saXN0cyAubGlzdC10aXRsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbiNjcmVhdGUtbGlzdC1idXR0b24ge1xuICBwYWRkaW5nOiA0cHg7XG4gIHRyYW5zaXRpb246IDEwMG1zO1xufVxuXG4jY3JlYXRlLWxpc3QtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmxhY2stMTApO1xuICB0cmFuc2l0aW9uOiAxMDBtcztcbn1cblxuI2NyZWF0ZS1saXN0LWJ1dHRvbiAuY3JlYXRlLWxpc3QtaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmaWxsOiB2YXIoLS1CbGFjay01MCk7XG59XG5cbi5saXN0cy1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xufVxuXG4ubGlzdC1zaWRlYmFyLWVsZW1lbnQge1xuICBjb2xvcjogdmFyKC0tQmxhY2spO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDRweDtcbiAgdHJhbnNpdGlvbjogMjAwbXM7XG59XG5cbi5saXN0LXNpZGViYXItZWxlbWVudCAubGlzdC1zaWRlYmFyLWVsZW1lbnQtaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDI0cHg7XG4gIG1heC1oZWlnaHQ6IDI0cHg7XG59XG5cbi5saXN0LXNpZGViYXItZWxlbWVudCAubGlzdC1zaWRlYmFyLWVsZW1lbnQtbGFiZWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmxpc3Qtc2lkZWJhci1lbGVtZW50LnNlbGVjdGVkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdHJhbnNpdGlvbjogMjAwbXM7XG59XG5cbi5saXN0LXNpZGViYXItZWxlbWVudDpob3Zlcixcbi5saXN0LXNpZGViYXItZWxlbWVudC5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJsYWNrLTEwKTtcbiAgdHJhbnNpdGlvbjogMjAwbXM7XG59XG5cbi5sb3dlci1zaWRlYmFyIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jY3JlZGl0cyB7XG4gIGNvbG9yOiB2YXIoLS1CbGFjay01MCk7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG5cbiNjcmVkaXRzIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNjcmVkaXRzIGEsXG4jY3JlZGl0cyBhOnZpc2l0ZWQge1xuICBjb2xvcjogdmFyKC0tUHJpbWFyeSk7XG59XG5cbi8qIExpc3QgY29udGVudCAqL1xuXG4jbGlzdC1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1NnB4KTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbiNsaXN0LWJhY2tncm91bmQge1xuICBoZWlnaHQ6IDE1MnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1MaXN0LUJhY2tncm91bmQtR3JhZGllbnQpO1xufVxuXG4ubGlzdC1jb250YWluZXIge1xuICBtYXJnaW46IDQ4cHggYXV0bztcbiAgd2lkdGg6IGNsYW1wKDQwMHB4LCA1MHZ3LCA4MzJweCk7XG59XG5cbi50aXRsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1heC1jb250ZW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMDtcbiAgbWluLWhlaWdodDogMDtcbiAgZ2FwOiAyNnB4O1xuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi50aXRsZS1zZWN0aW9uICNsaXN0LXRpdGxlIHtcbiAgbWluLXdpZHRoOiAwO1xuICBtaW4taGVpZ2h0OiAwO1xufVxuXG4udGl0bGUtc2VjdGlvbiAub3B0aW9ucy1jb250cm9sbGVyLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuXG4udGl0bGUtc2VjdGlvbiAub3B0aW9ucy1jb250cm9sbGVyLWJ1dHRvbjpob3Zlcixcbi50aXRsZS1zZWN0aW9uIC5vcHRpb25zLWNvbnRyb2xsZXItYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmxhY2stMTApO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuXG4udGl0bGUtc2VjdGlvbiAubGlzdC1tb3JlLW9wdGlvbnMgLmJ1dHRvbi1pY29uIHtcbiAgZmlsbDogdmFyKC0tQmxhY2spO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4jbmV3LXRhc2stYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI0cHggMzJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLUJsYWNrLTUwKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tQmxhY2stMjUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcbn1cblxuI25ldy10YXNrLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTQlKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcbn1cblxuLmVtcHR5LXBhZ2Uge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA0OHB4IGF1dG87XG4gIHdpZHRoOiBjbGFtcCg0MDBweCwgNTB2dywgNTAwcHgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogMjRweDtcbn1cblxuLmVtcHR5LXBhZ2UgLmVtcHR5LXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLVByaW1hcnkpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLmVtcHR5LXBhZ2UgLmVtcHR5LXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS1CbGFjay01MCk7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogVGFza3MgKi9cblxuI3Rhc2tzLWNvbnRhaW5lcixcbiNjb21wbGV0ZWQtdGFza3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnRhc2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CbGFjay0wNSk7XG4gIHBhZGRpbmc6IDI0cHggMzJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tQmxhY2stMjUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzJweCBhdXRvIG1heC1jb250ZW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAwO1xuICBtaW4td2lkdGg6IDA7XG4gIGdhcDogMzJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuXG4udGFzayA+IGRpdiB7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLnRhc2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTk1LCAxMCUsIDg3JSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbi50YXNrIC5jb21wbGV0ZS10YXNrLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzayAubWFpbi1pbmZvcm1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50YXNrIC50aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1CbGFjayk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XG59XG5cbi50YXNrIC5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1CbGFjay01MCk7XG59XG5cbi50YXNrIC50aXRsZSxcbi50YXNrIC5kZXNjcmlwdGlvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGFzayAuc3ViLWluZm9ybWF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGFzayAucHJpb3JpdHkubG93IHtcbiAgY29sb3I6IHZhcigtLUxvdy1Qcmlvcml0eSk7XG4gIGZpbGw6IHZhcigtLUxvdy1Qcmlvcml0eSk7XG59XG5cbi50YXNrIC5wcmlvcml0eS5tZWRpdW0ge1xuICBjb2xvcjogdmFyKC0tTWVkaXVtLVByaW9yaXR5KTtcbiAgZmlsbDogdmFyKC0tTWVkaXVtLVByaW9yaXR5KTtcbn1cblxuLnRhc2sgLnByaW9yaXR5LmhpZ2gge1xuICBjb2xvcjogdmFyKC0tSGlnaC1Qcmlvcml0eSk7XG4gIGZpbGw6IHZhcigtLUhpZ2gtUHJpb3JpdHkpO1xufVxuXG4udGFzayAucHJpb3JpdHksXG4udGFzayAuZGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFzayAuZGF0ZSB7XG4gIGNvbG9yOiB2YXIoLS1CbGFjay03NSk7XG4gIGZpbGw6IHZhcigtLUJsYWNrLTc1KTtcbn1cblxuLnRhc2sgLmRhdGUtaWNvbixcbi50YXNrIC5wcmlvcml0eS1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogMjRweDtcbiAgbWF4LWhlaWdodDogMjRweDtcbn1cblxuLyogQ29tcGxldGVkIHRhc2tzICovXG4uY29tcGxldGVkLXRhc2tzLXNlY3Rpb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tQmxhY2stMjUpO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBwYWRkaW5nLXRvcDogMzJweDtcbn1cblxuLmNvbXBsZXRlZC10YXNrcy10aXRsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4jY29tcGxldGVkLXRhc2tzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNjb21wbGV0ZWQtdGFza3MtY29udGFpbmVyIC50YXNrIC50aXRsZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogdmFyKC0tQmxhY2stNzUpO1xufVxuXG4uZXhwYW5kLXRhc2tzIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKiBTZXQgMzYwIGRlZ3JlZXMgdG8gcm90YXRlIHRvIHJpZ2h0IGluc3RlYWQgdG8gdGhlIGxlZnQgKi9cbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgdHJhbnNpdGlvbjogMzAwbXM7XG59XG5cbi5jb21wbGV0ZWQtdGFza3Mtc2VjdGlvbi5zaG93IC5leHBhbmQtdGFza3Mge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2l0aW9uOiAzMDBtcztcbn1cblxuLmNvbXBsZXRlZC10YXNrcy1zZWN0aW9uLnNob3cgI2NvbXBsZXRlZC10YXNrcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4vKiBEaWFsb2dzICovXG5cbmRpYWxvZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBhbmltYXRpb24tbmFtZTogc2hvd0RpYWxvZztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcbn1cblxuZGlhbG9nLmNsb3Npbmcge1xuICBhbmltYXRpb24tbmFtZTogY2xvc2VEaWFsb2c7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5kaWFsb2c6OmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDk5O1xuICBhbmltYXRpb24tbmFtZTogc2hvd0RpYWxvZ0JhY2tkcm9wO1xuICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xufVxuXG5kaWFsb2cuY2xvc2luZzo6YmFja2Ryb3Age1xuICBhbmltYXRpb24tbmFtZTogY2xvc2VEaWFsb2dCYWNrZHJvcDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbmRpYWxvZyNuZXctbGlzdCxcbmRpYWxvZyNlZGl0LWxpc3QsXG5kaWFsb2cjbmV3LXRhc2ssXG5kaWFsb2cjZWRpdC10YXNrIHtcbiAgZ2FwOiAxNnB4O1xufVxuXG5kaWFsb2cjbmV3LXRhc2ssXG5kaWFsb2cjZWRpdC10YXNrIHtcbiAgd2lkdGg6IDU1MHB4O1xufVxuXG5kaWFsb2cgLmRpYWxvZy1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgZ2FwOiA4cHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDJweCA1NXB4IDAgNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XG4gIGNvbG9yOiB2YXIoLS1CbGFjayk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xuICBjYXJldC1jb2xvcjogdmFyKC0tUHJpbWFyeSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpwbGFjZWhvbGRlci1zaG93biB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLUJsYWNrLTI1KTtcbiAgdHJhbnNpdGlvbjogMjAwbXM7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cInRleHRcIl06bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcbiAgdHJhbnNpdGlvbjogMjAwbXM7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06OnBsYWNlaG9sZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLUJsYWNrLTUwKTtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLVByaW1hcnkpO1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG5idXR0b24ucHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tV2hpdGUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuXG5idXR0b24ucHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3OWE3ZmM7XG59XG5cbmJ1dHRvbi5wcmltYXJ5OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzUyY2M7XG59XG5cbmJ1dHRvbi5wcmltYXJ5OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzZDFmZjtcbiAgY29sb3I6ICNmMGY2ZmY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbmJ1dHRvbi5zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljYmNmO1xuICBjb2xvcjogdmFyKC0tQmxhY2stNzUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuXG5idXR0b24uc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3YTlhZjtcbn1cblxuYnV0dG9uLnNlY29uZGFyeTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODc4YTkyO1xufVxuXG4vKiBOZXcgbGlzdCBkaWFsb2cgKi9cbmRpYWxvZyNuZXctbGlzdCxcbmRpYWxvZyNlZGl0LWxpc3Qge1xuICB3aWR0aDogNTUwcHg7XG59XG5cbmRpYWxvZyNuZXctbGlzdCAudGl0bGUtY29udGFpbmVyLFxuZGlhbG9nI2VkaXQtbGlzdCAudGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaWFsb2cjbmV3LWxpc3QgLnRpdGxlLWljb24taW5wdXQsXG5kaWFsb2cjZWRpdC1saXN0IC50aXRsZS1pY29uLWlucHV0IHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1CbGFjay0yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jbGlzdC10aXRsZS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBOZXcgdGFzayBkaWFsb2cgKi9cblxuLyogVGFzayBpbmZvcm1hdGlvbiAqL1xuXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1CbGFjay03NSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJsYWNrLTA1KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcmVzaXplOiBub25lO1xufVxuXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tQmxhY2stNTApO1xufVxuXG4vKiBJbnB1dHMgKi9cblxuLyogVGV4dCBhbmQgdGV4dGFyZWEgaW5wdXQgKi9cbi50ZXh0LWlucHV0LWNvbnRhaW5lcixcbi50ZXh0YXJlYS1pbnB1dC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50ZXh0YXJlYS1pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGV4dC1jb3VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDRweDtcbiAgb3BhY2l0eTogMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdICsgLnRleHQtY291bnRlciB7XG4gIHJpZ2h0OiA0cHg7XG59XG5cbnRleHRhcmVhICsgLnRleHQtY291bnRlciB7XG4gIHJpZ2h0OiA4cHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzICsgLnRleHQtY291bnRlcixcbnRleHRhcmVhOmZvY3VzICsgLnRleHQtY291bnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG59XG5cbi8qIERhdGUgaW5wdXQgKi9cbiNkYXRlLWlucHV0IGlucHV0W3R5cGU9XCJkYXRlXCJdIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNzdweDtcbn1cblxuLyogQ2hhbmdlIGJ1dHRvbiBhbmQgbGFiZWwgY29sb3Igd2hlbiBzZWxlY3RpbmcgYSBkYXRlICovXG4jZGF0ZS1pbnB1dDpub3QoW2RhdGEtdmFsdWU9XCJcIl0pIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tUHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcbiAgZmlsbDogdmFyKC0tUHJpbWFyeSk7XG59XG5cbi8qIFNlbGVjdCBpbnB1dCBncmlkICovXG4uc2VsZWN0LWlucHV0LWdyaWQgLnNlbGVjdC1idXR0b24ge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLVByaW1hcnkpO1xufVxuXG4uc2VsZWN0LWlucHV0LWdyaWQgLmJ1dHRvbi1pY29uIHtcbiAgZmlsbDogdmFyKC0tUHJpbWFyeSk7XG59XG5cbi5zZWxlY3QtaW5wdXQtZ3JpZCAub3B0aW9ucy1ncmlkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBub25lO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCA2MHB4KTtcbiAgZ3JpZC1hdXRvLXJvd3M6IDYwcHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgZ2FwOiA2cHg7XG59XG5cbi5zZWxlY3QtaW5wdXQtZ3JpZC5leHBhbmQgLm9wdGlvbnMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5vcHRpb25zLWdyaWQgLm9wdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZpbGw6IHZhcigtLUJsYWNrLTc1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tQmxhY2stMjUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuXG4ub3B0aW9ucy1ncmlkIC5vcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CbGFjay0xMCk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbi8qIFNlbGVjdCBpbnB1dHMgKi9cbmRpYWxvZyNuZXctdGFzayAudGFzay1zZWxlY3QtaW5wdXRzLFxuZGlhbG9nI2VkaXQtdGFzayAudGFzay1zZWxlY3QtaW5wdXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5zZWxlY3QtaW5wdXQsXG4uc2VsZWN0LWlucHV0LWdyaWQsXG4ub3B0aW9ucy1jb250cm9sbGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2VsZWN0LWlucHV0IC5zZWxlY3QtYnV0dG9uLFxuLnNlbGVjdC1pbnB1dC1ncmlkIC5zZWxlY3QtYnV0dG9uLFxuI2RhdGUtaW5wdXQgLmRhdGUtYnV0dG9uLFxuLm9wdGlvbnMtY29udHJvbGxlciAub3B0aW9ucy1jb250cm9sbGVyLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBjb2xvcjogdmFyKC0tQmxhY2stNTApO1xuICBmaWxsOiB2YXIoLS1CbGFjay01MCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnNlbGVjdC1pbnB1dCAuYnV0dG9uLWljb24sXG4uc2VsZWN0LWxpc3QgLmJ1dHRvbi1pY29uLFxuI2RhdGUtaW5wdXQgLmJ1dHRvbi1pY29uIHtcbiAgbWluLXdpZHRoOiAyNHB4O1xuICBtYXgtaGVpZ2h0OiAyNHB4O1xufVxuXG4uc2VsZWN0LWlucHV0IC5zZWxlY3QtYnV0dG9uLFxuI2RhdGUtaW5wdXQgLmRhdGUtYnV0dG9uIHtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLUJsYWNrLTI1KTtcbn1cblxuI3NlbGVjdC1saXN0IGJ1dHRvbiB7XG4gIG1heC13aWR0aDogMTgwcHg7XG59XG5cbiNzZWxlY3QtbGlzdCAuYnV0dG9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5zZWxlY3QtaW5wdXQgLm9wdGlvbnMsXG4uc2VsZWN0LWlucHV0LWdyaWQgLm9wdGlvbnMtZ3JpZCxcbi5vcHRpb25zLWNvbnRyb2xsZXIgLm9wdGlvbnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcbiAgY29sb3I6IHZhcigtLUJsYWNrKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ub3B0aW9ucyA6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG59XG5cbi5vcHRpb25zIDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xufVxuXG4ub3B0aW9ucyAub3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcbiAgY29sb3I6IHZhcigtLUJsYWNrKTtcbiAgZmlsbDogdmFyKC0tQmxhY2spO1xuICBwYWRkaW5nOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ub3B0aW9ucyAub3B0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcbn1cblxuLnNlbGVjdC1pbnB1dC5leHBhbmQgLm9wdGlvbnMsXG4ub3B0aW9ucy1jb250cm9sbGVyLmV4cGFuZCAub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi8qIFNlbGVjdCBwcmlvcml0eSBpbnB1dCBjb2xvciBkZXBlbmRpbmcgdG8gc2VsZWN0ZWQgdmFsdWUgKi9cbiNzZWxlY3QtcHJpb3JpdHlbZGF0YS12YWx1ZT1cIkxvd1wiXSAuc2VsZWN0LWJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tTG93LVByaW9yaXR5KTtcbiAgY29sb3I6IHZhcigtLUxvdy1Qcmlvcml0eSk7XG4gIGZpbGw6IHZhcigtLUxvdy1Qcmlvcml0eSk7XG59XG5cbiNzZWxlY3QtcHJpb3JpdHlbZGF0YS12YWx1ZT1cIk1lZGl1bVwiXSAuc2VsZWN0LWJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tTWVkaXVtLVByaW9yaXR5KTtcbiAgY29sb3I6IHZhcigtLU1lZGl1bS1Qcmlvcml0eSk7XG4gIGZpbGw6IHZhcigtLU1lZGl1bS1Qcmlvcml0eSk7XG59XG5cbiNzZWxlY3QtcHJpb3JpdHlbZGF0YS12YWx1ZT1cIkhpZ2hcIl0gLnNlbGVjdC1idXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLUhpZ2gtUHJpb3JpdHkpO1xuICBjb2xvcjogdmFyKC0tSGlnaC1Qcmlvcml0eSk7XG4gIGZpbGw6IHZhcigtLUhpZ2gtUHJpb3JpdHkpO1xufVxuXG4vKiBTZWxlY3QgcHJpb3JpdHkgaW5wdXQgZWxlbWVudHMgdGV4dCBjb2xvciAqL1xuI3NlbGVjdC1wcmlvcml0eSAub3B0aW9uW2RhdGEtdmFsdWU9XCJQcmlvcml0eVwiXSB7XG4gIGNvbG9yOiB2YXIoLS1CbGFjay01MCk7XG4gIGZpbGw6IHZhcigtLUJsYWNrLTUwKTtcbn1cblxuI3NlbGVjdC1wcmlvcml0eSAub3B0aW9uW2RhdGEtdmFsdWU9XCJMb3dcIl0ge1xuICBjb2xvcjogdmFyKC0tTG93LVByaW9yaXR5KTtcbiAgZmlsbDogdmFyKC0tTG93LVByaW9yaXR5KTtcbn1cblxuI3NlbGVjdC1wcmlvcml0eSAub3B0aW9uW2RhdGEtdmFsdWU9XCJNZWRpdW1cIl0ge1xuICBjb2xvcjogdmFyKC0tTWVkaXVtLVByaW9yaXR5KTtcbiAgZmlsbDogdmFyKC0tTWVkaXVtLVByaW9yaXR5KTtcbn1cblxuI3NlbGVjdC1wcmlvcml0eSAub3B0aW9uW2RhdGEtdmFsdWU9XCJIaWdoXCJdIHtcbiAgY29sb3I6IHZhcigtLUhpZ2gtUHJpb3JpdHkpO1xuICBmaWxsOiB2YXIoLS1IaWdoLVByaW9yaXR5KTtcbn1cblxuLyogTGlzdCBpbnB1dCBidXR0b24gY29sb3IgKi9cbiNzZWxlY3QtbGlzdDpub3QoW2RhdGEtdmFsdWU9XCJcIl0pIC5zZWxlY3QtYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1UYXNrLUxpc3QpO1xuICBjb2xvcjogdmFyKC0tVGFzay1MaXN0KTtcbiAgZmlsbDogdmFyKC0tVGFzay1MaXN0KTtcbn1cblxuI3NlbGVjdC1saXN0IC5vcHRpb24ge1xuICBjb2xvcjogdmFyKC0tQmxhY2stNzUpO1xuICBmaWxsOiB2YXIoLS1CbGFjay03NSk7XG59XG5cbi8qIE9wdGlvbnMgY29udHJvbGxlciBjb2xvcnMgKi9cbi50YXNrLW1vcmUtb3B0aW9ucyAuZGVsZXRlLXRhc2ssXG4ubGlzdC1tb3JlLW9wdGlvbnMgLmRlbGV0ZS1saXN0IHtcbiAgY29sb3I6IHZhcigtLURlbGV0ZS1BY2NlbnQpO1xuICBmaWxsOiB2YXIoLS1EZWxldGUtQWNjZW50KTtcbn1cblxuLyogU1ZHIGljb25zIHNpemVzICovXG4uYnV0dG9uLWljb24sXG4ub3B0aW9uLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4vKiBUYXNrIGRldGFpbHMgKi9cbmRpYWxvZyN0YXNrLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNjAwcHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbmRpYWxvZyN0YXNrLWRldGFpbHMgLmFjdGlvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGdhcDogNHB4O1xufVxuXG5kaWFsb2cjdGFzay1kZXRhaWxzIC5hY3Rpb25zLWNvbnRhaW5lciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XG4gIHBhZGRpbmc6IDZweDtcbiAgZmlsbDogdmFyKC0tQmxhY2spO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuXG5kaWFsb2cjdGFzay1kZXRhaWxzIC5hY3Rpb25zLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CbGFjay0xMCk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbmRpYWxvZyN0YXNrLWRldGFpbHMgLmFjdGlvbnMtY29udGFpbmVyIC5idXR0b24taWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5kaWFsb2cjdGFzay1kZXRhaWxzIC5tYWluLWluZm9ybWF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLm1haW4taW5mb3JtYXRpb24gLnRhc2stdGl0bGUge1xuICBjb2xvcjogdmFyKC0tQmxhY2spO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4ubWFpbi1pbmZvcm1hdGlvbiAudGFzay1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogdmFyKC0tQmxhY2stNzUpO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnRhc2stZGVzY3JpcHRpb24uc2Nyb2xsLXRleHQge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbmRpYWxvZyN0YXNrLWRldGFpbHMgLnNlY29uZGFyeS1pbmZvcm1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLUJsYWNrLTI1KTtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi5zZWNvbmRhcnktaW5mb3JtYXRpb24gLmluZm8tZWxlbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xufVxuXG4uaW5mby1lbGVtZW50IC5pY29uIHtcbiAgbWluLXdpZHRoOiAyNHB4O1xuICBtYXgtaGVpZ2h0OiAyNHB4O1xufVxuXG4uaW5mby1lbGVtZW50LnRhc2stZGF0ZSB7XG4gIGNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcbiAgZmlsbDogdmFyKC0tUHJpbWFyeSk7XG59XG5cbi5pbmZvLWVsZW1lbnQudGFzay1wcmlvcml0eVtkYXRhLXZhbHVlPVwiTG93XCJdIHtcbiAgY29sb3I6IHZhcigtLUxvdy1Qcmlvcml0eSk7XG4gIGZpbGw6IHZhcigtLUxvdy1Qcmlvcml0eSk7XG59XG5cbi5pbmZvLWVsZW1lbnQudGFzay1wcmlvcml0eVtkYXRhLXZhbHVlPVwiTWVkaXVtXCJdIHtcbiAgY29sb3I6IHZhcigtLU1lZGl1bS1Qcmlvcml0eSk7XG4gIGZpbGw6IHZhcigtLU1lZGl1bS1Qcmlvcml0eSk7XG59XG5cbi5pbmZvLWVsZW1lbnQudGFzay1wcmlvcml0eVtkYXRhLXZhbHVlPVwiSGlnaFwiXSB7XG4gIGNvbG9yOiB2YXIoLS1IaWdoLVByaW9yaXR5KTtcbiAgZmlsbDogdmFyKC0tSGlnaC1Qcmlvcml0eSk7XG59XG5cbi5pbmZvLWVsZW1lbnQudGFzay1saXN0IHtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgY29sb3I6IHZhcigtLVRhc2stTGlzdCk7XG4gIGZpbGw6IHZhcigtLVRhc2stTGlzdCk7XG59XG5cbi50YXNrLWxpc3QgLmxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8qIERlbGV0ZSBsaXN0IGFuZCBEZWxldGUgdGFzayAqL1xuZGlhbG9nI2RlbGV0ZS1saXN0LFxuZGlhbG9nI2RlbGV0ZS10YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBnYXA6IDMycHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgY29sb3I6IHZhcigtLUJsYWNrKTtcbn1cblxuZGlhbG9nI2RlbGV0ZS1saXN0IC5tZXNzYWdlLFxuZGlhbG9nI2RlbGV0ZS10YXNrIC5tZXNzYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG5kaWFsb2cjZGVsZXRlLWxpc3QgLm1lc3NhZ2UtdGl0bGUsXG5kaWFsb2cjZGVsZXRlLXRhc2sgLm1lc3NhZ2UtdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuZGlhbG9nI2RlbGV0ZS1saXN0IC5zdWItbWVzc2FnZSxcbmRpYWxvZyNkZWxldGUtdGFzayAuc3ViLW1lc3NhZ2Uge1xuICBjb2xvcjogdmFyKC0tQmxhY2stNzUpO1xufVxuXG5kaWFsb2cjZGVsZXRlLWxpc3QgYnV0dG9uLnByaW1hcnksXG5kaWFsb2cjZGVsZXRlLXRhc2sgYnV0dG9uLnByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1EZWxldGUtQWNjZW50KTtcbn1cblxuLmxpc3QtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJsYWNrLTA1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cblxuLmxpc3QtaW5mbyAubGlzdC1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZpbGw6IHZhcigtLVByaW1hcnkpO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubGlzdC1pbmZvIC5saXN0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcbn1cblxuLyogTm90aWZpY2F0aW9ucyAqL1xuI25vdGlmaWNhdGlvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAzNTBweDtcbiAgYm90dG9tOiAxNnB4O1xuICByaWdodDogMTZweDtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTQzLCA0NyUsIDQ1JSk7XG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XG4gIHBhZGRpbmc6IDI2cHggMjJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGFuaW1hdGlvbi1uYW1lOiBzaG93Tm90aWZpY2F0aW9uO1xuICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xufVxuXG4ubm90aWZpY2F0aW9uLmNsb3Npbmcge1xuICBhbmltYXRpb24tbmFtZTogY2xvc2VOb3RpZmljYXRpb247XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubm90aWZpY2F0aW9uLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbn1cblxuLm5vdGlmaWNhdGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY2xvc2Utbm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICByaWdodDogOHB4O1xuICB0b3A6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xuICBwYWRkaW5nOiA2cHg7XG4gIHRyYW5zaXRpb246IDIwMG1zO1xufVxuXG4uY2xvc2Utbm90aWZpY2F0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDE4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuXG4ubm90aWZpY2F0aW9uOmhvdmVyIC5jbG9zZS1ub3RpZmljYXRpb24ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiAyMDBtcztcbn1cblxuLm5vdGlmaWNhdGlvbi1pY29uLFxuLmNsb3NlLW5vdGlmaWNhdGlvbiAuYnV0dG9uLWljb24ge1xuICBmaWxsOiB2YXIoLS1XaGl0ZSk7XG59XG5cbi5jbG9zZS1ub3RpZmljYXRpb24gLmJ1dHRvbi1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5idXR0b24taWNvbiBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogQW5pbWF0aW9ucyAqL1xuXG5Aa2V5ZnJhbWVzIHNob3dEaWFsb2cge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDEwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNob3dEaWFsb2dCYWNrZHJvcCB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDk5O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY2xvc2VEaWFsb2cge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDEwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY2xvc2VEaWFsb2dCYWNrZHJvcCB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5OTtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hvd05vdGlmaWNhdGlvbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMHB4LCAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY2xvc2VOb3RpZmljYXRpb24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwcHgsIDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4vKiBNZWRpYSBxdWVyaWVzICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAudGFzayAuc3ViLWluZm9ybWF0aW9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtDQUFrQzs7RUFFbEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQiw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCOztFQUU5QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVB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QUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsZUFBZTs7QUFFZjtFQUNFO0lBQ0UsZ0NBQWdDO0lBQ2hDLFVBQVU7RUFDWjtFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7SUFDOUIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQ0FBZ0M7SUFDaEMsVUFBVTtFQUNaO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDhCQUE4QjtJQUM5QixVQUFVO0VBQ1o7RUFDQTtJQUNFLGdDQUFnQztJQUNoQyxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixNQUFNO0VBQ1I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC8qIFR5cG9ncmFwaHkgKi9cXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuXFxuICAvKiBDb2xvcnM6ICovXFxuICAtLUJsYWNrOiAjMjUyNzJjO1xcbiAgLS1CbGFjay03NTogIzI1MjcyY2JmO1xcbiAgLS1CbGFjay01MDogIzI1MjcyYzgwO1xcbiAgLS1CbGFjay0yNTogIzI1MjcyYzQwO1xcbiAgLS1CbGFjay0xMDogIzI1MjcyYzFhO1xcbiAgLS1CbGFjay0wNTogIzI1MjcyYzBkO1xcbiAgLS1XaGl0ZTogI2ZhZmFmYTtcXG4gIC0tUHJpbWFyeTogIzRjN2RmYjtcXG4gIC0tRGVsZXRlLUFjY2VudDogI2VjM2E0ZjtcXG4gIC0tSGlnaC1Qcmlvcml0eTogI2VlNGUzOTtcXG4gIC0tTWVkaXVtLVByaW9yaXR5OiAjZWE3ZTFhO1xcbiAgLS1Mb3ctUHJpb3JpdHk6ICM4OTcxNWQ7XFxuICAtLVRhc2stTGlzdDogIzJmOWU2MjtcXG4gIC0tTGlzdC1CYWNrZ3JvdW5kLUdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2NmEyZTggMCUsICM5ODliZTkgMTAwJSk7XFxufVxcblxcbmJvZHkge1xcbiAgY29sb3I6IHZhcigtLUJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyLjUzNHJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcblxcbiNzaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJsYWNrLTA1KTtcXG4gIHBhZGRpbmc6IDI2cHggMzJweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLUJsYWNrLTI1KTtcXG4gIHdpZHRoOiAyNTZweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMycHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmFwcC1pbmZvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4jYXBwLWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGZpbGw6IHZhcigtLVByaW1hcnkpO1xcbn1cXG5cXG4jYXBwLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnNpZGViYXItbGlzdHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLUJsYWNrLTI1KTtcXG4gIHBhZGRpbmctdG9wOiAzMnB4O1xcbn1cXG5cXG4uc2lkZWJhci1saXN0cy1jb250YWluZXIgLnRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjay01MCk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi51c2VyLWxpc3RzIC5saXN0LXRpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbiNjcmVhdGUtbGlzdC1idXR0b24ge1xcbiAgcGFkZGluZzogNHB4O1xcbiAgdHJhbnNpdGlvbjogMTAwbXM7XFxufVxcblxcbiNjcmVhdGUtbGlzdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmxhY2stMTApO1xcbiAgdHJhbnNpdGlvbjogMTAwbXM7XFxufVxcblxcbiNjcmVhdGUtbGlzdC1idXR0b24gLmNyZWF0ZS1saXN0LWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGZpbGw6IHZhcigtLUJsYWNrLTUwKTtcXG59XFxuXFxuLmxpc3RzLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5saXN0LXNpZGViYXItZWxlbWVudCB7XFxuICBjb2xvcjogdmFyKC0tQmxhY2spO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDRweDtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG5cXG4ubGlzdC1zaWRlYmFyLWVsZW1lbnQgLmxpc3Qtc2lkZWJhci1lbGVtZW50LWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtaW4td2lkdGg6IDI0cHg7XFxuICBtYXgtaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4ubGlzdC1zaWRlYmFyLWVsZW1lbnQgLmxpc3Qtc2lkZWJhci1lbGVtZW50LWxhYmVsIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5saXN0LXNpZGViYXItZWxlbWVudC5zZWxlY3RlZCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxufVxcblxcbi5saXN0LXNpZGViYXItZWxlbWVudDpob3ZlcixcXG4ubGlzdC1zaWRlYmFyLWVsZW1lbnQuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmxhY2stMTApO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxufVxcblxcbi5sb3dlci1zaWRlYmFyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNjcmVkaXRzIHtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjay01MCk7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG5cXG4jY3JlZGl0cyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNjcmVkaXRzIGEsXFxuI2NyZWRpdHMgYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcXG59XFxuXFxuLyogTGlzdCBjb250ZW50ICovXFxuXFxuI2xpc3QtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTZweCk7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuI2xpc3QtYmFja2dyb3VuZCB7XFxuICBoZWlnaHQ6IDE1MnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tTGlzdC1CYWNrZ3JvdW5kLUdyYWRpZW50KTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogNDhweCBhdXRvO1xcbiAgd2lkdGg6IGNsYW1wKDQwMHB4LCA1MHZ3LCA4MzJweCk7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWF4LWNvbnRlbnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgbWluLWhlaWdodDogMDtcXG4gIGdhcDogMjZweDtcXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uICNsaXN0LXRpdGxlIHtcXG4gIG1pbi13aWR0aDogMDtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIC5vcHRpb25zLWNvbnRyb2xsZXItYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIC5vcHRpb25zLWNvbnRyb2xsZXItYnV0dG9uOmhvdmVyLFxcbi50aXRsZS1zZWN0aW9uIC5vcHRpb25zLWNvbnRyb2xsZXItYnV0dG9uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJsYWNrLTEwKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIC5saXN0LW1vcmUtb3B0aW9ucyAuYnV0dG9uLWljb24ge1xcbiAgZmlsbDogdmFyKC0tQmxhY2spO1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbiNuZXctdGFzay1idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyNHB4IDMycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHZhcigtLUJsYWNrLTUwKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLUJsYWNrLTI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxufVxcblxcbiNuZXctdGFzay1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NCUpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcXG59XFxuXFxuLmVtcHR5LXBhZ2Uge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDQ4cHggYXV0bztcXG4gIHdpZHRoOiBjbGFtcCg0MDBweCwgNTB2dywgNTAwcHgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4uZW1wdHktcGFnZSAuZW1wdHktdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLVByaW1hcnkpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uZW1wdHktcGFnZSAuZW1wdHktc3VidGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogdmFyKC0tQmxhY2stNTApO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBUYXNrcyAqL1xcblxcbiN0YXNrcy1jb250YWluZXIsXFxuI2NvbXBsZXRlZC10YXNrcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmxhY2stMDUpO1xcbiAgcGFkZGluZzogMjRweCAzMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tQmxhY2stMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzJweCBhdXRvIG1heC1jb250ZW50O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBtaW4td2lkdGg6IDA7XFxuICBnYXA6IDMycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xcbn1cXG5cXG4udGFzayA+IGRpdiB7XFxuICBtaW4taGVpZ2h0OiAwO1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTk1LCAxMCUsIDg3JSk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xcbn1cXG5cXG4udGFzayAuY29tcGxldGUtdGFzay1idXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtaW4td2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrIC5tYWluLWluZm9ybWF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzayAudGl0bGUge1xcbiAgY29sb3I6IHZhcigtLUJsYWNrKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuMzc1cmVtO1xcbn1cXG5cXG4udGFzayAuZGVzY3JpcHRpb24ge1xcbiAgY29sb3I6IHZhcigtLUJsYWNrLTUwKTtcXG59XFxuXFxuLnRhc2sgLnRpdGxlLFxcbi50YXNrIC5kZXNjcmlwdGlvbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4udGFzayAuc3ViLWluZm9ybWF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4udGFzayAucHJpb3JpdHkubG93IHtcXG4gIGNvbG9yOiB2YXIoLS1Mb3ctUHJpb3JpdHkpO1xcbiAgZmlsbDogdmFyKC0tTG93LVByaW9yaXR5KTtcXG59XFxuXFxuLnRhc2sgLnByaW9yaXR5Lm1lZGl1bSB7XFxuICBjb2xvcjogdmFyKC0tTWVkaXVtLVByaW9yaXR5KTtcXG4gIGZpbGw6IHZhcigtLU1lZGl1bS1Qcmlvcml0eSk7XFxufVxcblxcbi50YXNrIC5wcmlvcml0eS5oaWdoIHtcXG4gIGNvbG9yOiB2YXIoLS1IaWdoLVByaW9yaXR5KTtcXG4gIGZpbGw6IHZhcigtLUhpZ2gtUHJpb3JpdHkpO1xcbn1cXG5cXG4udGFzayAucHJpb3JpdHksXFxuLnRhc2sgLmRhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sgLmRhdGUge1xcbiAgY29sb3I6IHZhcigtLUJsYWNrLTc1KTtcXG4gIGZpbGw6IHZhcigtLUJsYWNrLTc1KTtcXG59XFxuXFxuLnRhc2sgLmRhdGUtaWNvbixcXG4udGFzayAucHJpb3JpdHktaWNvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1pbi13aWR0aDogMjRweDtcXG4gIG1heC1oZWlnaHQ6IDI0cHg7XFxufVxcblxcbi8qIENvbXBsZXRlZCB0YXNrcyAqL1xcbi5jb21wbGV0ZWQtdGFza3Mtc2VjdGlvbiB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tQmxhY2stMjUpO1xcbiAgbWFyZ2luLXRvcDogMzJweDtcXG4gIHBhZGRpbmctdG9wOiAzMnB4O1xcbn1cXG5cXG4uY29tcGxldGVkLXRhc2tzLXRpdGxlLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjRweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG5cXG4jY29tcGxldGVkLXRhc2tzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY29tcGxldGVkLXRhc2tzLWNvbnRhaW5lciAudGFzayAudGl0bGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogdmFyKC0tQmxhY2stNzUpO1xcbn1cXG5cXG4uZXhwYW5kLXRhc2tzIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLyogU2V0IDM2MCBkZWdyZWVzIHRvIHJvdGF0ZSB0byByaWdodCBpbnN0ZWFkIHRvIHRoZSBsZWZ0ICovXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxufVxcblxcbi5jb21wbGV0ZWQtdGFza3Mtc2VjdGlvbi5zaG93IC5leHBhbmQtdGFza3Mge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbn1cXG5cXG4uY29tcGxldGVkLXRhc2tzLXNlY3Rpb24uc2hvdyAjY29tcGxldGVkLXRhc2tzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBEaWFsb2dzICovXFxuXFxuZGlhbG9nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBhbmltYXRpb24tbmFtZTogc2hvd0RpYWxvZztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxufVxcblxcbmRpYWxvZy5jbG9zaW5nIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBjbG9zZURpYWxvZztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOTk7XFxuICBhbmltYXRpb24tbmFtZTogc2hvd0RpYWxvZ0JhY2tkcm9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG59XFxuXFxuZGlhbG9nLmNsb3Npbmc6OmJhY2tkcm9wIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBjbG9zZURpYWxvZ0JhY2tkcm9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5kaWFsb2cjbmV3LWxpc3QsXFxuZGlhbG9nI2VkaXQtbGlzdCxcXG5kaWFsb2cjbmV3LXRhc2ssXFxuZGlhbG9nI2VkaXQtdGFzayB7XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbmRpYWxvZyNuZXctdGFzayxcXG5kaWFsb2cjZWRpdC10YXNrIHtcXG4gIHdpZHRoOiA1NTBweDtcXG59XFxuXFxuZGlhbG9nIC5kaWFsb2ctYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiAycHggNTVweCAwIDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjayk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tUHJpbWFyeSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOnBsYWNlaG9sZGVyLXNob3duIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLUJsYWNrLTI1KTtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLVByaW1hcnkpO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogdmFyKC0tQmxhY2stNTApO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tUHJpbWFyeSk7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5cXG5idXR0b24ucHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xcbn1cXG5cXG5idXR0b24ucHJpbWFyeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzlhN2ZjO1xcbn1cXG5cXG5idXR0b24ucHJpbWFyeTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNTJjYztcXG59XFxuXFxuYnV0dG9uLnByaW1hcnk6ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzZDFmZjtcXG4gIGNvbG9yOiAjZjBmNmZmO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuYnV0dG9uLnNlY29uZGFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljYmNmO1xcbiAgY29sb3I6IHZhcigtLUJsYWNrLTc1KTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxufVxcblxcbmJ1dHRvbi5zZWNvbmRhcnk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3YTlhZjtcXG59XFxuXFxuYnV0dG9uLnNlY29uZGFyeTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3OGE5MjtcXG59XFxuXFxuLyogTmV3IGxpc3QgZGlhbG9nICovXFxuZGlhbG9nI25ldy1saXN0LFxcbmRpYWxvZyNlZGl0LWxpc3Qge1xcbiAgd2lkdGg6IDU1MHB4O1xcbn1cXG5cXG5kaWFsb2cjbmV3LWxpc3QgLnRpdGxlLWNvbnRhaW5lcixcXG5kaWFsb2cjZWRpdC1saXN0IC50aXRsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTJweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpYWxvZyNuZXctbGlzdCAudGl0bGUtaWNvbi1pbnB1dCxcXG5kaWFsb2cjZWRpdC1saXN0IC50aXRsZS1pY29uLWlucHV0IHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tQmxhY2stMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbGlzdC10aXRsZS1pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogTmV3IHRhc2sgZGlhbG9nICovXFxuXFxuLyogVGFzayBpbmZvcm1hdGlvbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjay03NSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CbGFjay0wNSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjay01MCk7XFxufVxcblxcbi8qIElucHV0cyAqL1xcblxcbi8qIFRleHQgYW5kIHRleHRhcmVhIGlucHV0ICovXFxuLnRleHQtaW5wdXQtY29udGFpbmVyLFxcbi50ZXh0YXJlYS1pbnB1dC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGV4dGFyZWEtaW5wdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50ZXh0LWNvdW50ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA0cHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogdmFyKC0tUHJpbWFyeSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSArIC50ZXh0LWNvdW50ZXIge1xcbiAgcmlnaHQ6IDRweDtcXG59XFxuXFxudGV4dGFyZWEgKyAudGV4dC1jb3VudGVyIHtcXG4gIHJpZ2h0OiA4cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyArIC50ZXh0LWNvdW50ZXIsXFxudGV4dGFyZWE6Zm9jdXMgKyAudGV4dC1jb3VudGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xcbn1cXG5cXG4vKiBEYXRlIGlucHV0ICovXFxuI2RhdGUtaW5wdXQgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA3N3B4O1xcbn1cXG5cXG4vKiBDaGFuZ2UgYnV0dG9uIGFuZCBsYWJlbCBjb2xvciB3aGVuIHNlbGVjdGluZyBhIGRhdGUgKi9cXG4jZGF0ZS1pbnB1dDpub3QoW2RhdGEtdmFsdWU9XFxcIlxcXCJdKSBidXR0b24ge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcXG4gIGZpbGw6IHZhcigtLVByaW1hcnkpO1xcbn1cXG5cXG4vKiBTZWxlY3QgaW5wdXQgZ3JpZCAqL1xcbi5zZWxlY3QtaW5wdXQtZ3JpZCAuc2VsZWN0LWJ1dHRvbiB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1QcmltYXJ5KTtcXG59XFxuXFxuLnNlbGVjdC1pbnB1dC1ncmlkIC5idXR0b24taWNvbiB7XFxuICBmaWxsOiB2YXIoLS1QcmltYXJ5KTtcXG59XFxuXFxuLnNlbGVjdC1pbnB1dC1ncmlkIC5vcHRpb25zLWdyaWQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDYwcHgpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDYwcHg7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBnYXA6IDZweDtcXG59XFxuXFxuLnNlbGVjdC1pbnB1dC1ncmlkLmV4cGFuZCAub3B0aW9ucy1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5vcHRpb25zLWdyaWQgLm9wdGlvbiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZmlsbDogdmFyKC0tQmxhY2stNzUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tQmxhY2stMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcXG59XFxuXFxuLm9wdGlvbnMtZ3JpZCAub3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJsYWNrLTEwKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxufVxcblxcbi8qIFNlbGVjdCBpbnB1dHMgKi9cXG5kaWFsb2cjbmV3LXRhc2sgLnRhc2stc2VsZWN0LWlucHV0cyxcXG5kaWFsb2cjZWRpdC10YXNrIC50YXNrLXNlbGVjdC1pbnB1dHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnNlbGVjdC1pbnB1dCxcXG4uc2VsZWN0LWlucHV0LWdyaWQsXFxuLm9wdGlvbnMtY29udHJvbGxlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWxlY3QtaW5wdXQgLnNlbGVjdC1idXR0b24sXFxuLnNlbGVjdC1pbnB1dC1ncmlkIC5zZWxlY3QtYnV0dG9uLFxcbiNkYXRlLWlucHV0IC5kYXRlLWJ1dHRvbixcXG4ub3B0aW9ucy1jb250cm9sbGVyIC5vcHRpb25zLWNvbnRyb2xsZXItYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cHg7XFxuICBjb2xvcjogdmFyKC0tQmxhY2stNTApO1xcbiAgZmlsbDogdmFyKC0tQmxhY2stNTApO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uc2VsZWN0LWlucHV0IC5idXR0b24taWNvbixcXG4uc2VsZWN0LWxpc3QgLmJ1dHRvbi1pY29uLFxcbiNkYXRlLWlucHV0IC5idXR0b24taWNvbiB7XFxuICBtaW4td2lkdGg6IDI0cHg7XFxuICBtYXgtaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uc2VsZWN0LWlucHV0IC5zZWxlY3QtYnV0dG9uLFxcbiNkYXRlLWlucHV0IC5kYXRlLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiA2cHggMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLUJsYWNrLTI1KTtcXG59XFxuXFxuI3NlbGVjdC1saXN0IGJ1dHRvbiB7XFxuICBtYXgtd2lkdGg6IDE4MHB4O1xcbn1cXG5cXG4jc2VsZWN0LWxpc3QgLmJ1dHRvbi1sYWJlbCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uc2VsZWN0LWlucHV0IC5vcHRpb25zLFxcbi5zZWxlY3QtaW5wdXQtZ3JpZCAub3B0aW9ucy1ncmlkLFxcbi5vcHRpb25zLWNvbnRyb2xsZXIgLm9wdGlvbnMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tQmxhY2spO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLm9wdGlvbnMgOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XFxufVxcblxcbi5vcHRpb25zIDpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XFxufVxcblxcbi5vcHRpb25zIC5vcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjayk7XFxuICBmaWxsOiB2YXIoLS1CbGFjayk7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm9wdGlvbnMgLm9wdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcXG59XFxuXFxuLnNlbGVjdC1pbnB1dC5leHBhbmQgLm9wdGlvbnMsXFxuLm9wdGlvbnMtY29udHJvbGxlci5leHBhbmQgLm9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogU2VsZWN0IHByaW9yaXR5IGlucHV0IGNvbG9yIGRlcGVuZGluZyB0byBzZWxlY3RlZCB2YWx1ZSAqL1xcbiNzZWxlY3QtcHJpb3JpdHlbZGF0YS12YWx1ZT1cXFwiTG93XFxcIl0gLnNlbGVjdC1idXR0b24ge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1Mb3ctUHJpb3JpdHkpO1xcbiAgY29sb3I6IHZhcigtLUxvdy1Qcmlvcml0eSk7XFxuICBmaWxsOiB2YXIoLS1Mb3ctUHJpb3JpdHkpO1xcbn1cXG5cXG4jc2VsZWN0LXByaW9yaXR5W2RhdGEtdmFsdWU9XFxcIk1lZGl1bVxcXCJdIC5zZWxlY3QtYnV0dG9uIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tTWVkaXVtLVByaW9yaXR5KTtcXG4gIGNvbG9yOiB2YXIoLS1NZWRpdW0tUHJpb3JpdHkpO1xcbiAgZmlsbDogdmFyKC0tTWVkaXVtLVByaW9yaXR5KTtcXG59XFxuXFxuI3NlbGVjdC1wcmlvcml0eVtkYXRhLXZhbHVlPVxcXCJIaWdoXFxcIl0gLnNlbGVjdC1idXR0b24ge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1IaWdoLVByaW9yaXR5KTtcXG4gIGNvbG9yOiB2YXIoLS1IaWdoLVByaW9yaXR5KTtcXG4gIGZpbGw6IHZhcigtLUhpZ2gtUHJpb3JpdHkpO1xcbn1cXG5cXG4vKiBTZWxlY3QgcHJpb3JpdHkgaW5wdXQgZWxlbWVudHMgdGV4dCBjb2xvciAqL1xcbiNzZWxlY3QtcHJpb3JpdHkgLm9wdGlvbltkYXRhLXZhbHVlPVxcXCJQcmlvcml0eVxcXCJdIHtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjay01MCk7XFxuICBmaWxsOiB2YXIoLS1CbGFjay01MCk7XFxufVxcblxcbiNzZWxlY3QtcHJpb3JpdHkgLm9wdGlvbltkYXRhLXZhbHVlPVxcXCJMb3dcXFwiXSB7XFxuICBjb2xvcjogdmFyKC0tTG93LVByaW9yaXR5KTtcXG4gIGZpbGw6IHZhcigtLUxvdy1Qcmlvcml0eSk7XFxufVxcblxcbiNzZWxlY3QtcHJpb3JpdHkgLm9wdGlvbltkYXRhLXZhbHVlPVxcXCJNZWRpdW1cXFwiXSB7XFxuICBjb2xvcjogdmFyKC0tTWVkaXVtLVByaW9yaXR5KTtcXG4gIGZpbGw6IHZhcigtLU1lZGl1bS1Qcmlvcml0eSk7XFxufVxcblxcbiNzZWxlY3QtcHJpb3JpdHkgLm9wdGlvbltkYXRhLXZhbHVlPVxcXCJIaWdoXFxcIl0ge1xcbiAgY29sb3I6IHZhcigtLUhpZ2gtUHJpb3JpdHkpO1xcbiAgZmlsbDogdmFyKC0tSGlnaC1Qcmlvcml0eSk7XFxufVxcblxcbi8qIExpc3QgaW5wdXQgYnV0dG9uIGNvbG9yICovXFxuI3NlbGVjdC1saXN0Om5vdChbZGF0YS12YWx1ZT1cXFwiXFxcIl0pIC5zZWxlY3QtYnV0dG9uIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tVGFzay1MaXN0KTtcXG4gIGNvbG9yOiB2YXIoLS1UYXNrLUxpc3QpO1xcbiAgZmlsbDogdmFyKC0tVGFzay1MaXN0KTtcXG59XFxuXFxuI3NlbGVjdC1saXN0IC5vcHRpb24ge1xcbiAgY29sb3I6IHZhcigtLUJsYWNrLTc1KTtcXG4gIGZpbGw6IHZhcigtLUJsYWNrLTc1KTtcXG59XFxuXFxuLyogT3B0aW9ucyBjb250cm9sbGVyIGNvbG9ycyAqL1xcbi50YXNrLW1vcmUtb3B0aW9ucyAuZGVsZXRlLXRhc2ssXFxuLmxpc3QtbW9yZS1vcHRpb25zIC5kZWxldGUtbGlzdCB7XFxuICBjb2xvcjogdmFyKC0tRGVsZXRlLUFjY2VudCk7XFxuICBmaWxsOiB2YXIoLS1EZWxldGUtQWNjZW50KTtcXG59XFxuXFxuLyogU1ZHIGljb25zIHNpemVzICovXFxuLmJ1dHRvbi1pY29uLFxcbi5vcHRpb24taWNvbiB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuXFxuLyogVGFzayBkZXRhaWxzICovXFxuZGlhbG9nI3Rhc2stZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbmRpYWxvZyN0YXNrLWRldGFpbHMgLmFjdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbmRpYWxvZyN0YXNrLWRldGFpbHMgLmFjdGlvbnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBmaWxsOiB2YXIoLS1CbGFjayk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xcbn1cXG5cXG5kaWFsb2cjdGFzay1kZXRhaWxzIC5hY3Rpb25zLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmxhY2stMTApO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcXG59XFxuXFxuZGlhbG9nI3Rhc2stZGV0YWlscyAuYWN0aW9ucy1jb250YWluZXIgLmJ1dHRvbi1pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5kaWFsb2cjdGFzay1kZXRhaWxzIC5tYWluLWluZm9ybWF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4ubWFpbi1pbmZvcm1hdGlvbiAudGFzay10aXRsZSB7XFxuICBjb2xvcjogdmFyKC0tQmxhY2spO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ubWFpbi1pbmZvcm1hdGlvbiAudGFzay1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjay03NSk7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24uc2Nyb2xsLXRleHQge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG5kaWFsb2cjdGFzay1kZXRhaWxzIC5zZWNvbmRhcnktaW5mb3JtYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjRweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1CbGFjay0yNSk7XFxuICBwYWRkaW5nLXRvcDogMTZweDtcXG59XFxuXFxuLnNlY29uZGFyeS1pbmZvcm1hdGlvbiAuaW5mby1lbGVtZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLmluZm8tZWxlbWVudCAuaWNvbiB7XFxuICBtaW4td2lkdGg6IDI0cHg7XFxuICBtYXgtaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uaW5mby1lbGVtZW50LnRhc2stZGF0ZSB7XFxuICBjb2xvcjogdmFyKC0tUHJpbWFyeSk7XFxuICBmaWxsOiB2YXIoLS1QcmltYXJ5KTtcXG59XFxuXFxuLmluZm8tZWxlbWVudC50YXNrLXByaW9yaXR5W2RhdGEtdmFsdWU9XFxcIkxvd1xcXCJdIHtcXG4gIGNvbG9yOiB2YXIoLS1Mb3ctUHJpb3JpdHkpO1xcbiAgZmlsbDogdmFyKC0tTG93LVByaW9yaXR5KTtcXG59XFxuXFxuLmluZm8tZWxlbWVudC50YXNrLXByaW9yaXR5W2RhdGEtdmFsdWU9XFxcIk1lZGl1bVxcXCJdIHtcXG4gIGNvbG9yOiB2YXIoLS1NZWRpdW0tUHJpb3JpdHkpO1xcbiAgZmlsbDogdmFyKC0tTWVkaXVtLVByaW9yaXR5KTtcXG59XFxuXFxuLmluZm8tZWxlbWVudC50YXNrLXByaW9yaXR5W2RhdGEtdmFsdWU9XFxcIkhpZ2hcXFwiXSB7XFxuICBjb2xvcjogdmFyKC0tSGlnaC1Qcmlvcml0eSk7XFxuICBmaWxsOiB2YXIoLS1IaWdoLVByaW9yaXR5KTtcXG59XFxuXFxuLmluZm8tZWxlbWVudC50YXNrLWxpc3Qge1xcbiAgbWF4LXdpZHRoOiAxNjBweDtcXG4gIGNvbG9yOiB2YXIoLS1UYXNrLUxpc3QpO1xcbiAgZmlsbDogdmFyKC0tVGFzay1MaXN0KTtcXG59XFxuXFxuLnRhc2stbGlzdCAubGFiZWwge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLyogRGVsZXRlIGxpc3QgYW5kIERlbGV0ZSB0YXNrICovXFxuZGlhbG9nI2RlbGV0ZS1saXN0LFxcbmRpYWxvZyNkZWxldGUtdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdhcDogMzJweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjayk7XFxufVxcblxcbmRpYWxvZyNkZWxldGUtbGlzdCAubWVzc2FnZSxcXG5kaWFsb2cjZGVsZXRlLXRhc2sgLm1lc3NhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG5kaWFsb2cjZGVsZXRlLWxpc3QgLm1lc3NhZ2UtdGl0bGUsXFxuZGlhbG9nI2RlbGV0ZS10YXNrIC5tZXNzYWdlLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuZGlhbG9nI2RlbGV0ZS1saXN0IC5zdWItbWVzc2FnZSxcXG5kaWFsb2cjZGVsZXRlLXRhc2sgLnN1Yi1tZXNzYWdlIHtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjay03NSk7XFxufVxcblxcbmRpYWxvZyNkZWxldGUtbGlzdCBidXR0b24ucHJpbWFyeSxcXG5kaWFsb2cjZGVsZXRlLXRhc2sgYnV0dG9uLnByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRGVsZXRlLUFjY2VudCk7XFxufVxcblxcbi5saXN0LWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmxhY2stMDUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxufVxcblxcbi5saXN0LWluZm8gLmxpc3QtaWNvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZpbGw6IHZhcigtLVByaW1hcnkpO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5saXN0LWluZm8gLmxpc3QtdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHZhcigtLVByaW1hcnkpO1xcbn1cXG5cXG4vKiBOb3RpZmljYXRpb25zICovXFxuI25vdGlmaWNhdGlvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgYm90dG9tOiAxNnB4O1xcbiAgcmlnaHQ6IDE2cHg7XFxufVxcblxcbi5ub3RpZmljYXRpb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTQzLCA0NyUsIDQ1JSk7XFxuICBjb2xvcjogdmFyKC0tV2hpdGUpO1xcbiAgcGFkZGluZzogMjZweCAyMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzaG93Tm90aWZpY2F0aW9uO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG59XFxuXFxuLm5vdGlmaWNhdGlvbi5jbG9zaW5nIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBjbG9zZU5vdGlmaWNhdGlvbjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLm5vdGlmaWNhdGlvbi1pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDI2cHg7XFxuICBoZWlnaHQ6IDI2cHg7XFxufVxcblxcbi5ub3RpZmljYXRpb24tbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY2xvc2Utbm90aWZpY2F0aW9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHJpZ2h0OiA4cHg7XFxuICB0b3A6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG5cXG4uY2xvc2Utbm90aWZpY2F0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxODtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxufVxcblxcbi5ub3RpZmljYXRpb246aG92ZXIgLmNsb3NlLW5vdGlmaWNhdGlvbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9uLWljb24sXFxuLmNsb3NlLW5vdGlmaWNhdGlvbiAuYnV0dG9uLWljb24ge1xcbiAgZmlsbDogdmFyKC0tV2hpdGUpO1xcbn1cXG5cXG4uY2xvc2Utbm90aWZpY2F0aW9uIC5idXR0b24taWNvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uYnV0dG9uLWljb24gc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBBbmltYXRpb25zICovXFxuXFxuQGtleWZyYW1lcyBzaG93RGlhbG9nIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDEwMHB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNob3dEaWFsb2dCYWNrZHJvcCB7XFxuICBmcm9tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOTk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgY2xvc2VEaWFsb2cge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAxMDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgY2xvc2VEaWFsb2dCYWNrZHJvcCB7XFxuICBmcm9tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDk5O1xcbiAgfVxcbiAgdG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hvd05vdGlmaWNhdGlvbiB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwcHgsIDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBjbG9zZU5vdGlmaWNhdGlvbiB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDBweCwgMHB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuICAudGFzayAuc3ViLWluZm9ybWF0aW9uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTI0Mi44Ny03MS44N3EtMzcuNzgzIDAtNjQuMzkyLTI2LjYwOC0yNi42MDktMjYuNjA5LTI2LjYwOS02NC4zOTJ2LTYzNC4yNnEwLTM3Ljc4MyAyNi42MDktNjQuMzkyIDI2LjYwOS0yNi42MDkgNjQuMzkyLTI2LjYwOWg0NzQuMjZxMzcuNzgzIDAgNjQuMzkyIDI2LjYwOSAyNi42MDkgMjYuNjA5IDI2LjYwOSA2NC4zOTJ2NjM0LjI2cTAgMzcuNzgzLTI2LjYwOSA2NC4zOTJRNzU0LjkxMy03MS44NyA3MTcuMTMtNzEuODdIMjQyLjg3Wm0xOTcuODQ3LTcyNS4yNnYyNDAuMjE3cTAgMTMuNDM1IDEwLjkzNSAxOS43NzIgMTAuOTM1IDYuMzM3IDIzLjEzMS0uMzgxbDQyLjA2NS0yNC45MzRxMTEuMTk1LTYuNzE4IDIzLjM2OS02LjcxOHQyMy4zNyA2LjcxOGw0Mi4wNjUgMjQuOTM0cTEyLjE5NiA2LjcxOCAyMy42MzEuMzgxIDExLjQzNC02LjMzNyAxMS40MzQtMTkuNzcyVi03OTcuMTNoLTIwMFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk0yNjAuNzE3LTE1MS44NjlxLTk0LjM0NyAwLTE2MS4yMzktNjUuMTUzLTY2Ljg5MS02NS4xNTItNjYuODkxLTE1OS4yNjEgMC04MC4zOTEgNDcuMzU4LTE0My42NjMgNDcuMzU5LTYzLjI3MiAxMjUuMDMzLTgwLjc1IDI2LjQzNS05Mi45NTYgMTAyLjYzMS0xNTAuMTk1IDc2LjE5NS01Ny4yNCAxNzIuMzkxLTU3LjI0IDExOC4xOTYgMCAyMDEuMjUgODEuNzQgODMuMDU0IDgxLjczOSA4NS42ODUgMTk5LjY5NSA2OS43MTcgMTAuNjMxIDExNS4wOTggNjMuODA1IDQ1LjM4IDUzLjE3NCA0NS4zOCAxMjMuNjA4IDAgNzguMTA5LTU0LjY1MiAxMzIuNzYxUTgxOC4xMDktMTUxLjg2OSA3NDAtMTUxLjg2OUgyNjAuNzE3WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTM2MS45MTMtMjM5LjI4M2gyMzYuNDEzcTE3LjcxNyAwIDI5LjY5Ni0xMi4wOTdRNjQwLTI2My40NzggNjQwLTI4MS4xOTZxMC0xNy43MTctMTEuOTc4LTI5LjY5NS0xMS45NzktMTEuOTc5LTI5LjY5Ni0xMS45NzlIMzYxLjY3NHEtMTcuNzE3IDAtMjkuNjk2IDExLjk3OVEzMjAtMjk4LjkxMyAzMjAtMjgxLjE5NnEwIDE3LjcxOCAxMi4wOTggMjkuODE2IDEyLjA5OCAxMi4wOTcgMjkuODE1IDEyLjA5N1ptMC0xNjBoMjM2LjQxM3ExNy43MTcgMCAyOS42OTYtMTIuMDk3UTY0MC00MjMuNDc4IDY0MC00NDEuMTk2cTAtMTcuNzE3LTExLjk3OC0yOS42OTUtMTEuOTc5LTExLjk3OS0yOS42OTYtMTEuOTc5SDM2MS42NzRxLTE3LjcxNyAwLTI5LjY5NiAxMS45NzlRMzIwLTQ1OC45MTMgMzIwLTQ0MS4xOTZxMCAxNy43MTggMTIuMDk4IDI5LjgxNiAxMi4wOTggMTIuMDk3IDI5LjgxNSAxMi4wOTdaTTI0Mi44Ny03MS44NjlxLTM3Ljc4MyAwLTY0LjM5Mi0yNi42MS0yNi42MDktMjYuNjA4LTI2LjYwOS02NC4zOTF2LTYzNC4yNnEwLTM3Ljc4MyAyNi42MDktNjQuMzkyIDI2LjYwOS0yNi42MDkgNjQuMzkyLTI2LjYwOWgyODIuOTM0cTE4LjE1MyAwIDM0LjY4NSA2LjgzNyAxNi41MzMgNi44MzcgMjkuMjA3IDE5LjUxMWwxOTIuMDg3IDE5Mi4wODdxMTIuNjc0IDEyLjY3NCAxOS41MTEgMjkuMjA3IDYuODM3IDE2LjUzMiA2LjgzNyAzNC42ODV2NDQyLjkzNHEwIDM3Ljc4My0yNi42MDkgNjQuMzkyUTc1NC45MTMtNzEuODcgNzE3LjEzLTcxLjg3SDI0Mi44N1pNNTE3LjEzLTY0Mi42M3EwIDE5LjE1MiAxMy4xNzQgMzIuMzI2dDMyLjMyNiAxMy4xNzRoMTU0LjVsLTIwMC0yMDB2MTU0LjVaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNNDc5Ljc2MS0xMzkuODI2cS0xNi4xNTIgMC0zMi40NDYtNS44MzctMTYuMjkzLTUuODM3LTI4Ljk2Ny0xOC4yNzJsLTY5LjQ3OS02My40NzhxLTEwNS41MjEtOTYuMjgzLTE5MS4yNi0xOTIuNjJRNzEuODY5LTUxNi4zNyA3MS44NjktNjM0cTAtOTcuNTg3IDY1LjE1My0xNjIuOTc4IDY1LjE1Mi02NS4zOTIgMTYyLjczOS02NS4zOTIgNTIuNTIyIDAgOTkuMjgyIDIxLjQyNCA0Ni43NjEgMjEuNDI0IDgwLjcxOCA1OS40NjcgMzMuOTU2LTM4LjA0MyA4MC43MTctNTkuNDY3IDQ2Ljc2MS0yMS40MjQgOTkuMjgzLTIxLjQyNCA5Ny41ODcgMCAxNjMuMDk4IDY1LjM5MlE4ODguMzctNzMxLjU4NyA4ODguMzctNjM0cTAgMTE3LjYzLTg1LjU5OCAyMTQuNDY3LTg1LjU5OCA5Ni44MzctMTkzLjEyIDE5My4zNTlsLTY4LjIzOSA2Mi40NzhxLTEyLjY3NCAxMi40MzUtMjkuMDg3IDE4LjE1My0xNi40MTMgNS43MTctMzIuNTY1IDUuNzE3WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTQ3OS45OTItNjUuNDEzcS0zNC4xODggMC01OC41MjUtMjUuMDU0LTI0LjMzNy0yNS4wNTQtMjQuMzM3LTYwLjY4NWgxNjUuNzRxMCAzNS42MzEtMjQuMzQ2IDYwLjY4NS0yNC4zNDUgMjUuMDU0LTU4LjUzMiAyNS4wNTRabS0xMjAuNDctMTI3LjY1MnEtMTcuNzEyIDAtMjkuNjkzLTEyLjA1LTExLjk4MS0xMi4wNS0xMS45ODEtMjkuODYzIDAtMTcuNzEyIDExLjk4MS0yOS42OTMgMTEuOTgxLTExLjk4MSAyOS42OTMtMTEuOTgxaDI0MC45NTZxMTcuNzEyIDAgMjkuNjkzIDExLjk4MiAxMS45ODEgMTEuOTgzIDExLjk4MSAyOS42OTZ0LTExLjk4MSAyOS44MTFxLTExLjk4MSAxMi4wOTgtMjkuNjkzIDEyLjA5OEgzNTkuNTIyWm0tMzEuNjc0LTEyNS41UTI1Ni42OTYtMzYxIDIxNC4yODItNDMyLjAzM3EtNDIuNDEzLTcxLjAzMi00Mi40MTMtMTU0LjY2MyAwLTEyOC4yODggODkuODY0LTIxOC4wOSA4OS44NjMtODkuODAxIDIxOC4yMzktODkuODAxdDIxOC4yNjcgODkuODAxcTg5Ljg5MiA4OS44MDIgODkuODkyIDIxOC4wOSAwIDgzLjg3LTQyLjQxMyAxNTQuNzgzUTcwMy4zMDQtMzYxIDYzMi4xNTItMzE4LjU2NUgzMjcuODQ4WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTE2OC45NTctMTE0Ljc4MnEtMjQuMzQ4IDUuNzE3LTQyLjAwMS0xMi4wNTUtMTcuNjUyLTE3Ljc3Mi0xMi4xNzQtNDIuMTJsMzYuNDM1LTE3Ni45MzQgMTk0LjY3NCAxOTQuNjc0LTE3Ni45MzQgMzYuNDM1Wm0yNDAuMDIxLTg3LjM0OEwyMDIuMTMtNDA4Ljk3OCA2MTIuMDIyLTgxOC44N3EyNi4zNDgtMjYuMzQ4IDY0LjY1Mi0yNi4zNDh0NjQuNjUyIDI2LjM0OGw3Ny41NDQgNzcuNTQ0cTI2LjM0OCAyNi4zNDggMjYuMzQ4IDY0LjY1MnQtMjYuMzQ4IDY0LjY1Mkw0MDguOTc4LTIwMi4xM1pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIm0yNjkuNDU2LTI2OS4yMTctMTAwLjcxNy01NS43MThxLTEyLjY3NC02Ljk1Ni0xNC40MTMtMjAuNjA4LTEuNzM5LTEzLjY1MyA3LjY5Ni0yMy4wODdsMTMuNjc0LTEzLjY3NHE0LjcxNy00LjcxOCAxMS4xNzQtNi41NzcgNi40NTYtMS44NTggMTIuNjUyLS42MTlsODYuMDg3IDEyLjIzOUw0MzUuNjMtNTI3LjI4MyAxNjYuOTc4LTY3My44NDhxLTE2LjkxMy05LjE5NS0xOS43NzItMjguNDY3LTIuODU4LTE5LjI3MiAxMC44MTYtMzIuOTQ2bDExLjE5NS0xMS4xOTZxNy45NTctNy45NTYgMTcuNjUzLTEwLjMxNSA5LjY5NS0yLjM1OSAxOS44OTEuMTJsMzYzIDkzLjcxNyAxNDMuNjA4LTE0Mi4zMjZxMTguNjc0LTE4LjY3NCA0Ni4zMjYtMTguNjc0IDI3LjY1MyAwIDQ2LjMyNyAxOC42NzR0MTguNjc0IDQ2LjMyNnEwIDI3LjY1My0xOC42NzQgNDYuMzI3TDY2My4xNzQtNTY5LjUyMmw5My40NzggMzYwLjc2MXEyLjQ3OSAxMS4xOTYtLjM4IDIyLjEzMS0yLjg1OSAxMC45MzQtMTAuODE1IDE4Ljg5MWwtNS43MTggNS40NzhxLTE1LjY3NCAxNS42NzQtMzYuODA0IDEyLjQzNS0yMS4xMzEtMy4yMzktMzEuMzI2LTIyLjM5MUw1MjcuNTIyLTQzNS4zOTEgMzc3LjUtMjg1LjM3bDEyLjIzOSA4My42MDlxMS4yMzkgOC4xOTYtMS4yMzkgMTUuNTExLTIuNDc4IDcuMzE1LTguMTk2IDEzLjAzM2wtNS45NTYgNS45NTZxLTExLjY3NCAxMS42NzQtMjguMDY1IDkuNjk2LTE2LjM5Mi0xLjk3OC0yNC41ODctMTYuODkxbC01Mi4yNC05NC43NjFaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNODM5LjUyMi0zMjAuMjM5di0yMzEuNjk2TDUyMy4yNjEtMzgwLjA0M1E1MDIuNjMtMzY4Ljg0OCA0ODAtMzY4LjcyOHEtMjIuNjMuMTE5LTQzLjI2MS0xMS4zMTVMMTA2LjE1Mi01NjAuMjE3cS0xMi40MzUtNi43MTgtMTcuNzcyLTE3LjAzMy01LjMzNy0xMC4zMTUtNS4zMzctMjIuNzV0NS4zMzctMjIuNzVxNS4zMzctMTAuMzE1IDE3Ljc3Mi0xNy4wMzNsMzMwLjU4Ny0xNzkuOTM0cTEwLjE5Ni01LjcxOCAyMS4wMTEtOC41NzcgMTAuODE1LTIuODU4IDIyLjI1LTIuODU4dDIyLjI1IDIuODU4cTEwLjgxNSAyLjg1OSAyMS4wMTEgOC41NzdsMzc5LjgwNCAyMDcuMDQzcTExLjE5NiA1LjcxNyAxNy41MzMgMTYuNTMzIDYuMzM3IDEwLjgxNSA2LjMzNyAyMy4yNVYtMzIwcTAgMTguNDM1LTEyLjU3NiAzMS4wMTF0LTMxLjAxMSAxMi41NzZxLTE4LjQzNSAwLTMxLjEzMS0xMi42OTYtMTIuNjk1LTEyLjY5NS0xMi42OTUtMzEuMTNaTTQzNi43MzktMTQwLjI4MyAyNDQuMzkxLTI0My45NzhxLTIyLjYzLTEyLjQzNS0zNS4xODUtMzMuOTQ2LTEyLjU1NC0yMS41MTEtMTIuNTU0LTQ2LjYyVi00NjYuNWwyNDAuMDg3IDEzMC4wNDRRNDU3LjM3LTMyNS4yNjEgNDgwLTMyNS4yNjFxMjIuNjMgMCA0My4yNjEtMTEuMTk1TDc2My4zNDgtNDY2LjV2MTQxLjk1NnEwIDI1LjEwOS0xMi41NTQgNDYuNjItMTIuNTU1IDIxLjUxMS0zNS4xODUgMzMuOTQ2TDUyMy4yNjEtMTQwLjI4M3EtMTAuMTk2IDUuNzE4LTIxLjAxMSA4LjQ1Ny0xMC44MTUgMi43MzktMjIuMjUgMi43Mzl0LTIyLjI1LTIuNzM5cS0xMC44MTUtMi43MzktMjEuMDExLTguNDU3WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTI4MC03Ni40MTNxLTMzIDAtNTYuNS0yMy41dC0yMy41LTU2LjVxMC0zMyAyMy41LTU2LjV0NTYuNS0yMy41cTMzIDAgNTYuNSAyMy41dDIzLjUgNTYuNXEwIDMzLTIzLjUgNTYuNXQtNTYuNSAyMy41Wm00MDAgMHEtMzMgMC01Ni41LTIzLjV0LTIzLjUtNTYuNXEwLTMzIDIzLjUtNTYuNXQ1Ni41LTIzLjVxMzMgMCA1Ni41IDIzLjV0MjMuNSA1Ni41cTAgMzMtMjMuNSA1Ni41dC01Ni41IDIzLjVaTTIxMC4xNTItODAzLjU4N2g1ODAuOTEzcTI3LjIxMyAwIDQxLjQxMSAyNC4wODd0MS4wNDYgNDguOTEzbC0xMzYuNSAyNDYuNjc0cS0xMS40NzggMjAuNzE3LTMwLjgwMyAzMi4zMTVRNjQ2Ljg5NC00NDAgNjIzLjkxMy00NDBIMzI4LjA2NWwtNDEuODQ3IDc2LjQxM0g3MjBxMTguNTI0IDAgMzEuMDU2IDEyLjUzMSAxMi41MzEgMTIuNTMyIDEyLjUzMSAzMS4wNTZ0LTEyLjUzMSAzMS4wNTZRNzM4LjUyNC0yNzYuNDEzIDcyMC0yNzYuNDEzSDI4MHEtNDcuNjMgMC03MS41ODctNDEuNDEzdC0xLjc2MS04Mi4wODdMMjU5LjkzNS00OTYgMTE3Ljg0OC03OTYuNDEzSDgwcS0xOC41MjUgMC0zMS4wNTYtMTIuNTMxUTM2LjQxMy04MjEuNDc2IDM2LjQxMy04NDB0MTIuNTMxLTMxLjA1NlE2MS40NzUtODgzLjU4NyA4MC04ODMuNTg3aDYzLjU2NXExMi42NzQgMCAyNC4wMTMgNi44MTEgMTEuMzM5IDYuODExIDE3LjAwOSAxOS4yOThsMjUuNTY1IDUzLjg5MVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk0yMDUuNS0xMDMuNXEtMTkuMTUyIDAtMzIuMzI2LTEzLjE3NFQxNjAtMTQ5di00My41ODdxLTUzLjEwOSAwLTkwLjI2MS0zNy4xNjJRMzIuNTg3LTI2Ni45MTEgMzIuNTg3LTMyMHYtMjAwcTAtMzQuNDggMjQuNjk1LTU5LjAzMyAyNC42OTYtMjQuNTU0IDU5LjE2My0yNC41NTQgMzQuNDY2IDAgNTkuMDExIDI0LjU1NFEyMDAtNTU0LjQ4IDIwMC01MjB2MTYwaDU2MHYtMTYwcTAtMzQuNDM1IDI0LjU0NC01OS4wMTEgMjQuNTQ1LTI0LjU3NiA1OS4wMTEtMjQuNTc2IDM0LjQ2NyAwIDU5LjE2MyAyNC41NTRROTI3LjQxMy01NTQuNDggOTI3LjQxMy01MjB2MjAwcTAgNTMuMDg5LTM3LjE2MiA5MC4yNTEtMzcuMTYyIDM3LjE2Mi05MC4yNTEgMzcuMTYyVi0xNDlxMCAxOS4xNTItMTMuMTc0IDMyLjMyNlQ3NTQuNS0xMDMuNXEtMTkuMTUyIDAtMzIuMzI2LTEzLjE3NFQ3MDktMTQ5di00My41ODdIMjUxVi0xNDlxMCAxOS4xNTItMTMuMTc0IDMyLjMyNlQyMDUuNS0xMDMuNVpNMjgwLTQ0MHYtODBxMC01Ny4zOTEtMzUuODkxLTEwMS45NjctMzUuODkyLTQ0LjU3Ny05MS41MjItNjEuNjJWLTcyMHEwLTUzLjA4OSAzNy4xNjItOTAuMjUxIDM3LjE2Mi0zNy4xNjIgOTAuMjUxLTM3LjE2Mmg0MDBxNTMuMDg5IDAgOTAuMjUxIDM3LjE2MiAzNy4xNjIgMzcuMTYyIDM3LjE2MiA5MC4yNTF2MzYuNDEzcS01Ni44NjkgMTIuNTY1LTkyLjE0MSA1OC4zOFE2ODAtNTc5LjM5MSA2ODAtNTIwdjgwSDI4MFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk00ODAtMjE5LjkxMyAzMTMuMjgzLTExOS40MzVxLTEyLjY3NCA3Ljk1Ny0yNi4zNDggNi44MzctMTMuNjc0LTEuMTE5LTIzLjg3LTkuMDc2LTEwLjE5Ni03Ljk1Ni0xNS43OTMtMjAuMDExLTUuNTk4LTEyLjA1NC0yLjEyLTI2LjcyOGw0NC4yMzktMTg5LjcxNy0xNDcuNzE3LTEyNy43MThxLTExLjQzNS0xMC4xOTUtMTQuMjk0LTIzLjI1LTIuODU5LTEzLjA1NCAxLjM4MS0yNS40ODkgNC4yMzktMTIuNDM1IDEzLjc5My0yMC42MzEgOS41NTUtOC4xOTUgMjUuMjI4LTEwLjE5NWwxOTQuNzE4LTE3IDc1LjQ3OC0xNzguOTU3cTUuNzE4LTEzLjkxMyAxNy41MzMtMjAuNjMgMTEuODE1LTYuNzE4IDI0LjQ4OS02LjcxOCAxMi42NzQgMCAyNC40ODkgNi43MTggMTEuODE1IDYuNzE3IDE3LjUzMyAyMC42M0w1OTcuNS01ODIuNDEzbDE5NC43MTggMTdxMTUuNjczIDIgMjUuMjI4IDEwLjE5NSA5LjU1NCA4LjE5NiAxMy43OTMgMjAuNjMxIDQuMjQgMTIuNDM1IDEuMzgxIDI1LjQ4OS0yLjg1OSAxMy4wNTUtMTQuMjk0IDIzLjI1TDY3MC42MDktMzU4LjEzbDQ0LjIzOSAxODkuNzE3cTMuNDc4IDE0LjY3NC0yLjEyIDI2LjcyOC01LjU5NyAxMi4wNTUtMTUuNzkzIDIwLjAxMS0xMC4xOTYgNy45NTctMjMuODcgOS4wNzYtMTMuNjc0IDEuMTItMjYuMzQ4LTYuODM3TDQ4MC0yMTkuOTEzWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTM5Ny45MzUtMjMxLjg2OUgxOTAuMjE3cS0yNy4zNDggMC00MC43ODItMjMuODctMTMuNDM1LTIzLjg3IDIuMjM5LTQ2LjczOWwxMTMuMjYtMTY5LjM5MWgtMi4yODJxLTI0LjQ3OCAwLTM2LjA5OC0yMS43NC0xMS42Mi0yMS43MzkgMi42Mi00MS45NzhsMjEzLjI4Mi0zMDQuODI2cTYuOTU3LTkuNDM1IDE3LjAzMy0xNC40MTMgMTAuMDc2LTQuOTc5IDIwLjUxMS00Ljk3OSAxMC40MzUgMCAyMC41MTEgNC45NzkgMTAuMDc2IDQuOTc4IDE3LjAzMyAxNC40MTNsMjEzLjI4MiAzMDQuODI2cTE0LjI0IDIwLjIzOSAyLjYyIDQxLjk3OC0xMS42MiAyMS43NC0zNi4wOTggMjEuNzRoLTIuMjgybDExMy4yNiAxNjkuMzkxcTE1LjY3NCAyMi44NjkgMi4yMzkgNDYuNzM5LTEzLjQzNCAyMy44Ny00MC43ODIgMjMuODdINTYyLjA2NXYxMTQuNDk5cTAgMTkuMTUzLTEzLjE3NCAzMi4zMjdUNTE2LjU2NS03MS44N2gtNzMuMTNxLTE5LjE1MiAwLTMyLjMyNi0xMy4xNzR0LTEzLjE3NC0zMi4zMjd2LTExNC40OTlaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJtMjU2LTIwMC01Ni01NiAyMjQtMjI0LTIyNC0yMjQgNTYtNTYgMjI0IDIyNCAyMjQtMjI0IDU2IDU2LTIyNCAyMjQgMjI0IDIyNC01NiA1Ni0yMjQtMjI0LTIyNCAyMjRaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzIgMzJcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PGcgY2xpcC1wYXRoPVxcXCJ1cmwoI2NsaXAwXzExOV8yNDgpXFxcIj48cGF0aCBkPVxcXCJNMTEuMTkwMiAyNy42MDc0TDAgMTYuNDE3MkwyLjc5NzU1IDEzLjYxOTZMMTEuMTkwMiAyMi4wMTIzTDI5LjIwMjUgNEwzMiA2Ljc5NzU1TDExLjE5MDIgMjcuNjA3NFpcXFwiIGZpbGw9XFxcIiMyRjlFNjJcXFwiPjwvcGF0aD48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPVxcXCJjbGlwMF8xMTlfMjQ4XFxcIj48cmVjdCB3aWR0aD1cXFwiMzJcXFwiIGhlaWdodD1cXFwiMzJcXFwiIGZpbGw9XFxcIndoaXRlXFxcIj48L3JlY3Q+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNNDUwLjAwMS00NTAuMDAxaC0yMzB2LTU5Ljk5OGgyMzB2LTIzMGg1OS45OTh2MjMwaDIzMHY1OS45OThoLTIzMHYyMzBoLTU5Ljk5OHYtMjMwWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTI4MC0xMjBxLTMzIDAtNTYuNS0yMy41VDIwMC0yMDB2LTUyMGgtNDB2LTgwaDIwMHYtNDBoMjQwdjQwaDIwMHY4MGgtNDB2NTIwcTAgMzMtMjMuNSA1Ni41VDY4MC0xMjBIMjgwWm00MDAtNjAwSDI4MHY1MjBoNDAwdi01MjBaTTM2MC0yODBoODB2LTM2MGgtODB2MzYwWm0xNjAgMGg4MHYtMzYwaC04MHYzNjBaTTI4MC03MjB2NTIwLTUyMFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk0yMDAtMjAwaDU3bDM5MS0zOTEtNTctNTctMzkxIDM5MXY1N1ptLTgwIDgwdi0xNzBsNTI4LTUyN3ExMi0xMSAyNi41LTE3dDMwLjUtNnExNiAwIDMxIDZ0MjYgMThsNTUgNTZxMTIgMTEgMTcuNSAyNnQ1LjUgMzBxMCAxNi01LjUgMzAuNVQ4MTctNjQ3TDI5MC0xMjBIMTIwWm02NDAtNTg0LTU2LTU2IDU2IDU2Wm0tMTQxIDg1LTI4LTI5IDU3IDU3LTI5LTI4WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0xMiAxOS44TDAgNy44TDIuOCA1TDEyIDE0LjJMMjEuMiA1TDI0IDcuOEwxMiAxOS44WlxcXCIgZmlsbD1cXFwiIzI1MjcyY1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTI0MC00MDBxLTMzIDAtNTYuNS0yMy41VDE2MC00ODBxMC0zMyAyMy41LTU2LjVUMjQwLTU2MHEzMyAwIDU2LjUgMjMuNVQzMjAtNDgwcTAgMzMtMjMuNSA1Ni41VDI0MC00MDBabTI0MCAwcS0zMyAwLTU2LjUtMjMuNVQ0MDAtNDgwcTAtMzMgMjMuNS01Ni41VDQ4MC01NjBxMzMgMCA1Ni41IDIzLjVUNTYwLTQ4MHEwIDMzLTIzLjUgNTYuNVQ0ODAtNDAwWm0yNDAgMHEtMzMgMC01Ni41LTIzLjVUNjQwLTQ4MHEwLTMzIDIzLjUtNTYuNVQ3MjAtNTYwcTMzIDAgNTYuNSAyMy41VDgwMC00ODBxMCAzMy0yMy41IDU2LjVUNzIwLTQwMFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIm00MjQtNDA4LTg2LTg2cS0xMS0xMS0yOC0xMXQtMjggMTFxLTExIDExLTExIDI4dDExIDI4bDExNCAxMTRxMTIgMTIgMjggMTJ0MjgtMTJsMjI2LTIyNnExMS0xMSAxMS0yOHQtMTEtMjhxLTExLTExLTI4LTExdC0yOCAxMUw0MjQtNDA4Wm01NiAzMjhxLTgzIDAtMTU2LTMxLjVUMTk3LTE5N3EtNTQtNTQtODUuNS0xMjdUODAtNDgwcTAtODMgMzEuNS0xNTZUMTk3LTc2M3E1NC01NCAxMjctODUuNVQ0ODAtODgwcTgzIDAgMTU2IDMxLjVUNzYzLTc2M3E1NCA1NCA4NS41IDEyN1Q4ODAtNDgwcTAgODMtMzEuNSAxNTZUNzYzLTE5N3EtNTQgNTQtMTI3IDg1LjVUNDgwLTgwWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDMyIDMyXFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxjaXJjbGUgY3g9XFxcIjE2XFxcIiBjeT1cXFwiMTZcXFwiIHI9XFxcIjE2XFxcIiBmaWxsPVxcXCIjRkFGQUZBXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxNlxcXCIgY3k9XFxcIjE2XFxcIiByPVxcXCIxNC41XFxcIiBzdHJva2U9XFxcIiMyNTI3MkNcXFwiIHN0cm9rZS1vcGFjaXR5PVxcXCIwLjVcXFwiIHN0cm9rZS13aWR0aD1cXFwiM1xcXCI+PC9jaXJjbGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNNDgwLTM5Ni45MjNxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQ0ODAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQ0ODAtMzk2LjkyM1ptLTE2MCAwcS0xNC42OTIgMC0yNS4wMzgtMTAuMzQ2dC0xMC4zNDYtMjUuMDM4cTAtMTQuNjkyIDEwLjM0Ni0yNS4wMzhUMzIwLTQ2Ny42OTFxMTQuNjkyIDAgMjUuMDM4IDEwLjM0NnQxMC4zNDYgMjUuMDM4cTAgMTQuNjkyLTEwLjM0NiAyNS4wMzhUMzIwLTM5Ni45MjNabTMyMCAwcS0xNC42OTIgMC0yNS4wMzgtMTAuMzQ2dC0xMC4zNDYtMjUuMDM4cTAtMTQuNjkyIDEwLjM0Ni0yNS4wMzhUNjQwLTQ2Ny42OTFxMTQuNjkyIDAgMjUuMDM4IDEwLjM0NnQxMC4zNDYgMjUuMDM4cTAgMTQuNjkyLTEwLjM0NiAyNS4wMzhUNjQwLTM5Ni45MjNaTTQ4MC0yNDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRNDk0LjY5Mi0yNDAgNDgwLTI0MFptLTE2MCAwcS0xNC42OTIgMC0yNS4wMzgtMTAuMzQ2dC0xMC4zNDYtMjUuMDM4cTAtMTQuNjkyIDEwLjM0Ni0yNS4wMzggMTAuMzQ2LTEwLjM0NyAyNS4wMzgtMTAuMzQ3dDI1LjAzOCAxMC4zNDdxMTAuMzQ2IDEwLjM0NiAxMC4zNDYgMjUuMDM4dC0xMC4zNDYgMjUuMDM4UTMzNC42OTItMjQwIDMyMC0yNDBabTMyMCAwcS0xNC42OTIgMC0yNS4wMzgtMTAuMzQ2dC0xMC4zNDYtMjUuMDM4cTAtMTQuNjkyIDEwLjM0Ni0yNS4wMzggMTAuMzQ2LTEwLjM0NyAyNS4wMzgtMTAuMzQ3dDI1LjAzOCAxMC4zNDdxMTAuMzQ2IDEwLjM0NiAxMC4zNDYgMjUuMDM4dC0xMC4zNDYgMjUuMDM4UTY1NC42OTItMjQwIDY0MC0yNDBaTTIxMi4zMDktMTAwLjAwMXEtMzAuMzA4IDAtNTEuMzA4LTIxdC0yMS01MS4zMDh2LTUzNS4zODJxMC0zMC4zMDggMjEtNTEuMzA4dDUxLjMwOC0yMWg1NS4zODV2LTg0LjYxNWg2MS41Mzd2ODQuNjE1aDMwMy4wNzZ2LTg0LjYxNWg1OS45OTl2ODQuNjE1aDU1LjM4NXEzMC4zMDggMCA1MS4zMDggMjF0MjEgNTEuMzA4djUzNS4zODJxMCAzMC4zMDgtMjEgNTEuMzA4dC01MS4zMDggMjFIMjEyLjMwOVptMC01OS45OTloNTM1LjM4MnE0LjYxNiAwIDguNDYzLTMuODQ2IDMuODQ2LTMuODQ3IDMuODQ2LTguNDYzdi0zNzUuMzgySDIwMHYzNzUuMzgycTAgNC42MTYgMy44NDYgOC40NjMgMy44NDcgMy44NDYgOC40NjMgMy44NDZaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNMjEyLjMwOS0xMDAuMDAxcS0zMC4zMDggMC01MS4zMDgtMjF0LTIxLTUxLjMwOHYtNTM1LjM4MnEwLTMwLjMwOCAyMS01MS4zMDh0NTEuMzA4LTIxaDU1LjM4NXYtODQuNjE1aDYxLjUzN3Y4NC42MTVoMzAzLjA3NnYtODQuNjE1aDU5Ljk5OXY4NC42MTVoNTUuMzg1cTMwLjMwOCAwIDUxLjMwOCAyMXQyMSA1MS4zMDh2NTM1LjM4MnEwIDMwLjMwOC0yMSA1MS4zMDh0LTUxLjMwOCAyMUgyMTIuMzA5Wm0wLTU5Ljk5OWg1MzUuMzgycTQuNjE2IDAgOC40NjMtMy44NDYgMy44NDYtMy44NDcgMy44NDYtOC40NjN2LTM3NS4zODJIMjAwdjM3NS4zODJxMCA0LjYxNiAzLjg0NiA4LjQ2MyAzLjg0NyAzLjg0NiA4LjQ2MyAzLjg0NlpNMjAwLTYwNy42OWg1NjB2LTEwMC4wMDFxMC00LjYxNi0zLjg0Ni04LjQ2My0zLjg0Ny0zLjg0Ni04LjQ2My0zLjg0NkgyMTIuMzA5cS00LjYxNiAwLTguNDYzIDMuODQ2LTMuODQ2IDMuODQ3LTMuODQ2IDguNDYzdjEwMC4wMDFabTAgMFYtNzIwdjExMi4zMVptMjgwIDIxMC43NjdxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOFQ0ODAtNDY3LjY5MXExNC42OTIgMCAyNS4wMzggMTAuMzQ2dDEwLjM0NiAyNS4wMzhxMCAxNC42OTItMTAuMzQ2IDI1LjAzOFQ0ODAtMzk2LjkyM1ptLTE2MCAwcS0xNC42OTIgMC0yNS4wMzgtMTAuMzQ2dC0xMC4zNDYtMjUuMDM4cTAtMTQuNjkyIDEwLjM0Ni0yNS4wMzhUMzIwLTQ2Ny42OTFxMTQuNjkyIDAgMjUuMDM4IDEwLjM0NnQxMC4zNDYgMjUuMDM4cTAgMTQuNjkyLTEwLjM0NiAyNS4wMzhUMzIwLTM5Ni45MjNabTMyMCAwcS0xNC42OTIgMC0yNS4wMzgtMTAuMzQ2dC0xMC4zNDYtMjUuMDM4cTAtMTQuNjkyIDEwLjM0Ni0yNS4wMzhUNjQwLTQ2Ny42OTFxMTQuNjkyIDAgMjUuMDM4IDEwLjM0NnQxMC4zNDYgMjUuMDM4cTAgMTQuNjkyLTEwLjM0NiAyNS4wMzhUNjQwLTM5Ni45MjNaTTQ4MC0yNDBxLTE0LjY5MiAwLTI1LjAzOC0xMC4zNDZ0LTEwLjM0Ni0yNS4wMzhxMC0xNC42OTIgMTAuMzQ2LTI1LjAzOCAxMC4zNDYtMTAuMzQ3IDI1LjAzOC0xMC4zNDd0MjUuMDM4IDEwLjM0N3ExMC4zNDYgMTAuMzQ2IDEwLjM0NiAyNS4wMzh0LTEwLjM0NiAyNS4wMzhRNDk0LjY5Mi0yNDAgNDgwLTI0MFptLTE2MCAwcS0xNC42OTIgMC0yNS4wMzgtMTAuMzQ2dC0xMC4zNDYtMjUuMDM4cTAtMTQuNjkyIDEwLjM0Ni0yNS4wMzggMTAuMzQ2LTEwLjM0NyAyNS4wMzgtMTAuMzQ3dDI1LjAzOCAxMC4zNDdxMTAuMzQ2IDEwLjM0NiAxMC4zNDYgMjUuMDM4dC0xMC4zNDYgMjUuMDM4UTMzNC42OTItMjQwIDMyMC0yNDBabTMyMCAwcS0xNC42OTIgMC0yNS4wMzgtMTAuMzQ2dC0xMC4zNDYtMjUuMDM4cTAtMTQuNjkyIDEwLjM0Ni0yNS4wMzggMTAuMzQ2LTEwLjM0NyAyNS4wMzgtMTAuMzQ3dDI1LjAzOCAxMC4zNDdxMTAuMzQ2IDEwLjM0NiAxMC4zNDYgMjUuMDM4dC0xMC4zNDYgMjUuMDM4UTY1NC42OTItMjQwIDY0MC0yNDBaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNMjIwLjAwMS0xMzAuMDAxdi02NDkuOTk4aDMyMy44NDRsMTYgODBoMjIwLjE1NHYzNTkuOTk4SDUzNi4xNTVsLTE2LTgwSDI4MHYyOTBoLTU5Ljk5OVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk0yMjAuMDAxLTEzMC4wMDF2LTY0OS45OThoMzIzLjg0NGwxNiA4MGgyMjAuMTU0djM1OS45OThINTM2LjE1NWwtMTYtODBIMjgwdjI5MGgtNTkuOTk5Wk01MDAtNTYwWm04NiAxNjBoMTM0di0yNDBINTEwbC0xNi04MEgyODB2MjQwaDI5MGwxNiA4MFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzMy44NjY2NjQgMzMuODY2NjY0XFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJzdmcxXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnN2Zz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxkZWZzIGlkPVxcXCJkZWZzMVxcXCI+PC9kZWZzPjxnIGlkPVxcXCJsYXllcjFcXFwiPjxnIGlkPVxcXCJnMVxcXCIgdHJhbnNmb3JtPVxcXCJtYXRyaXgoMS4xODEwMDgxLDAsMCwxLjE4MTAwODEsLTQuOTk4OTkwMiwtMy4wNjUwNzAzKVxcXCI+PHBhdGggaWQ9XFxcInJlY3QxXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAwMDAwMDtkaXNwbGF5OmlubGluZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2Utb3BhY2l0eToxOy1pbmtzY2FwZS1zdHJva2U6bm9uZVxcXCIgZD1cXFwibSA3Ljk3MzE1NjcsNC4yMzI4MTY2IGMgLTIuMDQyNTkxNSwwIC0zLjc0MDM0MDEsMS42OTc3NDg2IC0zLjc0MDM0MDEsMy43NDAzNDAxIFYgMjUuODkyOTkzIGMgMCwyLjA0MjU5MiAxLjY5Nzc0ODEsMy43NDA4NTggMy43NDAzNDAxLDMuNzQwODU3IEggMjUuODkzNTEgYyAyLjA0MjU5MiwxZS02IDMuNzQwMzQsLTEuNjk4MjY1IDMuNzQwMzQsLTMuNzQwODU3IFYgMTUuODUwNzEyIGwgLTMuMzk1MTQxLDMuMzcwODU0IHYgNi42NzE0MjcgYyAwLDAuMjIwODUgLTAuMTI0MzUsMC4zNDYyMzIgLTAuMzQ1MTk5LDAuMzQ2MjMyIEggNy45NzMxNTY3IGMgLTAuMjIwODUwMSwwIC0wLjM0NTcxNTMsLTAuMTI1MzgyIC0wLjM0NTcxNTMsLTAuMzQ2MjMyIFYgNy45NzMxNTY3IGMgMCwtMC4yMjA4NTA2IDAuMTI0ODY0NywtMC4zNDU3MTUzIDAuMzQ1NzE1MywtMC4zNDU3MTUzIEggMjMuMDEzMDY2IGwgMy4zODI3MzksLTMuMzU4OTY4MSBjIC0wLjE2NDU1MSwtMC4wMjMxNDkgLTAuMzMxOTgsLTAuMDM1NjU3IC0wLjUwMjI5NSwtMC4wMzU2NTcgelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJjb2xvcjojMDAwMDAwOy1pbmtzY2FwZS1zdHJva2U6bm9uZVxcXCIgZD1cXFwiTSAyOS4xNjQwNjIsNS4yMjQ2MDk0IDE1LjU1NDY4OCwxOC44NTc0MjIgMTEuMTc1NzgxLDE0Ljk1NzAzMSA3LjY1NjI1LDE4LjkxMDE1NiAxNS43Njk1MzEsMjYuMTMyODEyIDMyLjkwODIwMyw4Ljk2Mjg5MDYgWlxcXCIgaWQ9XFxcInBhdGg2XFxcIj48L3BhdGg+PC9nPjwvZz48L3N2Zz5cIiIsIi8vIFRhc2sgaWNvbnNcbmltcG9ydCBkYXRlVW5zZWxlY3RlZFN2ZyBmcm9tIFwiLi4vaW1nL3Rhc2tzL2RhdGUtbm9maWxsLnN2Z1wiO1xuaW1wb3J0IGRhdGVTZWxlY3RlZFN2ZyBmcm9tIFwiLi4vaW1nL3Rhc2tzL2RhdGUtZmlsbC5zdmdcIjtcbmltcG9ydCBwcmlvcml0eVVuc2VsZWN0ZWRTdmcgZnJvbSBcIi4uL2ltZy90YXNrcy9wcmlvcml0eS1ub2ZpbGwuc3ZnXCI7XG5pbXBvcnQgcHJpb3JpdHlTZWxlY3RlZFN2ZyBmcm9tIFwiLi4vaW1nL3Rhc2tzL3ByaW9yaXR5LWZpbGwuc3ZnXCI7XG5cbi8vIExpc3QgaWNvbnNcbmltcG9ydCBkZWZhdWx0U3ZnIGZyb20gXCIuLi9pbWcvbGlzdHMvZGVmYXVsdC5zdmdcIjtcbmltcG9ydCBzdGFyU3ZnIGZyb20gXCIuLi9pbWcvbGlzdHMvc3Rhci5zdmdcIjtcbmltcG9ydCBoZWFydFN2ZyBmcm9tIFwiLi4vaW1nL2xpc3RzL2hlYXJ0LnN2Z1wiO1xuaW1wb3J0IHNvZmFTdmcgZnJvbSBcIi4uL2ltZy9saXN0cy9zb2ZhLnN2Z1wiO1xuaW1wb3J0IHRyZWVTdmcgZnJvbSBcIi4uL2ltZy9saXN0cy90cmVlLnN2Z1wiO1xuaW1wb3J0IHNob3BwaW5nU3ZnIGZyb20gXCIuLi9pbWcvbGlzdHMvc2hvcHBpbmcuc3ZnXCI7XG5pbXBvcnQgc2Nob29sU3ZnIGZyb20gXCIuLi9pbWcvbGlzdHMvc2Nob29sLnN2Z1wiO1xuaW1wb3J0IHBlbmNpbFN2ZyBmcm9tIFwiLi4vaW1nL2xpc3RzL3BlbmNpbC5zdmdcIjtcbmltcG9ydCBwbGFuZVN2ZyBmcm9tIFwiLi4vaW1nL2xpc3RzL3BsYW5lLnN2Z1wiO1xuaW1wb3J0IGNsb3VkU3ZnIGZyb20gXCIuLi9pbWcvbGlzdHMvY2xvdWQuc3ZnXCI7XG5pbXBvcnQgbGlnaHRidWxiU3ZnIGZyb20gXCIuLi9pbWcvbGlzdHMvbGlnaHRidWxiLnN2Z1wiO1xuaW1wb3J0IGJvb2tTdmcgZnJvbSBcIi4uL2ltZy9saXN0cy9ib29rLnN2Z1wiO1xuXG4vLyBEaWFsb2cgaWNvbnNcbmltcG9ydCBjbG9zZVN2ZyBmcm9tIFwiLi4vaW1nL290aGVycy9jbG9zZS5zdmdcIjtcbmltcG9ydCBob3Jpem9udGFsT3B0aW9uc1N2ZyBmcm9tIFwiLi4vaW1nL290aGVycy9ob3Jpem9udGFsLW9wdGlvbnMuc3ZnXCI7XG5pbXBvcnQgZWRpdFN2ZyBmcm9tIFwiLi4vaW1nL290aGVycy9lZGl0LnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZVN2ZyBmcm9tIFwiLi4vaW1nL290aGVycy9kZWxldGUuc3ZnXCI7XG5cbi8vIEZ1bmN0aW9uc1xuaW1wb3J0ICogYXMgbGlzdHMgZnJvbSBcIi4uL2xpc3RzLWFuZC10YXNrc1wiO1xuaW1wb3J0ICogYXMgc2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyLmpzXCI7XG5pbXBvcnQgKiBhcyBwYWdlIGZyb20gXCIuL3BhZ2UuanNcIjtcbmltcG9ydCAqIGFzIGlucHV0cyBmcm9tIFwiLi9pbnB1dHMuanNcIjtcbmltcG9ydCAqIGFzIG5vdGlmaWNhdGlvbnMgZnJvbSBcIi4vbm90aWZpY2F0aW9ucy5qc1wiO1xuXG5jb25zdCBsaXN0SWNvbnMgPSBbXG4gIGRlZmF1bHRTdmcsXG4gIHN0YXJTdmcsXG4gIGhlYXJ0U3ZnLFxuICBzb2ZhU3ZnLFxuICB0cmVlU3ZnLFxuICBzaG9wcGluZ1N2ZyxcbiAgc2Nob29sU3ZnLFxuICBwZW5jaWxTdmcsXG4gIHBsYW5lU3ZnLFxuICBjbG91ZFN2ZyxcbiAgbGlnaHRidWxiU3ZnLFxuICBib29rU3ZnLFxuXTtcblxuY29uc3QgbGlzdFRpdGxlTWF4TGVuZ3RoID0gMjU7XG5jb25zdCB0YXNrVGl0bGVNYXhMZW5ndGggPSA1MDtcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbk1heExlbmd0aCA9IDMwMDtcbmNvbnN0IGhlaWdodE92ZXJmbG93ID0gMTU2O1xuXG4vLyBMaXN0IGRpYWxvZ3M6XG5jb25zdCBzaG93TmV3TGlzdERpYWxvZyA9ICgpID0+IHtcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgZGlhbG9nLmlkID0gXCJuZXctbGlzdFwiO1xuXG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0aXRsZS1jb250YWluZXJcIjtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gaW5wdXRzLmFwcGVuZFRleHRJbnB1dChcbiAgICBcImxpc3QtdGl0bGUtaW5wdXRcIixcbiAgICBcIkxpc3QgdGl0bGVcIixcbiAgICBsaXN0VGl0bGVNYXhMZW5ndGgsXG4gICAgdHJ1ZVxuICApO1xuXG4gIGNvbnN0IHNlbGVjdEljb25JbnB1dCA9IGlucHV0cy5hcHBlbmRTZWxlY3RJbnB1dEdyaWQoXG4gICAgXCJzZWxlY3QtaWNvblwiLFxuICAgIGxpc3RJY29uc1xuICApO1xuXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdEljb25JbnB1dCk7XG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IGRpYWxvZ0J1dHRvbnMgPSBpbnB1dHMuYXBwZW5kRGlhbG9nQnV0dG9ucyhcIkNyZWF0ZSBsaXN0XCIpO1xuICBjb25zdCBtYWluQnV0dG9uID0gZGlhbG9nQnV0dG9ucy5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnByaW1hcnlcIik7XG5cbiAgZGlhbG9nLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGRpYWxvZ0J1dHRvbnMpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcblxuICBhZGRDbG9zZURpYWxvZ0V2ZW50KGRpYWxvZyk7XG4gIGFkZENsb3NlRGlhbG9nQnV0dG9uc0V2ZW50KGRpYWxvZywgQXJyYXkuZnJvbShkaWFsb2dCdXR0b25zLmNoaWxkTm9kZXMpKTtcbiAgYWRkQ3JlYXRlTGlzdEV2ZW50KGRpYWxvZyk7XG4gIGRpc2FibGVFbXB0eURpYWxvZ0V2ZW50KHRpdGxlSW5wdXQsIG1haW5CdXR0b24pO1xuXG4gIGRpYWxvZy5zaG93TW9kYWwoKTtcbn07XG5cbmNvbnN0IHNob3dFZGl0TGlzdERpYWxvZyA9IChsaXN0KSA9PiB7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIGRpYWxvZy5pZCA9IFwiZWRpdC1saXN0XCI7XG5cbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRpdGxlLWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBpbnB1dHMuYXBwZW5kVGV4dElucHV0KFxuICAgIFwibGlzdC10aXRsZS1pbnB1dFwiLFxuICAgIFwiTGlzdCB0aXRsZVwiLFxuICAgIGxpc3RUaXRsZU1heExlbmd0aCxcbiAgICB0cnVlLFxuICAgIGxpc3QubmFtZVxuICApO1xuXG4gIGNvbnN0IHNlbGVjdEljb25JbnB1dCA9IGlucHV0cy5hcHBlbmRTZWxlY3RJbnB1dEdyaWQoXG4gICAgXCJzZWxlY3QtaWNvblwiLFxuICAgIGxpc3RJY29uc1xuICApO1xuICBpbnB1dHMuc2VsZWN0T3B0aW9uVmFsdWVHcmlkKHNlbGVjdEljb25JbnB1dCwgbGlzdEljb25zLmluZGV4T2YobGlzdC5pY29uKSk7XG5cbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0SWNvbklucHV0KTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgY29uc3QgZGlhbG9nQnV0dG9ucyA9IGlucHV0cy5hcHBlbmREaWFsb2dCdXR0b25zKFwiRWRpdCBsaXN0XCIpO1xuICBjb25zdCBtYWluQnV0dG9uID0gZGlhbG9nQnV0dG9ucy5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnByaW1hcnlcIik7XG5cbiAgZGlhbG9nLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGRpYWxvZ0J1dHRvbnMpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcblxuICBhZGRDbG9zZURpYWxvZ0V2ZW50KGRpYWxvZyk7XG4gIGFkZENsb3NlRGlhbG9nQnV0dG9uc0V2ZW50KGRpYWxvZywgQXJyYXkuZnJvbShkaWFsb2dCdXR0b25zLmNoaWxkTm9kZXMpKTtcbiAgYWRkRWRpdExpc3RFdmVudChkaWFsb2cpO1xuICBkaXNhYmxlRW1wdHlEaWFsb2dFdmVudCh0aXRsZUlucHV0LCBtYWluQnV0dG9uKTtcblxuICBkaWFsb2cuc2hvd01vZGFsKCk7XG59O1xuXG5jb25zdCBzaG93RGVsZXRlTGlzdERpYWxvZyA9IChsaXN0KSA9PiB7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIGRpYWxvZy5pZCA9IFwiZGVsZXRlLWxpc3RcIjtcblxuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVzc2FnZS5jbGFzc05hbWUgPSBcIm1lc3NhZ2VcIjtcblxuICBjb25zdCBtZXNzYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbWVzc2FnZVRpdGxlLmNsYXNzTmFtZSA9IFwibWVzc2FnZS10aXRsZVwiO1xuICBtZXNzYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBsaXN0P1wiO1xuXG4gIGNvbnN0IGxpc3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGlzdEluZm8uY2xhc3NOYW1lID0gXCJsaXN0LWluZm9cIjtcblxuICBjb25zdCBsaXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsaXN0SWNvbi5jbGFzc05hbWUgPSBcImxpc3QtaWNvblwiO1xuICBsaXN0SWNvbi5pbm5lckhUTUwgPSBsaXN0Lmljb247XG5cbiAgY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxpc3RUaXRsZS5jbGFzc05hbWUgPSBcImxpc3QtdGl0bGVcIjtcbiAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuXG4gIGxpc3RJbmZvLmFwcGVuZENoaWxkKGxpc3RJY29uKTtcbiAgbGlzdEluZm8uYXBwZW5kQ2hpbGQobGlzdFRpdGxlKTtcblxuICBjb25zdCBzdWJNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHN1Yk1lc3NhZ2UuY2xhc3NOYW1lID0gXCJzdWItbWVzc2FnZVwiO1xuICBzdWJNZXNzYWdlLnRleHRDb250ZW50ID0gXCJUaGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLlwiO1xuXG4gIGNvbnN0IGRpYWxvZ0J1dHRvbnMgPSBpbnB1dHMuYXBwZW5kRGlhbG9nQnV0dG9ucyhcIkRlbGV0ZVwiKTtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZGlhbG9nQnV0dG9ucy5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnByaW1hcnlcIik7XG5cbiAgbWVzc2FnZS5hcHBlbmRDaGlsZChtZXNzYWdlVGl0bGUpO1xuICBtZXNzYWdlLmFwcGVuZENoaWxkKGxpc3RJbmZvKTtcbiAgbWVzc2FnZS5hcHBlbmRDaGlsZChzdWJNZXNzYWdlKTtcblxuICBkaWFsb2cuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dCdXR0b25zKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG5cbiAgYWRkQ2xvc2VEaWFsb2dFdmVudChkaWFsb2cpO1xuICBhZGRDbG9zZURpYWxvZ0J1dHRvbnNFdmVudChkaWFsb2csIEFycmF5LmZyb20oZGlhbG9nQnV0dG9ucy5jaGlsZE5vZGVzKSk7XG4gIGFkZERlbGV0ZUxpc3RFdmVudChkZWxldGVCdXR0b24sIGxpc3RzLmdldEN1cnJlbnRMaXN0KCkubmFtZSk7XG5cbiAgZGlhbG9nLnNob3dNb2RhbCgpO1xufTtcblxuLy8gVGFzayBkaWFsb2dzOlxuY29uc3Qgc2hvd05ld1Rhc2tEaWFsb2cgPSAoKSA9PiB7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIGRpYWxvZy5pZCA9IFwibmV3LXRhc2tcIjtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gaW5wdXRzLmFwcGVuZFRleHRJbnB1dChcbiAgICBcInRhc2stdGl0bGUtaW5wdXRcIixcbiAgICBcIlRhc2sgdGl0bGVcIixcbiAgICB0YXNrVGl0bGVNYXhMZW5ndGgsXG4gICAgdHJ1ZVxuICApO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBpbnB1dHMuYXBwZW5kVGV4dEFyZWFJbnB1dChcbiAgICBcInRhc2stZGVzY3JpcHRpb24taW5wdXRcIixcbiAgICBcIlRhc2sgZGVzY3JpcHRpb25cIixcbiAgICB0YXNrRGVzY3JpcHRpb25NYXhMZW5ndGgsXG4gICAgNCxcbiAgICBmYWxzZVxuICApO1xuXG4gIGNvbnN0IHNlbGVjdElucHV0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlbGVjdElucHV0c0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2stc2VsZWN0LWlucHV0c1wiO1xuXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGlucHV0cy5hcHBlbmREYXRlSW5wdXQoXCJkYXRlLWlucHV0XCIsIGRhdGVVbnNlbGVjdGVkU3ZnKTtcbiAgY29uc3Qgc2VsZWN0UHJpb3JpdHlJbnB1dCA9IGlucHV0cy5hcHBlbmRTZWxlY3RJbnB1dChcbiAgICBcInNlbGVjdC1wcmlvcml0eVwiLFxuICAgIHByaW9yaXR5VW5zZWxlY3RlZFN2ZyxcbiAgICBbXG4gICAgICB7IGljb246IHByaW9yaXR5VW5zZWxlY3RlZFN2ZywgbmFtZTogXCJQcmlvcml0eVwiIH0sXG4gICAgICB7IGljb246IHByaW9yaXR5U2VsZWN0ZWRTdmcsIG5hbWU6IFwiTG93XCIgfSxcbiAgICAgIHsgaWNvbjogcHJpb3JpdHlTZWxlY3RlZFN2ZywgbmFtZTogXCJNZWRpdW1cIiB9LFxuICAgICAgeyBpY29uOiBwcmlvcml0eVNlbGVjdGVkU3ZnLCBuYW1lOiBcIkhpZ2hcIiB9LFxuICAgIF1cbiAgKTtcbiAgY29uc3Qgc2VsZWN0TGlzdElucHV0ID0gaW5wdXRzLmFwcGVuZFNlbGVjdElucHV0KFxuICAgIFwic2VsZWN0LWxpc3RcIixcbiAgICBkZWZhdWx0U3ZnLFxuICAgIGxpc3RzLmdldExpc3RzTmFtZXNJY29ucygpLFxuICAgIGxpc3RzLmdldExpc3RJbmRleChsaXN0cy5nZXRDdXJyZW50TGlzdCgpLm5hbWUpXG4gICk7XG5cbiAgc2VsZWN0SW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gIHNlbGVjdElucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RQcmlvcml0eUlucHV0KTtcbiAgc2VsZWN0SW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdExpc3RJbnB1dCk7XG5cbiAgY29uc3QgZGlhbG9nQnV0dG9ucyA9IGlucHV0cy5hcHBlbmREaWFsb2dCdXR0b25zKFwiQWRkIHRhc2tcIik7XG4gIGNvbnN0IG1haW5CdXR0b24gPSBkaWFsb2dCdXR0b25zLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24ucHJpbWFyeVwiKTtcblxuICBkaWFsb2cuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKHNlbGVjdElucHV0c0NvbnRhaW5lcik7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dCdXR0b25zKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG5cbiAgYWRkQ2xvc2VEaWFsb2dFdmVudChkaWFsb2cpO1xuICBhZGRDbG9zZURpYWxvZ0J1dHRvbnNFdmVudChkaWFsb2csIEFycmF5LmZyb20oZGlhbG9nQnV0dG9ucy5jaGlsZE5vZGVzKSk7XG4gIGFkZENyZWF0ZVRhc2tFdmVudChkaWFsb2cpO1xuICBkaXNhYmxlRW1wdHlEaWFsb2dFdmVudCh0aXRsZUlucHV0LCBtYWluQnV0dG9uKTtcblxuICBkaWFsb2cuc2hvd01vZGFsKCk7XG59O1xuXG5jb25zdCBzaG93RWRpdFRhc2tEaWFsb2cgPSAodGFzaykgPT4ge1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICBkaWFsb2cuaWQgPSBcImVkaXQtdGFza1wiO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBpbnB1dHMuYXBwZW5kVGV4dElucHV0KFxuICAgIFwidGFzay10aXRsZS1pbnB1dFwiLFxuICAgIFwiVGFzayB0aXRsZVwiLFxuICAgIHRhc2tUaXRsZU1heExlbmd0aCxcbiAgICB0cnVlLFxuICAgIHRhc2sudGl0bGVcbiAgKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gaW5wdXRzLmFwcGVuZFRleHRBcmVhSW5wdXQoXG4gICAgXCJ0YXNrLWRlc2NyaXB0aW9uLWlucHV0XCIsXG4gICAgXCJUYXNrIGRlc2NyaXB0aW9uXCIsXG4gICAgdGFza0Rlc2NyaXB0aW9uTWF4TGVuZ3RoLFxuICAgIDQsXG4gICAgZmFsc2UsXG4gICAgdGFzay5kZXNjcmlwdGlvblxuICApO1xuXG4gIGNvbnN0IHNlbGVjdElucHV0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlbGVjdElucHV0c0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2stc2VsZWN0LWlucHV0c1wiO1xuXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGlucHV0cy5hcHBlbmREYXRlSW5wdXQoXCJkYXRlLWlucHV0XCIsIGRhdGVVbnNlbGVjdGVkU3ZnKTtcbiAgaW5wdXRzLnNlbGVjdERhdGVWYWx1ZShkYXRlSW5wdXQsIHRhc2suZGF0ZSk7XG5cbiAgY29uc3Qgc2VsZWN0UHJpb3JpdHlJbnB1dCA9IGlucHV0cy5hcHBlbmRTZWxlY3RJbnB1dChcbiAgICBcInNlbGVjdC1wcmlvcml0eVwiLFxuICAgIHByaW9yaXR5VW5zZWxlY3RlZFN2ZyxcbiAgICBbXG4gICAgICB7IGljb246IHByaW9yaXR5VW5zZWxlY3RlZFN2ZywgbmFtZTogXCJQcmlvcml0eVwiIH0sXG4gICAgICB7IGljb246IHByaW9yaXR5U2VsZWN0ZWRTdmcsIG5hbWU6IFwiTG93XCIgfSxcbiAgICAgIHsgaWNvbjogcHJpb3JpdHlTZWxlY3RlZFN2ZywgbmFtZTogXCJNZWRpdW1cIiB9LFxuICAgICAgeyBpY29uOiBwcmlvcml0eVNlbGVjdGVkU3ZnLCBuYW1lOiBcIkhpZ2hcIiB9LFxuICAgIF1cbiAgKTtcbiAgaW5wdXRzLnNlbGVjdE9wdGlvblZhbHVlKHNlbGVjdFByaW9yaXR5SW5wdXQsIHRhc2sucHJpb3JpdHkgfHwgXCJQcmlvcml0eVwiKTtcblxuICBjb25zdCBzZWxlY3RMaXN0SW5wdXQgPSBpbnB1dHMuYXBwZW5kU2VsZWN0SW5wdXQoXG4gICAgXCJzZWxlY3QtbGlzdFwiLFxuICAgIGRlZmF1bHRTdmcsXG4gICAgbGlzdHMuZ2V0TGlzdHNOYW1lc0ljb25zKCksXG4gICAgbGlzdHMuZ2V0TGlzdEluZGV4KGxpc3RzLmdldEN1cnJlbnRMaXN0KCkubmFtZSlcbiAgKTtcblxuICBzZWxlY3RJbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgc2VsZWN0SW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5SW5wdXQpO1xuICBzZWxlY3RJbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0TGlzdElucHV0KTtcblxuICBjb25zdCBkaWFsb2dCdXR0b25zID0gaW5wdXRzLmFwcGVuZERpYWxvZ0J1dHRvbnMoXCJFZGl0IHRhc2tcIik7XG4gIGNvbnN0IG1haW5CdXR0b24gPSBkaWFsb2dCdXR0b25zLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24ucHJpbWFyeVwiKTtcblxuICBkaWFsb2cuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKHNlbGVjdElucHV0c0NvbnRhaW5lcik7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dCdXR0b25zKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG5cbiAgYWRkQ2xvc2VEaWFsb2dFdmVudChkaWFsb2cpO1xuICBhZGRDbG9zZURpYWxvZ0J1dHRvbnNFdmVudChkaWFsb2csIEFycmF5LmZyb20oZGlhbG9nQnV0dG9ucy5jaGlsZE5vZGVzKSk7XG4gIGFkZEVkaXRUYXNrRXZlbnQoZGlhbG9nLCB0YXNrLmlkKTtcbiAgZGlzYWJsZUVtcHR5RGlhbG9nRXZlbnQodGl0bGVJbnB1dCwgbWFpbkJ1dHRvbik7XG5cbiAgZGlhbG9nLnNob3dNb2RhbCgpO1xufTtcblxuY29uc3Qgc2hvd0RlbGV0ZVRhc2tEaWFsb2cgPSAodGFza0lkKSA9PiB7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIGRpYWxvZy5pZCA9IFwiZGVsZXRlLXRhc2tcIjtcblxuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVzc2FnZS5jbGFzc05hbWUgPSBcIm1lc3NhZ2VcIjtcblxuICBjb25zdCBtZXNzYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbWVzc2FnZVRpdGxlLmNsYXNzTmFtZSA9IFwibWVzc2FnZS10aXRsZVwiO1xuICBtZXNzYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YXNrP1wiO1xuXG4gIGNvbnN0IHN1Yk1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc3ViTWVzc2FnZS5jbGFzc05hbWUgPSBcInN1Yi1tZXNzYWdlXCI7XG4gIHN1Yk1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuXCI7XG5cbiAgY29uc3QgZGlhbG9nQnV0dG9ucyA9IGlucHV0cy5hcHBlbmREaWFsb2dCdXR0b25zKFwiRGVsZXRlXCIpO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBkaWFsb2dCdXR0b25zLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24ucHJpbWFyeVwiKTtcblxuICBtZXNzYWdlLmFwcGVuZENoaWxkKG1lc3NhZ2VUaXRsZSk7XG4gIG1lc3NhZ2UuYXBwZW5kQ2hpbGQoc3ViTWVzc2FnZSk7XG5cbiAgZGlhbG9nLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZGlhbG9nQnV0dG9ucyk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2cpO1xuXG4gIGFkZENsb3NlRGlhbG9nRXZlbnQoZGlhbG9nKTtcbiAgYWRkQ2xvc2VEaWFsb2dCdXR0b25zRXZlbnQoZGlhbG9nLCBBcnJheS5mcm9tKGRpYWxvZ0J1dHRvbnMuY2hpbGROb2RlcykpO1xuICBhZGREZWxldGVUYXNrRXZlbnQoZGVsZXRlQnV0dG9uLCB0YXNrSWQpO1xuXG4gIGRpYWxvZy5zaG93TW9kYWwoKTtcbn07XG5cbmNvbnN0IGFwcGVuZFNlY29uZGFyeUluZm9FbGVtZW50cyA9IChsYWJlbCwgaWNvbiwgZWxlbWVudENsYXNzKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5mby1lbGVtZW50XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChlbGVtZW50Q2xhc3MpO1xuICBjb250YWluZXIuZGF0YXNldC52YWx1ZSA9IGxhYmVsO1xuXG4gIGNvbnN0IGVsZW1lbnRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGVsZW1lbnRJY29uLmNsYXNzTmFtZSA9IFwiaWNvblwiO1xuICBlbGVtZW50SWNvbi5pbm5lckhUTUwgPSBpY29uO1xuXG4gIGNvbnN0IGVsZW1lbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBlbGVtZW50TGFiZWwuY2xhc3NOYW1lID0gXCJsYWJlbFwiO1xuICBlbGVtZW50TGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbDtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudEljb24pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudExhYmVsKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuY29uc3Qgc2hvd1Rhc2tEZXRhaWxzRGlhbG9nID0gKGxpc3QsIHRhc2spID0+IHtcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgZGlhbG9nLmlkID0gXCJ0YXNrLWRldGFpbHNcIjtcblxuICBjb25zdCBhY3Rpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWN0aW9uc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImFjdGlvbnMtY29udGFpbmVyXCI7XG5cbiAgY29uc3QgY2xvc2VEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZURpYWxvZy5pZCA9IFwiY2xvc2UtdGFzay1kZXRhaWxzXCI7XG4gIGNvbnN0IGNsb3NlRGlhbG9nSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjbG9zZURpYWxvZ0ljb24uY2xhc3NOYW1lID0gXCJidXR0b24taWNvblwiO1xuICBjbG9zZURpYWxvZ0ljb24uaW5uZXJIVE1MID0gY2xvc2VTdmc7XG5cbiAgY2xvc2VEaWFsb2cuYXBwZW5kQ2hpbGQoY2xvc2VEaWFsb2dJY29uKTtcblxuICBjb25zdCBtb3JlT3B0aW9ucyA9IGlucHV0cy5hcHBlbmRPcHRpb25zQnV0dG9uKFxuICAgIGhvcml6b250YWxPcHRpb25zU3ZnLFxuICAgIFwidGFzay1tb3JlLW9wdGlvbnNcIixcbiAgICBbXG4gICAgICB7IGxhYmVsOiBcIkVkaXRcIiwgaWNvbjogZWRpdFN2Zywgb3B0aW9uQ2xhc3M6IFwiZWRpdC10YXNrXCIgfSxcbiAgICAgIHsgbGFiZWw6IFwiRGVsZXRlXCIsIGljb246IGRlbGV0ZVN2Zywgb3B0aW9uQ2xhc3M6IFwiZGVsZXRlLXRhc2tcIiB9LFxuICAgIF1cbiAgKTtcblxuICBjb25zdCBkZWxldGVPcHRpb24gPSBtb3JlT3B0aW9ucy5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS10YXNrXCIpO1xuICBjb25zdCBlZGl0T3B0aW9uID0gbW9yZU9wdGlvbnMucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2tcIik7XG5cbiAgYWN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZURpYWxvZyk7XG4gIGFjdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobW9yZU9wdGlvbnMpO1xuXG4gIGNvbnN0IG1haW5JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkluZm8uY2xhc3NOYW1lID0gXCJtYWluLWluZm9ybWF0aW9uXCI7XG5cbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tUaXRsZS5jbGFzc05hbWUgPSBcInRhc2stdGl0bGVcIjtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwidGFzay1kZXNjcmlwdGlvblwiO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uIHx8IFwiTm8gZGVzY3JpcHRpb25cIjtcblxuICBtYWluSW5mby5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICBtYWluSW5mby5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IHNlY29uZGFyeUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWNvbmRhcnlJbmZvLmNsYXNzTmFtZSA9IFwic2Vjb25kYXJ5LWluZm9ybWF0aW9uXCI7XG5cbiAgaWYgKHRhc2suZGF0ZSkge1xuICAgIHNlY29uZGFyeUluZm8uYXBwZW5kQ2hpbGQoXG4gICAgICBhcHBlbmRTZWNvbmRhcnlJbmZvRWxlbWVudHModGFzay5kYXRlLCBkYXRlU2VsZWN0ZWRTdmcsIFwidGFzay1kYXRlXCIpXG4gICAgKTtcbiAgfVxuICBpZiAodGFzay5wcmlvcml0eSkge1xuICAgIHNlY29uZGFyeUluZm8uYXBwZW5kQ2hpbGQoXG4gICAgICBhcHBlbmRTZWNvbmRhcnlJbmZvRWxlbWVudHMoXG4gICAgICAgIHRhc2sucHJpb3JpdHksXG4gICAgICAgIHByaW9yaXR5U2VsZWN0ZWRTdmcsXG4gICAgICAgIFwidGFzay1wcmlvcml0eVwiXG4gICAgICApXG4gICAgKTtcbiAgfVxuICBzZWNvbmRhcnlJbmZvLmFwcGVuZENoaWxkKFxuICAgIGFwcGVuZFNlY29uZGFyeUluZm9FbGVtZW50cyhsaXN0Lm5hbWUsIGxpc3QuaWNvbiwgXCJ0YXNrLWxpc3RcIilcbiAgKTtcblxuICBkaWFsb2cuYXBwZW5kQ2hpbGQoYWN0aW9uc0NvbnRhaW5lcik7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChtYWluSW5mbyk7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChzZWNvbmRhcnlJbmZvKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG5cbiAgYWRkQ2xvc2VEaWFsb2dFdmVudChkaWFsb2cpO1xuICBhZGRDbG9zZURpYWxvZ0J1dHRvbnNFdmVudChkaWFsb2csIGNsb3NlRGlhbG9nKTtcbiAgb3BlbkRpYWxvZ0V2ZW50KGRlbGV0ZU9wdGlvbiwgc2hvd0RlbGV0ZVRhc2tEaWFsb2csIHRhc2suaWQpO1xuICBvcGVuRGlhbG9nRXZlbnQoZWRpdE9wdGlvbiwgc2hvd0VkaXRUYXNrRGlhbG9nLCB0YXNrKTtcblxuICBkaWFsb2cuc2hvd01vZGFsKCk7XG5cbiAgLy8gSWYgZGVzY3JpcHRpb24gaXMgb3ZlcmZsb3dpbmc6IEFwcGx5IHNjcm9sbGJhcnNcbiAgaWYgKHRhc2tEZXNjcmlwdGlvbi5jbGllbnRIZWlnaHQgPiBoZWlnaHRPdmVyZmxvdylcbiAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInNjcm9sbC10ZXh0XCIpO1xufTtcblxuLy8gRGlhbG9nIGV2ZW50c1xuY29uc3QgYWRkQ3JlYXRlTGlzdEV2ZW50ID0gKGRpYWxvZ0NvbnRhaW5lcikgPT4ge1xuICBjb25zdCBjcmVhdGVCdXR0b24gPSBkaWFsb2dDb250YWluZXIucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5wcmltYXJ5XCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZGlhbG9nQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNsaXN0LXRpdGxlLWlucHV0XCIpO1xuICBjb25zdCBzZWxlY3RlZEljb24gPSBkaWFsb2dDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICBcIiNzZWxlY3QtaWNvbiAuYnV0dG9uLWljb25cIlxuICApO1xuXG4gIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxpc3RzLmNyZWF0ZUxpc3QodGl0bGVJbnB1dC52YWx1ZSwgc2VsZWN0ZWRJY29uLmlubmVySFRNTCk7XG4gICAgc2lkZWJhci5yZWZyZXNoVXNlclNpZGViYXJMaXN0cygpO1xuICAgIG5vdGlmaWNhdGlvbnMuZGlzcGxheU5vdGlmaWNhdGlvbihcIkxpc3QgY3JlYXRlZCBzdWNjZXNzZnVsbHkuXCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZEVkaXRMaXN0RXZlbnQgPSAoZGlhbG9nQ29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkaWFsb2dDb250YWluZXIucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5wcmltYXJ5XCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZGlhbG9nQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNsaXN0LXRpdGxlLWlucHV0XCIpO1xuICBjb25zdCBzZWxlY3RlZEljb24gPSBkaWFsb2dDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICBcIiNzZWxlY3QtaWNvbiAuYnV0dG9uLWljb25cIlxuICApO1xuXG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsaXN0cy5lZGl0TGlzdChsaXN0cy5nZXRDdXJyZW50TGlzdCgpLm5hbWUsIHtcbiAgICAgIG5hbWU6IHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICBpY29uOiBzZWxlY3RlZEljb24uaW5uZXJIVE1MLFxuICAgIH0pO1xuICAgIHNpZGViYXIucmVmcmVzaFVzZXJTaWRlYmFyTGlzdHMoKTtcbiAgICBwYWdlLnJlZnJlc2hMaXN0VGl0bGUoKTtcbiAgICBub3RpZmljYXRpb25zLmRpc3BsYXlOb3RpZmljYXRpb24oXCJMaXN0IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRDcmVhdGVUYXNrRXZlbnQgPSAoZGlhbG9nQ29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnByaW1hcnlcIik7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkaWFsb2dDb250YWluZXIucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlLWlucHV0XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZGlhbG9nQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjdGFzay1kZXNjcmlwdGlvbi1pbnB1dFwiXG4gICk7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtaW5wdXRcIik7XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkaWFsb2dDb250YWluZXIucXVlcnlTZWxlY3RvcihcIiNzZWxlY3QtcHJpb3JpdHlcIik7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1saXN0XCIpO1xuXG4gIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxpc3RzLmNyZWF0ZVRhc2soc2VsZWN0ZWRMaXN0LmRhdGFzZXQudmFsdWUsIHtcbiAgICAgIHRpdGxlOiB0aXRsZUlucHV0LnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgICBkYXRlOiBkYXRlSW5wdXQuZGF0YXNldC52YWx1ZSxcbiAgICAgIHByaW9yaXR5OiBwcmlvcml0eUlucHV0LmRhdGFzZXQudmFsdWUsXG4gICAgfSk7XG5cbiAgICBwYWdlLnJlZnJlc2hUYXNrRWxlbWVudHMoKTtcbiAgICBub3RpZmljYXRpb25zLmRpc3BsYXlOb3RpZmljYXRpb24oXCJUYXNrIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRFZGl0VGFza0V2ZW50ID0gKGRpYWxvZ0NvbnRhaW5lciwgdGFza0lkKSA9PiB7XG4gIGNvbnN0IHRhc2tEZXRhaWxzRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZyN0YXNrLWRldGFpbHNcIik7XG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkaWFsb2dDb250YWluZXIucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5wcmltYXJ5XCIpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gZGlhbG9nQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZS1pbnB1dFwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRpYWxvZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Rhc2stZGVzY3JpcHRpb24taW5wdXRcIlxuICApO1xuICBjb25zdCBkYXRlSW5wdXQgPSBkaWFsb2dDb250YWluZXIucXVlcnlTZWxlY3RvcihcIiNkYXRlLWlucHV0XCIpO1xuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZGlhbG9nQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0LXByaW9yaXR5XCIpO1xuICBjb25zdCBsaXN0SW5wdXQgPSBkaWFsb2dDb250YWluZXIucXVlcnlTZWxlY3RvcihcIiNzZWxlY3QtbGlzdFwiKTtcblxuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGlzdHMuZWRpdFRhc2sobGlzdElucHV0LmRhdGFzZXQudmFsdWUsIHRhc2tJZCwge1xuICAgICAgdGl0bGU6IHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICAgIGRhdGU6IGRhdGVJbnB1dC5kYXRhc2V0LnZhbHVlLFxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5SW5wdXQuZGF0YXNldC52YWx1ZSxcbiAgICB9KTtcblxuICAgIHBhZ2UucmVmcmVzaFRhc2tFbGVtZW50cygpO1xuICAgIGNsb3NlRGlhbG9nKHRhc2tEZXRhaWxzRGlhbG9nKTtcbiAgICBub3RpZmljYXRpb25zLmRpc3BsYXlOb3RpZmljYXRpb24oXCJUYXNrIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjbG9zZURpYWxvZyA9IChkaWFsb2cpID0+IHtcbiAgZGlhbG9nLmNsYXNzTGlzdC5hZGQoXCJjbG9zaW5nXCIpO1xuXG4gIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRDbG9zZURpYWxvZ0V2ZW50ID0gKGRpYWxvZykgPT4ge1xuICBkaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsICgpID0+IGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGlhbG9nKSk7XG59O1xuXG5jb25zdCBhZGRDbG9zZURpYWxvZ0J1dHRvbnNFdmVudCA9IChkaWFsb2csIGNsb3NlQnV0dG9ucykgPT4ge1xuICAvLyBJZiBjbG9zZUJ1dHRvbnMgaXMgbm90IGFuIGFycmF5LiBBc3NpZ24gZXZlbnQgZGlyZWN0bHlcbiAgaWYgKCFBcnJheS5pc0FycmF5KGNsb3NlQnV0dG9ucykpIHtcbiAgICBjbG9zZUJ1dHRvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlRGlhbG9nKGRpYWxvZykpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNsb3NlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZURpYWxvZyhkaWFsb2cpKVxuICApO1xufTtcblxuY29uc3QgZGlzYWJsZUVtcHR5RGlhbG9nRXZlbnQgPSAodGV4dElucHV0Q29udGFpbmVyLCBtYWluQnV0dG9uKSA9PiB7XG4gIGNvbnN0IHRleHRJbnB1dCA9IHRleHRJbnB1dENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGV4dCddXCIpO1xuXG4gIC8vIERpc2FibGUgYnV0dG9uIHdoZW4gb3BlbmluZyB0aGUgZGlhbG9nXG4gIC8vIElmIHRoZSBkaWFsb2cgaGFzIGRlZmF1bHQgdmFsdWVzIHdoZW4gb3BlbmluZywgZG9uJ3QgZGlzYWJsZSBtYWluQnV0dG9uXG4gIG1haW5CdXR0b24uZGlzYWJsZWQgPSB0ZXh0SW5wdXQudmFsdWUubGVuZ3RoID09PSAwO1xuXG4gIC8vIERpc2FibGUgbWFpbiBidXR0b24gd2hlbjpcbiAgLy8gMS4gU2VsZWN0ZWQgdGV4dCBpbnB1dCBpcyBlbXB0eVxuICAvLyAyLiBJbiB0aGUgY2FzZSBvZiBsaXN0cywgd2hlbiBhIGxpc3QgYWxyZWFkeSBleGlzdHMgd2l0aCB0aGUgY3VycmVudCBpbnB1dFxuICB0ZXh0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICBtYWluQnV0dG9uLmRpc2FibGVkID1cbiAgICAgIHRleHRJbnB1dC52YWx1ZS5sZW5ndGggPD0gMCB8fFxuICAgICAgbGlzdHMuZ2V0TGlzdHNOYW1lcygpLnNvbWUoKGxpc3ROYW1lKSA9PiBsaXN0TmFtZSA9PT0gdGV4dElucHV0LnZhbHVlKTtcbiAgfSk7XG59O1xuXG5jb25zdCBvcGVuRGlhbG9nRXZlbnQgPSAodGFyZ2V0RWxlbWVudCwgZGlhbG9nQ2FsbGJhY2ssIGRpYWxvZ1BhcmFtZXRlcikgPT4ge1xuICB0YXJnZXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGlhbG9nQ2FsbGJhY2soZGlhbG9nUGFyYW1ldGVyKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGREZWxldGVMaXN0RXZlbnQgPSAoZGVsZXRlQnV0dG9uLCBsaXN0TmFtZSkgPT4ge1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwYWdlLnVubG9hZFBhZ2UoKTtcbiAgICBsaXN0cy5kZWxldGVMaXN0KGxpc3ROYW1lKTtcbiAgICBzaWRlYmFyLnJlZnJlc2hVc2VyU2lkZWJhckxpc3RzKCk7XG4gICAgbm90aWZpY2F0aW9ucy5kaXNwbGF5Tm90aWZpY2F0aW9uKFwiTGlzdCBkZWxldGVkIHN1Y2Nlc3NmdWxseS5cIik7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkRGVsZXRlVGFza0V2ZW50ID0gKGRlbGV0ZUJ1dHRvbiwgdGFza0lkKSA9PiB7XG4gIGNvbnN0IGRpYWxvZ09yaWdpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2cjdGFzay1kZXRhaWxzXCIpO1xuXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxpc3RzLmRlbGV0ZVRhc2sobGlzdHMuZ2V0Q3VycmVudExpc3QoKS5uYW1lLCB0YXNrSWQpO1xuICAgIGNsb3NlRGlhbG9nKGRpYWxvZ09yaWdpbik7XG4gICAgcGFnZS5yZWZyZXNoVGFza0VsZW1lbnRzKCk7XG4gICAgbm90aWZpY2F0aW9ucy5kaXNwbGF5Tm90aWZpY2F0aW9uKFwiVGFzayBkZWxldGVkIHN1Y2Nlc3NmdWxseS5cIik7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgc2hvd05ld0xpc3REaWFsb2csXG4gIHNob3dFZGl0TGlzdERpYWxvZyxcbiAgc2hvd0RlbGV0ZUxpc3REaWFsb2csXG4gIHNob3dOZXdUYXNrRGlhbG9nLFxuICBzaG93RWRpdFRhc2tEaWFsb2csXG4gIHNob3dEZWxldGVUYXNrRGlhbG9nLFxuICBzaG93VGFza0RldGFpbHNEaWFsb2csXG4gIG9wZW5EaWFsb2dFdmVudCxcbn07XG4iLCIvLyBJY29uc1xuaW1wb3J0IGRlZmF1bHRTdmcgZnJvbSBcIi4uL2ltZy9saXN0cy9kZWZhdWx0LnN2Z1wiO1xuaW1wb3J0IGRhdGVVbnNlbGVjdGVkU3ZnIGZyb20gXCIuLi9pbWcvdGFza3MvZGF0ZS1ub2ZpbGwuc3ZnXCI7XG5pbXBvcnQgZGF0ZVNlbGVjdGVkU3ZnIGZyb20gXCIuLi9pbWcvdGFza3MvZGF0ZS1maWxsLnN2Z1wiO1xuXG4vLyBDdXN0b20gaW5wdXRzIGNvbnRyb2xsZXJzXG5jb25zdCBhcHBlbmREaWFsb2dCdXR0b25zID0gKHByaW1hcnlMYWJlbCwgc2Vjb25kYXJ5TGFiZWwgPSBcIkNhbmNlbFwiKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25zLmNsYXNzTmFtZSA9IFwiZGlhbG9nLWJ1dHRvbnNcIjtcblxuICBjb25zdCBwcmltYXJ5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcHJpbWFyeUJ1dHRvbi5jbGFzc05hbWUgPSBcInByaW1hcnlcIjtcbiAgcHJpbWFyeUJ1dHRvbi50ZXh0Q29udGVudCA9IHByaW1hcnlMYWJlbDtcblxuICBjb25zdCBzZWNvbmRhcnlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzZWNvbmRhcnlCdXR0b24uY2xhc3NOYW1lID0gXCJzZWNvbmRhcnlcIjtcbiAgc2Vjb25kYXJ5QnV0dG9uLnRleHRDb250ZW50ID0gc2Vjb25kYXJ5TGFiZWw7XG5cbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChwcmltYXJ5QnV0dG9uKTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChzZWNvbmRhcnlCdXR0b24pO1xuXG4gIHJldHVybiBidXR0b25zO1xufTtcblxuY29uc3QgYXBwZW5kVGV4dElucHV0ID0gKFxuICBpbnB1dElkLFxuICBwbGFjZWhvbGRlcixcbiAgbWF4TGVuZ3RoID0gMTAsXG4gIGF1dG9Gb2N1cyA9IGZhbHNlLFxuICBpbml0aWFsVmFsdWUgPSBudWxsXG4pID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGV4dC1pbnB1dC1jb250YWluZXJcIjtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBpbnB1dC5pZCA9IGlucHV0SWQ7XG4gIGlucHV0Lm5hbWUgPSBpbnB1dElkO1xuICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICBpbnB1dC5tYXhMZW5ndGggPSBtYXhMZW5ndGgudG9TdHJpbmcoKTtcbiAgaW5wdXQuYXV0b2ZvY3VzID0gYXV0b0ZvY3VzO1xuICBpbnB1dC52YWx1ZSA9IGluaXRpYWxWYWx1ZTtcblxuICBjb25zdCB0ZXh0Q291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0ZXh0Q291bnRlci5jbGFzc05hbWUgPSBcInRleHQtY291bnRlclwiO1xuXG4gIGNvbnN0IGN1cnJlbnRUZXh0Q291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY3VycmVudFRleHRDb3VudC5jbGFzc05hbWUgPSBcImN1cnJlbnQtY291bnRcIjtcbiAgY3VycmVudFRleHRDb3VudC50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlLmxlbmd0aDtcblxuICBjb25zdCBjb3VudGVyTGltaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY291bnRlckxpbWl0LmNsYXNzTmFtZSA9IFwiY291bnRlci1saW1pdFwiO1xuICBjb3VudGVyTGltaXQudGV4dENvbnRlbnQgPSBgIC8gJHttYXhMZW5ndGh9YDtcblxuICB0ZXh0Q291bnRlci5hcHBlbmRDaGlsZChjdXJyZW50VGV4dENvdW50KTtcbiAgdGV4dENvdW50ZXIuYXBwZW5kQ2hpbGQoY291bnRlckxpbWl0KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvdW50ZXIpO1xuXG4gIGFkZENvdW50TGVuZ3RoRXZlbnQoaW5wdXQsIGN1cnJlbnRUZXh0Q291bnQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5jb25zdCBhcHBlbmRUZXh0QXJlYUlucHV0ID0gKFxuICBpbnB1dElkLFxuICBwbGFjZWhvbGRlcixcbiAgbWF4TGVuZ3RoID0gMTAsXG4gIHJvd3MgPSAxLFxuICBhdXRvRm9jdXMgPSBmYWxzZSxcbiAgaW5pdGlhbFZhbHVlID0gbnVsbFxuKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRleHRhcmVhLWlucHV0LWNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBpbnB1dC5pZCA9IGlucHV0SWQ7XG4gIGlucHV0Lm5hbWUgPSBpbnB1dElkO1xuICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICBpbnB1dC5tYXhMZW5ndGggPSBtYXhMZW5ndGgudG9TdHJpbmcoKTtcbiAgaW5wdXQucm93cyA9IHJvd3MudG9TdHJpbmcoKTtcbiAgaW5wdXQuYXV0b2ZvY3VzID0gYXV0b0ZvY3VzO1xuICBpbnB1dC52YWx1ZSA9IGluaXRpYWxWYWx1ZTtcblxuICBjb25zdCB0ZXh0Q291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0ZXh0Q291bnRlci5jbGFzc05hbWUgPSBcInRleHQtY291bnRlclwiO1xuXG4gIGNvbnN0IGN1cnJlbnRUZXh0Q291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY3VycmVudFRleHRDb3VudC5jbGFzc05hbWUgPSBcImN1cnJlbnQtY291bnRcIjtcbiAgY3VycmVudFRleHRDb3VudC50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlLmxlbmd0aDtcblxuICBjb25zdCBjb3VudGVyTGltaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY291bnRlckxpbWl0LmNsYXNzTmFtZSA9IFwiY291bnRlci1saW1pdFwiO1xuICBjb3VudGVyTGltaXQudGV4dENvbnRlbnQgPSBgIC8gJHttYXhMZW5ndGh9YDtcblxuICB0ZXh0Q291bnRlci5hcHBlbmRDaGlsZChjdXJyZW50VGV4dENvdW50KTtcbiAgdGV4dENvdW50ZXIuYXBwZW5kQ2hpbGQoY291bnRlckxpbWl0KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvdW50ZXIpO1xuXG4gIGFkZENvdW50TGVuZ3RoRXZlbnQoaW5wdXQsIGN1cnJlbnRUZXh0Q291bnQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5jb25zdCBhcHBlbmRTZWxlY3RJbnB1dCA9IChcbiAgaW5wdXRJZCxcbiAgaWNvbixcbiAgb3B0aW9uc0FycmF5ID0gW3sgaWNvbjogZGVmYXVsdFN2ZywgbmFtZTogXCJObyBvcHRpb25zXCIgfV0sXG4gIGluaXRpYWxPcHRpb25JbmRleCA9IDBcbikgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJzZWxlY3QtaW5wdXRcIjtcbiAgaWYgKGlucHV0SWQpIGNvbnRhaW5lci5pZCA9IGlucHV0SWQ7XG5cbiAgY29uc3QgaW5wdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBpbnB1dEJ1dHRvbi5jbGFzc05hbWUgPSBcInNlbGVjdC1idXR0b25cIjtcblxuICBjb25zdCBidXR0b25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBidXR0b25MYWJlbC5jbGFzc05hbWUgPSBcImJ1dHRvbi1sYWJlbFwiO1xuXG4gIGNvbnN0IGJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYnV0dG9uSWNvbi5jbGFzc05hbWUgPSBcImJ1dHRvbi1pY29uXCI7XG4gIGJ1dHRvbkljb24uaW5uZXJIVE1MID0gaWNvbjtcblxuICAvLyBPcHRpb25zXG4gIGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvcHRpb25zQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwib3B0aW9uc1wiO1xuXG4gIG9wdGlvbnNBcnJheS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgb3B0aW9uRWxlbWVudC5jbGFzc05hbWUgPSBcIm9wdGlvblwiO1xuICAgIG9wdGlvbkVsZW1lbnQuZGF0YXNldC52YWx1ZSA9IG9wdGlvbi5uYW1lO1xuXG4gICAgY29uc3Qgb3B0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG9wdGlvbkljb24uY2xhc3NOYW1lID0gXCJvcHRpb24taWNvblwiO1xuICAgIG9wdGlvbkljb24uaW5uZXJIVE1MID0gb3B0aW9uLmljb247XG5cbiAgICBjb25zdCBvcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG9wdGlvbkxhYmVsLmNsYXNzTmFtZSA9IFwib3B0aW9uLWxhYmVsXCI7XG4gICAgb3B0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBvcHRpb24ubmFtZTtcblxuICAgIG9wdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uSWNvbik7XG4gICAgb3B0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25MYWJlbCk7XG5cbiAgICBvcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xuICB9KTtcblxuICBpbnB1dEJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25JY29uKTtcbiAgaW5wdXRCdXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uTGFiZWwpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEJ1dHRvbik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25zQ29udGFpbmVyKTtcblxuICAvLyBBdXRvLXNlbGVjdCBmaXJzdCBvcHRpb25cbiAgaWYgKGluaXRpYWxPcHRpb25JbmRleCA8IDAgfHwgaW5pdGlhbE9wdGlvbkluZGV4ID49IG9wdGlvbnNBcnJheS5sZW5ndGgpXG4gICAgaW5pdGlhbE9wdGlvbkluZGV4ID0gMDtcblxuICBzZWxlY3RPcHRpb25WYWx1ZShcbiAgICBjb250YWluZXIsXG4gICAgb3B0aW9uc0NvbnRhaW5lci5jaGlsZE5vZGVzW2luaXRpYWxPcHRpb25JbmRleF0uZGF0YXNldC52YWx1ZVxuICApO1xuXG4gIC8vIFNlbGVjdCBsaXN0IEV2ZW50c1xuICBhZGRFeHBhbmRPcHRpb25zRXZlbnQoY29udGFpbmVyLCBpbnB1dEJ1dHRvbik7XG4gIGFkZFNlbGVjdE9wdGlvblZhbHVlRXZlbnQoY29udGFpbmVyKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuY29uc3QgYXBwZW5kU2VsZWN0SW5wdXRHcmlkID0gKFxuICBpbnB1dElkLFxuICBvcHRpb25zQXJyYXkgPSBbZGVmYXVsdFN2Z10sXG4gIGluaXRpYWxPcHRpb25JbmRleCA9IDBcbikgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJzZWxlY3QtaW5wdXQtZ3JpZFwiO1xuICBpZiAoaW5wdXRJZCkgY29udGFpbmVyLmlkID0gaW5wdXRJZDtcblxuICBjb25zdCBpbnB1dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGlucHV0QnV0dG9uLmNsYXNzTmFtZSA9IFwic2VsZWN0LWJ1dHRvblwiO1xuXG4gIGNvbnN0IGJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYnV0dG9uSWNvbi5jbGFzc05hbWUgPSBcImJ1dHRvbi1pY29uXCI7XG5cbiAgLy8gT3B0aW9uc1xuICBjb25zdCBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3B0aW9uc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcIm9wdGlvbnMtZ3JpZFwiO1xuXG4gIG9wdGlvbnNBcnJheS5mb3JFYWNoKChvcHRpb25JY29uKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG9wdGlvbkVsZW1lbnQuY2xhc3NOYW1lID0gXCJvcHRpb25cIjtcbiAgICBvcHRpb25FbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbkljb247XG5cbiAgICBvcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xuICB9KTtcblxuICBpbnB1dEJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25JY29uKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRCdXR0b24pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uc0NvbnRhaW5lcik7XG5cbiAgLy8gQXV0by1zZWxlY3QgZmlyc3Qgb3B0aW9uXG4gIGlmIChpbml0aWFsT3B0aW9uSW5kZXggPCAwIHx8IGluaXRpYWxPcHRpb25JbmRleCA+PSBvcHRpb25zQXJyYXkubGVuZ3RoKVxuICAgIGluaXRpYWxPcHRpb25JbmRleCA9IDA7XG5cbiAgc2VsZWN0T3B0aW9uVmFsdWVHcmlkKGNvbnRhaW5lciwgaW5pdGlhbE9wdGlvbkluZGV4KTtcblxuICAvLyBTZWxlY3QgbGlzdCBncmlkIGV2ZW50c1xuICBhZGRFeHBhbmRPcHRpb25zRXZlbnQoY29udGFpbmVyLCBpbnB1dEJ1dHRvbik7XG4gIGFkZFNlbGVjdE9wdGlvblZhbHVlR3JpZEV2ZW50KGNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGFwcGVuZERhdGVJbnB1dCA9IChpbnB1dElkLCBpY29uKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5pZCA9IGlucHV0SWQ7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgaW5wdXQuY2xhc3NOYW1lID0gXCJkYXRlLWVsZW1lbnRcIjtcblxuICBjb250YWluZXIuZGF0YXNldC52YWx1ZSA9IGlucHV0LnZhbHVlO1xuXG4gIGNvbnN0IGlucHV0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaW5wdXRCdXR0b24uY2xhc3NOYW1lID0gXCJkYXRlLWJ1dHRvblwiO1xuXG4gIGNvbnN0IGJ1dHRvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGJ1dHRvbkxhYmVsLmNsYXNzTmFtZSA9IFwiYnV0dG9uLWxhYmVsXCI7XG4gIGJ1dHRvbkxhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlXCI7XG5cbiAgY29uc3QgYnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBidXR0b25JY29uLmNsYXNzTmFtZSA9IFwiYnV0dG9uLWljb25cIjtcbiAgYnV0dG9uSWNvbi5pbm5lckhUTUwgPSBpY29uO1xuXG4gIGlucHV0QnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkljb24pO1xuICBpbnB1dEJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25MYWJlbCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0QnV0dG9uKTtcblxuICBhZGRTaG93RGF0ZVBpY2tlckV2ZW50KGlucHV0QnV0dG9uLCBpbnB1dCk7XG4gIGNoYW5nZURhdGVWYWx1ZUV2ZW50KGNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGFwcGVuZE9wdGlvbnNCdXR0b24gPSAoXG4gIGljb24sXG4gIGNvbnRyb2xsZXJDbGFzcyxcbiAgb3B0aW9uc0FycmF5ID0gW3sgbGFiZWw6IFwiT3B0aW9uXCIsIGljb246IGRlZmF1bHRTdmcsIG9wdGlvbkNsYXNzOiBcIm9wdGlvblwiIH1dXG4pID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25zLWNvbnRyb2xsZXJcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNvbnRyb2xsZXJDbGFzcyk7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLmNsYXNzTmFtZSA9IFwib3B0aW9ucy1jb250cm9sbGVyLWJ1dHRvblwiO1xuXG4gIGNvbnN0IGJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYnV0dG9uSWNvbi5jbGFzc05hbWUgPSBcImJ1dHRvbi1pY29uXCI7XG4gIGJ1dHRvbkljb24uaW5uZXJIVE1MID0gaWNvbjtcblxuICBjb25zdCBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3B0aW9uc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcIm9wdGlvbnNcIjtcblxuICBvcHRpb25zQXJyYXkuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG9wdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm9wdGlvblwiKTtcbiAgICBvcHRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQob3B0aW9uLm9wdGlvbkNsYXNzKTtcblxuICAgIGNvbnN0IG9wdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBvcHRpb25JY29uLmNsYXNzTmFtZSA9IFwib3B0aW9uLWljb25cIjtcbiAgICBvcHRpb25JY29uLmlubmVySFRNTCA9IG9wdGlvbi5pY29uO1xuXG4gICAgY29uc3Qgb3B0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBvcHRpb25MYWJlbC5jbGFzc05hbWUgPSBcIm9wdGlvbi1sYWJlbFwiO1xuICAgIG9wdGlvbkxhYmVsLnRleHRDb250ZW50ID0gb3B0aW9uLmxhYmVsO1xuXG4gICAgb3B0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25JY29uKTtcbiAgICBvcHRpb25FbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkxhYmVsKTtcblxuICAgIG9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gIH0pO1xuXG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25JY29uKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbnNDb250YWluZXIpO1xuXG4gIGFkZEV4cGFuZE9wdGlvbnNFdmVudChjb250YWluZXIsIGJ1dHRvbik7XG4gIGFkZENsb3NlT3B0aW9uc0V2ZW50KGNvbnRhaW5lciwgb3B0aW9uc0NvbnRhaW5lci5jaGlsZE5vZGVzKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuLy8gQ3VzdG9tIGlucHV0cyBldmVudHNcbmNvbnN0IGFkZENvdW50TGVuZ3RoRXZlbnQgPSAoaW5wdXQsIGNvdW50ZXIpID0+IHtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImlucHV0XCIsXG4gICAgKCkgPT4gKGNvdW50ZXIudGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZS5sZW5ndGgpXG4gICk7XG59O1xuXG5jb25zdCBhZGRFeHBhbmRPcHRpb25zRXZlbnQgPSAoY29udGFpbmVyLCBleHBhbmRCdXR0b24pID0+IHtcbiAgLy8gY29uc3QgYnV0dG9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0LWJ1dHRvblwiKTtcblxuICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRcIilcbiAgKTtcbn07XG5cbmNvbnN0IGFkZENsb3NlT3B0aW9uc0V2ZW50ID0gKGNvbnRhaW5lciwgb3B0aW9uQnV0dG9ucykgPT4ge1xuICBvcHRpb25CdXR0b25zLmZvckVhY2goKG9wdGlvbikgPT5cbiAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kXCIpKVxuICApO1xufTtcblxuY29uc3Qgc2VsZWN0T3B0aW9uVmFsdWUgPSAoc2VsZWN0SW5wdXQsIG9wdGlvblZhbHVlKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbkxhYmVsID0gc2VsZWN0SW5wdXQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tbGFiZWxcIik7XG4gIGNvbnN0IGJ1dHRvbkljb24gPSBzZWxlY3RJbnB1dC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1pY29uXCIpO1xuICBjb25zdCBvcHRpb24gPSBzZWxlY3RJbnB1dC5xdWVyeVNlbGVjdG9yKFxuICAgIGAub3B0aW9uW2RhdGEtdmFsdWU9XCIke29wdGlvblZhbHVlfVwiXWBcbiAgKTtcbiAgY29uc3Qgb3B0aW9uSWNvbiA9IG9wdGlvbi5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbi1pY29uXCIpO1xuXG4gIHNlbGVjdElucHV0LmRhdGFzZXQudmFsdWUgPSBvcHRpb24uZGF0YXNldC52YWx1ZTtcbiAgYnV0dG9uTGFiZWwudGV4dENvbnRlbnQgPSBvcHRpb24uZGF0YXNldC52YWx1ZTtcbiAgYnV0dG9uSWNvbi5pbm5lckhUTUwgPSBvcHRpb25JY29uLmlubmVySFRNTDsgLy8gRml4IHRoaXNcbn07XG5cbmNvbnN0IGFkZFNlbGVjdE9wdGlvblZhbHVlRXZlbnQgPSAoc2VsZWN0SW5wdXQpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHNlbGVjdElucHV0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3B0aW9uXCIpO1xuXG4gIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzZWxlY3RPcHRpb25WYWx1ZShzZWxlY3RJbnB1dCwgb3B0aW9uLmRhdGFzZXQudmFsdWUpO1xuICAgICAgc2VsZWN0SW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImV4cGFuZFwiKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBzZWxlY3RPcHRpb25WYWx1ZUdyaWQgPSAoc2VsZWN0SW5wdXRHcmlkLCBvcHRpb25JbmRleCkgPT4ge1xuICBjb25zdCBidXR0b25JY29uID0gc2VsZWN0SW5wdXRHcmlkLnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWljb25cIik7XG4gIGNvbnN0IG9wdGlvbiA9IHNlbGVjdElucHV0R3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wdGlvblwiKVtvcHRpb25JbmRleF07XG5cbiAgYnV0dG9uSWNvbi5pbm5lckhUTUwgPSBvcHRpb24uaW5uZXJIVE1MO1xufTtcblxuY29uc3QgYWRkU2VsZWN0T3B0aW9uVmFsdWVHcmlkRXZlbnQgPSAoc2VsZWN0SW5wdXRHcmlkKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSBzZWxlY3RJbnB1dEdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5vcHRpb25cIik7XG5cbiAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzZWxlY3RPcHRpb25WYWx1ZUdyaWQoc2VsZWN0SW5wdXRHcmlkLCBpbmRleCk7XG4gICAgICBzZWxlY3RJbnB1dEdyaWQuY2xhc3NMaXN0LnJlbW92ZShcImV4cGFuZFwiKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBjaGFuZ2VEYXRlVmFsdWVFdmVudCA9IChpbnB1dENvbnRhaW5lcikgPT4ge1xuICBjb25zdCBkYXRlSW5wdXQgPSBpbnB1dENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuZGF0ZS1lbGVtZW50XCIpO1xuXG4gIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XG4gICAgc2VsZWN0RGF0ZVZhbHVlKGlucHV0Q29udGFpbmVyLCBkYXRlSW5wdXQudmFsdWUpXG4gICk7XG59O1xuXG5jb25zdCBzZWxlY3REYXRlVmFsdWUgPSAoaW5wdXRDb250YWluZXIsIG5ld1ZhbHVlKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gaW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcihcImlucHV0LmRhdGUtZWxlbWVudFwiKTtcbiAgY29uc3QgYnV0dG9uTGFiZWwgPSBpbnB1dENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1sYWJlbFwiKTtcbiAgY29uc3QgYnV0dG9uSWNvbiA9IGlucHV0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWljb25cIik7XG5cbiAgaW5wdXRDb250YWluZXIuZGF0YXNldC52YWx1ZSA9IG5ld1ZhbHVlO1xuICBpbnB1dC52YWx1ZSA9IG5ld1ZhbHVlO1xuICBidXR0b25MYWJlbC50ZXh0Q29udGVudCA9IG5ld1ZhbHVlIHx8IFwiRGF0ZVwiO1xuICBidXR0b25JY29uLmlubmVySFRNTCA9IG5ld1ZhbHVlID8gZGF0ZVNlbGVjdGVkU3ZnIDogZGF0ZVVuc2VsZWN0ZWRTdmc7XG59O1xuXG5jb25zdCBhZGRTaG93RGF0ZVBpY2tlckV2ZW50ID0gKGlucHV0QnV0dG9uLCBkYXRlSW5wdXQpID0+IHtcbiAgaW5wdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRhdGVJbnB1dC5zaG93UGlja2VyKCkpO1xufTtcblxuZXhwb3J0IHtcbiAgYXBwZW5kRGlhbG9nQnV0dG9ucyxcbiAgYXBwZW5kVGV4dElucHV0LFxuICBhcHBlbmRUZXh0QXJlYUlucHV0LFxuICBhcHBlbmRTZWxlY3RJbnB1dCxcbiAgYXBwZW5kU2VsZWN0SW5wdXRHcmlkLFxuICBhcHBlbmREYXRlSW5wdXQsXG4gIGFwcGVuZE9wdGlvbnNCdXR0b24sXG4gIHNlbGVjdE9wdGlvblZhbHVlLFxuICBzZWxlY3RPcHRpb25WYWx1ZUdyaWQsXG4gIHNlbGVjdERhdGVWYWx1ZSxcbn07XG4iLCJpbXBvcnQgc3VjY2Vzc05vdGlmaWNhdGlvblN2ZyBmcm9tIFwiLi4vaW1nL290aGVycy9zdWNjZXNzLW5vdGlmaWNhdGlvbi5zdmdcIjtcbmltcG9ydCBjbG9zZVN2ZyBmcm9tIFwiLi4vaW1nL290aGVycy9jbG9zZS5zdmdcIjtcblxuY29uc3QgY2xvc2VUaW1lb3V0ID0gNTAwMDtcbmxldCBjbG9zZVRpbWVvdXRJZDtcblxuY29uc3QgcmVuZGVyTm90aWZpY2F0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmlkID0gXCJub3RpZmljYXRpb25zLWNvbnRhaW5lclwiO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlOb3RpZmljYXRpb24gPSAobGFiZWwpID0+IHtcbiAgY29uc3Qgbm90aWZpY2F0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjbm90aWZpY2F0aW9ucy1jb250YWluZXJcIlxuICApO1xuXG4gIGNvbnN0IG5ld05vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld05vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xuXG4gIGNvbnN0IG5vdGlmaWNhdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbm90aWZpY2F0aW9uSWNvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvbi1pY29uXCI7XG4gIG5vdGlmaWNhdGlvbkljb24uaW5uZXJIVE1MID0gc3VjY2Vzc05vdGlmaWNhdGlvblN2ZztcblxuICBjb25zdCBub3RpZmljYXRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBub3RpZmljYXRpb25MYWJlbC5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvbi1sYWJlbFwiO1xuICBub3RpZmljYXRpb25MYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gXCJjbG9zZS1ub3RpZmljYXRpb25cIjtcblxuICBjb25zdCBjbG9zZUJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY2xvc2VCdXR0b25JY29uLmNsYXNzTmFtZSA9IFwiYnV0dG9uLWljb25cIjtcbiAgY2xvc2VCdXR0b25JY29uLmlubmVySFRNTCA9IGNsb3NlU3ZnO1xuXG4gIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uSWNvbik7XG5cbiAgbmV3Tm90aWZpY2F0aW9uLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbkljb24pO1xuICBuZXdOb3RpZmljYXRpb24uYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uTGFiZWwpO1xuICBuZXdOb3RpZmljYXRpb24uYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gIG5vdGlmaWNhdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Tm90aWZpY2F0aW9uKTtcblxuICBjbG9zZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoXG4gICAgY2xvc2VOb3RpZmljYXRpb24sXG4gICAgY2xvc2VUaW1lb3V0LFxuICAgIG5vdGlmaWNhdGlvbnNDb250YWluZXIsXG4gICAgbmV3Tm90aWZpY2F0aW9uXG4gICk7XG5cbiAgY2xvc2VOb3RpZmljYXRpb25FdmVudChjbG9zZUJ1dHRvbiwgbm90aWZpY2F0aW9uc0NvbnRhaW5lciwgbmV3Tm90aWZpY2F0aW9uKTtcbn07XG5cbmNvbnN0IGNsb3NlTm90aWZpY2F0aW9uID0gKGNvbnRhaW5lciwgbm90aWZpY2F0aW9uKSA9PiB7XG4gIG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKFwiY2xvc2luZ1wiKTtcblxuICBub3RpZmljYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PlxuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChub3RpZmljYXRpb24pXG4gICk7XG59O1xuXG5jb25zdCBjbG9zZU5vdGlmaWNhdGlvbkV2ZW50ID0gKGNsb3NlQnV0dG9uLCBjb250YWluZXIsIG5vdGlmaWNhdGlvbikgPT4ge1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dChjbG9zZVRpbWVvdXRJZCk7XG4gICAgY2xvc2VOb3RpZmljYXRpb24oY29udGFpbmVyLCBub3RpZmljYXRpb24pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlck5vdGlmaWNhdGlvbnMsIGRpc3BsYXlOb3RpZmljYXRpb24gfTtcbiIsIi8vIEljb25zXG5pbXBvcnQgZGF0ZVN2ZyBmcm9tIFwiLi4vaW1nL3Rhc2tzL2RhdGUtZmlsbC5zdmdcIjtcbmltcG9ydCBwcmlvcml0eVN2ZyBmcm9tIFwiLi4vaW1nL3Rhc2tzL3ByaW9yaXR5LWZpbGwuc3ZnXCI7XG5pbXBvcnQgdG9Db21wbGV0ZUJ1dHRvblN2ZyBmcm9tIFwiLi4vaW1nL290aGVycy90by1jb21wbGV0ZS1idXR0b24uc3ZnXCI7XG5pbXBvcnQgY29tcGxldGVkVGFza1N2ZyBmcm9tIFwiLi4vaW1nL290aGVycy9jb21wbGV0ZWQtdGFzay5zdmdcIjtcbmltcG9ydCBleHBhbmRUYXNrc1N2ZyBmcm9tIFwiLi4vaW1nL290aGVycy9leHBhbmQtdGFza3Muc3ZnXCI7XG5pbXBvcnQgaG9yaXpvbnRhbE9wdGlvbnNTdmcgZnJvbSBcIi4uL2ltZy9vdGhlcnMvaG9yaXpvbnRhbC1vcHRpb25zLnN2Z1wiO1xuaW1wb3J0IGVkaXRTdmcgZnJvbSBcIi4uL2ltZy9vdGhlcnMvZWRpdC5zdmdcIjtcbmltcG9ydCBkZWxldGVTdmcgZnJvbSBcIi4uL2ltZy9vdGhlcnMvZGVsZXRlLnN2Z1wiO1xuXG5pbXBvcnQgKiBhcyBsaXN0cyBmcm9tIFwiLi4vbGlzdHMtYW5kLXRhc2tzLmpzXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCIuL2RpYWxvZ3MuanNcIjtcbmltcG9ydCAqIGFzIGlucHV0cyBmcm9tIFwiLi9pbnB1dHMuanNcIjtcblxubGV0IGxpc3RQYWdlO1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0Q29udGFpbmVyKCkge1xuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGFnZS5pZCA9IFwicGFnZVwiO1xuICAvLyBIaWRlIHBhZ2Ugd2hlbiBmaXJzdCBsb2FkXG4gIHBhZ2UuY2xhc3NOYW1lID0gXCJoaWRlXCI7XG5cbiAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJhY2tncm91bmQuaWQgPSBcImxpc3QtYmFja2dyb3VuZFwiO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImxpc3QtY29udGFpbmVyXCI7XG5cbiAgY29uc3QgdGl0bGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVTZWN0aW9uLmNsYXNzTmFtZSA9IFwidGl0bGUtc2VjdGlvblwiO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZS5pZCA9IFwibGlzdC10aXRsZVwiO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTGlzdCB0aXRsZVwiO1xuXG4gIGNvbnN0IHRhc2tzQ29udGFpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrc0NvbnRhaWVyLmlkID0gXCJ0YXNrcy1jb250YWluZXJcIjtcblxuICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3VGFza0J1dHRvbi5pZCA9IFwibmV3LXRhc2stYnV0dG9uXCI7XG4gIG5ld1Rhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBuZXcgdGFza1wiO1xuXG4gIGNvbnN0IGNvbXBsZXRlZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb21wbGV0ZWRTZWN0aW9uLmNsYXNzTmFtZSA9IFwiY29tcGxldGVkLXRhc2tzLXNlY3Rpb25cIjtcblxuICBjb25zdCBjb21wbGV0ZWRUYXNrc1RpdGxlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbXBsZXRlZFRhc2tzVGl0bGVTZWN0aW9uLmNsYXNzTmFtZSA9IFwiY29tcGxldGVkLXRhc2tzLXRpdGxlLXNlY3Rpb25cIjtcblxuICBjb25zdCBjb21wbGV0ZWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29tcGxldGVkVGl0bGUuaWQgPSBcImNvbXBsZXRlZC10YXNrcy10aXRsZVwiO1xuICBjb21wbGV0ZWRUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVkIHRhc2tzIFwiO1xuXG4gIGNvbnN0IGNvbXBsZXRlZFRhc2tzQ291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb21wbGV0ZWRUYXNrc0NvdW50ZXIuY2xhc3NOYW1lID0gXCJjb21wbGV0ZWQtdGFza3MtY291bnRlclwiO1xuICBjb21wbGV0ZWRUYXNrc0NvdW50ZXIudGV4dENvbnRlbnQgPSBcIigwKVwiO1xuXG4gIGNvbnN0IGV4cGFuZENvbXBsZXRlZFRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZXhwYW5kQ29tcGxldGVkVGFza3MuY2xhc3NOYW1lID0gXCJleHBhbmQtdGFza3NcIjtcbiAgZXhwYW5kQ29tcGxldGVkVGFza3MuaW5uZXJIVE1MID0gZXhwYW5kVGFza3NTdmc7XG5cbiAgY29tcGxldGVkVGl0bGUuYXBwZW5kQ2hpbGQoY29tcGxldGVkVGFza3NDb3VudGVyKTtcbiAgY29tcGxldGVkVGFza3NUaXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQoY29tcGxldGVkVGl0bGUpO1xuICBjb21wbGV0ZWRUYXNrc1RpdGxlU2VjdGlvbi5hcHBlbmRDaGlsZChleHBhbmRDb21wbGV0ZWRUYXNrcyk7XG5cbiAgY29uc3QgY29tcGxldGVkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29tcGxldGVkQ29udGFpbmVyLmlkID0gXCJjb21wbGV0ZWQtdGFza3MtY29udGFpbmVyXCI7XG5cbiAgY29tcGxldGVkU2VjdGlvbi5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc1RpdGxlU2VjdGlvbik7XG4gIGNvbXBsZXRlZFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29tcGxldGVkQ29udGFpbmVyKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVTZWN0aW9uKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzQ29udGFpZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZWRTZWN0aW9uKTtcblxuICBwYWdlLmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuICBwYWdlLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIHBhZ2U7XG59XG5cbmZ1bmN0aW9uIGVtcHR5UGFnZSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZW1wdHktcGFnZVwiO1xuXG4gIGNvbnN0IGVtcHR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZW1wdHlUaXRsZS5jbGFzc05hbWUgPSBcImVtcHR5LXRpdGxlXCI7XG4gIGVtcHR5VGl0bGUudGV4dENvbnRlbnQgPSBcIlRvLURvIGFwcFwiO1xuXG4gIGNvbnN0IGVtcHR5U3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZW1wdHlTdWJ0aXRsZS5jbGFzc05hbWUgPSBcImVtcHR5LXN1YnRpdGxlXCI7XG4gIGVtcHR5U3VidGl0bGUudGV4dENvbnRlbnQgPVxuICAgIFwiQ3JlYXRlIGEgbmV3IGxpc3QgYnkgY2xpY2tpbmcgdGhlICsgYnV0dG9uIG9yIHNlbGVjdCBhbiBleGlzdGluZyBvbmUgdG8gY3JlYXRlIGFkZGluZyB5b3VyIHRhc2tzLlwiO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eVRpdGxlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5U3VidGl0bGUpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tFbGVtZW50KHRhc2ssIGlzQ29tcGxldGVkKSB7XG4gIGNvbnN0IG5ld1Rhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3VGFza0VsZW1lbnQuY2xhc3NOYW1lID0gXCJ0YXNrXCI7XG5cbiAgbmV3VGFza0VsZW1lbnQuZGF0YXNldC50YXNraWQgPSB0YXNrLmlkO1xuXG4gIGNvbnN0IGNvbXBsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbXBsZXRlVGFza0J1dHRvbi5jbGFzc05hbWUgPSBcImNvbXBsZXRlLXRhc2stYnV0dG9uXCI7XG4gIGNvbXBsZXRlVGFza0J1dHRvbi5pbm5lckhUTUwgPSBpc0NvbXBsZXRlZFxuICAgID8gY29tcGxldGVkVGFza1N2Z1xuICAgIDogdG9Db21wbGV0ZUJ1dHRvblN2ZztcblxuICBjb25zdCBtYWluSW5mb3JtYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluSW5mb3JtYXRpb24uY2xhc3NOYW1lID0gXCJtYWluLWluZm9ybWF0aW9uXCI7XG5cbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza1RpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICBtYWluSW5mb3JtYXRpb24uYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICBpZiAodGFzay5kZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIG1haW5JbmZvcm1hdGlvbi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICB9XG4gIGNvbnN0IHN1YkluZm9ybWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3ViSW5mb3JtYXRpb24uY2xhc3NOYW1lID0gXCJzdWItaW5mb3JtYXRpb25cIjtcblxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrUHJpb3JpdHkuY2xhc3NOYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gIGlmICh0YXNrLnByaW9yaXR5KSB7XG4gICAgY29uc3QgcHJpb3JpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmlvcml0eUljb24uY2xhc3NOYW1lID0gXCJwcmlvcml0eS1pY29uXCI7XG4gICAgcHJpb3JpdHlJY29uLmlubmVySFRNTCA9IHByaW9yaXR5U3ZnO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJpb3JpdHlMYWJlbC5jbGFzc05hbWUgPSBcInByaW9yaXR5LWxhYmVsXCI7XG5cbiAgICBzd2l0Y2ggKHRhc2sucHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgXCJMb3dcIjpcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJsb3dcIik7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIk1lZGl1bVwiOlxuICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIm1lZGl1bVwiKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiSGlnaFwiOlxuICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImhpZ2hcIik7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5SWNvbik7XG4gICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICB9XG5cbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrRGF0ZS5jbGFzc05hbWUgPSBcImRhdGVcIjtcblxuICBpZiAodGFzay5kYXRlKSB7XG4gICAgY29uc3QgZGF0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRhdGVJY29uLmNsYXNzTmFtZSA9IFwiZGF0ZS1pY29uXCI7XG4gICAgZGF0ZUljb24uaW5uZXJIVE1MID0gZGF0ZVN2ZztcblxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZUxhYmVsLmNsYXNzTmFtZSA9IFwiZGF0ZS1sYWJlbFwiO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IHRhc2suZGF0ZTtcblxuICAgIHRhc2tEYXRlLmFwcGVuZENoaWxkKGRhdGVJY29uKTtcbiAgICB0YXNrRGF0ZS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICB9XG5cbiAgc3ViSW5mb3JtYXRpb24uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgc3ViSW5mb3JtYXRpb24uYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuXG4gIG5ld1Rhc2tFbGVtZW50LmFwcGVuZENoaWxkKGNvbXBsZXRlVGFza0J1dHRvbik7XG4gIG5ld1Rhc2tFbGVtZW50LmFwcGVuZENoaWxkKG1haW5JbmZvcm1hdGlvbik7XG4gIG5ld1Rhc2tFbGVtZW50LmFwcGVuZENoaWxkKHN1YkluZm9ybWF0aW9uKTtcblxuICBhZGRUYXNrRGV0YWlsc0RpYWxvZ0V2ZW50KG5ld1Rhc2tFbGVtZW50LCBsaXN0cy5nZXRDdXJyZW50TGlzdCgpLCB0YXNrKTtcblxuICByZXR1cm4gbmV3VGFza0VsZW1lbnQ7XG59XG5cbi8vIFJlZnJlc2ggYWxsIHRhc2tzIGZyb20gc2VsZWN0ZWQgbGlzdFxuZnVuY3Rpb24gcmVmcmVzaFRhc2tFbGVtZW50cygpIHtcbiAgY29uc3QgdGFza3NDb250YWluZXIgPSBsaXN0UGFnZS5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgY29tcGxldGVkU2VjdGlvbiA9IGxpc3RQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIuY29tcGxldGVkLXRhc2tzLXNlY3Rpb25cIik7XG4gIGNvbnN0IGNvbXBsZXRlZENvbnRhaW5lciA9IGxpc3RQYWdlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjY29tcGxldGVkLXRhc2tzLWNvbnRhaW5lclwiXG4gICk7XG4gIGNvbnN0IGNvbXBsZXRlZENvdW50ZXIgPSBsaXN0UGFnZS5xdWVyeVNlbGVjdG9yKFwiLmNvbXBsZXRlZC10YXNrcy1jb3VudGVyXCIpO1xuXG4gIC8vIFJlc2V0IGFsbCB0YXNrcyBlbGVtZW50c1xuICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBsaXN0cy5nZXRDdXJyZW50TGlzdCgpLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOZXdUYXNrRWxlbWVudCh0YXNrLCBmYWxzZSkpO1xuICB9KTtcblxuICBhZGRDb21wbGV0ZVRhc2tFdmVudCgpO1xuXG4gIC8vIFJlc2V0IGFsbCBjb21wbGV0ZWQgdGFza3MgZWxlbWVudHNcbiAgY29tcGxldGVkQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIC8vIENvdW50IGNvbXBsZXRlZCB0YWtzc1xuICBjb21wbGV0ZWRDb3VudGVyLnRleHRDb250ZW50ID0gYCgke2xpc3RzLmdldENvbXBsZXRlZExlbmd0aChcbiAgICBsaXN0cy5nZXRDdXJyZW50TGlzdCgpLm5hbWVcbiAgKX0pYDtcblxuICAvLyBBZGQgYWxsIGNvbXBsZXRlZCB0YXNrcyB0byBwYWdlXG4gIGxpc3RzLmdldEN1cnJlbnRMaXN0KCkuY29tcGxldGVkLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb21wbGV0ZWRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3VGFza0VsZW1lbnQodGFzaywgdHJ1ZSkpO1xuICB9KTtcblxuICAvLyBIaWRlIGNvbXBsZXRlZCB0YXNrcyBjb250YWluZXIgd2hlbiBjb21wbGV0ZWQgYXJyYXkgaXMgZW1wdHlcbiAgaWYgKCFsaXN0cy5nZXRDb21wbGV0ZWRMZW5ndGgobGlzdHMuZ2V0Q3VycmVudExpc3QoKS5uYW1lKSkge1xuICAgIGNvbXBsZXRlZFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIH0gZWxzZSB7XG4gICAgY29tcGxldGVkU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgfVxuXG4gIGFkZFJlc3RvcmVUYXNrRXZlbnQoKTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaExpc3RUaXRsZSgpIHtcbiAgY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0LXRpdGxlXCIpO1xuICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBsaXN0cy5nZXRDdXJyZW50TGlzdCgpLm5hbWU7XG59XG5cbmZ1bmN0aW9uIGxvYWRMaXN0Q29udGVudCgpIHtcbiAgY29uc3QgZW1wdHlDb250YWluZXIgPSBsaXN0UGFnZS5xdWVyeVNlbGVjdG9yKFwiLmVtcHR5LXBhZ2VcIik7XG4gIGNvbnN0IHBhZ2VDb250YWluZXIgPSBsaXN0UGFnZS5xdWVyeVNlbGVjdG9yKFwiI3BhZ2VcIik7XG4gIGNvbnN0IHRpdGxlU2VjdGlvbiA9IGxpc3RQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtc2VjdGlvblwiKTtcblxuICAvLyBIaWRlIGVtcHR5IHBhZ2UgY29udGFpbmVyXG4gIGVtcHR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICBwYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuXG4gIC8vIFJlbG9hZCB0aXRsZVNlY3Rpb24gdG8gbG9hZCB0aXRsZSBhbmQgb3B0aW9uc1xuICB0aXRsZVNlY3Rpb24uaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUuaWQgPSBcImxpc3QtdGl0bGVcIjtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBsaXN0cy5nZXRDdXJyZW50TGlzdCgpLm5hbWU7XG5cbiAgY29uc3QgbGlzdE9wdGlvbnMgPSBpbnB1dHMuYXBwZW5kT3B0aW9uc0J1dHRvbihcbiAgICBob3Jpem9udGFsT3B0aW9uc1N2ZyxcbiAgICBcImxpc3QtbW9yZS1vcHRpb25zXCIsXG4gICAgW1xuICAgICAgeyBsYWJlbDogXCJFZGl0XCIsIGljb246IGVkaXRTdmcsIG9wdGlvbkNsYXNzOiBcImVkaXQtbGlzdFwiIH0sXG4gICAgICB7IGxhYmVsOiBcIkRlbGV0ZVwiLCBpY29uOiBkZWxldGVTdmcsIG9wdGlvbkNsYXNzOiBcImRlbGV0ZS1saXN0XCIgfSxcbiAgICBdXG4gICk7XG4gIGNvbnN0IGRlbGV0ZU9wdGlvbiA9IGxpc3RPcHRpb25zLnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLWxpc3RcIik7XG4gIGNvbnN0IGVkaXRPcHRpb24gPSBsaXN0T3B0aW9ucy5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbGlzdFwiKTtcblxuICB0aXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB0aXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQobGlzdE9wdGlvbnMpO1xuXG4gIC8vIFNldCBldmVudHMgcGFnZVxuICBkaWFsb2dzLm9wZW5EaWFsb2dFdmVudChcbiAgICBkZWxldGVPcHRpb24sXG4gICAgZGlhbG9ncy5zaG93RGVsZXRlTGlzdERpYWxvZyxcbiAgICBsaXN0cy5nZXRDdXJyZW50TGlzdCgpXG4gICk7XG4gIGRpYWxvZ3Mub3BlbkRpYWxvZ0V2ZW50KFxuICAgIGVkaXRPcHRpb24sXG4gICAgZGlhbG9ncy5zaG93RWRpdExpc3REaWFsb2csXG4gICAgbGlzdHMuZ2V0Q3VycmVudExpc3QoKVxuICApO1xuXG4gIHJlZnJlc2hUYXNrRWxlbWVudHMoKTtcbn1cblxuZnVuY3Rpb24gdW5sb2FkUGFnZSgpIHtcbiAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZVwiKTtcbiAgY29uc3QgZW1wdHlQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbXB0eS1wYWdlXCIpO1xuXG4gIHBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIGVtcHR5UGFnZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3VGFza0V2ZW50KCkge1xuICBjb25zdCBuZXdUYXNrQnV0dG9uID0gbGlzdFBhZ2UucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1idXR0b25cIik7XG5cbiAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpYWxvZ3Muc2hvd05ld1Rhc2tEaWFsb2coKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENvbXBsZXRlVGFza0V2ZW50KCkge1xuICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGxpc3RQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtY29udGFpbmVyXCIpO1xuICBjb25zdCB0YXNrcyA9IEFycmF5LmZyb20odGFza3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpKTtcblxuICAvLyBBZGQgY29tcGxldGUgYnV0dG9uIGV2ZW50IHRvIGVhY2ggdGFzayBlbGVtZW50XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCBjb21wbGV0ZVRhc2tCdXR0b24gPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCIuY29tcGxldGUtdGFzay1idXR0b25cIik7XG4gICAgY29tcGxldGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVudCBvcGVuaW5nIHRhc2sgZGV0YWlscyBkaWFsb2dcbiAgICAgIGxpc3RzLmNvbXBsZXRlVGFzayhsaXN0cy5nZXRDdXJyZW50TGlzdCgpLm5hbWUsIHRhc2suZGF0YXNldC50YXNraWQpO1xuICAgICAgcmVmcmVzaFRhc2tFbGVtZW50cygpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUmVzdG9yZVRhc2tFdmVudCgpIHtcbiAgY29uc3QgY29tcGxldGVkVGFza3NDb250YWluZXIgPSBsaXN0UGFnZS5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2NvbXBsZXRlZC10YXNrcy1jb250YWluZXJcIlxuICApO1xuICBjb25zdCB0YXNrcyA9IEFycmF5LmZyb20oY29tcGxldGVkVGFza3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpKTtcblxuICAvLyBBZGQgY29tcGxldGUgYnV0dG9uIGV2ZW50IHRvIGVhY2ggdGFzayBlbGVtZW50XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCBjb21wbGV0ZVRhc2tCdXR0b24gPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCIuY29tcGxldGUtdGFzay1idXR0b25cIik7XG4gICAgY29tcGxldGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVudCBvcGVuaW5nIHRhc2sgZGV0YWlscyBkaWFsb2dcbiAgICAgIGxpc3RzLnJlc3RvcmVUYXNrKGxpc3RzLmdldEN1cnJlbnRMaXN0KCkubmFtZSwgdGFzay5kYXRhc2V0LnRhc2tpZCk7XG4gICAgICByZWZyZXNoVGFza0VsZW1lbnRzKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFeHBhbmRUYXNrc0V2ZW50KCkge1xuICBjb25zdCBjb21wbGV0ZWRUYXNrcyA9IGxpc3RQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIuY29tcGxldGVkLXRhc2tzLXNlY3Rpb25cIik7XG4gIGNvbnN0IGV4cGFuZFRhc2tzQnV0dG9uID0gbGlzdFBhZ2UucXVlcnlTZWxlY3RvcihcIi5leHBhbmQtdGFza3NcIik7XG5cbiAgZXhwYW5kVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb21wbGV0ZWRUYXNrcy5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tEZXRhaWxzRGlhbG9nRXZlbnQodGFza0VsZW1lbnQsIGxpc3QsIHRhc2spIHtcbiAgdGFza0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaWFsb2dzLnNob3dUYXNrRGV0YWlsc0RpYWxvZyhsaXN0LCB0YXNrKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBhZ2UoKSB7XG4gIGxpc3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGlzdFBhZ2UuaWQgPSBcImxpc3QtcGFnZVwiO1xuXG4gIGxpc3RQYWdlLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RDb250YWluZXIoKSk7XG4gIGxpc3RQYWdlLmFwcGVuZENoaWxkKGVtcHR5UGFnZSgpKTtcblxuICBhZGROZXdUYXNrRXZlbnQoKTtcbiAgYWRkRXhwYW5kVGFza3NFdmVudCgpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGlzdFBhZ2UpO1xufVxuXG5leHBvcnQge1xuICByZWZyZXNoVGFza0VsZW1lbnRzLFxuICByZWZyZXNoTGlzdFRpdGxlLFxuICBsb2FkTGlzdENvbnRlbnQsXG4gIHVubG9hZFBhZ2UsXG4gIHJlbmRlclBhZ2UsXG59O1xuIiwiaW1wb3J0IGRlZmF1bHRMaXN0U3ZnIGZyb20gXCIuLi9pbWcvbGlzdHMvZGVmYXVsdC5zdmdcIjtcbmltcG9ydCBjcmVhdGVMaXN0U3ZnIGZyb20gXCIuLi9pbWcvb3RoZXJzL2NyZWF0ZS1saXN0LnN2Z1wiO1xuaW1wb3J0IGFwcEljb25TdmcgZnJvbSBcIi4uL2ltZy90b2RvLWFwcC1pY29uLWZsYXQuc3ZnXCI7XG5cbmltcG9ydCAqIGFzIHBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0ICogYXMgbGlzdHMgZnJvbSBcIi4uL2xpc3RzLWFuZC10YXNrcy5qc1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwiLi9kaWFsb2dzLmpzXCI7XG5cbmxldCB1c2VyTGlzdHM7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFwcFRpdGxlKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJhcHAtaW5mby1jb250YWluZXJcIjtcblxuICBjb25zdCBhcHBJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGFwcEljb24uaWQgPSBcImFwcC1pY29uXCI7XG4gIGFwcEljb24uaW5uZXJIVE1MID0gYXBwSWNvblN2ZztcblxuICBjb25zdCBhcHBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFwcFRpdGxlLmlkID0gXCJhcHAtdGl0bGVcIjtcbiAgYXBwVGl0bGUudGV4dENvbnRlbnQgPSBcIlRvLURvIGFwcFwiO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhcHBJY29uKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFwcFRpdGxlKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0U2lkZWJhcihsaXN0TGFiZWwsIGxpc3RJY29uID0gZGVmYXVsdExpc3RTdmcpIHtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxpc3QuY2xhc3NOYW1lID0gXCJsaXN0LXNpZGViYXItZWxlbWVudFwiO1xuICBsaXN0LmRhdGFzZXQubGlzdE5hbWUgPSBsaXN0TGFiZWw7XG5cbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGljb24uY2xhc3NOYW1lID0gXCJsaXN0LXNpZGViYXItZWxlbWVudC1pY29uXCI7XG4gIGljb24uaW5uZXJIVE1MID0gbGlzdEljb247XG5cbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsYWJlbC5jbGFzc05hbWUgPSBcImxpc3Qtc2lkZWJhci1lbGVtZW50LWxhYmVsXCI7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gbGlzdExhYmVsO1xuXG4gIGxpc3QuYXBwZW5kQ2hpbGQoaWNvbik7XG4gIGxpc3QuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIHJldHVybiBsaXN0O1xufVxuXG5mdW5jdGlvbiByZWZyZXNoVXNlclNpZGViYXJMaXN0cygpIHtcbiAgY29uc3QgbGlzdHNDb250ZW50ID0gbGlzdHMuZ2V0TGlzdHNOYW1lc0ljb25zKCk7XG5cbiAgLy8gUmVzZXQgc2lkZWJhciBsaXN0c1xuICB1c2VyTGlzdHMuaW5uZXJIVE1MID0gXCJcIjtcblxuICAvLyBBZGQgbGlzdHMgdG8gdGhlIHNpZGViYXJcbiAgbGlzdHNDb250ZW50LmZvckVhY2goKGxpc3QpID0+IHtcbiAgICB1c2VyTGlzdHMuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdFNpZGViYXIobGlzdC5uYW1lLCBsaXN0Lmljb24pKTtcbiAgfSk7XG5cbiAgLy8gQWRkIGxvYWRpbmcgZXZlbnRzIHRvIGVhY2ggbGlzdCBjcmVhdGVkIGJ5IHRoZSB1c2VyXG4gIHVzZXJMaXN0cy5jaGlsZE5vZGVzLmZvckVhY2goKGxpc3RFbGVtZW50KSA9PiB7XG4gICAgbGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxpc3RzLnNldEN1cnJlbnRMaXN0KGxpc3RFbGVtZW50LmRhdGFzZXQubGlzdE5hbWUpO1xuICAgICAgcGFnZS5sb2FkTGlzdENvbnRlbnQoKTtcbiAgICAgIGhpZ2hsaWdodFNlbGVjdGVkTGlzdCh1c2VyTGlzdHMuY2hpbGROb2RlcywgbGlzdEVsZW1lbnQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0U2VsZWN0ZWRMaXN0KGxpc3RzLCBzZWxlY3RlZExpc3QpIHtcbiAgbGlzdHMuZm9yRWFjaCgobGlzdCkgPT4gbGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikpO1xuICBzZWxlY3RlZExpc3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVc2VyTGlzdHNDb250YWluZXIoKSB7XG4gIGNvbnN0IGxpc3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGlzdHNDb250YWluZXIuY2xhc3NOYW1lID0gXCJzaWRlYmFyLWxpc3RzLWNvbnRhaW5lciB1c2VyLWxpc3RzXCI7XG5cbiAgY29uc3QgbGlzdFRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGlzdFRpdGxlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibGlzdC10aXRsZS1jb250YWluZXJcIjtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk15IExpc3RzXCI7XG5cbiAgY29uc3QgY3JlYXRlTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNyZWF0ZUxpc3RCdXR0b24uaWQgPSBcImNyZWF0ZS1saXN0LWJ1dHRvblwiO1xuXG4gIGNvbnN0IGNyZWF0ZUxpc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNyZWF0ZUxpc3RJY29uLmNsYXNzTmFtZSA9IFwiY3JlYXRlLWxpc3QtaWNvblwiO1xuICBjcmVhdGVMaXN0SWNvbi5pbm5lckhUTUwgPSBjcmVhdGVMaXN0U3ZnO1xuXG4gIGNyZWF0ZUxpc3RCdXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdEljb24pO1xuXG4gIGxpc3RUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGxpc3RUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVMaXN0QnV0dG9uKTtcblxuICB1c2VyTGlzdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1c2VyTGlzdHMuY2xhc3NOYW1lID0gXCJsaXN0cy1ncm91cFwiO1xuXG4gIHJlZnJlc2hVc2VyU2lkZWJhckxpc3RzKCk7XG5cbiAgbGlzdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdFRpdGxlQ29udGFpbmVyKTtcbiAgbGlzdHNDb250YWluZXIuYXBwZW5kQ2hpbGQodXNlckxpc3RzKTtcblxuICByZXR1cm4gbGlzdHNDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNyZWRpdHMoKSB7XG4gIGNvbnN0IGNyZWRpdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjcmVkaXRzQ29udGFpbmVyLmlkID0gXCJjcmVkaXRzXCI7XG4gIGNyZWRpdHNDb250YWluZXIudGV4dENvbnRlbnQgPSBcIk1hZGUgYnkgXCI7XG5cbiAgY29uc3QgY3JlZGl0c0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgY3JlZGl0c0xpbmsudGV4dENvbnRlbnQgPSBcIkVyaWNrIEIuIEfDs21lelwiO1xuICBjcmVkaXRzTGluay5ocmVmID0gXCJodHRwczovL3d3dy5naXRodWIuY29tL0VyaWNrQkdvbWV6XCI7XG4gIGNyZWRpdHNMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgY3JlZGl0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVkaXRzTGluayk7XG5cbiAgcmV0dXJuIGNyZWRpdHNDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvd2VyU2lkZWJhcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwibG93ZXItc2lkZWJhclwiO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDcmVkaXRzKCkpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXJMaXN0RXZlbnQoc2lkZWJhcikge1xuICBjb25zdCBjcmVhdGVMaXN0QnV0dG9uID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZS1saXN0LWJ1dHRvblwiKTtcbiAgY3JlYXRlTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlhbG9ncy5zaG93TmV3TGlzdERpYWxvZygpKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXIuaWQgPSBcInNpZGViYXJcIjtcblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKGNyZWF0ZUFwcFRpdGxlKCkpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKGNyZWF0ZVVzZXJMaXN0c0NvbnRhaW5lcigpKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChjcmVhdGVMb3dlclNpZGViYXIoKSk7XG5cbiAgY3JlYXRlVXNlckxpc3RFdmVudChzaWRlYmFyKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNpZGViYXIpO1xufVxuXG5leHBvcnQgeyByZWZyZXNoVXNlclNpZGViYXJMaXN0cywgcmVuZGVyU2lkZWJhciB9O1xuIiwiaW1wb3J0IGRlZmF1bHRTdmcgZnJvbSBcIi4vaW1nL2xpc3RzL2RlZmF1bHQuc3ZnXCI7XG5cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCkudG9TdHJpbmcoMTYpO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxuY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGxpc3ROYW1lLCBpY29uKSB7XG4gICAgdGhpcy5uYW1lID0gbGlzdE5hbWU7XG4gICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBbXTtcbiAgfVxufVxuXG5sZXQgY29udGVudDtcbmxldCBjdXJyZW50TGlzdDtcblxuY29uc3Qgc2F2ZUxpc3RzID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RzXCIsIEpTT04uc3RyaW5naWZ5KGNvbnRlbnQpKTtcbn07XG5cbmNvbnN0IHJlZnJlc2hMaXN0cyA9ICgpID0+IHtcbiAgLy8gSWYgbGlzdHMgaXMgbm90IGNyZWF0ZWQgaW4gbG9jYWxTdG9yYWdlLCBjcmVhdGUgYW4gZW1wdHkgYXJyYXlcbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RzXCIpKSB7XG4gICAgY29udGVudCA9IFtdO1xuICAgIGNyZWF0ZUxpc3QoXCJNeSB0YXNrc1wiLCBkZWZhdWx0U3ZnKTtcbiAgICBzYXZlTGlzdHMoKTtcbiAgfVxuXG4gIGNvbnRlbnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdHNcIikpO1xufTtcblxuY29uc3QgY3JlYXRlTGlzdCA9IChsaXN0TmFtZSwgaWNvbikgPT4ge1xuICAvLyBBdm9pZCBjcmVhdGluZyBkdXBsaWNhdGVkIGxpc3RzXG4gIGlmICghZ2V0TGlzdChsaXN0TmFtZSkpIHtcbiAgICBjb250ZW50LnB1c2gobmV3IExpc3QobGlzdE5hbWUsIGljb24pKTtcbiAgICBzYXZlTGlzdHMoKTtcbiAgfVxufTtcblxuY29uc3QgZWRpdExpc3QgPSAobGlzdE5hbWUsIG5ld0xpc3QgPSB7IG5hbWU6IFwiTmFtZVwiLCBpY29uOiBkZWZhdWx0U3ZnIH0pID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gZ2V0TGlzdChsaXN0TmFtZSk7XG5cbiAgc2VsZWN0ZWRMaXN0Lm5hbWUgPSBuZXdMaXN0Lm5hbWU7XG4gIHNlbGVjdGVkTGlzdC5pY29uID0gbmV3TGlzdC5pY29uO1xuXG4gIHNhdmVMaXN0cygpO1xufTtcblxuY29uc3QgZGVsZXRlTGlzdCA9IChsaXN0TmFtZSkgPT4ge1xuICBjb25zdCBsaXN0SW5kZXggPSBnZXRMaXN0SW5kZXgobGlzdE5hbWUpO1xuXG4gIGlmIChsaXN0SW5kZXggIT09IC0xKSB7XG4gICAgY29udGVudC5zcGxpY2UobGlzdEluZGV4LCAxKTtcbiAgICBzYXZlTGlzdHMoKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0TGlzdCA9IChsaXN0TmFtZSkgPT4gY29udGVudC5maW5kKChsaXN0KSA9PiBsaXN0Lm5hbWUgPT09IGxpc3ROYW1lKTtcblxuY29uc3QgY3JlYXRlVGFzayA9IChcbiAgbGlzdE5hbWUsXG4gIG5ld1Rhc2sgPSB7XG4gICAgdGl0bGU6IFwiVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLFxuICAgIGRhdGU6IFwiRGF0ZVwiLFxuICAgIHByaW9yaXR5OiBcIlByaW9yaXR5XCIsXG4gIH1cbikgPT4ge1xuICBjb25zdCBzZWxlY3RlZExpc3QgPSBnZXRMaXN0KGxpc3ROYW1lKTtcblxuICAvLyBSZW1vdmUgYW55IG90aGVyIHBvc3NpYmxlIHZhbHVlIHRvIHByaW9yaXR5IHRoYXQgaXMgbm90IGVxdWFsIHRvIHRoZSBzcGVjaWZpZWQgYmVsb3dcbiAgaWYgKFxuICAgICEoXG4gICAgICBuZXdUYXNrLnByaW9yaXR5ID09PSBcIkxvd1wiIHx8XG4gICAgICBuZXdUYXNrLnByaW9yaXR5ID09IFwiTWVkaXVtXCIgfHxcbiAgICAgIG5ld1Rhc2sucHJpb3JpdHkgPT09IFwiSGlnaFwiXG4gICAgKVxuICApXG4gICAgbmV3VGFzay5wcmlvcml0eSA9IFwiXCI7XG5cbiAgc2VsZWN0ZWRMaXN0LnRhc2tzLnB1c2goXG4gICAgbmV3IFRhc2sobmV3VGFzay50aXRsZSwgbmV3VGFzay5kZXNjcmlwdGlvbiwgbmV3VGFzay5kYXRlLCBuZXdUYXNrLnByaW9yaXR5KVxuICApO1xuICBzYXZlTGlzdHMoKTtcbn07XG5cbmNvbnN0IGdldFRhc2sgPSAobGlzdCwgdGFza0lkKSA9PiB7XG4gIGZvciAobGV0IGtleSBpbiBsaXN0KSB7XG4gICAgaWYgKGtleSA9PT0gXCJ0YXNrc1wiIHx8IGtleSA9PT0gXCJjb21wbGV0ZWRcIikge1xuICAgICAgY29uc3QgdGFza0ZvdW5kID0gbGlzdFtrZXldLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG4gICAgICAvLyBJZiB0YXNrIGlzIG5vdCBmb3VuZCBpbiBcInRhc2tzXCIgYXJyYXksIGNvbnRpbnVlIHRvIFwiY29tcGxldGVkXCIgYXJyYXlcbiAgICAgIGlmICh0YXNrRm91bmQpIHJldHVybiB0YXNrRm91bmQ7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBnZXRUYXNrSW5kZXggPSAobGlzdCwgdGFza0FycmF5LCB0YXNrSWQpID0+XG4gIGxpc3RbdGFza0FycmF5XS5pbmRleE9mKGdldFRhc2sobGlzdCwgdGFza0lkKSk7XG5cbmNvbnN0IGNvbXBsZXRlVGFzayA9IChsaXN0TmFtZSwgdGFza0lkKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGdldExpc3QobGlzdE5hbWUpO1xuICAvLyBGaW5kIHRhc2sgaW5kZXggdG8gdXNlIGl0IGluIHNwbGljZSgpIGFyZ3VtZW50c1xuICBjb25zdCB0YXNrSW5kZXggPSBnZXRUYXNrSW5kZXgoc2VsZWN0ZWRMaXN0LCBcInRhc2tzXCIsIHRhc2tJZCk7XG4gIC8vIFJlbW92ZSB0YXNrIGZyb20gYXJyYXkgYW5kIGNvbnZlcnQgaXQgdG8gb2JqZWN0IChpbmRleCAwKVxuICBjb25zdCBjb21wbGV0ZWRUYXNrID0gc2VsZWN0ZWRMaXN0LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpWzBdO1xuICAvLyBBZGQgdGFzayB0byB0aGUgZnJvbnQgb2YgY29tcGxldGVkIGFycmF5XG4gIHNlbGVjdGVkTGlzdC5jb21wbGV0ZWQudW5zaGlmdChjb21wbGV0ZWRUYXNrKTtcbiAgc2F2ZUxpc3RzKCk7XG59O1xuXG5jb25zdCByZXN0b3JlVGFzayA9IChsaXN0TmFtZSwgdGFza0lkKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGdldExpc3QobGlzdE5hbWUpO1xuICAvLyBGaW5kIHRhc2sgaW5kZXggdG8gdXNlIGl0IGluIHNwbGljZSgpIGFyZ3VtZW50c1xuICBjb25zdCB0YXNrSW5kZXggPSBnZXRUYXNrSW5kZXgoc2VsZWN0ZWRMaXN0LCBcImNvbXBsZXRlZFwiLCB0YXNrSWQpO1xuICAvLyBSZW1vdmUgdGFzayBmcm9tIGFycmF5IGFuZCBjb252ZXJ0IGl0IHRvIG9iamVjdCAoaW5kZXggMClcbiAgY29uc3QgY29tcGxldGVkVGFzayA9IHNlbGVjdGVkTGlzdC5jb21wbGV0ZWQuc3BsaWNlKHRhc2tJbmRleCwgMSlbMF07XG4gIC8vIEFkZCB0YXNrIHRvIHRoZSBmcm9udCBvZiBjb21wbGV0ZWQgYXJyYXlcbiAgc2VsZWN0ZWRMaXN0LnRhc2tzLnB1c2goY29tcGxldGVkVGFzayk7XG4gIHNhdmVMaXN0cygpO1xufTtcblxuY29uc3QgbW92ZVRhc2sgPSAodGFza0lkLCBmcm9tTGlzdE5hbWUsIHRvTGlzdE5hbWUpID0+IHtcbiAgY29uc3QgZnJvbUxpc3QgPSBnZXRMaXN0KGZyb21MaXN0TmFtZSk7XG4gIGNvbnN0IHRvTGlzdCA9IGdldExpc3QodG9MaXN0TmFtZSk7XG5cbiAgZm9yIChsZXQga2V5IGluIGZyb21MaXN0KSB7XG4gICAgaWYgKGtleSA9PT0gXCJ0YXNrc1wiIHx8IGtleSA9PT0gXCJjb21wbGV0ZWRcIikge1xuICAgICAgY29uc3QgdGFza0luZGV4ID0gZ2V0VGFza0luZGV4KGZyb21MaXN0LCBrZXksIHRhc2tJZCk7XG5cbiAgICAgIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IG1vdmVkVGFzayA9IGZyb21MaXN0W2tleV0uc3BsaWNlKHRhc2tJbmRleCwgMSlbMF07XG4gICAgICAgIHRvTGlzdFtrZXldLnB1c2gobW92ZWRUYXNrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZWRpdFRhc2sgPSAoXG4gIGxpc3ROYW1lLFxuICB0YXNrSWQsXG4gIG5ld1Rhc2sgPSB7XG4gICAgdGl0bGU6IFwiVGl0bGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLFxuICAgIGRhdGU6IFwiRGF0ZVwiLFxuICAgIHByaW9yaXR5OiBcIlByaW9yaXR5XCIsXG4gIH1cbikgPT4ge1xuICBpZiAobGlzdE5hbWUgIT09IGN1cnJlbnRMaXN0Lm5hbWUpIHtcbiAgICBtb3ZlVGFzayh0YXNrSWQsIGN1cnJlbnRMaXN0Lm5hbWUsIGxpc3ROYW1lKTtcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGdldExpc3QobGlzdE5hbWUpO1xuICBjb25zdCBzZWxlY3RlZFRhc2sgPSBnZXRUYXNrKHNlbGVjdGVkTGlzdCwgdGFza0lkKTtcblxuICAvLyBSZW1vdmUgYW55IG90aGVyIHBvc3NpYmxlIHZhbHVlIHRvIHByaW9yaXR5IHRoYXQgaXMgbm90IGVxdWFsIHRvIHRoZSBzcGVjaWZpZWQgYmVsb3dcbiAgaWYgKFxuICAgICEoXG4gICAgICBuZXdUYXNrLnByaW9yaXR5ID09PSBcIkxvd1wiIHx8XG4gICAgICBuZXdUYXNrLnByaW9yaXR5ID09IFwiTWVkaXVtXCIgfHxcbiAgICAgIG5ld1Rhc2sucHJpb3JpdHkgPT09IFwiSGlnaFwiXG4gICAgKVxuICApXG4gICAgbmV3VGFzay5wcmlvcml0eSA9IFwiXCI7XG5cbiAgc2VsZWN0ZWRUYXNrLnRpdGxlID0gbmV3VGFzay50aXRsZTtcbiAgc2VsZWN0ZWRUYXNrLmRlc2NyaXB0aW9uID0gbmV3VGFzay5kZXNjcmlwdGlvbjtcbiAgc2VsZWN0ZWRUYXNrLmRhdGUgPSBuZXdUYXNrLmRhdGU7XG4gIHNlbGVjdGVkVGFzay5wcmlvcml0eSA9IG5ld1Rhc2sucHJpb3JpdHk7XG5cbiAgc2F2ZUxpc3RzKCk7XG59O1xuXG5jb25zdCBkZWxldGVUYXNrID0gKGxpc3ROYW1lLCB0YXNrSWQpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gZ2V0TGlzdChsaXN0TmFtZSk7XG5cbiAgZm9yIChsZXQga2V5IGluIHNlbGVjdGVkTGlzdCkge1xuICAgIC8vIEl0ZXJhdGUgb25seSBpbiB0YXNrcyBhbmQgY29tcGxldGVkIGFycmF5cyB0byBmaW5kIHRhc2tzXG4gICAgaWYgKGtleSA9PT0gXCJ0YXNrc1wiIHx8IGtleSA9PT0gXCJjb21wbGV0ZWRcIikge1xuICAgICAgY29uc3QgdGFza0luZGV4ID0gZ2V0VGFza0luZGV4KHNlbGVjdGVkTGlzdCwga2V5LCB0YXNrSWQpO1xuXG4gICAgICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xuICAgICAgICBzZWxlY3RlZExpc3Rba2V5XS5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgICAgc2F2ZUxpc3RzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHNldEN1cnJlbnRMaXN0ID0gKGxpc3ROYW1lKSA9PiB7XG4gIGN1cnJlbnRMaXN0ID0gZ2V0TGlzdChsaXN0TmFtZSk7XG59O1xuXG5jb25zdCBnZXRDdXJyZW50TGlzdCA9ICgpID0+IGN1cnJlbnRMaXN0O1xuXG5jb25zdCBnZXRDb21wbGV0ZWRMZW5ndGggPSAobGlzdE5hbWUpID0+IGdldExpc3QobGlzdE5hbWUpLmNvbXBsZXRlZC5sZW5ndGg7XG5cbmNvbnN0IGdldExpc3RzTmFtZXMgPSAoKSA9PiB7XG4gIGNvbnN0IG5hbWVzQXJyYXkgPSBbXTtcbiAgY29udGVudC5mb3JFYWNoKChsaXN0KSA9PiBuYW1lc0FycmF5LnB1c2gobGlzdC5uYW1lKSk7XG4gIHJldHVybiBuYW1lc0FycmF5O1xufTtcblxuY29uc3QgZ2V0TGlzdHNOYW1lc0ljb25zID0gKCkgPT4ge1xuICBjb25zdCBuYW1lc0ljb25zQXJyYXkgPSBbXTtcblxuICBjb250ZW50LmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzVG9GaWx0ZXIgPSBbXCJuYW1lXCIsIFwiaWNvblwiXTtcblxuICAgIC8vIFJldHVybiBhIG5ldyBvYmplY3Qgd2l0aCBvbmx5IFwibmFtZVwiIGFuZCBcImljb25cIiBwcm9wZXJ0aWVzXG4gICAgY29uc3QgZmlsdGVyZWRMaXN0ID0gT2JqZWN0LmtleXMobGlzdClcbiAgICAgIC5maWx0ZXIoKGtleSkgPT4gcHJvcGVydGllc1RvRmlsdGVyLmluY2x1ZGVzKGtleSkpXG4gICAgICAucmVkdWNlKChvYmplY3QsIGtleSkgPT4ge1xuICAgICAgICBvYmplY3Rba2V5XSA9IGxpc3Rba2V5XTtcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgIH0sIHt9KTtcblxuICAgIG5hbWVzSWNvbnNBcnJheS5wdXNoKGZpbHRlcmVkTGlzdCk7XG4gIH0pO1xuXG4gIHJldHVybiBuYW1lc0ljb25zQXJyYXk7XG59O1xuXG5jb25zdCBnZXRMaXN0SW5kZXggPSAobGlzdE5hbWUpID0+XG4gIGNvbnRlbnQuaW5kZXhPZihjb250ZW50LmZpbmQoKGxpc3QpID0+IGxpc3QubmFtZSA9PSBsaXN0TmFtZSkpO1xuXG5leHBvcnQge1xuICByZWZyZXNoTGlzdHMsXG4gIGNyZWF0ZUxpc3QsXG4gIGVkaXRMaXN0LFxuICBkZWxldGVMaXN0LFxuICBjcmVhdGVUYXNrLFxuICBjb21wbGV0ZVRhc2ssXG4gIHJlc3RvcmVUYXNrLFxuICBlZGl0VGFzayxcbiAgZGVsZXRlVGFzayxcbiAgc2V0Q3VycmVudExpc3QsXG4gIGdldEN1cnJlbnRMaXN0LFxuICBnZXRDb21wbGV0ZWRMZW5ndGgsXG4gIGdldExpc3RzTmFtZXMsXG4gIGdldExpc3RzTmFtZXNJY29ucyxcbiAgZ2V0TGlzdEluZGV4LFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgKiBhcyBzaWRlYmFyIGZyb20gXCIuL2Rlc2lnbi9zaWRlYmFyLmpzXCI7XG5pbXBvcnQgKiBhcyBwYWdlIGZyb20gXCIuL2Rlc2lnbi9wYWdlLmpzXCI7XG5pbXBvcnQgKiBhcyBsaXN0cyBmcm9tIFwiLi9saXN0cy1hbmQtdGFza3MuanNcIjtcbmltcG9ydCAqIGFzIG5vdGlmaWNhdGlvbnMgZnJvbSBcIi4vZGVzaWduL25vdGlmaWNhdGlvbnMuanNcIjtcblxubGlzdHMucmVmcmVzaExpc3RzKCk7XG5zaWRlYmFyLnJlbmRlclNpZGViYXIoKTtcbnBhZ2UucmVuZGVyUGFnZSgpO1xubm90aWZpY2F0aW9ucy5yZW5kZXJOb3RpZmljYXRpb25zKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=