export default class Accordion {
  constructor(accordionList, activeClass) {
    this.accordionList = document.querySelectorAll(accordionList);
    this.activeClass = activeClass;
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  activeAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.activeAccordionEvent();
    }
    return this;
  }
}
