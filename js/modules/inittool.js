export default function initToolTip() {}

const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((item) => {
  item.addEventListener('mouseover', onMouseOver);
});

function onMouseOver(event) {
  const toolTipBox = criarToolTipBox(this);
  toolTipBox.style.top = event.pageY + 'px';
  toolTipBox.style.left = event.pageX + 'px';

  onMouseMove.toolTipBox = toolTipBox;
  this.addEventListener('mousemove', onMouseMove);
  onMouseLeave.toolTipBox = toolTipBox;
  onMouseLeave.element = this;
  this.addEventListener('mouseleave', onMouseLeave);
}

const onMouseMove = {
  handleEvent(event) {
    this.toolTipBox.style.top = event.pageY + 20 + 'px';
    this.toolTipBox.style.left = event.pageX + 20 + 'px';
  },
};

const onMouseLeave = {
  handleEvent() {
    this.toolTipBox.remove();
    this.element.removeEventListener('mouseleave', onMouseLeave);
    this.element.removeEventListener('mousemove', onMouseMove);
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
