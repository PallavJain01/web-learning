const
  chars = "abcdefghijklmnopqrstuvwxyz",
  frequency = document.getElementById("input-frequency").value;

function glitchText(elemID) {
  const elem = document.getElementById(`${elemID}`)
  elem.dataset.text = elem.innerText = document.getElementById("input-text").value
  let iteration = 0;
  let interval = setInterval(() => {
    elem.innerText = elem.innerText
      .split("")
      .map((letter, idx) => {
        if (letter == ' ') return elem.dataset.text[idx]
        if (idx < iteration) return elem.dataset.text[idx]
        return chars[parseInt(Math.random() * chars.length)]
      })
      .join("")

    if (iteration >= elem.dataset.text.length) clearInterval(interval)

    iteration += 1 / frequency;
  }, (50 * Math.pow(frequency, 0.2)) / frequency)
}