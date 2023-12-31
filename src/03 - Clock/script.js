var time = {
  hour: 0,
  minute: 0,
  second: 0
}

var deg = {
  sec: 0,
  min: 0,
  hour: 0
}

function updateSecond(deg) {
  document.getElementById("hand-second").style.rotate = `${deg}deg`;
}

function updateMinute(deg) {
  document.getElementById("hand-minute").style.rotate = `${deg}deg`;
}

function updateHours(deg) {
  document.getElementById("hand-hour").style.rotate = `${deg}deg`;
}

function updateTime() {
  time.hour = new Date().getHours();
  time.minute = new Date().getMinutes();
  time.second = new Date().getSeconds();
  let currTime = `${((time.hour % 12) < 10) ? "0" + time.hour % 12 : time.hour % 12}:${(time.minute < 10) ? "0"+time.minute : time.minute}:${(time.second < 10) ? "0" + time.second : time.second}`;
  document.getElementById("time").innerHTML = currTime;
  document.title = currTime
   
}

setInterval(() => {
  updateTime();
  updateSecond((time.second * 6) % 360);
  updateMinute((time.minute * 6) % 360);
  updateHours((((time.hour % 12) * 30) % 360));
}, 100);