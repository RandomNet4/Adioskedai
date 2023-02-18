// toggle actv
const navbarNav = document.querySelector(".navbar-nav");
// menu di klik
document.querySelector("#ham-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik out

const hamburger = document.querySelector("#ham-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});
