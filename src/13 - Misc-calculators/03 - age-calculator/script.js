// YYYY-MM-DD

const
  inpMain = document.getElementById("inp-main"),
  btnCalc = document.getElementById("btn-calc"),
  outYears = document.getElementById("age-years"),
  outMonths = document.getElementById("age-months"),
  output = document.getElementById("output");
;

btnCalc.addEventListener("click", (e) => {
  let d = new Date()
  currDate = [d.getFullYear(), d.getMonth() + 1];
  date = `${inpMain.value}`.split("-");

  let ageYear = (currDate[1] >= date[1]) ? currDate[0] - date[0] : currDate[0] - date[0] - 1;
  let ageMonth = (currDate[1] > date[1] && currDate[1] != date[1]) ? currDate[1] - date[1] : 12 - (date[1] - currDate[1]);
  if (currDate[1] == date[1]) ageMonth = 0;

  if (date[0] > currDate[0]) {
    output.innerHTML = "Invalid Age";
  } else {
    output.innerHTML = `Your age is <span id="age-years">${ageYear}</span> years and <span id="age-months">${ageMonth}</span> months`;
  }

})