export default class Accordion {
  constructor(accordionList, activeClass) {
    this.accordionList = document.querySelectorAll(accordionList);
    this.activeClass = activeClass;
  }


 activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  activeAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', this.activeAccordion);
    });
  }
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

  
  }

  init() {

  }
}
