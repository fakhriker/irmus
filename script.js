// ELEMENT
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const header = document.getElementById("header");
const themeBtn = document.getElementById("themeBtn");
const backTop = document.getElementById("backTop");

// MENU TOGGLE
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// AUTO CLOSE MENU
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

// SCROLL ANIMATION
const scrollElements = document.querySelectorAll(".scroll-animate");

const elementInView = (el, dividend = 1.15) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight / dividend);
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
};

// NAVBAR SCROLL EFFECT + BACKTOP
window.addEventListener("scroll", () => {
  handleScrollAnimation();

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  if (window.scrollY > 400) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }

  setActiveNav();
});

// RUN FIRST
handleScrollAnimation();

// BACK TOP CLICK
backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// DARK MODE (SAVE TO LOCAL STORAGE)
function setTheme(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    themeBtn.textContent = "🌙";
  }
  localStorage.setItem("theme", mode);
}

themeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    setTheme("light");
  } else {
    setTheme("dark");
  }
});

// LOAD THEME
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme);
}

// ACTIVE MENU
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

function setActiveNav() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 120) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("href") === "#" + current) {
      item.classList.add("active");
    }
  });
}

// FORM SUBMIT DEMO
const form = document.querySelector(".contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Pesan berhasil dikirim! (Demo Website IRMUS AL-ISRA Kaliwulu)");
  form.reset();
});

// LIGHTBOX GALLERY
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const bg = item.style.backgroundImage;
    const url = bg.slice(5, -2);

    lightboxImg.src = url;
    lightbox.style.display = "flex";
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
