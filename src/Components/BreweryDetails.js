import { useLocation, useNavigate } from "react-router-dom";
import "../assets/global.css";
import BreweryMap from "./BreweryMap";

export default function BreweryDetails() {
  const { state } = useLocation();

  const navigate = useNavigate();
  const handleClickToListingsPage = () => navigate(-1);

  const address = state.street ? (
    <p className="address">
      {state.street}, {state.city}, {state.state} {state.postal_code}
    </p>
  ) : (
    <p className="address">Address not found</p>
  );

  return (
    <div className="listContainer">
      <h1>Brewery Details</h1>
      <div className="listDiv">
        <div>
          <button onClick={() => handleClickToListingsPage()} className="listBtn">
            Go back to breweries list
          </button>
        </div>
        <br></br>
        <div className="brewery-name">{state.name}</div>
        {address}
        <div className="mapDiv">
          <BreweryMap props={state} />
        </div>
      </div>
    </div>
  );
}
