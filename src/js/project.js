let navbar = document.getElementById("headerContainer");
let navbarSec = document.getElementById("headerSec");
let elements = document.querySelectorAll("[data-parralex]");
let smallbullet = document.querySelector(".x3");
let basic = document.getElementById("basic");
let prem = document.getElementById("prem");
let corp = document.getElementById("corp");
let basicText = document.getElementById("basicText");
let premText = document.getElementById("premText");
let corpText = document.getElementById("corpText");

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
        up: "up 0.6s ease-in-out forwards",
        down: "up 0.6s ease-in-out forwards",
        right: "right 0.6s ease-in-out forwards",
        left: "left 0.6s ease-in-out forwards",
        light: "light 0.6s ease-in-out forwards",
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
    navbar.classList.add("shadow-xl");
    navbarSec.style.backgroundColor = "white";
    navbar.style.backgroundColor = "transparent";
  } else {
    navbar.classList.remove("fixed");
    navbar.classList.remove("shadow-xl");
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

smallbullet.onclick = () => {
  if (smallbullet.classList.contains("month")) {
    smallbullet.classList.remove("month");
    smallbullet.classList.add("year");
    basic.innerText = "99";
    prem.innerText = "199";
    corp.innerText = "499";
    basicText.innerText = "/Year";
    premText.innerText = "/Year";
    corpText.innerText = "/Year";
  } else if (smallbullet.classList.contains("year")) {
    smallbullet.classList.remove("year");
    smallbullet.classList.add("month");
    basic.innerText = "9";
    prem.innerText = "19";
    corp.innerText = "49";
    basicText.innerText = "/Month";
    premText.innerText = "/Month";
    corpText.innerText = "/Month";
  }
};
