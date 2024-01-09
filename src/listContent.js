function createBackground() {
  const background = document.createElement("div");
  background.id = "list-background";

  return background;
}

export default function renderListContent() {
  const listContent = document.createElement("div");

  listContent.appendChild(createBackground());

  document.body.appendChild(listContent);
}
