let dt = new Date();
function renderDate() {
  let endDateofMonth = new Date(
    dt.getFullYear(),
    dt.getMonth() + 1,
    0
  ).getDate();
  // let prevDateofMonth = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
  // console.log(endDateofMonth);
  dt.setDate(1);
  let startDateinDays = dt.getDay();
  let today = new Date();
  console.log(today);
  // console.log(startDateinDays);
  document.getElementById("currentDate").innerHTML = dt.toDateString();
  let Month = [
    "January",
    "February",
    "March",
    "April ",
    "May",
    "June",
    "July",
    "August ",
    "September",
    "October ",
    "November",
    "December",
  ];
  document.getElementById("month").innerHTML = Month[dt.getMonth()];
  let cells = "";
  for (x = startDateinDays; x > 0; x--) {
    cells += "<div class='priv_date'>" + "" + "</div>";
  }
  for (i = 1; i <= endDateofMonth; i++) {
    if (i === today.getDate() && dt.getMonth() === today.getMonth()) {
      cells += "<div class='active'>" + i + "</div>";
    } else {
      cells += "<div>" + i + "</div>";
    }
  }
  document.getElementsByClassName("days")[0].innerHTML = cells;
}

function moveDate(para) {
  if (para === "prev") {
    dt.setMonth(dt.getMonth() - 1);
  } else if (para === "next") {
    dt.setMonth(dt.getMonth() + 1);
  }
  renderDate();
}
