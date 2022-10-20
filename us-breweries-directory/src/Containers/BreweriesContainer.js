import React from "react";
import { useEffect, useState } from "react";
import Breweries from "../Components/Breweries";
// import axios from "axios";

export default function BreweriesContainer({}) {
  const [breweries, setBreweries] = useState([]);

  const fetchBreweries = (url) => {
    return fetch(url).then((result) => result.json());
  };

  useEffect(() => {
    fetchBreweries("https://api.openbrewerydb.org/breweries?by_city=harrisburg")
      .then((breweriesData) => {
        setBreweries(breweriesData);
        console.log("Successfully got all breweries.");
      })
      .catch((err) =>
        console.log(
          "Error while attempting to get all breweries in BreweriesContainer: ",
          err
        )
      );
  }, []);

  return (
    <div data-testid="breweries-div" className="listingContainer">
      {breweries.map((brewery) => (
        <Breweries brewery={brewery} key={brewery.id} />
      ))}
    </div>
  );
}
