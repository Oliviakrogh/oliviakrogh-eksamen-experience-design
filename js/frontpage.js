"use strict"

 const purpleFish = document.querySelector(".purple-fish");

 // script.js
document.addEventListener("DOMContentLoaded", () => {
    const vidensButton = document.querySelector(".videns-akvarie");
    const findButton = document.querySelector(".find-fisken");
    const colorButton = document.querySelector(".color-fish");

    colorButton.addEventListener("click", () => {
        window.location.href = "colorfish.html";
    });
});