export const price = () => {
  const closeButton = document.querySelector('.close-btn');
  const openButton = document.querySelector('.service-cost-btn');
  const el = document.querySelector('.services__price');

  const toggle = () => {
    console.log(12);
    el.classList.toggle('services__price_visible');
  };

  closeButton.addEventListener('click', toggle);
  openButton.addEventListener('click', toggle);
};
