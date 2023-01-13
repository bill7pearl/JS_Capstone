const addlike = (Obj, key) => fetch(
  `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${key}/likes`,
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(Obj),
  },
).then((res) => res);

export default addlike;