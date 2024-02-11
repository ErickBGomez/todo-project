import defaultSvg from "./img/svg/lists/default.svg";

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

const lists = (() => {
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

  const getList = (listName) => content.find((list) => list.name === listName);

  const addNewTask = (listName, title, description, date, priority) => {
    const selectedList = getList(listName);

    // Remove any other possible value to priority that is not equal to the specified below
    if (!(priority === "Low" || priority == "Medium" || priority === "High"))
      priority = "";

    selectedList.tasks.push(new Task(title, description, date, priority));
    saveLists();
  };

  const completeTask = (listName, taskId) => {
    const selectedList = getList(listName);
    // Find task index to use it in splice() arguments
    const taskIndex = selectedList.tasks.indexOf(
      selectedList.tasks.find((task) => task.id === taskId)
    );
    // Remove task from array and convert it to object (index 0)
    const completedTask = selectedList.tasks.splice(taskIndex, 1)[0];
    // Add task to the front of completed array
    selectedList.completed.unshift(completedTask);
    saveLists();
  };

  const restoreTask = (listName, taskId) => {
    const selectedList = getList(listName);
    // Find task index to use it in splice() arguments
    const taskIndex = selectedList.completed.indexOf(
      selectedList.completed.find((task) => task.id === taskId)
    );
    // Remove task from array and convert it to object (index 0)
    const completedTask = selectedList.completed.splice(taskIndex, 1)[0];
    // Add task to the front of completed array
    selectedList.tasks.push(completedTask);
    saveLists();
  };

  const setCurrentList = (listName) => {
    currentList = getList(listName);
  };

  const getCurrentList = () => currentList;

  const getCompletedLength = (listName) => getList(listName).completed.length;

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

  const getCurrentListIndex = () =>
    content.indexOf(content.find((list) => list.name == currentList.name));

  return {
    refreshLists,
    createList,
    addNewTask,
    completeTask,
    restoreTask,
    setCurrentList,
    getCurrentList,
    getCompletedLength,
    getListsNamesIcons,
    getCurrentListIndex,
  };
})();

export default lists;
