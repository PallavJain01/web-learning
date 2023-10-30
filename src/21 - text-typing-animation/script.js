const
  inputElem = document.getElementById("inp-main"),
  outputElem = document.getElementById("output"),
  repeatAmtElem = document.getElementById("inp-repeatAmt");
  ;

var text = "" + inputElem.value;
var delay = 250 // in ms
var repeatAmount = repeatAmtElem.value;

const updateValues = () => {
  text = inputElem.value;
  repeatAmount = repeatAmtElem.value;
}
const resetOutput = () => outputElem.innerHTML = "";

function startAnim(text2 = "hello world") {
  updateValues();
  resetOutput();
  if (text == null || text == "") text = text2;
  let textArr = text.split("");
  setTimeout(() => animForward(textArr), 2000);
  setTimeout(() => animBackward(), (delay * textArr.length) + 2500)
  setInterval(() => {
    if (--repeatAmount <= 0) return;
    setTimeout(() => animForward(textArr), 2000);
    setTimeout(() => animBackward(), (delay * textArr.length) + 2500)
  }, (delay * textArr.length + 4000));
}


function animForward(textArr) {
  let idx = 0;
  let interval = setInterval(() => {
    if (idx >= textArr.length - 1) {
      clearInterval(interval);
    };
    outputElem.innerHTML += textArr[idx++]
  }, delay);
}

function animBackward() {
  let interval2 = setInterval(() => {
    if (outputElem.innerHTML == "") clearInterval(interval2);
    let textIn = outputElem.innerHTML
    outputElem.innerHTML = textIn.slice(0, textIn.length - 1);
  }, delay)
}

setTimeout(() => startAnim("hello world!"), 100);