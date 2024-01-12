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
  }

  saveList() {
    localStorage.setItem(this.name, JSON.stringify(this));
  }

  createTask(title, description, date, priority) {
    const newTask = new Task(title, description, date, priority);

    this.tasks.push(newTask);

    console.log(this.tasks);
  }
}

export function createNewList(listName) {
  const newList = new List(listName);

  localStorage.setItem(newList.name, JSON.stringify(newList));
}

const currentList = JSON.parse(localStorage.getItem("default"));
console.log(currentList);
