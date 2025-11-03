// NEXORY — Crni Vakuum (Hero animacija)
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".nx-hero");
  const title = document.querySelector(".nx-title");
  const sub = document.querySelector(".nx-sub");
  const logo = document.querySelector(".nx-logo__mark");

  // 1️⃣ Fade-in + lagani puls teksta
  setTimeout(() => {
    title.style.opacity = "1";
    sub.style.opacity = "1";
    title.classList.add("nx-pulse");
  }, 400);

  // 2️⃣ Lagani parallax pomeraj dok se miš kreće
  document.addEventListener("pointermove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    hero.style.transform = `translate(${x}px, ${y}px)`;
  });

  // 3️⃣ “Disanje” efekat logoa
  let scale = 1, direction = 1;
  setInterval(() => {
    scale += 0.002 * direction;
    if (scale >= 1.04 || scale <= 0.98) direction *= -1;
    logo.style.transform = `scale(${scale})`;
  }, 40);

  // 4️⃣ On submit (test akcija)
  const form = document.querySelector(".nx-action");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = document.querySelector("#nx-mission").value.trim();
    if (value !== "") {
      alert(`Misija "${value}" je pokrenuta.`);
      form.reset();
    }
  });
});
// === Scroll animacija za Services sekciju ===
const cards = document.querySelectorAll(".nx-card");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);
cards.forEach((card) => observer.observe(card));
// === Scroll animacija za Arhiva (Projects) sekciju ===
const tiles = document.querySelectorAll(".nx-tile");
const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);
tiles.forEach((tile) => projectObserver.observe(tile));
// === Scroll animacija za Manifest sekciju ===
const manifest = document.querySelector(".nx-manifest");
if (manifest) {
  const manifestObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          manifest.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );
  manifestObserver.observe(manifest);
}
// === Kontakt forma: simulacija prenosa ===
const contactForm = document.querySelector(".nx-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#nx-name").value.trim();
    const email = document.querySelector("#nx-email").value.trim();
    const msg = document.querySelector("#nx-message").value.trim();

    if (!name || !email || !msg) {
      alert("Svi podaci su obavezni za prenos signala.");
      return;
    }

    alert("Signal poslat. Sistem je primio transmisiju.");
    contactForm.reset();
  });
}
// === NEXORY GLOBAL ANIMACIJA — ENERGETSKI PULS ===
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".nx-hero");
  const logo = document.querySelector(".nx-logo__mark");
  const services = document.querySelector(".nx-services");
  let pulseActive = false;

  // ⚡ Kreiranje energetskog sloja
  const pulse = document.createElement("div");
  pulse.classList.add("nx-pulse-field");
  hero.appendChild(pulse);

  // Aktivacija pulsa svakih par sekundi
  setInterval(() => {
    if (!pulseActive) {
      pulseActive = true;
      pulse.classList.add("active");
      setTimeout(() => {
        pulse.classList.remove("active");
        pulseActive = false;
      }, 2000);
    }
  }, 5000);

  // Aktivacija sistema prilikom scroll-a
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        services.classList.add("nx-system-active");
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(services);
});
// === NEXORY MANIFEST — ŽIVI SISTEM ===
document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".nx-line");
  const typingSpeed = 25; // koliko brzo se otkucava tekst (ms po slovu)

  lines.forEach((line, i) => {
    const text = line.textContent.trim();
    line.textContent = "";
    line.style.opacity = 1;

    setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        line.textContent = text.slice(0, index);
        index++;
        if (index > text.length) {
          clearInterval(interval);
          line.textContent = text; // osiguraj da se ceo tekst prikaže
        }
      }, typingSpeed);
    }, i * 1200); // red po red sa pauzom
  });
});
// === NEXORY PAGE TRANSITION (lom po prozorima) ===
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("header, section");
  const scrollY = window.scrollY;
  const vh = window.innerHeight;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const distance = Math.abs(rect.top);
    const opacity = 1 - distance / (vh * 0.7);
    section.style.opacity = Math.max(opacity, 0.2);

    // Blagi blur efekat kod prelaza
    section.style.filter = `blur(${Math.min(distance / 150, 8)}px)`;
    section.style.transition = "filter 0.4s ease, opacity 0.4s ease";
  });
});
