const linkInput = document.querySelector(".linkdiv input");
const btnEnter = document.querySelector(".linkdiv button");
const copyInput = document.querySelector(".linkdiv input");
const copyBtn = document.querySelector(".linkdiv button");


btnEnter.addEventListener("click", inputLinkSubmit)

function inputLinkSubmit(value) {
    let value = linkInput.value;

    fetchLinkShortner(value)

}

async function fetchLinkShortner(value) {
    let data = await fetch(`https://api.shrtco.de/v2/shorten?${value}/very/long/link.html`)
    data = await data.json()
    console.log(data);
}