window.onload = function () {
  // navbar shadow on scroll
  window.onscroll = function () {
    windowOnScroll();
  };

  function windowOnScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.querySelector("#header-container").className = "floatingNav";
    } else {
      document.querySelector("#header-container").className = "";
    }
  }

  // dropdown menu
  let homeLink = document.querySelector("#home-link");
  let menuButton = document.querySelector("#menu-button");
  let closeButton = document.querySelector("#close-button");
  let navbar = document.querySelector("#navbar");

  homeLink.onclick = function () {
    homeOnClick();
  };
  menuButton.onclick = function () {
    menuOnClick();
  };
  closeButton.onclick = function () {
    closeOnClick();
  };

  function homeOnClick() {
    // prevent on desktop version
    let windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (windowWidth >= 576) return;

    navbar.classList.add("navbarClosed");
    navbar.classList.remove("navbarOpened");
    closeButton.classList.add("hidden");
    menuButton.classList.remove("hidden");
  }
  function menuOnClick() {
    navbar.classList.add("navbarOpened");
    navbar.classList.remove("navbarClosed");
    menuButton.classList.add("hidden");
    closeButton.classList.remove("hidden");
  }
  function closeOnClick() {
    navbar.classList.add("navbarClosed");
    navbar.classList.remove("navbarOpened");
    closeButton.classList.add("hidden");
    menuButton.classList.remove("hidden");
  }

  // hide dropdown menu on link clicked
  let navlinks = document.querySelectorAll(".nav-link");

  navlinks.forEach(function (navlink) {
    navlink.onclick = function () {
      navlinkOnClick();
    };
  });

  function navlinkOnClick() {
    // prevent on desktop version
    let windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (windowWidth >= 576) return;

    navbar.classList.add("navbarClosed");
    navbar.classList.remove("navbarOpened");
    closeButton.classList.add("hidden");
    menuButton.classList.remove("hidden");
  }

  // hide dropdown on desktop version
  // onload
  let windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (windowWidth >= 576) {
    navbar.classList.remove("navbarClosed");
    navbar.classList.remove("navbarOpened");
  }

  // onresize
  window.onresize = function () {
    windowOnResize();
  };

  function windowOnResize() {
    let windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (windowWidth >= 576) {
      navbar.classList.remove("navbarClosed");
      navbar.classList.remove("navbarOpened");
    } else {
      navbar.classList.add("navbarClosed");
      closeButton.classList.add("hidden");
      menuButton.classList.remove("hidden");
    }
  }
};
