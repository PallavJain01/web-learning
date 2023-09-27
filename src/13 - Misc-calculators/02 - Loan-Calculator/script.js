// loan * (interest * 0.01) / months

const
  loanAmtElem = document.getElementById("inp-loanAmt"),
  interestElem = document.getElementById("inp-interest"),
  monthsElem = document.getElementById("inp-months"),
  outputElem = document.getElementById("output").children[0];
;

var
  loanAmt = 10000,
  interestRate = 10,
  months = 11

function updateOutput() {
  var interest = (loanAmt * (interestRate * 0.01)) / months;
  var payment = loanAmt / months + interest;
  outputElem.innerText = payment.toFixed(2);
}


loanAmtElem.addEventListener("input", (elem) => {
  let val = parseInt(elem.target.value);
  loanAmt = val;
  updateOutput()
})
interestElem.addEventListener("input", (elem) => {
  let val = parseInt(elem.target.value);
  interestRate= val;
  updateOutput()
})
monthsElem.addEventListener("input", (elem) => {
  let val = parseInt(elem.target.value);
  months = val;
  updateOutput()
})