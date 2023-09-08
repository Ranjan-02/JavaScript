const li = document.querySelectorAll("li");
const convertArray = Array.from(li)
console.log(convertArray);
// console.log(li);
convertArray.forEach(function (iteam) {
    iteam.style.backgroundColor = "lightcoral"
    iteam.style.padding = "20px"
    iteam.style.margin = "20px"
})
