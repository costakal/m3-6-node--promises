// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = () => {
  return request("http://api.open-notify.org/iss-now.json").then((response) => {
    const parsedResponse = JSON.parse(response);
    const lat = parsedResponse.iss_position.latitude;
    const lng = parsedResponse.iss_position.longitude;
    const coordinates = { lat, lng };
    return coordinates;
  });
};

//console.log(getIssPosition());
getIssPosition().then((result) => console.log(result));
