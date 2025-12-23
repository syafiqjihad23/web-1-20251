function tambahTodo() {
  const input = document.getElementById("todoInput");
  if (input.value === "") return;

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.innerHTML = `${input.value} <button class="btn btn-danger btn-sm" onclick="this.parentElement.remove()">Hapus</button>`;

  document.getElementById("todoList").appendChild(li);
  input.value = "";
}
