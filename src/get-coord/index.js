const axios = require('axios'); //import axios
const keys = require('../data/api-keys.json'); //import api keys

const getCoordinatesFromZip = async(zipcode) =>{ //start of function to get coordinates
    apiKey = keys.opencage; //import opencage keys
    const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', { //send api request
        params: { //parameters needed for api request
            q: zipcode,
            key: apiKey, 
        }
    });

    if (response.data.results[0]) {
        const { lat, lng } = response.data.results[0].geometry;
        return { lat, lng }; //api gives back latitude and longitude after request
    } else {
        throw new Error('No result found'); //error message
    }
}

module.exports = { //export
    getCoordinatesFromZip
}