document.addEventListener("DOMContentLoaded", () => {
    // Toggle Navigation Menu
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
  
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }
  
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }
  
    // Remove Menu on Mobile
    const navLinks = document.querySelectorAll(".nav__link");
  
    const linkAction = () => {
      navMenu.classList.remove("show-menu");
    };
  
    navLinks.forEach((link) => link.addEventListener("click", linkAction));
  
    // Toggle Skills
    const skillsContent = document.getElementsByClassName("skills__content");
    const skillsHeaders = document.querySelectorAll(".skills__header");
  
    const toggleSkills = function () {
      let itemClass = this.parentNode.className;
  
      for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
      }
  
      if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
      }
    };
  
    skillsHeaders.forEach((header) =>
      header.addEventListener("click", toggleSkills)
    );
  
    // Services Modal
    const modalViews = document.querySelectorAll(".services__modal");
    const modalBtns = document.querySelectorAll(".services__button");
    const modalCloses = document.querySelectorAll(".services__modal-close");
  
    const openModal = (index) => {
      modalViews[index].classList.add("active-modal");
    };
  
    const closeModal = () => {
      modalViews.forEach((modalView) =>
        modalView.classList.remove("active-modal")
      );
    };
  
    modalBtns.forEach((btn, i) => btn.addEventListener("click", () => openModal(i)));
    modalCloses.forEach((closeBtn) => closeBtn.addEventListener("click", closeModal));
  
    // Portfolio Swiper
    new Swiper(".portfolio__container", {
      cssMode: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  
    // Scroll Sections Active Link
    const sections = document.querySelectorAll("section[id]");
  
    const scrollActive = () => {
      const scrollY = window.pageYOffset;
  
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        const sectionLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
  
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionLink.classList.add("active-link");
        } else {
          sectionLink.classList.remove("active-link");
        }
      });
    };
  
    window.addEventListener("scroll", scrollActive);
  
    // Change Background Header
    const scrollHeader = () => {
      const header = document.getElementById("header");
  
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };
  
    window.addEventListener("scroll", scrollHeader);
  
    // Show Scroll Up
    const scrollUp = () => {
      const scrollUpElement = document.getElementById("scroll-up");
  
      if (window.scrollY >= 560) scrollUpElement.classList.add("show-scroll");
      else scrollUpElement.classList.remove("show-scroll");
    };
  
    window.addEventListener("scroll", scrollUp);
  
    // Dark Light Theme
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "uil-sun";
  
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");
  
    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light";
    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";
  
    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
        iconTheme
      );
    }
  
    themeButton.addEventListener("click", () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      localStorage.setItem("selected-theme", getCurrentTheme());
      localStorage.setItem("selected-icon", getCurrentIcon());
    });
  });
  