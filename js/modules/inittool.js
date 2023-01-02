export default function initToolTip() {}

const tooltips = document.querySelectorAll('[data-tooltip]');

function onMouseOver(event) {
  const div = document.createElement('div');
  div.innerText = 'Próximo ao estacionamento';
  const active = event;
}

tooltips.forEach((item) => {
  item.addEventListener('mouseover', onMouseOver);
});
