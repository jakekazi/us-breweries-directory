import BreweryDetails from './BreweryDetails'

export default function Breweries({ brewery }) {
  //latitude and longitude are also available
  const { name, brewery_type, street, city, postal_code, website_url } =
    brewery;

  //handle button click
  
  const getBreweryDetails = () => {
    // console.log('hi')
    //navigate to the BreweryDetails component
  };

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <p>Type: {brewery_type}</p>
        <p>
          Address: {street}, {city} {postal_code}
        </p>
        <p>
          Website:{" "}
          <a href={website_url} target="_blank" rel="noreferrer">
            Visit their website
          </a>
        </p>
        <button onClick={() => getBreweryDetails()}>View more details</button>
      </div>
    </>
  );
}
