class Task {
  constructor(title, description, date, priority) {
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
    if (!content.find((list) => list.name === listName)) {
      content.push(new List(listName));
      saveLists();
    }
  };

  const addNewTask = (listName, title, description, date, priority) => {
    const selectedList = content.find((list) => list.name === listName);
    selectedList.tasks.push(new Task(title, description, date, priority));
    saveLists();
  };

  const setCurrentList = (listName) => {
    currentList = content.find((list) => list.name === listName);
  };

  const getCurrentList = () => currentList;

  return {
    refreshLists,
    createList,
    addNewTask,
    setCurrentList,
    getCurrentList,
  };
})();

export default lists;
