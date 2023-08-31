let data ;
const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const tempature = document.getElementById("temprature");
const logoImg = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");
const weatherReport = document.getElementById("weatherReport");



const getData = async (event)=>{
    event.preventDefault()
    if(!inputBox.value){
       alert("Please Enter the city name :") 
       return;
    }

    const city = inputBox.value;

    const featchData =await fetch (`https://api.weatherapi.com/v1/current.json?key=ba6686c4f4044b98acc133944231102&q=${city}`);
    
    const orgData =await featchData.json();

    data = orgData ;

    console.log(data);

    countryName.innerHTML = data.location.country;
    stateName.innerHTML = data.location.region;
    cityName.innerHTML = data.location.name;
    humidity.innerHTML= data.current.humidity;
    windSpeed.innerHTML = data.current.wind_mph;
    tempature.innerHTML= data.current.temp_c;
    logoImg.src = data.current.condition.icon;
    weatherReport.innerHTML = data.current.condition.text;


    
    
};
