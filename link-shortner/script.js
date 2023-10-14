const linkInput = document.querySelector(".linkdiv input");
const btnEnter = document.querySelector(".linkdiv button");
const copyInput = document.querySelector(".copy input");
const copyBtn = document.querySelector(".copy button");

btnEnter.addEventListener("click", function () {
    if (!linkInput.value) {
        return
    }
    fetchLinkShortner(linkInput.value)
})

async function fetchLinkShortner(value) {
    let data = await fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
    data = await data.json()
    copyInput.value = data.result.short_link;
}

copyBtn.addEventListener("click", function () {
    copyInput.select()
    navigator.clipboard.writeText(copyInput.value)
    document.getElementById("copy").style.opacity = "1"
    // document.getElementById("myDIV").style.opacity = "0.5";
    document.getElementById("copy").style.transition = "2s";


})