import defaultSvg from "./img/lists/default.svg";

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
    createList("My tasks", defaultSvg);
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

const editList = (listName, newList = { name: "Name", icon: defaultSvg }) => {
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

export {
  refreshLists,
  createList,
  editList,
  deleteList,
  createTask,
  completeTask,
  restoreTask,
  editTask,
  deleteTask,
  setCurrentList,
  getCurrentList,
  getCompletedLength,
  getListsNames,
  getListsNamesIcons,
  getListIndex,
};
