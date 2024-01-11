export function createTask() {
  const title = prompt("Title", "Task title");
  const description = prompt("Description", "Description of the task");
  const date = prompt("Date", "Jan 13, 2024");
  const priority = Number(prompt("priority (1,2,3)"));

  const newTask = { title, description, date, priority };

  const currentList = JSON.parse(localStorage.getItem("default"));
  currentList.tasks.push(newTask);

  localStorage.setItem(currentList.name, JSON.stringify(currentList));

  return newTask;
}

export function createList(listName) {
  const newList = {
    name: listName,
    tasks: [],
    completed: [],
  };
}
