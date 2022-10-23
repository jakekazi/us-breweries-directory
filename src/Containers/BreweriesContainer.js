import React from "react";
import { useEffect, useState } from "react";
import "../assets/global.css";
import BreweriesList from "../Components/BreweriesList";

export default function BreweriesContainer() {
  const [breweries, setBreweries] = useState([]);

  const breweryCity = "Harrisburg";

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${breweryCity}`)
      .then((res) => res.json())
      .then((res) => setBreweries(res))
      .catch((err) =>
        console.log(
          "Error while attempting to get all breweries in BreweriesContainer: ",
          err
        )
      );
  }, []);

  return (
    <div data-testid="breweries-div" className="listContainer">
      <h1>{`List of Breweries in ${breweryCity}`}</h1>
      {breweries.map((brewery) => (
        <BreweriesList brewery={brewery} key={brewery.id} />
      ))}
    </div>
  );
}
