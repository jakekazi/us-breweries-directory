// import BreweryDetails from "./BreweryDetails";
import { useNavigate } from "react-router-dom";

export default function Breweries({ brewery }) {
  //latitude and longitude are also available
  const {
    name,
    brewery_type,
    street,
    city,
    state,
    postal_code,
    website_url,
    latitude,
    longitude,
  } = brewery;

  const navigate = useNavigate();
  const getBreweryDetails = () => {
    navigate("/brewery-details", {
      state: {
        name: name,
        street: street,
        city: city,
        state: state,
        postal_code: postal_code,
        latitude: latitude,
        longitude: longitude,
      },
    });
  };

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <p>Type: {brewery_type}</p>
        <p>
          Address: {street}, {city} {postal_code}
        </p>
        <p>
          Website:{" "}
          <a href={website_url} target="_blank" rel="noreferrer">
            Visit their website
          </a>
        </p>
        <button onClick={() => getBreweryDetails()}>View more details</button>
      </div>
    </>
  );
}
