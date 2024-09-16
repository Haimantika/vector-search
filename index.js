const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { performVectorSearch } = require('./src/search');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//API endpoint to perform vector search
app.post('/search', async (req, res) => {
    const { query } = req.body;
    if (!query) {
        return res.status(400).json({ error: 'Query is required' });
    }

    try {
        const results = await performVectorSearch(query);
        res.json({ results });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


