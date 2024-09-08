let darkNight = document.querySelector(".dark-night");
darkNight.addEventListener("click", function() {
    let img = darkNight.querySelector("img");
    let logo = document.querySelector(".logo");
    let navs = document.querySelectorAll("header nav");
    let links = document.querySelectorAll(".links");
    let header = document.querySelector("header");

    if (img.getAttribute("src") === "assets/website/light-mode-button.png") {
        // Switch to Dark Mode
        img.setAttribute("src", "assets/website/dark-mode-button.png");
        document.body.classList.add("dark-backg");
        header.classList.add("dark-backg");
        navs.forEach(nav => nav.classList.add("white"));
        links.forEach(link => link.classList.add("white"));
        logo.querySelector("img").setAttribute("src", "assets/electro-darkq.png");
        logo.style.marginTop = "5px";
    } else {
        // Switch back to Light Mode
        img.setAttribute("src", "assets/website/light-mode-button.png");
        document.body.classList.remove("dark-backg");
        header.classList.remove("dark-backg");
        navs.forEach(nav => nav.classList.remove("white"));
        links.forEach(link => link.classList.remove("white"));
        logo.querySelector("img").setAttribute("src", "assets/electro-light.png");  // Assuming light mode logo path
        logo.style.marginTop = "0px";
    }
});

let nameElement = document.querySelector("li .name");

window.addEventListener("scroll", function() {
    // You can set a threshold, for example, 100px
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        nameElement.textContent = "";  // This removes the name text
    }
});