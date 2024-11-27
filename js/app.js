
// Function to load the HTML file
function loadHTML(file) {
    fetch(file)
    .then(response => response.text())
    .then(data => {
        document.getElementById('content').innerHTML = data;
    })
    .catch(error => console.error('Error loading the HTML file:', error));
}
