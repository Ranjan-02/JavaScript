const form = document.querySelector("form");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")

    if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please give a valid no ${weight}`
    } else if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `please give a valid no ${height}`
    } else {
        let BMI = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>${BMI}</span>`
        if (BMI < 18.6) {
            document.querySelector(".status").innerHTML = `Under Weight`

        } else if (BMI < 24.9) {
            document.querySelector(".status").innerHTML = `Normal Weight`


        } else {
            document.querySelector(".status").innerHTML = `Over Weight`


        }

    }



})

