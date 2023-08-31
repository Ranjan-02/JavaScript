function displayTime() {
  let dateTime = new Date();
  console.log(dateTime);
  let hour = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();

  let session = document.getElementById("seasson");
  if (hour >= 12) {
    session.innerHTML = "pm";
  } else {
    session.innerHTML = "am";
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  document.getElementById("hours").innerHTML = hour;
  document.getElementById("minite").innerHTML = min;
  document.getElementById("secound").innerHTML = sec;
}
setInterval(displayTime, 10);
