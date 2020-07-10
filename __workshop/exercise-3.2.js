// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  return opencage
    .geocode(requestObj)
    .then((data) => {
      const lat = data.results[0].geometry.lat;
      const lng = data.results[0].geometry.lng;
      const coordinates = { lat, lng };
      return coordinates;
    })
    .catch((error) => {
      console.log("error", error.message);
    });
};

getPositionFromAddress(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((response) => console.log(response));

getPositionFromAddress("Canada").then((response) => console.log(response));

getPositionFromAddress("Pacific Ocean").then((response) =>
  console.log(response)
);

getPositionFromAddress("Dorval, Quebec").then((response) =>
  console.log(response)
);
