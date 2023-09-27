var todos = []

var
  inpMainElem = document.getElementById("input-main"),
  containerTodosElem = document.getElementById("container-todos"),
  currentTodos = [...containerTodosElem.children];
;

function addTodo(todoText) {
  let format = `<div id="todo-${containerTodosElem.childElementCount + 1}"><p class="todo-text">${todoText}</p><div id="options-todo-${containerTodosElem.childElementCount + 1}"><button type="button" class="btn-complete"><i class="fa-solid fa-check"></i></button><button type="button" class="btn-delete"><i class="fa-solid fa-x"></i></button></div></div>`
  todos[containerTodosElem.childElementCount] = { format: format, text: todoText };
  updateTodos();
}

inpMainElem.addEventListener("keypress", (key) => {
  if (key.key.toLowerCase() == "enter") {
    if (!inpMainElem.value) return;
    addTodo(inpMainElem.value)
    inpMainElem.value = ""
  }
})

function updateTodos() {
  containerTodosElem.innerHTML = "";

  todos.forEach((elem) => {
    containerTodosElem.innerHTML += elem.format;
  });

  [...containerTodosElem.children].forEach((elem) => {
    [...elem.children].forEach(elem => {
      if (elem.id) {
        elem.addEventListener("click", (e) => {
          if (checkBtn("delete", e.target) || checkBtn("delete", e.target.parentElement) || checkBtn("delete", e.target.parentElement.parentElement)) {
            todos.splice(parseInt(elem.parentElement.id.substring(5, 7)) - 1, 1)
            elem.parentElement.remove()
          }
          else if (checkBtn("complete", e.target) || checkBtn("complete", e.target.parentElement) || checkBtn("complete", e.target.parentElement.parentElement))
            elem.parentElement.classList.add("complete")
        })
      }
    })
  })
}

function checkBtn(type, elem) {
  return elem.classList.contains(`btn-${type}`)
}