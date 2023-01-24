"use strict";

const appScreen = document.querySelector(".app__screen");
const sticky = document.querySelector(".forSticky");
const header = document.querySelector(".app__header");

// Remove 
const headerBottom = document.querySelector(".app__header-bottom"),
    headerCenter = document.querySelector(".app__header-center");

// Top
const headerTop = document.querySelector(".app__header-top")

appScreen.addEventListener("scroll", (event) => {
    let fixed = sticky.getBoundingClientRect().top;
    if (fixed < 22.5) {
        header.style.height = "90px";
        // headerBottom.style.display = "none";
        // headerCenter.style.display = "none";
        headerTop.style.marginTop = "5px";
        headerBottom.style.opacity = "0";
        headerCenter.style.opacity = "0";
    } else {
        header.style.height = "200px";
        // headerBottom.style.display = "flex";
        // headerCenter.style.display = "flex";
        headerTop.style.marginTop = "20px";
        headerBottom.style.opacity = "1";
        headerCenter.style.opacity = "1";
    }
});