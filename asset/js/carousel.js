class Carousel {
  /**
   *
   * @param {HTMLelement} element
   * @param {object} options
   * @param {object} options.slidesToScroll Nombre d'élément à scroller
   * @param {object} options.slidesVisible Nombres de slides Visibles
   */
  constructor(element, options = {}) {
    this.element = element;
    this.options = Object.assign(
      {},
      {
        slidesToScroll: 1,
        slidesVisible: 1,
      },
      options
    );

    this.children = [].slice.call(element.children);
    let root = this.createDivWithClass("carousel");
    let container = this.createDivWithClass("carousel__container");
    root.appendChild(container);
    this.element.appendChild(root);
    this.children.array.forEach((child) => {
      let item = this.createDivWithClass("carousel__item");
      item.appendChild(child);
      container.appendChild(item);
    });
  }
  /**
   *
   * @param {string} className
   * @returns {HTMLElement}
   */
  createDivWithClass(className) {
    let div = document.createElement("div");
    div.setAttribute("class", className);
    return div;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  new Carousel(document.querySelector("#carousel1"), {
    slidesToScroll: 1,
    slidesVisible: 1,
  });
});
