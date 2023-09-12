const bar = document.querySelector(".right-side i");
const sidebar = document.querySelector(".left-side");
const cursor = document.querySelector(".cursor i")
const body = document.querySelector("body")




let chack = true;
bar.addEventListener("click", function () {
    if (chack === true) {

        bar.classList.replace("fa-xmark", "fa-bars")
        chack = false
    } else {
        bar.classList.replace("fa-bars", "fa-xmark")
        chack = true

    }
    sidebar.classList.toggle("show-slider2")
})

body.addEventListener("mousemove", function (details) {
    cursor.style.left = `${details.x - 60}px`
    cursor.style.top = `${details.y}px`

})