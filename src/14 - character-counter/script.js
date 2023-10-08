const inpMain = document.getElementById("inp-main");

function updateText(totalChar, letters, numbers, symbols, whitespace) {
  document.getElementById("char-total").children[0].innerHTML = totalChar;
  document.getElementById("char-letters").children[0].innerHTML = letters;
  document.getElementById("char-numbers").children[0].innerHTML = numbers;
  document.getElementById("char-symbols").children[0].innerHTML = symbols;
  document.getElementById("char-whitespace").children[0].innerHTML = whitespace;
}

[...document.getElementById("container-output").children].forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let target = e.target;
    let text = (target.id.startsWith("char-")) ? target.children[0].innerHTML : target.innerHTML;
    navigator.clipboard.writeText(text);
  })
})

inpMain.addEventListener("input", (elem) => {
  let text = `${elem.target.value}`;
  let
    numbersLen = 0,
    letterLen = 0,
    symbolLen = 0,
    whitespaceLen = 0
  ;
  try {text.match(/[0-9]+/gm).forEach(e => numbersLen += e.length)} catch {};
  try {text.match(/[A-Za-z]/gm).forEach(e => letterLen += e.length)} catch {};
  try {text.match(/\s/gm).forEach(e => whitespaceLen += e.length)} catch {};
  // using try-catch to ignore errors when there is no character of specific type
  symbolLen = text.length - (numbersLen + letterLen + whitespaceLen);

  updateText(text.length, letterLen, numbersLen, symbolLen, whitespaceLen)
})
