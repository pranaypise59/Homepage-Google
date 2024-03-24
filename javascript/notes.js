const notesHtml = `
<div id="notes">
<h4>Notes</h4>
<textarea name="notes" id="notes" cols="30" rows="10"></textarea>
</div>
`

function renderNotes() {
        displayContainer.innerHTML = notesHtml;

        // Select the textarea element
        const notesTextarea = document.querySelector('textarea[name="notes"]');

        // Add onchange event listener to the textarea
        notesTextarea.addEventListener('input', function(event) {
            // Get the text content of the textarea
            const notesContent = event.target.value;

            // Save the text content to localStorage with key 'localnotes'
            localStorage.setItem('localnotes', notesContent);
        });

        // Optionally, you can also populate the textarea with the content from localStorage if it exists
        const savedNotes = localStorage.getItem('localnotes');
        if (savedNotes) {
            notesTextarea.value = savedNotes;
        }
}
