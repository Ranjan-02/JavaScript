const linkInput = document.querySelector(".linkdiv input");
const btnEnter = document.querySelector(".linkdiv button");
const copyInput = document.querySelector(".copy input");
const copyBtn = document.querySelector(".copy button");



btnEnter.addEventListener("click", fetchLinkShortner)


async function fetchLinkShortner() {

    let value = linkInput.value;
    console.log(value);

    let data = await fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
    data = await data.json()
    console.log(data.result);
    copyInput.value = data.result.short_link;


    copyBtn.addEventListener("click", function () {
        copyInput.select()
        navigator.clipboard.writeText(copyInput.value)

        console.log('select btn');
    })


}