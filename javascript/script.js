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

const notesBtn = document.querySelector('.notes').addEventListener('click', function(){
    displayContainer.innerHTML = '';
    renderNotes();
});

const musicBtn = document.querySelector('.music').addEventListener('click', function(){
    displayContainer.innerHTML = '';
    renderMusic();
})

const quotesBtn = document.querySelector('.quote').addEventListener('click', function(){
    displayContainer.innerHTML = '';
    renderRandomQuote();
})

//default render quote:

renderRandomQuote();