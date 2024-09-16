// frontend/app.js

document.getElementById('searchBtn').addEventListener('click', async () => {
    const query = document.getElementById('queryInput').value;
    if (!query) {
        alert("Please enter a query.");
        return;
    }

    const response = await fetch('http://localhost:3000/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
    });

    const data = await response.json();
    displayResults(data.results);
});

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (results && results.length > 0) {
        results.forEach((result, index) => {
            const resultElement = document.createElement('p');
            resultElement.textContent = `Result ${index + 1}: ${result.document} (Distance: ${result.distance.toFixed(4)})`;
            resultsDiv.appendChild(resultElement);
        });
    } else {
        resultsDiv.textContent = 'No results found.';
    }
}
