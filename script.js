// for active navbar links on scroll
const navLinks = document.querySelectorAll(".navbar-links-container a");
const sections = document.querySelectorAll("body section");
const aboutSection = document.querySelector(".intro-section");
const navbarName = document.querySelector(".navbar-name");
// Media query for navbar
const navbar = document.querySelector(".navbar-links-container");
// Navbar toggle
const navbarToggle = document.querySelector(".navbar-arrow");
const navbarContainer = document.querySelector(".navbar-mobile-menu");
const arrowBar = document.querySelectorAll(".arrow-bar");
const overlay = document.querySelector("#body-overlay");
const mobileLink = document.querySelector(".mobile-links");

window.onscroll = () => {
  doAnimatin();
  hideMobileMenu(navbarContainer);
  if (navbarToggle.classList.contains("active")) {
    arrowAnimation(arrowBar);
  }
};

window.onresize = () => {
  if (window.innerWidth > 850) {
    hideMobileMenu(navbarContainer);
    if (navbarToggle.classList.contains("active")) {
      arrowAnimation(arrowBar);
    }
  }
};

function doAnimatin() {
  sections.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 200;
    let height = i.offsetHeight;
    const introHeight = aboutSection.offsetHeight;
    const introOffset = aboutSection.offsetTop;
    let id = i.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".navbar-links-container a[href*=" + id + "]")
          .classList.add("active");
      });
    }
    document.body.style.setProperty(
      "--scroll",
      window.scrollY / (document.body.offsetHeight - window.innerHeight)
    );
  });
}

// for activate navbar links on click
function hideMobileMenu(element) {
  if (element.classList.contains("active")) {
    element.classList.remove("active");
    element.classList.add("hidden");
    setTimeout(() => {
      element.style.display = "none";
    },100);
  }
  if (overlay.classList.contains("active")) {
    overlay.classList.remove("active");
    overlay.classList.add("hidden");
  }
}
function arrowAnimation(arrows) {
  // functions for bars
  arrows.forEach((bar) => {
    if (bar.classList.contains("active")) {
      bar.classList.remove("active");
      bar.classList.add("normal");
    } else {
      if (bar.classList.contains("normal")) {
        bar.classList.remove("normal");
      }
      bar.classList.add("active");
    }
  });
  navbarToggle.classList.toggle("active");
}
//while navlink active clicked outside
document.addEventListener("click", (e) => {
  if (
    !mobileLink.contains(e.target) &&
    !navbarToggle.contains(e.target) &&
    navbarToggle.classList.contains("active")
  ) {
    hideMobileMenu(navbarContainer);
    arrowAnimation(arrowBar);
  }
});

navbarToggle.addEventListener("click", () => {
  arrowAnimation(arrowBar);
  //functions for mobile-menu
  if (navbarContainer.classList.contains("active")) {
    navbarContainer.classList.remove("active");
    navbarContainer.classList.add("hidden");
    setTimeout(() => {
      navbarContainer.style.display = "none";
    },100);
  } else {
    if (navbarContainer.classList.contains("hidden")) {
      navbarContainer.classList.remove("hidden");
    }
    navbarContainer.style.display = "block";
    navbarContainer.classList.add("active");
  }

  // functions for overlay
  if (overlay.classList.contains("active")) {
    overlay.classList.remove("active");
    overlay.classList.add("hidden");
  } else {
    if (overlay.classList.contains("hidden")) {
      overlay.classList.remove("hidden");
    }
    overlay.classList.add("active");
  }
});
