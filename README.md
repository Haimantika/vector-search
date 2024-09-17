# Vector Search
In this demo, we perform a **vector-based search** on a set of documents. We use pre-trained embeddings to represent both the documents and the query as vectors in a high-dimensional space. The search algorithm then finds the most similar documents based on their proximity in this vector space.

This includes:
- A **backend** API that processes search queries and returns the closest matching documents.
- A **frontend** interface for users to input their search queries and view results.

## Technologies Used
- Backend: Node.js, Express, HNSWLib
- Frontend: HTML, CSS, JavaScript

## Setup Instructions
**1. Clone the Repository** 
```
git clone https://github.com/yourusername/vector-search.git
cd vector-search
```

**2. Install Dependencies**
```
npm install
```

**3. Add Your Documents**

Place your documents in the `/data/documents.json` file. This should be an array of strings where each string represents a document.

```json
[
  "This is the first document.",
  "Here is the second document.",
  "Another example document."
]
```

**5. Start the Backend**
```bash
npm start
```
This will start the backend server at http://localhost:3000.

**6. Open the Frontend**

Navigate to the frontend folder and open `index.html` in your browser.

## Running the Application
1. Open the frontend in your browser.
2. Enter a query in the search input field.
3. Click "Search".
4. The results will be displayed on the page, showing the most similar documents and their distances.

## How it Works
**Backend**
The backend exposes an API endpoint `(/search)` that accepts a `POST`request with a search query. It uses pre-trained embeddings to convert both the query and the documents into vectors, and then performs a k-nearest neighbors (k-NN) search to find the most similar documents.

- Embeddings: The `embeddings.js` file handles generating the vector embeddings for both the documents and the search query.
- Vector Search: The `search.js` file uses the HNSWLib library to create an index of document embeddings and perform the search.

**Frontend**
The frontend consists of a simple form where users can input a search query. Upon submission, it sends the query to the backend API and displays the results.



