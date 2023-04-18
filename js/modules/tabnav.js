export default class TabNav {
  constructor(tabMenu, tabContent) {
    this.tabMenu = document.querySelectorAll(tabMenu);
    this.tabContent = document.querySelectorAll(tabContent);
    this.activeClass = 'ativo';
  }

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeTab);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeTab, direcao);
  }

  addTabEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }
  // tabContent[0].classList.add(this.activeTab);

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.addTabEvent();
    }
    return this;
  }
}
