document.querySelector("button").addEventListener("click", function () {
    let getData = document.querySelector("input").value

    // validation
    if (getData === "") {
        alert('please provide data');
        return false
    }
    getWeather(getData)
})


// fetch API

async function getWeather(value) {
    let API = `ba6686c4f4044b98acc133944231102`
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API}&q=${value}`)
    let result = await data.json()
    let current = result.current;
    let location = result.location;
    console.log(location, current);
    displayData(current, location)

}

// display all data

function displayData(current, location) {
    document.querySelector(".c-temp").innerHTML = Math.floor(current.feelslike_c)
    document.querySelector("#weather").innerHTML = current.condition.text
    document.querySelector(".origin").innerHTML = location.name
    document.querySelector(".state").innerHTML = location.region

}

// Date and Time

window.addEventListener("load", function () {
    getWeather("kolkata")
    dateTime()

    function dateTime() {
        let date = new Date()
        let hours = date.getHours()
        if (hours >= 12) {
            document.querySelector(".am-pm").innerHTML = `pm`
        } else {
            document.querySelector(".am-pm").innerHTML = `am`

        }
        let minute = date.getMinutes()
        console.log(hours, minute);
        document.querySelector("#time").innerHTML = `${hours}:${minute}`
    }
    setInterval(() => {
        dateTime()

    }, 60000);

})
