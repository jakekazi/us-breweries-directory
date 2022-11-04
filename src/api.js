export const getBreweriesFromApi = async (apiURL) => {
  return await fetch(apiURL).then((res) => res.json());
};