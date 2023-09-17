const APIKEY = "2807ee8616c04f17bed6686b59faf4e5"
const URL = "https://newsapi.org/v2/everything?q="

window.addEventListener("load", function () {

    fetchNews("today");
});

async function fetchNews(qurry) {
    const resp = await fetch(`${URL}${qurry}&apiKey=${APIKEY}`)
    const data = await resp.json()
    bindData(data.articles);
}
function bindData(articles) {
    const cardContenar = document.querySelector(".card-contenar")
    const cardTamplate = document.querySelector("#tamplate-news-card")

    cardContenar.innerHTML = "";

    articles.forEach(function (artical) {
        if (!artical.urlToImage) {
            return;
        } else {
            const cardClone = cardTamplate.content.cloneNode(true);
            findDataInCard(cardClone, artical)
            cardContenar.appendChild(cardClone)
        }
    })



}
function findDataInCard(cardClone, artical) {
    const imgSource = cardClone.querySelector(".img-source");
    const articalTitle = cardClone.querySelector(".artical-title");
    const cardTitle = cardClone.querySelector(".card-title")
    const newsDicrep = cardClone.querySelector(".news-docs")

    imgSource.src = artical.urlToImage;
    articalTitle.innerHTML = artical.title;
    newsDicrep.innerHTML = artical.description;

    const date = new Date(artical.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });

    cardTitle.innerHTML = `${artical.source.name} || ${date}`

}

document.querySelector(".btn-enter").addEventListener("click", function () {
    let userInput = document.querySelector(".user-input").value;
    let chack;
    if (userInput) {
        fetchNews(userInput);
        console.log('hellow');
        chack = false;

    } else {
        alert("please enter input")
        chack = true;

    }


})
