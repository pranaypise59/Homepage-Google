function googleSearch() {
    let text = document.getElementById("search").value;
    let cleanQuery = text.replace(/ /g, "+");
    let url = 'http://www.google.com/search?q=' + cleanQuery;
    document.getElementById("search").value = "";
    window.location.href = url;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        googleSearch();
    }
}