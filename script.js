// ================================
// MOBILE NAVIGATION
// ================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  if (navMenu.classList.contains("open")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});


// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }

    });

  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  revealObserver.observe(element);
});


// ================================
// GOLD PARTICLES
// ================================

const particleContainer = document.getElementById("particles");

const symbols = ["✦", "✧", "★", "•"];

function createParticle() {

  const particle = document.createElement("span");

  particle.className = "particle";

  particle.textContent =
    symbols[Math.floor(Math.random() * symbols.length)];

  particle.style.left =
    Math.random() * 100 + "%";

  particle.style.fontSize =
    (Math.random() * 10 + 7) + "px";

  particle.style.animationDuration =
    (Math.random() * 12 + 8) + "s";

  particle.style.animationDelay =
    (Math.random() * 5) + "s";

  particleContainer.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 22000);
}


// Create particles continuously

for (let i = 0; i < 25; i++) {
  createParticle();
}

setInterval(createParticle, 900);


// ================================
// HERO BUTTON EFFECT
// ================================

document.querySelector(".gold-btn").addEventListener("click", () => {

  const button = document.querySelector(".gold-btn");

  button.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(.96)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 250
    }
  );

});
