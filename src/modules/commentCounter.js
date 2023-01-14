const commentCounterFunction = () => {
  const commentCounter = document.querySelector('.commentsload');
  let counter = 0;
  counter = commentCounter.getElementsByTagName('p').length;
  return counter;
};
export default commentCounterFunction;