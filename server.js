const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/products', async (req, res) => {
  try {
    const { page, size } = req.query;
    const response = await axios.get(`https://api.timbu.cloud/products`, {
      params: {
        organization_id: '2e9285e1bbce4b55afe9b33258add851',
        reverse_sort: false,
        page,
        size,
        Appid: 'DG9K9DJ3ZWC3JMH',
        Apikey: 'b6579fba3b414aee8bfb7bfb9bd2c35b20240712150626781279',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching products' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
