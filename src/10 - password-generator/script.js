const chars = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  lower: "abcdefghijklmnopqrstuvwxyz".split(""),
  number: "0123456789".split(""),
  symbol: "!@#$%^&*()_".split("")
}

function getElem(id) {
  return document.getElementById(id)
}

const
  Elem_passLen = getElem("pass-length-option"),
  Elem_includedUpper = getElem("upper-letters-option"),
  Elem_includeLower = getElem("lower-letters-option"),
  Elem_includeNumber = getElem("number-option"),
  Elem_includeSymbol = getElem("symbols-option")
//


function updatePass() {
  var
    passLen = Elem_passLen.value,
    includedUpper = Elem_includedUpper.checked,
    includeLower = Elem_includeLower.checked,
    includeNumber = Elem_includeNumber.checked,
    includeSymbol = Elem_includeSymbol.checked
  var password = generatePass(passLen, includedUpper, includeLower, includeNumber, includeSymbol)
  document.getElementById("container-password").innerText = password
}

function generatePass(passLen, upper, lower, number, symbol) {
  var pass = "";
  var charArr = [];
  if (!(upper || lower || number || symbol)) return ""; // if none of the check boxes are enabled
  if (upper) charArr.push(...chars.upper);
  if (lower) charArr.push(...chars.lower);
  if (number) charArr.push(...chars.number);
  if (symbol) charArr.push(...chars.symbol);
  for (let i = 0; i < passLen; i++) {
    pass += charArr[parseInt(Math.random() * charArr.length)];
  }
  return pass;
}

updatePass()