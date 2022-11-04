import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../assets/global.css";
import BreweriesList from "../Components/BreweriesList";
import { getBreweriesFromApi } from "../api";

export default function BreweriesContainer() {
  const [breweries, setBreweries] = useState([]);
  const [error, setError] = useState(false);
  const { state } = useLocation();

  const apiURL = `https://api.openbrewerydb.org/breweries?by_city=${state.city}`;

  useEffect(() => {
    getBreweriesFromApi(apiURL)
      .then((data) => setBreweries(data))
      .catch((e) => setError(true));
  });

  return error ? (
    <p>Unable to fetch breweries</p>
  ) : (
    <div data-testid="breweries-div" className="listContainer">
      <h1>{`Breweries in ${state.city}`}</h1>
      {breweries.map((brewery) => (
        <BreweriesList brewery={brewery} key={brewery.id} />
      ))}
    </div>
  );
}
