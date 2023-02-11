const timeOutPut = document.querySelector(".time");
const secOutPut = document.querySelector(".sec");
const ampmOutPut = document.querySelector(".ampm");
const monthOutPut = document.querySelector(".month");
const dayOfWeekOutPut = document.querySelector(".dayofweek");
const dayOutPut = document.querySelector(".day");

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// prettier-ignore
const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formatTime = function (val) {
  if (val < 10) return "0";
  else return "";
};

function clock() {
  const d = new Date();
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();

  dayOfWeekOutPut.innerHTML = weekday[d.getDay()];
  monthOutPut.innerHTML = monthName[d.getMonth()];
  dayOutPut.innerHTML = d.getDate();

  const time = `${formatTime(h)}${h}:${formatTime(m)}${m}`;
  const sec = `${formatTime(s)}${s}`;

  const ampm = h >= 12 ? "PM" : "AM";

  timeOutPut.innerHTML = time;
  secOutPut.innerHTML = sec;
  ampmOutPut.innerHTML = ampm;
}

setInterval(clock, 1000);
