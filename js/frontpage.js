"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const colorButton = document.querySelector(".color-fish");

    colorButton.addEventListener("click", () => {
        window.location.href = "colorfish.html";
    });
});