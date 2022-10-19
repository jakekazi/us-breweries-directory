import React from "react";
import { useEffect, useState } from "react";

export default function Breweries({}) {
  const [breweriesList, setBreweriesList] = useState([]);

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((res) => res.json())
      .then((data) => {
        setBreweriesList(data);
        console.log(data);
      });
  }, []);

  return (
    <div data-testid="breweries-div" className="listingContainer">
      {breweriesList.map((brewery) => (
        <div className="listingDiv">{brewery.city}</div>
      ))}
    </div>
  );
}
