document.querySelector("button").addEventListener("click", function (e) {
    e.preventDefault();
    let input = document.querySelector("input")

    const word = input.value
    if (word === "") {
        return;
    } else {
        getData(word)
    }
})


async function getData(word) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    let response = await fetch(url);
    let data = await response.json();



    if (!data.length) {
        document.querySelector(".notFund").textContent = `not found data`
        return;
    } else {
        let discription = `${data[0].meanings[0].definitions[0].definition}`;

        document.querySelector(".discription").textContent = `${discription}`
    }
}