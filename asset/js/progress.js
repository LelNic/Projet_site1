const progress = () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  document.getElementById("progress").value = scrollPercentRounded;
};

window.addEventListener("scroll", (event) => {
  progress();
});
