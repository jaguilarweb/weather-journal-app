/*---------------------------------------------------
TODO

1.- Personal API Key for OpenWeatherMap API
2.- Event listener to add function to existing HTML DOM element
3.- Function called by event listener
4.- Function to GET Web API Data
5.- Function to POST data
6.- Function to GET Project Data
 ---------------------------------------------------*/


/* Global Variables */

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '5b3236597fb0158567f3eab77a1a71e9';

// For Fahrenheit use units=imperial and Celsius use units=metric (API references)
// For this exercise purposes I set it to metric measure
let units = 'metric'; 

// Create a new date instance dynamically with JS
let day = new Date();
let newDate = (day.getMonth() + 1) + '/'+ day.getDate()+'/'+ day.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);

/* Main function */

function performAction(e) {
  let newCodezip = document.getElementById('zip').value;
  let userEntry = document.getElementById('feelings').value;
  getApiRequest(baseUrl, newCodezip, apiKey)
  .then((data) => {
    postData('/addWeatherData', {date:newDate, temp:data.main.temp, content:userEntry})
    updateUI()
  })
  .catch(error => console.log(error));
}

/* Build url API
https://api.openweathermap.org/data/2.5/weather?zip={zipCode},us&appid={API key}
&units={Units of measurement} ==> (Api reference)*/

const getApiRequest = async (url, zip, key) => {
    let codZip = zip || '94040';
    const response = await fetch(`${url}${codZip},us&appid=${key}&units=${units}`);
  try {
      const data = await response.json();
      return data;
  } catch (error) {
      console.log("error", error);
  }
};

// POST EXAMPLE

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });

  try {
      const newData = await response.json();
      return newData;
  } catch (error) {
      console.log("error", error);
  }
};

//Update de UI with the data retriver

const updateUI = async () => {
  const request = await fetch('/getWeatherData');
  try {
    const allData = await request.json();
    document.getElementById('date').innerHTML = allData['zone'].date;
    document.getElementById('temp').innerHTML = `${allData['zone'].temp}ºC`;
    document.getElementById('content').innerHTML = allData['zone'].content;
  } catch (error) {
    console.log("error", error);
  }
}
