import React from "react";
import { useEffect, useState } from "react";
import "../assets/global.css";
import BreweriesList from "../Components/BreweriesList";
import { getBreweriesFromApi, breweryCity } from "../api";

export default function BreweriesContainer() {
  const [breweries, setBreweries] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getBreweriesFromApi()
      .then((data) => setBreweries(data))
      .catch((e) => setError(true));
  }, []);

  return error ? (
    <p>Unable to fetch breweries</p>
  ) : (
    <div data-testid="breweries-div" className="listContainer">
      <h1>{`Breweries in ${breweryCity}`}</h1>
      {breweries.map((brewery) => (
        <BreweriesList brewery={brewery} key={brewery.id} />
      ))}
    </div>
  );
}
