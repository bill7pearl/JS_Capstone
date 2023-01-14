import './style.css';
import fetchData from './modules/displayShows.js';
import addcomment from './modules/addcomment.js';
import fetchcomment from './modules/fetchcomment.js';
import commentCounterFunction from './modules/commentCounter.js';
import addlike from './modules/like.js';
import fetchlike from './modules/fetchlike.js';
import itemCounterFunction from './modules/itemCounter.js';
import keyfunction from './modules/api_key.js';

const key = keyfunction();

const movies = document.querySelector('.movie-info');
const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 99];
const popupModal = document.querySelector('.pop-up');
const popup = document.querySelector('.popupContent');
const closebutton = document.querySelector('.closebutton');
const popupContentLoad = document.querySelector('.popupContentLoad');
const popupCommentButton = document.querySelector('.popupCommentButton');
const input = document.querySelector('.input');
const inputname = document.querySelector('.inputname');
const textarea = document.querySelector('.textarea');
const commentsload = document.querySelector('.commentsload');
const countercomment = document.querySelector('.countercomment');
const shows = document.querySelector('.shows');
let nooflikes = 0;

id.forEach((movie) => {
  fetchData(movie).then(async (res) => {
    const likesdisplay = await fetchlike(key);
    nooflikes = 0;
    likesdisplay.forEach((element) => {
      if (parseInt(element.item_id, 10) === movie) {
        nooflikes = element.likes;
      }
    });
    movies.innerHTML += `<div id="${movie}" class="movie-img">
    <img src="${res.image.medium}">
    <section class="movie-desk">
      <p class="movie-title">${res.name}</p>
      <div class="likeContainer">
      <button id="${movie}" class="like-button"><span class="like">👍</span></button>
        <p class="likesnumber">${nooflikes} likes</p>
      </div>
    </section>
    <button class="comment-button">Comments</button></div>`;
  });
});
let ID = '';
let commentCounter = 0;
let itemCounter = 0;
const openPopUp = () => {
  popup.classList.add('open');
  popupModal.style.display = 'flex';
  popup.style.display = 'flex';
  input.style.display = 'flex';
};
const closePopUp = () => {
  popup.classList.remove('open');
  popupModal.style.display = 'none';
  popup.style.display = 'none';
  input.style.display = 'none';
};

setTimeout(async () => {
  itemCounter = await itemCounterFunction();
  shows.innerHTML = `Shows (${itemCounter})`;
}, 5000);

movies.addEventListener('click', async (e) => {
  ID = e.target.parentElement.id;
  if (e.target.classList.contains('comment-button')) {
    fetchData(e.target.parentElement.id).then(async (res) => {
      openPopUp();
      popupContentLoad.innerHTML = `<div class="movies-div">
      <img id="${e.target.parentElement.id}" src="${res.image.medium}"></div>
      <div class="firstline">
      <span class="firstlineItemone">Categories: ${res.genres.join(', ')}</span>
      <span class="firstlineItemtwo">Rating: ${res.rating.average}</span>
      </div>
      <div class="secondline">${res.summary}
      </div>`;
      await fetchcomment(ID, key);
      commentCounter = commentCounterFunction();
      countercomment.innerHTML = `( ${commentCounter} )`;
    });
  }
  if (e.target.classList.contains('like')) {
    await addlike({
      item_id: ID,
    }, key);
    const likesdisplay = await fetchlike(key);
    likesdisplay.forEach((element) => {
      if (element.item_id === ID) {
        nooflikes = element.likes;
      }
    });
    e.target.parentElement.parentElement.innerHTML = `<button id="${ID}" class="like-button"><span class="like">👍</span></button>
    <p class="likesnumber">No. of likes are: ${nooflikes}</p>`;
  }
});

closebutton.addEventListener('click', () => {
  commentsload.innerHTML = '';
  commentCounter = 0;
  closePopUp();
});

popupCommentButton.addEventListener('click', () => {
  addcomment({
    item_id: ID,
    username: inputname.value,
    comment: textarea.value,
  }, key);
  commentsload.innerHTML += `<p><span>Just now ${inputname.value}: ${textarea.value}</p>`;
  commentCounter = commentCounterFunction();
  countercomment.innerHTML = `comments (${commentCounter})`;
  inputname.value = '';
  textarea.value = '';
});