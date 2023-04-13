export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelector(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
<<<<<<< HEAD

=======
>>>>>>> main
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addEventLink() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
<<<<<<< HEAD
      this.addEventLink();
=======
      this.addLinkEvent();
>>>>>>> main
    }
    return this;
  }
}
