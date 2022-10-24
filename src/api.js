export const breweryCity = "Harrisburg";
const apiURL = `https://api.openbrewerydb.org/breweries?by_city=${breweryCity}`;

export const getBreweriesFromApi = async () => {
  return await fetch(apiURL).then((res) => res.json());
};