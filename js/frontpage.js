"use strict"

//arrays til at ændre sprog
const danish = ["Velkommen", "Farvelæg fisken"];
const english = ["Welcome", "Color the fish"];
const german = ["Willkommen", "Färbe den Fisch"];

//her henter jeg det tekst jeg vil ændre sprog på
const title = document.querySelector("h1");
const buttonText = document.querySelector(".button-text");


//Den her sikre at når siden er loadet færdig, så kan man trykke på knappen til farvelæg fisken spillet og komme derind
document.addEventListener("DOMContentLoaded", () => {
    const colorButton = document.querySelector(".color-fish");

    colorButton.addEventListener("click", () => {
        window.location.href = "colorfish.html";
    });
});

// her laver jeg en funkton til at ændre sproget på siden, først skifter den titlen og så knappens tekst
function changeLanguage(languageArray) {
    title.textContent = languageArray[0];
    buttonText.textContent = languageArray[1];
}

//her henter jeg knapperne som skal skifte sproget
const danishButton = document.querySelector(".danish");
const englishButton = document.querySelector(".english");
const germanButton = document.querySelector(".german");

//og her tilføjer jeg klik events som får dem til at virke
danishButton.addEventListener("click", () => changeLanguage(danish));
englishButton.addEventListener("click", () => changeLanguage(english));
germanButton.addEventListener("click", () => changeLanguage(german));




