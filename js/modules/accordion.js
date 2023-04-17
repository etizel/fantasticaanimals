export default class Accordion {
  constructor(accordionList, activeClass) {
    this.accordionList = document.querySelectorAll(accordionList);
    this.activeClass = activeClass;
 
  }


 toggleAccordion(item) {
    item.classList.toggle(activeClass);
    item.nextElementSibling.classList.toggle(activeClass);
  }

  activeAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', this.toggleAccordion(item));
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


