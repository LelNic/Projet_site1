const ratio = 0.6;
let observer = null;
const spies = document.querySelectorAll("[data-spy]");

/**
 *
 * @param {HTMLElement} elem
 */
const activate = function (elem) {
  const id = elem.getAttribute("id");
  const anchor = document.querySelector(`#ligne a[href="#${id}"]`);
  const logo = document.getElementById("logo");
  const top = document.getElementById("toTop");
  if (anchor === null) {
    return null;
  }
  anchor.parentElement.querySelectorAll(".active").forEach((node) => node.classList.remove("active"));
  anchor.classList.add("active");
  logo.src = "asset/images/logo.png";
  logo.style.top = "2vh";
  top.style.display = "flex";
};

/**
 *
 * @param {IntersectionObserverEntry[]} entries
 * @param {IntersectionObserver} observer
 */
const callback = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > 0) {
      activate(entry.target);
    }
  });
};

/**
 *
 * @param {NodeListOf.<Element>} elems
 */
const observe = function (elems) {
  if (observer !== null) {
    elems.forEach((elem) => observer.unobserve(elem));
  }
  const y = Math.round(window.innerHeight * ratio);
  observer = new IntersectionObserver(callback, {
    rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`,
  });
  spies.forEach((elem) => observer.observe(elem));
};

if (spies.length > 0) {
  observe(spies);
  window.addEventListener("resize", function () {
    observe(spies);
  });
}
