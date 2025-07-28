const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
  fs.appendFileSync('registrations.txt', JSON.stringify(req.body) + '\n');
  res.status(200).json({ message: 'Registration saved to file!' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});