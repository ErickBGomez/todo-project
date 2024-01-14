let lists;

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

function refreshLists() {
  // If lists is not created in localStorage, create an empty array
  if (!localStorage.getItem("lists")) localStorage.setItem("lists", "[]");

  lists = JSON.parse(localStorage.getItem("lists"));
}

function saveLists() {
  localStorage.setItem("lists", JSON.stringify(lists));
}

function createList(listName) {
  // Avoid creating duplicated lists
  if (!lists.find((list) => list.name === listName)) {
    lists.push(new List(listName));
    saveLists();
  }
}

function addNewTask(listName, title, description, date, priority) {
  const selectedList = lists.find((list) => list.name === listName);
  selectedList.tasks.push(new Task(title, description, date, priority));
  saveLists();
}

// console.log(JSON.parse(localStorage.getItem("lists")));
// const defaultList = new List("Default");
// const testList = new List("Test List");

// defaultList.createTask("Title1", "Description 1", "11-Jan-2024", 0);
// defaultList.createTask("Title2", "Description 2", "12-Jan-2024", 1);
// defaultList.createTask("Title3", "Description 3", "13-Jan-2024", 2);
// defaultList.createTask("Title4", "Description 4", "14-Jan-2024", 3);
// defaultList.createTask("Title5", "Description 5", "15-Jan-2024", 0);

// testList.createTask("Test1", "Description Test", "10-Jan-2024", 3);

// selectCurrentList(defaultList.name);

export { lists, createList, refreshLists, addNewTask };
