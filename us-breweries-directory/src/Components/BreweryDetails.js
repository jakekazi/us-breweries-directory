export default function Breweries({ breweryDetails }) {
    const { name, street, city, state, postal_code, latitude, longitude } =
      breweryDetails;
  
    return (
      <>
        <div>
        <h1>Brewery Details</h1>
        </div>
      </>
    );
  }