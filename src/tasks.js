const lists = [];

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
}

function saveLists() {
  localStorage.setItem("lists", lists);
}

function createList(listName) {
  if (!lists.find((list) => list.name === listName))
    lists.push(new List(listName));
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

export { createList, lists };
