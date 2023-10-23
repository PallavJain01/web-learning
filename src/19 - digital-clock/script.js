const
  hourElem = document.getElementById("time-hour"),
  minuteElem = document.getElementById("time-minute"),
  secondElem = document.getElementById("time-second");
;

var time = {
  hour: 0,
  minute: 0,
  second: 0
}

function updateTime() {
  time.hour = new Date().getHours();
  time.minute = new Date().getMinutes();
  time.second = new Date().getSeconds();
  hourElem.innerHTML = (time.hour < 10) ? "0" + time.hour : time.hour;
  minuteElem.innerHTML = (time.minute < 10) ? "0" + time.minute : time.minute;
  secondElem.innerHTML = (time.second < 10) ? "0" + time.second : time.second;
  let currTime = `${((time.hour % 12) < 10) ? "0" + time.hour : time.hour}:${(time.minute < 10) ? "0" + time.minute : time.minute}:${(time.second < 10) ? "0" + time.second : time.second}`;
  document.title = currTime;
}

setInterval(() => {
  updateTime();
}, 100);