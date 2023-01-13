import itemCounterFunction from './itemCounter.js';

describe('test on itemCounter', () => {
  test('counting 1 item', () => {
    document.body.innerHTML = '<div class="movie-info"><img>1</img></div>';
    expect(itemCounterFunction()).toBe(1);
  });
  test('counting 0 item', () => {
    document.body.innerHTML = '<div class="movie-info"></div>';
    expect(itemCounterFunction()).toBe(0);
  });
  test('counting 6 item', () => {
    document.body.innerHTML = '<div class="movie-info"><img>1</img><img>2</img><img>3</img><img>4</img><img>5</img><img>6</img></div>';
    expect(itemCounterFunction()).toBe(6);
  });
});