import { useNavigate } from "react-router-dom";

export default function BreweriesList({ brewery }) {
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

  const handleBreweryDetails = () => {
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
      <div className="listDiv">
        <p>{name}</p>
        <p>Type: {brewery_type}</p>
          {street? <p>Address: {street}, {city} {postal_code}</p> : <p>Address: Not found</p>}
        <p>
          <a href={website_url} target="_blank" rel="noreferrer">
            Visit their website
          </a>
        </p>
        <div className="listBtn">
        <button onClick={() => handleBreweryDetails()}>
          View more details
        </button>
        </div>
      </div>
  );
}
