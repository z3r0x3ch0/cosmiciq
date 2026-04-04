require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors()); // Allow requests from your frontend

app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://actual-api-endpoint.com/data', {
      headers: { 'Authorization': `Bearer ${process.env.API_KEY}` } // Use your key here
    });
    res.json(response.data); // Send data back to your frontend
  } catch (error) {
    res.status(500).json({ error: 'Request failed' });
  }
});

app.listen(port, () => console.log(`Proxy server running on port ${port}`));   

node server.js
http://localhost:3001/api/data
