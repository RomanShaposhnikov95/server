const openBtn = document.querySelector(".menu-open");
const closeBtn = document.querySelector(".menu-close");
const menu = document.querySelector(".header-top");
const content = document.querySelector(".desktop-lists")
const mobileContent = document.querySelector(".mobile-lists")


openBtn.addEventListener("click", () => {
    menu.style.right = "0";
    document.body.style.overflowY = "hidden";
})

closeBtn.addEventListener("click", () => {
    menu.style.right = "-100%";
    document.body.style.overflowY = "auto";
})


const x = window.matchMedia("(max-width: 875px)")

const myFunction = () => {
    if (x.matches) {
        mobileContent.innerHTML = content.innerHTML
        content.innerHTML = ""
    } else {
        if (mobileContent.innerHTML.length) {
            content.innerHTML = mobileContent.innerHTML
            mobileContent.innerHTML = ""
        }
    }
}

x.addEventListener("change", myFunction)


window.addEventListener('DOMContentLoaded', (event) => {
    myFunction()
});
