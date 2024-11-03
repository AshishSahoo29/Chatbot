const { exec } = require('child_process');
const pineconeService = require('../services/pineconeServices');

// Function to run Python script and return embeddings
const generateEmbedding = async (sourceType, source) => {
  return new Promise((resolve, reject) => {
    exec(`python3 embedder.py ${sourceType} "${source}"`, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${error.message}`);
      } else if (stderr) {
        reject(`Error: ${stderr}`);
      } else {
        resolve(JSON.parse(stdout));
      }
    });
  });
};

// Controller to add data to the knowledge base
exports.addDataToKB = async (req, res) => {
  const { sourceType, source } = req.body;

  try {
    const embedding = await generateEmbedding(sourceType, source);
    await pineconeService.storeEmbedding(embedding, sourceType, source);
    res.status(200).json({ message: 'Data added to Pinecone successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

// Controller to query the knowledge base
exports.queryKB = async (req, res) => {
  const { query } = req.body;

  try {
    const queryEmbedding = await generateEmbedding('text', query);
    const results = await pineconeService.queryEmbedding(queryEmbedding);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
