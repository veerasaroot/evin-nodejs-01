const axios = require('axios');

const url = 'https://api.openweathermap.org/data/2.5/weather';
const key = '3ddfa420577d3cdf993638e9608f2d75';
const city = 'Bangkok';
const country = 'th';

async function data () {
    var response = await axios.get(`${url}?q=${city},${country}&appid=${key}&units=metric`)
    return response.data;
}

module.exports = data