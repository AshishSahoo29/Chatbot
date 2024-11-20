const { Pinecone } = require('@pinecone-database/pinecone');
require('dotenv').config();

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY
});

const indexName = 'chatbot-kb';

exports.storeEmbedding = async (embedding, sourceType, source) => {
  try {
    const vectorData = {
      id: `${Date.now()}`, 
      values: embedding,
      metadata: {
        sourceType,
        source,
      },
    };

    const index = pinecone.Index(indexName);
    await index.upsert({
      vectors: [vectorData],
    });
    console.log('Embedding stored successfully.');
  } catch (error) {
    console.error('Error storing embedding:', error);
  }
};

exports.queryEmbedding = async (queryEmbedding) => {
  try {
    const index = pinecone.Index(indexName);
    const queryResults = await index.query({
      vector: queryEmbedding,
      topK: 3,
      includeMetadata: true,
    });

    return queryResults.matches.map(match => ({
      content: match.metadata.source,
      similarity: match.score,
    }));
  } catch (error) {
    console.error('Error querying embedding:', error);
    return [];
  }
};
