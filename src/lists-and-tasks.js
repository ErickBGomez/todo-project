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
  constructor(listName) {
    this.name = listName;
    this.tasks = [];
    this.completed = [];
  }
}

const lists = (() => {
  let content;
  let currentList;

  const refreshLists = () => {
    // If lists is not created in localStorage, create an empty array
    if (!localStorage.getItem("lists")) localStorage.setItem("lists", "[]");

    content = JSON.parse(localStorage.getItem("lists"));
  };

  const saveLists = () => {
    localStorage.setItem("lists", JSON.stringify(content));
  };

  const createList = (listName) => {
    // Avoid creating duplicated lists
    if (!getList(listName)) {
      content.push(new List(listName));
      saveLists();
    }
  };

  const getList = (listName) => content.find((list) => list.name === listName);

  const addNewTask = (listName, title, description, date, priority) => {
    const selectedList = getList(listName);
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

  const setCurrentList = (listName) => {
    currentList = getList(listName);
  };

  const getCurrentList = () => currentList;

  const getCompletedLength = (listName) => getList(listName).completed.length;

  return {
    refreshLists,
    createList,
    addNewTask,
    completeTask,
    setCurrentList,
    getCurrentList,
    getCompletedLength,
  };
})();

export default lists;
