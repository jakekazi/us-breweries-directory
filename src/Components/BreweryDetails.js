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
        <div>
          <button onClick={() => goToListingPage()} className="listBtn">
            Go back to breweries list
          </button>
        </div>
        <br></br>
        <div className="brewery-name">{state.name}</div>
        {state.street ? (
          <p className="address">
            {state.street}, {state.city}, {state.state} {state.postal_code}
          </p>
        ) : (
          <p className="address">Address not found</p>
        )}
        <div className="mapDiv">
          <BreweryMap props={state} />
        </div>
      </div>
    </div>
  );
}
