import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assets/global.css";
import BreweryMap from "./BreweryMap";

export default function Breweries() {
  const { state } = useLocation();

  const navigate = useNavigate();
  const goToListingPage = () => navigate(-1);

  return (
    <div className="breweryDetailsContainer">
    <h1>Brewery Details</h1>
      <div className="breweryDetails">
        <div className=".backToListBtn">
        <button onClick={() => goToListingPage()}>
          Go back to breweries list
        </button>
        </div>
        <p>{state.name}</p>
        {state.street ? (
          <p>
            {state.street}, {state.city}, {state.state} {state.postal_code}
          </p>
        ) : (
          <p>Address not found</p>
        )}
<div className="mapDiv">
        <BreweryMap props={state} />
        </div>
      </div>
    </div>
  );
}
