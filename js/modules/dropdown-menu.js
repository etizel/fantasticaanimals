export default function initDropDownMenu() {}

const dropDownMenus = document.querySelectorAll('[data-dropdown]');

dropDownMenus.forEach((menu) => {
  ['touchstart', 'click'].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle('active');
  outsideClick(() => console.log('active'));
}

function outsideClick(callback) {
  const html = document.documentElement;
  html.addEventListener('click', handleOutsideClick);

  function handleOutsideClick(event) {
    callback();
  }
}
