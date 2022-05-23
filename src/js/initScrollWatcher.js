export const initScrollWatcher = () => {
  let sections = null;

  window.addEventListener('DOMContentLoaded', () => {
    sections = Array.from(document.getElementsByTagName('section')).map(
      (el) => ({ el, bound: el.getBoundingClientRect() })
    );

    sections.forEach(({ el, bound: { top } }) => {
      if (top <= window.innerHeight) {
        el.classList.add(`section-visible`);
      } else {
        el.classList.add(`section-hidden`);
      }
    });
  });

  window.addEventListener('scroll', () => {
    const { scrollY } = window;

    sections.forEach(({ el, bound: { top } }) => {
      if (scrollY >= top - 70) {
        el.classList.add(`section-visible`);
      }
    });
  });
};
