import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/global.css";

export default function BreweriesContainer() {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const navigate = useNavigate();

  // const handleClickSearchCity = () => {
  //   navigate("/breweries-list", {
  //     state: {
  //       city: city,
  //     },
  //   });
  // };

  //post a request w/ input city to the backend to get breweries
  const handleClickSearchCity = () => {
    
  };

  return (
    <div className="welcome-page">
      <h1>Welcome to U.S. Breweries Directory</h1>
      <div className="input-city">         
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Enter City"
          onChange={handleChange}
        />
        <button className="searchBtn" onClick={() => handleClickSearchCity()}>Search</button>
      </div>
    </div>
  );
}
