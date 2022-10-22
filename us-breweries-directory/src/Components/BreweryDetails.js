import { useLocation } from "react-router-dom";
import BreweryMap from "./BreweryMap";

export default function Breweries() {
  const { state } = useLocation();

  return (
    <>
      <div>
        <h1>Brewery Details</h1>
        <p>{state.name}</p>
        <p>
          {state.street}, {state.city}, {state.state}{" "}
          {state.postal_code}
        </p>
        <BreweryMap props={state}/>
      </div>
    </>
  );
}
