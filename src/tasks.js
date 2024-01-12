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
    localStorage.setItem(this.name, JSON.stringify(this));
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
}

const defaultList = new List("default");

defaultList.createTask("Title1", "Description 1", "11-Jan-2024", 0);
defaultList.createTask("Title2", "Description 2", "11-Jan-2024", 1);
defaultList.createTask("Title3", "Description 3", "11-Jan-2024", 2);
defaultList.createTask("Title4", "Description 4", "11-Jan-2024", 2);

export { defaultList };
