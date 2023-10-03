const nav = document.querySelector("#nav1");
const btn = document.querySelector("#btn");
let isOpen = false;
console.log(nav);

btn.addEventListener("click", function () {
  isOpen = !isOpen;

  if (isOpen) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Hämta aktuell URL
  let currentLocation = window.location.href;

  // Hämta alla länkar inuti navigationsmenyn
  let navLink1 = document.querySelectorAll("nav a")[0];
  let navLink2 = document.querySelectorAll("nav a")[3];
  let navLinks = [navLink1, navLink2];

  //   Loopa igenom länkarna för att hitta den aktiva länken baserat på URL
  for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].href === currentLocation) {
      // Lägg till klassen 'active' till den aktiva länken
      navLinks[i].classList.add("active");
    }
  }
});
