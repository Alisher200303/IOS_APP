"use strict";

const menu = document.querySelector(".app__menu-btn");

const menuLine = document.querySelectorAll("#menuLine");

const span = document.querySelectorAll("span")

span.forEach(item => {
    menu.addEventListener("mouseover", () => {
        if (item.id == "menuLine")
        {
            menuLine.forEach(line => {
                line.setAttribute("style", "width: 25px");
            });
        }
    });
    menu.addEventListener("mouseout", () => {
        if (item.id == "menuLine")
        {
            menuLine.forEach(line => {
                line.setAttribute("style", "width: 20px");
            });
        }
    });
});