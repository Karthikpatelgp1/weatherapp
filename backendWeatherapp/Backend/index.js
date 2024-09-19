const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors({
    origin: 'http://52.54.149.198:3000', 
    methods: 'GET,POST', 
}));

app.get('/api/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = 'd8a16ada1f6f854f3133186c16712363';
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        console.log("respone", response)
        res.json({
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
