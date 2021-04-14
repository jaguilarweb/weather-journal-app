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

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);

/* Main function */

function performAction(e) {
  let newCodezip = document.getElementById('zip').value;
  let userEntry = document.getElementById('feelings').value;
  getApiRequest(baseUrl, newCodezip, apiKey)
  .then(function(data){
    console.log(data)
    postData('/addWeatherData', {date:newDate, temp:data.main.temp, content:userEntry})
  })
}

/* Build url API
https://api.openweathermap.org/data/2.5/weather?zip={zipCode},us&appid={API key}
(api reference)*/

const getApiRequest = async (url, zip, key) => {
    const response = await fetch(`${url}${zip},us&appid=${key}`);
  try {
      const data = await response.json();
      console.log(data);
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