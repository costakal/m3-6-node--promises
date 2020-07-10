// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = () => {
  return request("http://api.open-notify.org/iss-now.json").then((response) => {
    const parsedResponse = JSON.parse(response);
    let lat = parsedResponse.iss_position.latitude;
    let lng = parsedResponse.iss_position.longitude;
    let coordinates = { lat, lng };
    return coordinates;
  });
};

//console.log(getIssPosition());
getIssPosition().then((result) => console.log(result));
