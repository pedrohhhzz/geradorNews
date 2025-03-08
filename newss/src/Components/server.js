const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/news', async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'entretenimento',
        apiKey: 'YOUR_API_KEY',
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar notícias', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
