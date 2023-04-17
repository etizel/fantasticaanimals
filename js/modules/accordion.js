export default class Accordion {
  constructor(accordionList, activeClass) {
    this.accordionList = document.querySelectorAll(accordionList);
    this.activeClass = activeClass;
  }

  // add class active in accordion
  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // add event in accordion
  activeAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // start function
  init() {
    // active first itemn
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.activeAccordionEvent();
    }
    return this;
  }
}
