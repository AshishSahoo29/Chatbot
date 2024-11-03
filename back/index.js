const express = require('express');
const bodyParser = require('body-parser');
const knowledgeController = require('./controllers/knowledgeController');

const app = express();
app.use(bodyParser.json());

app.post('/add', knowledgeController.addDataToKB);
app.post('/query', knowledgeController.queryKB);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
