"use strict"

 const purpleFish = document.querySelector(".purple-fish");

 // script.js
document.addEventListener("DOMContentLoaded", () => {
    const vidensButton = document.querySelector(".videns-akvarie");
    const findButton = document.querySelector(".find-fisken");
    const colorButton = document.querySelector(".color-fish");

    vidensButton.addEventListener("click", () => {
        window.location.href = "../videns-spil/index.viden.html";
    });

    findButton.addEventListener("click", () => {
        window.location.href = "../find-fisk/index.find.html";
    });

    colorButton.addEventListener("click", () => {
        window.location.href = "../color-fish/index.color.html";
    });
});