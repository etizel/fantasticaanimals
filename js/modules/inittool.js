export default function initToolTip() {}

const toolTip = document.querySelectorAll('[data-tooltip]');

toolTip.forEach((item) => {
  item.addEventListener('mouseover', activeMouse);
});

function activeMouse(event) {
  const tooltipBox = criarToolTipBox(this);
}

function criarToolTipBox(element) {
  const toolTipBox = document.createElement('div');
  const text = element.getAttribute('aria-label');
  toolTipBox.classList.add('tooltip');
  toolTipBox.innerText = text;
  document.body.appendChild(toolTipBox);
  return toolTipBox;
}
