/* =========================================================
   ONKAR DUNAKHE — PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     ELEMENTS
     ======================================================= */

  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  const typingName = document.getElementById("typingName");
  const heroTypingWord = document.getElementById("heroTypingWord");

  const yearElement = document.getElementById("year");


  /* =======================================================
     MOBILE NAVIGATION
     ======================================================= */

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      const isOpen =
        navLinks.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    });


    document.querySelectorAll(".nav-link").forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });


    document.addEventListener("keydown", (event) => {

      if (
        event.key === "Escape" &&
        navLinks.classList.contains("open")
      ) {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    });

  }


  /* =======================================================
     NAVBAR SCROLL EFFECT
     ======================================================= */

  function updateNavbar() {

    if (!navbar) return;

    navbar.classList.toggle(
      "scrolled",
      window.scrollY > 30
    );

  }

  window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
  );

  updateNavbar();


  /* =======================================================
     ACTIVE NAVIGATION
     ======================================================= */

  const sections =
    document.querySelectorAll("section[id]");

  const navItems =
    document.querySelectorAll(".nav-link");


  if (sections.length && navItems.length) {

    const sectionObserver =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (!entry.isIntersecting) {
              return;
            }

            navItems.forEach((item) => {
              item.classList.remove("active");
            });


            const activeLink =
              document.querySelector(
                `.nav-link[href="#${entry.target.id}"]`
              );


            if (activeLink) {
              activeLink.classList.add("active");
            }

          });

        },
        {
          rootMargin:
            "-35% 0px -55% 0px"
        }
      );


    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

  }


  /* =======================================================
     SCROLL REVEAL
     ======================================================= */

  const revealElements =
    document.querySelectorAll(".reveal");


  if (revealElements.length) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          });

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

  }


  /* =======================================================
     TYPING NAME
     ======================================================= */

  if (typingName) {

    const nameText = "Onkar Dunakhe";

    let index = 0;


    function typeName() {

      if (index >= nameText.length) {
        return;
      }

      typingName.textContent +=
        nameText.charAt(index);

      index++;

      setTimeout(typeName, 100);

    }


    typeName();

  }


  /* =======================================================
     HERO ROTATING WORD
     ======================================================= */

  if (heroTypingWord) {

    const words = [
      "Scalable",
      "Secure",
      "Distributed",
      "AI-powered"
    ];

    let wordIndex = 0;


    function changeHeroWord() {

      heroTypingWord.classList.add(
        "word-hidden"
      );


      setTimeout(() => {

        wordIndex =
          (wordIndex + 1) %
          words.length;

        heroTypingWord.textContent =
          words[wordIndex];

        heroTypingWord.classList.remove(
          "word-hidden"
        );

      }, 300);

    }


    setInterval(
      changeHeroWord,
      2500
    );

  }


  /* =======================================================
     STAGGERED CARD REVEAL
     ======================================================= */

  document
    .querySelectorAll(".about-stats .stat-card")
    .forEach((element, index) => {

      element.style.transitionDelay =
        `${index * 100}ms`;

    });


  document
    .querySelectorAll(".skills-grid .skill-card")
    .forEach((element, index) => {

      element.style.transitionDelay =
        `${index * 100}ms`;

    });


  document
    .querySelectorAll(".projects-list .project-card")
    .forEach((element, index) => {

      element.style.transitionDelay =
        `${index * 100}ms`;

    });


  /* =======================================================
     PROJECT CARD TILT
     ======================================================= */

  const projectCards =
    document.querySelectorAll(".project-card");


  if (
    window.matchMedia("(min-width: 901px)").matches
  ) {

    projectCards.forEach((card) => {

      card.addEventListener(
        "mousemove",
        (event) => {

          const rect =
            card.getBoundingClientRect();

          const x =
            event.clientX - rect.left;

          const y =
            event.clientY - rect.top;

          const centerX =
            rect.width / 2;

          const centerY =
            rect.height / 2;

          const rotateX =
            ((y - centerY) / centerY) * -2;

          const rotateY =
            ((x - centerX) / centerX) * 2;


          card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

        }
      );


      card.addEventListener(
        "mouseleave",
        () => {

          card.style.transform = "";

        }
      );

    });

  }


  /* =======================================================
     CURRENT YEAR
     ======================================================= */

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }

});