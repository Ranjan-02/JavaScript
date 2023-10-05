const btn = document.querySelector(".btn")



function AgeCalculate() {
    const getInput = document.querySelector("input").value


    if (!getInput) {
        alert("please provide a valid date")

    } else {

        let date = new Date(getInput)

        let today = new Date()

        let diffYear = today.getFullYear() - date.getFullYear()
        let diffMonth = today.getMonth() - date.getMonth()
        let diffDay = today.getDay() - date.getDay()

        displayAge(diffYear, diffMonth, diffDay)




    }

}

function displayAge(year, month, day) {

    document.querySelector("#years").innerHTML = year
    document.querySelector("#months").innerHTML = month
    document.querySelector("#days").innerHTML = day
}
btn.addEventListener("click", function () {
    AgeCalculate()
})