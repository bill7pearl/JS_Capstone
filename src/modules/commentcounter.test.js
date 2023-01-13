import commentCounterFunction from './commentCounter.js';

describe('test on commentCounter', () => {
  test('counting 1 comment', () => {
    document.body.innerHTML = '<div class="commentsload"><p>1</p></div>';
    expect(commentCounterFunction()).toBe(1);
  });
  test('counting 0 comment', () => {
    document.body.innerHTML = '<div class="commentsload"></div>';
    expect(commentCounterFunction()).toBe(0);
  });
  test('counting 5 comment', () => {
    document.body.innerHTML = '<div class="commentsload"><p>1</p><p>2</p><p>3</p><p>4</p><p>5</p></div>';
    expect(commentCounterFunction()).toBe(5);
  });
});