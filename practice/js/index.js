const proxyUrl = "https://cors-anywhere.herokuapp.com/"

var url = proxyUrl + "https://newsapi.org/v2/everything?q=bitcoin&from=2020-07-23&sortBy=publishedAt&apiKey=d1695fa9b5e8446092f19fdf4956a77c"
var thenfunc = j => {

    console.log("j==", j)
    if (j.status !== "error") {
        var arrays = j.articles.filter(arr => arr.author === "Nick Chong")
        arrays.forEach(function(a, i) {
            document.write("<p>" + arrays[i].title + "</p>")

        })
    }
}
fetch(url)
    .then(r => r.json())
    .then(thenfunc)
    .catch(e => console.log(e))