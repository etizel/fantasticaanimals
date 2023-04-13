export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelector(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addEventLink() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection.bind(this));
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
