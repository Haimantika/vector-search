const { getEmbeddings } = require('./embeddings');
const documents = require('../data/documents.json');
const HNSWLib = require('hnswlib-node');

async function performVectorSearch(query) {
    const docEmbeddings = await getEmbeddings(documents);
    const queryEmbedding = await getEmbeddings([query]);

    const dimension = docEmbeddings[0].length;

  
    const index = new HNSWLib.HierarchicalNSW('l2', dimension);


    index.initIndex(docEmbeddings.length);

   
    docEmbeddings.forEach((embedding, idx) => {
        index.addPoint(embedding, idx);
    });


    const k = 2;
    const result = index.searchKnn(queryEmbedding[0], k);

    const { distances, neighbors } = result;

   
    const results = neighbors.map((neighborIdx, i) => ({
        document: documents[neighborIdx],
        distance: distances[i]
    }));

    return results;
}

module.exports = { performVectorSearch };







