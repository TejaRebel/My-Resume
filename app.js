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

function loginPage() {
  document.querySelector(".login-page").style.display = "flex";
  document.querySelector(".signup-page2").style.display = "none";
}

function closeLogin() {
  document.querySelector(".login-page").style.display = "none";
}

// header signup btn

function signUp() {
  document.querySelector(".signup-page2").style.display = "flex";
  document.querySelector(".login-page").style.display = "none";
  document.getElementsByTagName("body").style.obacity = "0.5";
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
