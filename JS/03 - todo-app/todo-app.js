function __init__() {
  document.addEventListener("keypress", (key) => {
    if (key.key.toLowerCase() == "enter") {
      addTodo();
    }
  })
}

function addTodo() {
  var input = document.getElementById("input-main").value;
  console.log(input)
  document.getElementById("text-1").innerHTML = input
}