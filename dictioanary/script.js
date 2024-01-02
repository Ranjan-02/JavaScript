document.querySelector("button").addEventListener("click", function (e) {
    e.preventDefault();
    let input = document.querySelector("input")

    const word = input.value
    if (word === "") {
        alert("please Enter Value")
    } else {
        getData(word)
    }
})


async function getData(word) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    let response = await fetch(url);
    let data = await response.json();

    if (data.title) {
        document.querySelector(".text").innerHTML = "<h1>Data not found</h1>";
    }



    document.querySelector(".text").innerHTML = "";
    const createDiv = document.createElement("div")
    createDiv.innerHTML =
        `
   
        <h3> ${data[0].word}</h3>
        <p class="discription"> Discription : <span> ${data[0].meanings[0].definitions[0].definition}</span></p>
        <p>Parts of speech : <span>${data[0].meanings[0].partOfSpeech == undefined ? "Data not found" : data[0].meanings[0].partOfSpeech}</span> </p>
        <button ><a href="${data[0].sourceUrls}"  target="_blank"> Read more</a> </button>

    `
    document.querySelector(".text").appendChild(createDiv)

}


