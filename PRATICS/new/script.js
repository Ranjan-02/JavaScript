const enterTheNumber = document.querySelector("#value");
const button = document.querySelector("#buttom");
const result = document.querySelector(".resualt");
const decraption = document.querySelector("#decraption");

function stopDefult(e) {
  console.log(e.preventDefault());
}
stopDefult();

button.addEventListener("click", stopDefult, false);
