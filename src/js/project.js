let navbar = document.getElementById("headerContainer");
let navbarSec = document.getElementById("headerSec");
let elements = document.querySelectorAll("[data-parralex]");
tailwind.config = {
  theme: {
    extend: {
      width: {
        1200: "1170px",
        992: "970px",
        768: "750px",
      },
      gridTemplateColumns: {
        350: "repeat(auto-fill,minmax(350px,1fr))",
        300: "repeat(auto-fill,minmax(300px,1fr))",
        250: "repeat(auto-fill,minmax(250px,1fr))",
        400: "repeat(auto-fill,minmax(400px,1fr))",
      },
      animation: {
        up: "up 2s ease-in-out forwards",
        down: "up 2s ease-in-out forwards",
        right: "right 2s ease-in-out forwards",
        left: "left 2s ease-in-out forwards",
        light: "light 2s ease-in-out forwards",
      },

      keyframes: {
        up: {
          to: { transform: "translateY(0)", opacity: "1" },
        },
        down: {
          to: { transform: "translateY(0)", opacity: "1" },
        },
        left: {
          to: { transform: "translateY(0)", opacity: "1" },
        },
        right: {
          to: { transform: "translateY(0)", opacity: "1" },
        },
        light: {
          to: { opacity: "1" },
        },
      },
    },
  },
};
$(".custl").slick({
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  arrows: false,
});
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
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
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
