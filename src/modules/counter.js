const commentCounterFunction = () => {
  const commentsload = document.querySelector('.commentsload');
  let counter = 0;
  counter = commentsload.getElementsByTagName('p').length;
  return counter;
};
export default commentCounterFunction;