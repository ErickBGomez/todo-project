function createBackground() {
  const background = document.createElement("div");
  background.id = "list-background";

  return background;
}

function createListContent() {
  const container = document.createElement("div");
  container.className = "list-content";

  const title = document.createElement("h1");
  title.id = "list-title";
  title.textContent = "List Title";
}

function createListTitle(listTitle) {
  const title = document.createElement("h1");
  title.id = "list-title";
  title.textContent = listTitle;

  return title;
}

export default function renderListContent() {
  const listContent = document.createElement("div");
  listContent.id = "list-content";

  listContent.appendChild(createBackground());

  document.body.appendChild(listContent);
}
