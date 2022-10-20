export default function Breweries({ brewery }) {
  const { name, brewery_type, street, city, postal_code, website_url } =
    brewery;

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <p>Type: {brewery_type}</p>
        <p>
          Address: {street} {city} {postal_code}
        </p>
        <a href={website_url} target="_blank" rel="noreferrer">
          Website
        </a>
      </div>
    </>
  );
}
