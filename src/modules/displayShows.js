/* eslint-disable import/prefer-default-export */
export const fetchData = async (id) => {
  const fetching = await fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((response) => response.json());
  return fetching;
};