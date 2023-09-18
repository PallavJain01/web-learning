// if you find any bug or issue in the code please open an issue of a pull request :)

var output = document.getElementById("output");
var decimalExists = false;

document.getElementById("container-buttons").addEventListener("click", (btn) => {
  if (!btn.target.id.startsWith("btn-")) return; // edge case: user clicks in the empty space
  let key = btn.target.id;
  let action = btn.target.dataset.action;
  (!action) ? output.value += key.slice(4, 5) : handleAction(action); // if action is undefined, then number
})

function handleAction(action) {
  let isOperand = (action == "+" || action == "-" || action == "*" || action == "/" || action == ".");
  (isOperand)
    ? addOperand(action)
    : (action != "=")
      ? clearText() // guaranteed to not be a number and if not operand as well, then it is AC
      : output.value = eval(output.value);
}

function clearText() {
  output.value = "";
  decimalExists = false;
}

function addText(text) {
  (decimalExists)
    ? decimalExists = false // it is guaranteed that the text is an operand
    : (text == ".")
      ? decimalExists = true
      : 0
  output.value += `${text}`;
}

function addOperand(operand) {
  if (output.value.charAt(0) == "") return;
  let lastChar = output.value.charAt(output.value.length - 1);
  let isLastCharOperand = (!Boolean(parseInt(lastChar)) && lastChar != 0);
  (!isLastCharOperand)
    ? (operand == ".")
      ? handleDecimal()
      : addText(operand)
    : 0;
}

function handleDecimal() {
  if (!decimalExists) {
    addText(".");
  }
}