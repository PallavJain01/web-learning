/*
  !TODO
  * add a way to make the image downloadable with the filters applied (spoiler: idk how to)
 */

const elem = [
  BlurElem = document.getElementById("inp-blur"),
  BrightnessElem = document.getElementById("inp-brightness"),
  ContrastElem = document.getElementById("inp-contrast"),
  GrayscaleElem = document.getElementById("inp-grayscale"),
  HueRotateElem = document.getElementById("inp-hue-rotate"),
  OpacityElem = document.getElementById("inp-opacity"),
  SaturateElem = document.getElementById("inp-saturate"),
  SepiaElem = document.getElementById("inp-sepia"),
];
const tabs = document.querySelectorAll(".tab")

const rootVars = document.querySelector(":root");

const values = {
  "blur": BlurElem.value,
  "brightness": BrightnessElem.value,
  "contrast": ContrastElem.value,
  "grayscale": GrayscaleElem.value,
  "hue-rotate": HueRotateElem.value,
  "opacity": OpacityElem.value,
  "saturate": SaturateElem.value,
  "sepia": SepiaElem.value
}

function updateValues(id) {
  values[id] = document.getElementById(`inp-${id}`).value;
}

function updateImage(id, value, suffix) {
  [...document.querySelectorAll("img")].forEach(_ => _.style.setProperty(`--${id}`, `${value}${suffix}`));
}

function resetState() {
  [...tabs].forEach(el => {
    el.dataset.active = "false";
  });
  [...document.querySelectorAll("img")].forEach(el => {
    el.dataset.active = "false";
  })
}

elem.forEach(el => {
  el.addEventListener("input", (e) => {
    let id = e.target.id.replace("inp-", "");
    updateValues(id);
    let suffix = (id === "blur")
      ? "px"
      : (id === "hue-rotate")
        ? "deg"
        : "%";
    let outelem = document.getElementById(`out-${id}`);
    updateImage(id, e.target.value, suffix);
    outelem.innerHTML = e.target.value;
  })
});

[...tabs].forEach(_ => {
  _.addEventListener("click", (e) => {
    if (e.target.dataset.active  == "true") return;
    resetState();
    e.target.dataset.active = "true";
    document.getElementById(`img-${e.target.id.replace("tab-", "")}`).dataset.active = "true";
  })
})