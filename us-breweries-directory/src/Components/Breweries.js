import * as React from "react";
import { useEffect, useState } from "react";

export default function Breweries() {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries")
    .then(res => res.json())
    .then(data => {
        setBreweries(data)
        console.log(data)
    })
  }, []);
}
