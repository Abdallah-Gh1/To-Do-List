function AddTask() {
  var intp = document.getElementById("input").value;
  const node = document.createElement("li");
  const btn = document.createElement("button");
  const text = document.createTextNode(intp);
  node.appendChild(text);
  btn.classList.add("delete");
  btn.innerHTML = "Delete";
  btn.id = "deleteB";
  node.appendChild(btn);
  document.getElementById("ul").appendChild(node);
  btn.addEventListener("click", del);
  document.getElementById("input").value = "";
  function del() {

    node.remove();

  }
}
