export default function initToolTip() {}

const toolTip = document.querySelectorAll('[data-tooltip]');

function activeMouse(event) {
  console.log(event);
}

toolTip.forEach((item) => {
  item.addEventListener('click', activeMouse);
});
