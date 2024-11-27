
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();
  
    document.addEventListener("DOMContentLoaded", function () {
        // Simulando login - normalmente essa informação viria de um servidor
        const isLoggedIn = true; // Trocar para false para simular o usuário não logado
        const userName = "Vinicius"; // Exemplo de nome do usuário

        const loginElement = document.getElementById("login");
        const userProfile = document.getElementById("user-profile");
        const usernameElement = document.getElementById("username");

        if (isLoggedIn) {
            // Esconder o link de login
            loginElement.style.display = "none";

            // Exibir o perfil do usuário
            userProfile.style.display = "flex";
            usernameElement.textContent = userName;
        }
    });
