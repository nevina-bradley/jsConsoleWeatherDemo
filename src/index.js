const {getCoordinatesFromZip} = require("./get-coord"); //pulls in coord function get_coord/index
const {getDataFromApi} = require('./get-weather'); //pulls in data function get_weather/index
const readline = require('readline'); //import readline

const displayResult = async (zipcode) =>{ //start of display result function
    console.log(`You entered: ${zipcode}`); //log the zipcode that the user provided
    const coords = await getCoordinatesFromZip(zipcode);
    console.log(`Your coordinates are`, coords); //log the coordinates for the zipcode that the user provided
    const weather = await getDataFromApi(coords.lat, coords.lng);
    console.log(`Today's weather: ${weather.description} with a temp of ${weather.temp}`); //spit out user responses along with api answers
    
}

const rl = readline.createInterface({ //readline interface
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your zip code: ', (zipcode) => { //ask user for zipcode
    displayResult(zipcode); //display results of displayResult while taking in user zipcode
    rl.close(); //close
});

