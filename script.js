// Get the "return to top" button element
var returnToTopButton = document.getElementById('returnToTop');

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Function to toggle the visibility of the "return to top" button
function toggleReturnToTopButton() {
  if (window.scrollY > 200) {
    returnToTopButton.classList.add('active');
  } else {
    returnToTopButton.classList.remove('active');
  }
}

// Add event listeners
window.addEventListener('scroll', toggleReturnToTopButton);
returnToTopButton.addEventListener('click', scrollToTop);

//! dark mode

const header = document.querySelector(".header");
const toggle = document.querySelector(".toggle-mode");
const body = document.querySelector("body");
const paragraph = document.querySelector("p");
const links = document.querySelectorAll(".nav-link");
const title = document.querySelectorAll("h2");
const para = document.querySelectorAll(".para");

if (localStorage.getItem("dark-mode") == "true") {
  body.classList.add("dark-mode");
  header.classList.add("header-dark-mode");
  paragraph.classList.add("header-dark-mode");
  links.forEach(function (e) {
    e.classList.add("header-dark-mode");
  });
  document.querySelector(`.sun`).style.display = "inline-block";
  document.querySelector(`.moon`).style.display = "none";
  title.forEach(function (e) {
    e.classList.add("dark-mode");
  });
}

toggle.addEventListener("click", function (e) {
  const nextIcon = e.target.getAttribute("data-set");
  e.target.style.display = "none";
  console.log(nextIcon);
  //   document.querySelector("")
  if (nextIcon === "sun") {
    body.classList.add("dark-mode");
    header.classList.add("header-dark-mode");
    paragraph.classList.add("header-dark-mode");
    links.forEach(function (e) {
      e.classList.add("header-dark-mode");
    });
    document.querySelector(`.${nextIcon}`).style.display = "inline-block";
    title.forEach(function (e) {
      e.classList.add("dark-mode");
    });
    localStorage.setItem("dark-mode", true);
  } else {
    body.classList.remove("dark-mode");
    header.classList.remove("header-dark-mode");
    paragraph.classList.remove("header-dark-mode");
    links.forEach(function (e) {
      e.classList.remove("header-dark-mode");
    });
    document.querySelector(`.${nextIcon}`).style.display = "inline-block";
    title.forEach(function (e) {
      e.classList.remove("dark-mode");
    });
    localStorage.setItem("dark-mode", false);
  }
});
