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

  const handleClickBreweryDetails = () => {
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

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="listDiv">
      <b>{name}</b>
      <br></br>
      Type: {capitalize(brewery_type)}
      {street ? (
        <p className="address">
          {street}, {city}, {state} {postal_code}
        </p>
      ) : (
        <p className="address">Address Not found</p>
      )}
      {website_url ? (
        <a href={website_url} target="_blank" rel="noreferrer">
          Visit their website
        </a>
      ) : (
        <p>Website not available</p>
      )}
      <br></br>
      <div>
        <button onClick={() => handleClickBreweryDetails()} className="listBtn">
          View more details
        </button>
      </div>
    </div>
  );
}
