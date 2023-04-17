export default class Accordion {
  constructor(accordionList, activeClass) {
    this.accordionList = document.querySelectorAll(accordionList);
    this.activeClass = activeClass;
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }


 toggleAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  activeAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', this.toggleAccordion);
    });
  }
 
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    init() {
      if (this.accordionList.length) {
        this.activeAccordionEvent();
    }
    return this;
  }
  }


