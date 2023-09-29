const axios = require('axios'); //import axios
const {getCoordinatesFromZip} = require("../../src/get-coord"); //get coordinates function from get-coord index

jest.mock('axios'); //mock axios library
jest.mock('../../src/data/api-keys.json', () => ({ //mock api key json file
    weather:'abc-def-123-456', //fake key
    opencage:"abc-def-123-456" //fake key 2
}), { virtual: true }); //fake folder

const sampleResponse ={ //mock response
    data:{
        results:[
            { 
                geometry:{
                    lat: 34.0950041, 
                    lng: -118.3997281
                } 
            }
        ]
    }
};

test("Get Coordinates from Zipcode", async()=>{ //arrow function to define test case
    const expected =  { //constant holding expected results
        lat: 34.0950041, 
        lng: -118.3997281 
    };

    axios.get.mockImplementationOnce(()=>Promise.resolve(sampleResponse)); //set up fake axios get to return a resolved promise when called

    const coordData = await getCoordinatesFromZip("19802"); //waiting for zipcode data
    expect(coordData).toEqual(expected); //check if coordData matches expected
})