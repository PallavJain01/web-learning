
document.addEventListener("mousemove", (pos) => {
  var cursor = document.getElementById("cursor");
  var cursorhandle= document.getElementById("cursor-handle");
  cursor.style.top = `${pos.y}px`;
  cursor.style.left = `${pos.x}px`;
  cursorhandle.style.top = `${pos.y + 15}px`
  cursorhandle.style.left = `${pos.x - 2.5}px`
})