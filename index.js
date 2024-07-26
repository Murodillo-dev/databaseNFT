const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// JSON faylni o'qing
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

app.get('/api', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
