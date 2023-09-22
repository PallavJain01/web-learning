/** @type {HTMLCanvasElement} */

var
  canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  tools = document.getElementById("container-tools").children,
  inp_strokeWidth = document.getElementById("inp-stroke-width"),
  inp_erasorWidth = document.getElementById("inp-erasor-width"),
  inp_strokeColor = document.getElementById("inp-stroke-color"),
  inp_bgcolor = document.getElementById("inp-bg-color"),
  offsetX = 8,
  offsetY = 8

var
  strokeWidth = inp_strokeWidth.value,
  strokeColor = inp_strokeColor.value,
  erasorWidth = inp_erasorWidth.value,
  canvasBgColor = inp_bgcolor.value,
  drawing = false,
  brushType = 'brush';

//
ctx.lineCap = "round"
ctx.strokeStyle = "white"
ctx.lineWidth = strokeWidth;
canvas.style.backgroundColor = canvasBgColor

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

const activeBrush = (brush) => {
  if (brush == 'erasor') {
    ctx.lineWidth = document.getElementById("inp-erasor-width").value;
    brushType = 'erasor'
    ctx.strokeStyle = canvasBgColor;
  }
  else {
    ctx.lineWidth = document.getElementById("inp-stroke-width").value;
    brushType = 'brush'
    ctx.strokeStyle = strokeColor;
  }
}

const updateCanvas = (mouseX, mouseY) => {
  if (!drawing) return;
  ctx.lineTo(mouseX, mouseY);
  ctx.stroke();
}

inp_strokeWidth.addEventListener("input", (elem) => {
  if (brushType == 'brush')
    ctx.lineWidth = strokeWidth = elem.target.value;
})

inp_erasorWidth.addEventListener("input", (elem) => {
  if (brushType == 'erasor')
    ctx.lineWidth = erasorWidth = elem.target.value;
})

inp_strokeColor.addEventListener("input", (elem) => {
  ctx.strokeStyle = strokeColor = elem.target.value;
})

inp_bgcolor.addEventListener("input", (elem) => {
  canvas.style.backgroundColor = canvasBgColor = elem.target.value;
})


canvas.addEventListener("mousedown", () => { drawing = true })
canvas.addEventListener("mouseup", () => { drawing = false; ctx.beginPath() })
canvas.addEventListener("mousemove", (mouse) => {
  updateCanvas(mouse.clientX - canvas.getBoundingClientRect().x + offsetX, mouse.clientY - canvas.getBoundingClientRect().y + offsetY);
})