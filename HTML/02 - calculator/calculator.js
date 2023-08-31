var currentText = "";

function addText(text) {
  document.getElementById("input").value += text;
  currentText += text;
}

function clearText() {
  document.getElementById("input").value = "";
  currentText = "";
}
 