const commentsload = document.querySelector('.commentsload');

export default async function fetchcomment(id, key) {
  commentsload.innerHTML = '';
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${key}/comments?item_id=${id}`)
    .then((res) => res.json())
    .then((output) => {
      if (output.error) {
        return;
      }
      output.forEach((comment) => {
        commentsload.innerHTML += `<p><span>${comment.creation_date} ${comment.username}: ${comment.comment}</span></p>`;
      });
    });
}