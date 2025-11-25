"use strict";

const pinkButton = document.querySelector(".pink-paint");
const pinkUsed = document.querySelector(".pink-used");
const blueButton = document.querySelector(".blue-paint");
const blueUsed = document.querySelector(".blue-used");
const darkPinkUsed = document.querySelector(".dark-pink-used");
const firstFishColored = document.querySelector(".first-fish-colored");
const arrowButton = document.querySelector(".arrow");
const darkPinkButton = document.querySelector(".dark-pink-paint");

//Når man trykker på det på fisken der skal være pink farvet. også har jeg lavet sådan at man kan klikke den fra igen. (det er ikke en toggle, fordi jeg kunne ikke få den til at virke når jeg skulle bruge min function)
pinkButton.addEventListener("click", () => {
  if (pinkUsed.style.display === "block") {
    pinkUsed.style.display = "none";
  } else {
    pinkUsed.style.display = "block";
    checkAllButtonsClicked();
  }
});

//Samme som farven ovenover
blueButton.addEventListener("click", () => {
  if (blueUsed.style.display === "block") {
    blueUsed.style.display = "none";
  } else {
    blueUsed.style.display = "block";
    checkAllButtonsClicked();
  }
});

//Samme som farven ovenover
darkPinkButton.addEventListener("click", () => {
  if (darkPinkUsed.style.display === "block") {
    darkPinkUsed.style.display = "none";
    arrowButton.style.display = "none";
  } else {
    darkPinkUsed.style.display = "block";
    checkAllButtonsClicked();
  }
});

//jeg laver en funktion som tjekker at mine 3 "paint knapper" er tjekket af før min arrow knap bliver vist. For det er først når alle 3 er aftrykket at fisken er færdig farvet.
function checkAllButtonsClicked() {
  const allVisible =
    pinkUsed.style.display === "block" &&
    blueUsed.style.display === "block" &&
    darkPinkUsed.style.display === "block";

  if (allVisible) {
    arrowButton.style.display = "block";
  } else {
    arrowButton.style.display = "none";
  }
}

// hvis man klikker på arrowknappen, svømmer den færdig farvet fisk væk, og så fjernes arrowknappen også, så man kan starte forfra.
// jeg bruger getComputedStyle fordi ellers ville min fisk uden farve ikke svømme ud af billdet. dette er fordi fish.style.display kigger efter inline styling og det er fisken uden farve ikke
arrowButton.addEventListener("click", () => {
  arrowButton.style.display = "none";
  const visibleFish = document.querySelectorAll(".fish");
  visibleFish.forEach((fish) => {
    const display = window.getComputedStyle(fish).display;
    if (display === "block") {
      fish.classList.add("move-right");
      fish.addEventListener("animationend", () => {
        fish.style.display = "none";
        fish.classList.remove("move-right");
      });
    }
  });
});

//her ville jeg have gjort sådan der kom en ny fisk ind og nye farver så man kan prøve flere forskellige.
