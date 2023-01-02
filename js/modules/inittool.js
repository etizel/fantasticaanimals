export default function initToolTip() {}

const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((item) => {
  item.addEventListener('mouseover', onMouseOver);
});

function onMouseOver(event) {
  const toolTipBox = criarToolTipBox(this);
  toolTipBox.style.top = event.pageY + 'px';
  toolTipBox.style.left = event.pageX + 'px';

  onMouseLeave.toolTipBox = toolTipBox;
  this.addEventListener('mouseleave', onMouseLeave);
}

const onMouseLeave = {
  toolTipBox: '',
  handleEvent() {
    this.toolTipBox.remove();
  },
};

function criarToolTipBox(element) {
  const toolTipBox = document.createElement('div');
  toolTipBox.classList.add('tooltip');
  const text = element.getAttribute('aria-label');
  toolTipBox.innerText = text;
  document.body.appendChild(toolTipBox);
  return toolTipBox;
}
