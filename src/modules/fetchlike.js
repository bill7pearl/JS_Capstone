const fetchlike = async (key) => fetch(
  `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${key}/likes`,
)
  .then((res) => res.json())
  .then((output) => output);
export default fetchlike;