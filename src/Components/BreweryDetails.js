import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BreweryMap from "./BreweryMap";

export default function Breweries() {
  const { state } = useLocation();

  const navigate = useNavigate();
  const goToListingPage = () => navigate(-1);

  return (
    <>
      <div>
        <button onClick={() => goToListingPage()}>
          Go back to the breweries list
        </button>
        <h1>Brewery Details</h1>
        <p>{state.name}</p>
        <p>
          {state.street}, {state.city}, {state.state} {state.postal_code}
        </p>
        <BreweryMap props={state} />
      </div>
    </>
  );
}
