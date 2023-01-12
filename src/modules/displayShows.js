export default async function fetchData(id) {
  const fetching = await fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((response) => response.json());
  return fetching;
}