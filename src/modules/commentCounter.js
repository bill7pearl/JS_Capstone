const addcomment = (Obj, key) => fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${key}/comments`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(Obj),
}).then((res) => res)
  .then((output) => output);

export default addcomment;