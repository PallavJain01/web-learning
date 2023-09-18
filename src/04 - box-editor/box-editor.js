var values = {
  "r": 0, // red
  "g": 0, // green
  "b": 0, // blue
  "border": 0, // border-radius
  "opacity": 1, // opacity
} 

function updateCode(_values) {
  var code = `<h2 id="head-code">Code</h2>
  <p id="line-color"><span class="prop">background-color</span><span class="spec">:</span></span><span class="func"> rgb</span><span class="brac">(</span><span class="num">${_values.r}</span><span class="spec">,</span><span class="num"> ${_values.g}</span><span class="spec">,</span><span class="num"> ${_values.b}</span><span class="brac">)</span><span class="spec">;</span></p>
  <p id="line-opacity"><span class="prop">opacity</span><span class="spec">:</span><span class="num"> ${_values.opacity}</span><span class="spec">;</span></p>
  <p id="line-border-radius"><span class="prop">border-radius</span><span class="spec">:</span><span class="num"> ${_values.border}</span><span class="px">px</span><span class="spec">;</span></p>
  `
  
  document.getElementById("container-code").innerHTML = code;
}

function copyText() {
  navigator.clipboard.writeText(document.getElementById("container-code").innerText.slice(6, 999));
}

function updateValue(_values) {
  let elements = {
    "r": document.getElementById("input-r_value"),
    "g": document.getElementById("input-g_value"),
    "b": document.getElementById("input-b_value"),
    "opacity": document.getElementById("input-opacity_value"),
    "border": document.getElementById("input-border-radius_value") 
  }
  elements.r.innerHTML = _values.r
  elements.g.innerHTML = _values.g
  elements.b.innerHTML = _values.b
  elements.opacity.innerHTML = _values.opacity
  elements.border.innerHTML = `${_values.border}px`
}

function updateModifiers(_values) {

  let elements = {
    "r": document.getElementById("input-r"),
    "g": document.getElementById("input-g"),
    "b": document.getElementById("input-b"),
    "opacity": document.getElementById("input-opacity"),
    "border": document.getElementById("input-border-radius"),
    "previewBox": document.getElementById("preview-box"),
  }

  elements.previewBox.style.backgroundColor = `rgb(${_values.r}, ${values.g}, ${values.b})`;
  elements.previewBox.style.opacity = `${_values.opacity}`;
  elements.previewBox.style.borderRadius = `${_values.border}px`;
  elements.r.style.setProperty("--bgcolor-r", _values.r);
  elements.g.style.setProperty("--bgcolor-g", _values.g);
  elements.b.style.setProperty("--bgcolor-b", _values.b);
  elements.opacity.style.setProperty("--bgcolor-opac", _values.opacity * 255);
  elements.border.style.setProperty("--bgcolor-rad", _values.border * 1.133);
}

document.addEventListener("input", (val) => {
  var name = val.target.name;
  var value =  val.target.value;

  values[`${name}`.split("-")[1]] = value;

  updateValue(values)
  updateModifiers(values)
  updateCode(values)
})