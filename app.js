// alert

// alert(
//   "make sure you downloaded all media files and connect HTML to Css and JS "
// );

// Scroll Button

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 150) {
    document.querySelector(".scroll-btn").style.display = "flex";
  } else {
    document.querySelector(".scroll-btn").style.display = "none";
  }
}

function goTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// header login btn

const overlay = document.querySelector(".overlay");

function loginPage() {
  document.querySelector(".login-page").style.display = "flex";
  document.querySelector(".signup-page2").style.display = "none";
  overlay.classList.remove("hidden");
}

function closeLogin() {
  document.querySelector(".login-page").style.display = "none";
  overlay.classList.add("hidden");
}

// header signup btn

function signUp() {
  document.querySelector(".signup-page2").style.display = "flex";
  document.querySelector(".login-page").style.display = "none";
}

function closeSignup() {
  document.querySelector(".signup-page2").style.display = "none";
}

// menu bar
function openMenu() {
  document.querySelector(".menu").style.display = "none";
  document.querySelector(".navbar").style.display = "block";
  document.querySelector(".close").style.display = "block";
}

function closeMenu() {
  document.querySelector(".menu").style.display = "block";
  document.querySelector(".navbar").style.display = "none";
  document.querySelector(".close").style.display = "none";
}

// my resume btn

function willDownload() {
  alert("You are about to donwload My Resume :-)");
}

// scroll effect
