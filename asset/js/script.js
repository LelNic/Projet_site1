const url = window.location.hash;
let position = "";

switch (url) {
  case "#history":
    position = document.querySelector(".history");
    position.classList.toggle("visited");
    break;

  case "#shay":
    position = document.querySelector(".shay");
    position.classList.toggle("visited");
    break;

  case "#package":
    position = document.querySelector(".package");
    position.classList.toggle("visited");
    break;

  case "#reconstitution":
    position = document.querySelector(".reconstitution");
    position.classList.toggle("visited");
    break;
  default:
    page = "other";
}
