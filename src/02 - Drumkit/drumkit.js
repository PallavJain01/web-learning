const keyCodes = [
  "Boom",
  "Clap",
  "Hihat",
  "Kick",
  "Openhat",
  "Ride",
  "Snare",
  "Tink",
  "Tom",
]

document.addEventListener("keydown", (key) => {
  let currKey = key.key;
  document.getElementById(`key-${parseInt(currKey)}`).style.boxShadow = "0 0 5px 5px #ffffffb0";
  for (code in keyCodes) {
    if (code == currKey) {
      console.log(`${code} : ${keyCodes[code - 1]}`);
      new Audio(`./assets/${keyCodes[code - 1]}.wav`).play()
    }
  }
})

document.addEventListener("keyup", (key) => {
  let currKey = key.key;
  document.getElementById(`key-${parseInt(currKey)}`).style.boxShadow = "";
})