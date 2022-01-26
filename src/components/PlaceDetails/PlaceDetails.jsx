import React from "react";

const PlaceDetails = ({ place }) => {
  return <h1>{place && place.name}</h1>;
};

export default PlaceDetails;
