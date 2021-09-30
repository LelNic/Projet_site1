const url = window.location.pathname;
let page = "";

switch (url) {
  case "/index.html":
    page = "home";

    break;
  case "/shay.html":
    const position = document.querySelector(".notVisited");
    position.classList.toggle("visited");

    page = "shay";
    break;
  default:
    page = "other";
}
