export default function createTask() {
  const title = prompt("Title");
  const description = prompt("Description");
  const date = prompt("Date");
  const priority = Number(prompt("priority (1,2,3)"));

  return { title, description, date, priority };
}
