document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");
  
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    // Smooth Scrolling
    const navItems = document.querySelectorAll(".nav-links li a");
  
    navItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(e.target.getAttribute("href"));
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth"
        });
      });
    });
  });  