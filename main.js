// change nav on scroll

window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0)
})


//show / hide faq

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", function () {
        this.classList.toggle("open")
        // console.log(this);

        const icon = faq.querySelectorAll(".faq__icon i")
        if (icon.clasName === "fas fa-bars") {
            icon.clasName = "fas fa-x";
        } else {
            icon.clasName === "fas fa-bars";
        }
    })
});



// show nav
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");



menuBtn.addEventListener("click", () => {
    menu.style.display = "flex"
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none"
})
closeBtn.addEventListener("click", () => {
    menu.style.display = "none"
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
})