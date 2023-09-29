const axios = require('axios'); //import axios
const apiUrlBase = "https://api.openweathermap.org/data/2.5/weather"; //variable for api url
const keys = require('../data/api-keys.json'); //import api keys

const getDataFromApi = async (lat, lon) => { //arrow function for getting api data
    apiKey = keys.weather; //weather key
    const url = `${apiUrlBase}?lat=${lat}&lon=${lon}&appid=${apiKey}`; //url taking in the latitude and longitude api key
    const response = await axios.get(url); //send api request
    const weatherData = response.data.weather[0]; //not used
    return {
        description: response.data.weather[0].description, //description sent from the api
        temp:response.data.main.temp //temperature sent from the api
    };
}

module.exports = { //export
    getDataFromApi
}