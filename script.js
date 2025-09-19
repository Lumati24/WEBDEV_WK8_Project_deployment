const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });
  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }
  if (!validateEmail(email.value)) {
    alert("Please enter a valid email address.");
    return;
  }
  alert("Thank you for contacting us! We’ll get back to you soon.");
  form.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
