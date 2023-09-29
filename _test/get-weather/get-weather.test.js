const getWeather = require("../../src/get-weather"); //check coord comments
const axios = require('axios');

jest.mock('axios');
jest.mock('../../src/data/api-keys.json', () => ({
    weather:'abc-def-123-456',
    opencage:"abc-def-123-456"
  }), { virtual: true });

const sampleResponse = {
    data:{
        weather: [
            {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04d'
            }
        ],
        main:{
            temp: 293.28
        }
    }
}



test("Get Weather from Api", async ()=>{
    const expected = {
        description: 'broken clouds',
        temp: 293.28
    };
    axios.get.mockImplementationOnce(()=>Promise.resolve(sampleResponse));
    const weatherData = await getWeather.getDataFromApi(0 , 0);
    expect(weatherData).toEqual(expected);

})