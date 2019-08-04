const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("ul");

const TODOS_LS = "toDos";
let toDos = [];

function handleClick(event) {
  const clickTarget = event.target;
  const li = clickTarget.parentNode;
  toDoList.removeChild(li);
  const toDosFilter = toDos.filter(function(toDo) {
    return toDo.id !== JSON.parse(li.id);
  });
  toDos = toDosFilter;
  savetoDos();
}

function savetoDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDos(valueOfToDos) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", handleClick);
  span.innerText = valueOfToDos;
  const toDosObj = {
    text: valueOfToDos,
    id: newId
  };
  toDos.push(toDosObj);
  savetoDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const toDosValue = toDoInput.value;
  paintToDos(toDosValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDos(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
