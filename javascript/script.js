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

const notesBtn = document.querySelector('.notes');
const musicBtn = document.querySelector('.music');
const quotesBtn = document.querySelector('.quote');
const webophiliaBtn = document.querySelector('.webophilia');

notesBtn.addEventListener('click', function(){
    displayContainer.innerHTML = '';
    renderNotes();
    localStorage.setItem('activeTab', 'notes'); // Store the active tab in localStorage
});

musicBtn.addEventListener('click', function(){
    displayContainer.innerHTML = '';
    renderMusic();
    localStorage.setItem('activeTab', 'music'); // Store the active tab in localStorage
});

quotesBtn.addEventListener('click', function(){
    displayContainer.innerHTML = '';
    renderRandomQuote();
    localStorage.setItem('activeTab', 'quote'); // Store the active tab in localStorage
});

webophiliaBtn.addEventListener('click', function(){
    displayContainer.innerHTML = '';
    renderWebophilia();
    localStorage.setItem('activeTab', 'webophilia'); // Store the active tab in localStorage
})
// Function to render the default tab based on localStorage or default to quote
function renderDefaultTab() {
    const activeTab = localStorage.getItem('activeTab');
    if (activeTab === 'notes') {
        renderNotes();
    } else if (activeTab === 'music') {
        renderMusic();
    } else if (activeTab === 'webophilia') {
        renderWebophilia();        
    } else {
        renderRandomQuote();
    }
}

// Render the default tab on page load
renderDefaultTab();