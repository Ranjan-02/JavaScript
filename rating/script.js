"use stric"
const stars = document.querySelectorAll(".fa-star")

const ratting = [
    { emoji: "😍", text: "I love It" },
    { emoji: "😒", text: "bad" },
    { emoji: "😃", text: "not Bad" },
    { emoji: "😢", text: "very bad" },
    { emoji: "🤦‍♂️", text: "Excilent" },
]
stars.forEach(function (star, index1) {
    star.addEventListener("click", function () {

        document.querySelector(".emoji").textContent = ratting[index1].emoji
        document.querySelector(".status").textContent = ratting[index1].text
        stars.forEach(function (star, index2) {

            if (index1 >= index2) {
                star.classList.add("active")
                console.log('clicked');
            } else if (star.classList.contains("active")) {
                star.classList.remove("active")
            }
        })
    })

})






