const mainElem = document.getElementById("container-main");
var maxIter = 50;
function getElem() {
  var randColor = Math.floor(Math.random() * 0xffffff);
  if (randColor < 0x100000) return;
  var elemStr = `<div class="container-color" style="background-color:#${randColor.toString(16)}"><p class="color-code" style="color:#${(0xffffff - randColor).toString(16)}">#${randColor.toString(16)}</p></div>`;
  mainElem.innerHTML += elemStr;
  maxIter--;
}

while (maxIter > 0)
  getElem();