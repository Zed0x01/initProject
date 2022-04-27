let navbar = document.getElementById("headerContainer");
let navbarSec = document.getElementById("headerSec");
let elements = document.querySelectorAll("[data-parralex]");

window.onscroll = () => {
  const navbarOffset = navbar.offsetTop;
  if (window.pageYOffset >= navbarOffset + 145) {
    navbar.classList.add("fixed");
    navbarSec.style.backgroundColor = "white";
    navbar.style.backgroundColor = "transparent";
  } else {
    navbar.classList.remove("fixed");
    navbarSec.style.backgroundColor = "#f1f5fd";
    navbar.style.backgroundColor = "#f1f5fd";
  }
};
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= 
        (window.innerWidth || document.documentElement.clientWidth)
  );
}
window.addEventListener("scroll", () => {
  elements.forEach((element) => {
    const anim = element.getAttribute("animates");
    if (isInViewport(element)) {
      element.classList.add(anim);
    }
  });
});
