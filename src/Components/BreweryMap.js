import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

export default function BreweryMap({ props }) {
  const { latitude, longitude } = props;
  const center = {
    lat: Number(latitude),
    lng: Number(longitude),
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCof0vc69QhUjMsFWJNvkmAQq60_a8UwCU">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
