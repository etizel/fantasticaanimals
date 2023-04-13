export default class ScrollSuave {
  constructor(links) {
    this.links = document.querySelector(links);
    this.scrollToSection = this.scrollToSection;
  }
  

 scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  this.links.forEach((link) => {
    link.addEventListener('click', this.scrollToSection);
  });
}
