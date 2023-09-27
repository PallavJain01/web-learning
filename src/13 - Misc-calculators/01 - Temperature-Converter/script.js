const
  celsuisElem = document.getElementById("inp-celsius"),
  fahrenheitElem = document.getElementById("inp-fahrenheit"),
  kelvinElem = document.getElementById("inp-kelvin");
;

celsuisElem.addEventListener("input", (elem) => {
  let value = parseInt(elem.target.value);
  fahrenheitElem.value = convert("celsius", value, "fahrenheit");
  kelvinElem.value = convert("celsius", value, "kelvin");
})

fahrenheitElem.addEventListener("input", (elem) => {
  let value = parseInt(elem.target.value);
  celsuisElem.value = convert("fahrenheit", value, "celsius");
  kelvinElem.value = convert("fahrenheit", value, "kelvin");
})

kelvinElem.addEventListener("input", (elem) => {
  let value = parseInt(elem.target.value);
  celsuisElem.value = convert("kelvin", value, "celsius");
  fahrenheitElem.value = convert("kelvin", value, "fahrenheit");
})

function convert(type1, value, type2) {
  var output = (type1 == "celsius")
    ? (type2 == "fahrenheit")
      ? (value * 1.8) + 32
      : (value + 273.15)
    : (type1 == "fahrenheit")
      ? (type2 == "celsius")
        ? (value - 32) * 0.55556
        : ((value - 32) * 0.55556) + 273.15
      : (type2 == "celsius")
        ? value - 273.15
        : ((value - 273.15) * 1.8) + 32
  ;
  return output;
}