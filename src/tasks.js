export default function createTask() {
  const title = prompt("Title");
  const description = prompt("Description");
  const date = prompt("Date");

  return { title, description, date };
}
