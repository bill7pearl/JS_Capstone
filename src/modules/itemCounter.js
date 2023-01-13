const itemCounterFunction = () => {
  const movieinfo = document.querySelector('.movie-info');
  let counter = 0;
  counter = movieinfo.getElementsByTagName('img').length;
  return counter;
};
export default itemCounterFunction;