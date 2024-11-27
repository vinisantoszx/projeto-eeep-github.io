
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

document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const user = JSON.parse(localStorage.getItem("user"));

    const loginElement = document.getElementById("login");
    const userProfile = document.getElementById("user-profile");
    const logoutButton = document.getElementById("logout-button");
    const usernameElement = document.getElementById("username");

    if (isLoggedIn && user) {
        loginElement.style.display = "none"; // Oculta o botão de login
        userProfile.style.display = "flex"; // Exibe o perfil do usuário
        logoutButton.style.display = "block"; // Exibe o botão de logout
        usernameElement.textContent = user.nome; // Mostra o nome do usuário
    }

    logoutButton.addEventListener("click", () => {
        localStorage.setItem("isLoggedIn", "false"); // Remove o estado logado
        window.location.href = "login.html"; // Redireciona para a página de login
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//    const isLoggedIn = localStorage.getItem("isLoggedIn");

//    if (isLoggedIn !== "true") {
//        alert("Você precisa fazer login para acessar esta página.");
//        window.location.href = "login.html"; // Redireciona para a página de login
//    }
//});
