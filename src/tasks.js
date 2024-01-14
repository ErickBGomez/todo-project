const lists = [];
let currentList;

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
    this.sort = "";
    this.tasks = [];
    this.completed = [];

    this.#saveList();
  }

  #saveList() {
    if (!lists.find((list) => list.name === this.name)) lists.push(this);

    localStorage.setItem("lists", JSON.stringify(lists));
  }

  createTask(title, description, date, priority) {
    const newTask = new Task(title, description, date, priority);
    this.tasks.push(newTask);
    this.#saveList();
  }

  completeTask(taskIndex) {
    const completedTask = this.tasks.splice(taskIndex, 1);
    this.completed.unshift(completedTask);
    this.#saveList();
  }

  removeTask(taskIndex) {
    this.tasks.splice(taskIndex, 1);
    this.#saveList();
  }

  removeCompletedTask(taskIndex) {
    this.completed.splice(taskIndex, 1);
    this.#saveList();
  }
}

function selectCurrentList(listName) {
  currentList = lists.find((list) => list.name === listName);

  localStorage.setItem("currentList", JSON.stringify(currentList));
}

console.log(lists);
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

export { selectCurrentList };
