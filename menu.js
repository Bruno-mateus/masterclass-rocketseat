let show = true;

let menuSection = document.querySelector(".menu-section");
let menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? 'hidden' : 'initial';

    menuSection.classList.toggle("on", show)
    show = !show;
})