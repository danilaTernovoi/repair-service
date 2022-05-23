const drawStepSeparators = () => {
  const list = document.getElementsByClassName('how-we-works__steps')[0];
  const { gap } = getComputedStyle(list);

  const stepOrdersElements = document.getElementsByClassName('order');
  const lastOrderElement = stepOrdersElements[stepOrdersElements.length - 1];

  const separator = document.createElement('div');
  separator.classList.add('order-before');

  for (let order of stepOrdersElements) {
    if (!(order === lastOrderElement)) {
      const copy = separator.cloneNode();
      const { height } = order.getBoundingClientRect();

      copy.style.top = `${height - 2}px`;
      copy.style.height = `${parseInt(gap) + height}px`;
      order.insertAdjacentElement('beforeend', copy);
    }
  }
};

export default drawStepSeparators;
