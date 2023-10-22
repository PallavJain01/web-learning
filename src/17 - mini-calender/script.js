const
  monthElem = document.getElementById("month"),
  dayElem = document.getElementById("day"),
  dateElem = document.getElementById("date"),
  yearElem = document.getElementById("year");
;

let date = new Date();
monthElem.innerHTML = date.toLocaleString("en", {month: "long"});
dayElem.innerHTML = date.toLocaleString("en", {weekday: "long"});
dateElem.innerHTML = date.getDate();
yearElem.innerHTML = date.getFullYear();
