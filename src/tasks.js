export default function createTask() {
  const title = prompt("Title", "Task title");
  const description = prompt("Description", "Description of the task");
  const date = prompt("Date", "Jan 13, 2024");
  const priority = Number(prompt("priority (1,2,3)"));

  return { title, description, date, priority };
}
