import { Route, Routes, BrowserRouter } from "react-router-dom";
import BreweriesContainer from "./Containers/BreweriesContainer";
import BreweryDetails from "./Components/BreweryDetails";
import BreweryMap from "./Components/BreweryMap"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<h1>Page not found</h1>} />
        <Route exact path="/" element={<BreweriesContainer />} />
        <Route exact path="/brewery-details" element={<BreweryDetails />} />
        <Route exact path="/brewery-map" element={<BreweryMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
