"use strict";
// runde 1 knapper og farvelæg
const orangeButton = document.querySelector(".orange-paint");

const orangeUsed = document.querySelector(".orange-used");
const firstFish = document.querySelector(".first-fish-plain");


// runde 2 knapper og farvelæg
const lightBlueButton = document.querySelector(".light-blue-paint");
const darkBlueButton = document.querySelector(".dark-blue-paint");

const lightBlueUsed = document.querySelector(".light-blue-used");
const darkBlueUsed = document.querySelector(".dark-blue-used");
const secondFish = document.querySelector(".second-fish-plain");


// runde 3 knapper og farvelæg
const pinkButton = document.querySelector(".pink-paint");
const blueButton = document.querySelector(".blue-paint");
const darkPinkButton = document.querySelector(".dark-pink-paint");

const pinkUsed = document.querySelector(".pink-used");
const blueUsed = document.querySelector(".blue-used");
const darkPinkUsed = document.querySelector(".dark-pink-used");
const thirdFish = document.querySelector(".third-fish-plain");


// runde 4 knapper og farvelæg
const lightPurpleButton = document.querySelector(".light-purple-paint");
const mediumLightButton = document.querySelector(".medium-light-purple-paint");
const mediumPurpleButton = document.querySelector(".medium-purple-paint");
const darkPurpleButton = document.querySelector(".dark-purple-paint");

const lightPurpleUsed = document.querySelector(".light-purple-used");
const mediumLightUsed = document.querySelector(".medium-light-purple-used");
const mediumPurpleUsed = document.querySelector(".medium-purple-used");
const darkPurpleUsed = document.querySelector(".dark-purple-used");
const fourthFish = document.querySelector(".fourth-fish-plain");

// arrow knapper
const arrowButton = document.querySelector(".arrow");
const backButton = document.querySelector(".back-arrow");



// Når du kommer ind på siden starter animationen af fisken der svømmer ind
document.addEventListener("DOMContentLoaded", () => {
  firstFish.style.display = "block"; 
  firstFish.classList.add("move-in"); 

// her fjerner jeg klassen så fisken kan animeres igen senere, altså så den ikke er låst
  firstFish.addEventListener("animationend", () => {
    firstFish.classList.remove("move-in");
  });
});

function hideAllRounds() {
  // Skjul alle paint-buttons
  document.querySelectorAll(".paint-buttons, .paint-buttons-2, .paint-buttons-3, .paint-buttons-4").forEach(el => el.style.display = "none");

  // Skjul alle plain fisk
  firstFish.style.display = "none";
  secondFish.style.display = "none";
  thirdFish.style.display = "none";
  fourthFish.style.display = "none";

  // Skjul alle farvede fisk
  orangeUsed.style.display = "none";
  lightBlueUsed.style.display = "none";
  darkBlueUsed.style.display = "none";
  pinkUsed.style.display = "none";
  blueUsed.style.display = "none";
  darkPinkUsed.style.display = "none";
  lightPurpleUsed.style.display = "none";
  mediumLightUsed.style.display = "none";
  mediumPurpleUsed.style.display = "none";
  darkPurpleUsed.style.display = "none";

  // Skjul arrowButton
  arrowButton.style.display = "none";
}

function startRound1() {
  hideAllRounds();
  firstFish.style.display = "block";
  firstFish.classList.add("move-in");
  document.querySelector(".paint-buttons").style.display = "flex"; 
orangeUsed.style.display = "none"; 
  arrowButton.style.display = "none";
  // Arrow skal først vises når orangeUsed vælges
  orangeUsed.style.display = "none";
}

function startRound2() {
  hideAllRounds();
  secondFish.style.display = "block";
  secondFish.classList.add("move-in");
  document.querySelector(".paint-buttons-2").style.display = "flex";

  // FJERN move-in når den er færdig!
  secondFish.addEventListener("animationend", () => {
    secondFish.classList.remove("move-in");
  }, { once: true });
}

function startRound3() {
  hideAllRounds();

  // Vis plain fisken for runde 3
  thirdFish.style.display = "block";
  thirdFish.classList.add("move-in");

  // Vis knapper for runde 3
  document.querySelector(".paint-buttons-3").style.display = "flex";

  // Nulstil farvede fisk for runde 3
  pinkUsed.style.display = "none";
  blueUsed.style.display = "none";
  darkPinkUsed.style.display = "none";

  // Arrow skjules indtil alle farver er valgt
  arrowButton.style.display = "none";

  // Fjern move-in når animationen er færdig
  thirdFish.addEventListener("animationend", () => {
    thirdFish.classList.remove("move-in");
  }, { once: true });
}

function startRound4() {
  hideAllRounds();

  // Vis plain fisken for runde 4
  fourthFish.style.display = "block";
  fourthFish.classList.add("move-in");

  // Vis knapper for runde 4
  document.querySelector(".paint-buttons-4").style.display = "flex";

  // Nulstil alle farvede fisk til skjult
  lightPurpleUsed.style.display = "none";
  mediumLightUsed.style.display = "none";
  mediumPurpleUsed.style.display = "none";
  darkPurpleUsed.style.display = "none";

  // Arrow skjules indtil alle farver er valgt
  arrowButton.style.display = "none";

  // Fjern move-in, når animationen er færdig
  fourthFish.addEventListener("animationend", () => {
    fourthFish.classList.remove("move-in");
  }, { once: true });
}

//Når man trykker på det på fisken der skal være pink farvet. også har jeg lavet sådan at man kan klikke den fra igen. (det er ikke en toggle, fordi jeg kunne ikke få den til at virke når jeg skulle bruge min function)
orangeButton.addEventListener("click", () => {
  if (orangeUsed.style.display === "none" || orangeUsed.style.display === "") {
    orangeUsed.style.display = "block";
    arrowButton.style.display = "block";
  }
});

//jeg laver en funktion som tjekker at mine 3 "paint knapper" er tjekket af før min arrow knap bliver vist. For det er først når alle 3 er aftrykket at fisken er færdig farvet.
function checkAllButtonsClicked() {
  const allVisible =
    orangeUsed.style.display === "block" 

  if (allVisible) {
    arrowButton.style.display = "block";
  } else {
    arrowButton.style.display = "none";
  }
}

// hvis man klikker på arrowknappen, svømmer den færdig farvet fisk væk, og så fjernes arrowknappen også, så man kan starte forfra.
// jeg bruger getComputedStyle fordi ellers ville min fisk uden farve ikke svømme ud af billdet. dette er fordi fish.style.display kigger efter inline styling og det er fisken uden farve ikke
let currentRound = 1;

arrowButton.addEventListener("click", () => {
  arrowButton.style.display = "none";

  if (currentRound === 1) {
    firstFish.classList.add("move-right");
    orangeUsed.classList.add("move-right");
    firstFish.addEventListener("animationend", () => {
      firstFish.classList.remove("move-right");
      orangeUsed.classList.remove("move-right");
      currentRound = 2;
      startRound2();
    }, { once: true });
  } else if (currentRound === 2) {
    secondFish.classList.add("move-right");
    lightBlueUsed.classList.add("move-right");
    darkBlueUsed.classList.add("move-right");
    secondFish.addEventListener("animationend", () => {
      secondFish.classList.remove("move-right");
      lightBlueUsed.classList.remove("move-right");
      darkBlueUsed.classList.remove("move-right");
      currentRound = 3;
      startRound3();
    }, { once: true });
  } 
  else if (currentRound === 3) {
    thirdFish.classList.add("move-right");
    pinkUsed.classList.add("move-right");
    blueUsed.classList.add("move-right");
    darkPinkUsed.classList.add("move-right");
    thirdFish.addEventListener("animationend", () => {
      thirdFish.classList.remove("move-right");
      pinkUsed.classList.remove("move-right");
      blueUsed.classList.remove("move-right");
      darkPinkUsed.classList.remove("move-right");
      currentRound = 4;
      startRound4();
    }, { once: true });
  } 
  else if (currentRound === 4) {
    fourthFish.classList.add("move-right");
    lightPurpleUsed.classList.add("move-right");
    mediumLightUsed.classList.add("move-right");
    mediumPurpleUsed.classList.add("move-right");
    darkPurpleUsed.classList.add("move-right");
    fourthFish.addEventListener("animationend", () => {
      fourthFish.classList.remove("move-right");
      lightPurpleUsed.classList.remove("move-right");
      mediumLightUsed.classList.remove("move-right");
      mediumPurpleUsed.classList.remove("move-right");
      darkPurpleUsed.classList.remove("move-right");
      currentRound = 1;
      startRound1();
    }, { once: true });
  }
});

// når man klikker farver den, den tilgivet farve
lightBlueButton.addEventListener("click", () => {
  lightBlueUsed.style.display = lightBlueUsed.style.display === "block" ? "none" : "block";
  checkRound2Buttons();
});

// når man klikker farver den, den tilgivet farve
darkBlueButton.addEventListener("click", () => {
  darkBlueUsed.style.display = darkBlueUsed.style.display === "block" ? "none" : "block";
  checkRound2Buttons();
});


// her tjekker jeg igen om knapperne er trykket af så arrow knappen kan vises
function checkRound2Buttons() {
  const allVisible =
    lightBlueUsed.style.display === "block" &&
    darkBlueUsed.style.display === "block";

  if (allVisible) {
    arrowButton.style.display = "block"; // samme arrow kan bruges
  } else {
    arrowButton.style.display = "none";
  }
}

// Runde 3
pinkButton.addEventListener("click", () => {
  pinkUsed.style.display = pinkUsed.style.display === "block" ? "none" : "block";
  checkRound3Buttons();
});

blueButton.addEventListener("click", () => {
  blueUsed.style.display = blueUsed.style.display === "block" ? "none" : "block";
  checkRound3Buttons();
});

darkPinkButton.addEventListener("click", () => {
  darkPinkUsed.style.display = darkPinkUsed.style.display === "block" ? "none" : "block";
  checkRound3Buttons();
});

function checkRound3Buttons() {
  const allVisible =
    pinkUsed.style.display === "block" &&
    blueUsed.style.display === "block" &&
    darkPinkUsed.style.display === "block";

  arrowButton.style.display = allVisible ? "block" : "none";
}

// Runde 4
lightPurpleButton.addEventListener("click", () => {
  lightPurpleUsed.style.display = lightPurpleUsed.style.display === "block" ? "none" : "block";
  checkRound4Buttons();
});

mediumLightButton.addEventListener("click", () => {
  mediumLightUsed.style.display = mediumLightUsed.style.display === "block" ? "none" : "block";
  checkRound4Buttons();
});

mediumPurpleButton.addEventListener("click", () => {
  mediumPurpleUsed.style.display = mediumPurpleUsed.style.display === "block" ? "none" : "block";
  checkRound4Buttons();
});

darkPurpleButton.addEventListener("click", () => {
  darkPurpleUsed.style.display = darkPurpleUsed.style.display === "block" ? "none" : "block";
  checkRound4Buttons();
});

function checkRound4Buttons() {
  const allVisible =
    lightPurpleUsed.style.display === "block" &&
    mediumLightUsed.style.display === "block" &&
    mediumPurpleUsed.style.display === "block" &&
    darkPurpleUsed.style.display === "block";

  arrowButton.style.display = allVisible ? "block" : "none";
}


//Her får jeg min back arrow til at virke og fører til forsiden
backButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
