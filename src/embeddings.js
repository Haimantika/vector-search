async function getEmbeddings(texts) {
    return texts.map((text, idx) => {
        return Array(5).fill().map(() => Math.random());
    });
}

module.exports = { getEmbeddings };

