let from;

const initToTopButton = () => {
  const toTopButton = document.getElementsByClassName('to-top-btn')[0];
  const isScrolled = () => window.scrollY > 0;
  const getScroll = () => window.scrollY;
  const scrollTo = (value) => window.scrollTo({ top: value });
  const toTop = () => (isScrolled() ? scrollTo(0) : null);
  const toggleButtonFromScroll = () =>
    (toTopButton.style.display = isScrolled() ? 'block' : 'none');

  toTopButton.addEventListener('click', toTop);

  window.addEventListener('keydown', ({ key, shiftKey }) => {
    const withShift = (keyName) => key === keyName && shiftKey;
    const toTopKeyComb = withShift('ArrowUp');
    const toBackKeyComb = withShift('ArrowDown');

    if (toTopKeyComb) {
      from = getScroll();
      toTop();
    } else if (toBackKeyComb) {
      const _ = from !== undefined;
      return _ ? scrollTo(from) : null;
    }
  });
  window.addEventListener('load', toggleButtonFromScroll);
  window.addEventListener('scroll', () => {
    toggleButtonFromScroll();
  });
};

export default initToTopButton;
