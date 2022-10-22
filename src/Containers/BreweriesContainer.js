import React from "react";
import { useEffect, useState } from "react";
import Breweries from "../Components/BreweriesList";

export default function BreweriesContainer() {
  const [breweries, setBreweries] = useState([]);

  const breweryCity = "harrisburg";

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
    <div data-testid="breweries-div" className="listingContainer">
       <h1>List of Breweries</h1>
      {breweries.map((brewery) => (
        <Breweries brewery={brewery} key={brewery.id} />
      ))}
    </div>
  );
}
