const APIKEY = "2807ee8616c04f17bed6686b59faf4e5"
const URL = "https://newsapi.org/v2/everything?q="

window.addEventListener("load", function () {
    fetchNews("india");
});

async function fetchNews(qurry) {
    const resp = await fetch(`${URL}${qurry}&apiKey=${APIKEY}`)
    const data = await resp.json()
    bindData(data.articles);
}
function bindData(articles) {
    if (!articles.urlToImage) {
        return;
    } else {

    }
}