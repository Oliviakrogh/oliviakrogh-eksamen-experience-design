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

// stjerner
const plainStar1 = document.querySelector(".plain-star-1");
const plainStar2 = document.querySelector(".plain-star-2");
const plainStar3 = document.querySelector(".plain-star-3");
const plainStar4 = document.querySelector(".plain-star-4");
const yellowStar1 = document.querySelector(".yellow-star-1");
const yellowStar2 = document.querySelector(".yellow-star-2");
const yellowStar3 = document.querySelector(".yellow-star-3");
const yellowStar4 = document.querySelector(".yellow-star-4");

const aquarist = document.querySelector(".aquarist");

const speechBobbel = document.querySelector(".speech-bobbel");

// arrow knapper
const arrowButton = document.querySelector(".arrow");
const backButton = document.querySelector(".back-arrow");

// lyde
const paintSound = new Audio('audio/splat-sound.mp3');
const starSound = new Audio('audio/twinkle-sound.mp3');
const lastStarSound = new Audio('audio/last-star.mp3');
const wonSound = new Audio('audio/won-sound.mp3');



// Animationen af fisken der svømmer ind, starter efter siden er loadet via eventlistener.
document.addEventListener("DOMContentLoaded", () => {
  firstFish.style.display = "block";  // fisken er usynelig i css og gøres synlig her
  firstFish.classList.add("move-in"); 
// animation fjernes så den ikke er låst
  firstFish.addEventListener("animationend", () => {
    firstFish.classList.remove("move-in");
  });
});


// skjuler alle runder så de ikke er synlige når siden loader
function hideAllRounds() {
  document.querySelectorAll(".paint-buttons, .paint-buttons-2, .paint-buttons-3, .paint-buttons-4").forEach(el => el.style.display = "none");
  firstFish.style.display = "none";
  secondFish.style.display = "none";
  thirdFish.style.display = "none";
  fourthFish.style.display = "none";
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
  arrowButton.style.display = "none";
}



// laver function for hver runde, og gør de rigtige elementer synlige
function startRound1() {
  hideAllRounds();
  firstFish.style.display = "block";
  firstFish.classList.add("move-in");
  document.querySelector(".paint-buttons").style.display = "flex"; 
  orangeUsed.style.display = "none"; 
  arrowButton.style.display = "none";
  // Arrow er skjult da den først skal vises når alle knapper er trykket af
  orangeUsed.style.display = "none";
}

// starter runde 2 og gør de rigtige elementer synlige
function startRound2() {
  hideAllRounds();
  secondFish.style.display = "block";
  secondFish.classList.add("move-in");
  document.querySelector(".paint-buttons-2").style.display = "flex";
  // fjerner animationen, når den er færdig, så den ikke er låst
  secondFish.addEventListener("animationend", () => {
    secondFish.classList.remove("move-in");
  }, { once: true });
}


// starter runde 3 og gør de rigtige elementer synlige
function startRound3() {
  hideAllRounds();
  thirdFish.style.display = "block";
  thirdFish.classList.add("move-in");
  document.querySelector(".paint-buttons-3").style.display = "flex";
  pinkUsed.style.display = "none";
  blueUsed.style.display = "none";
  darkPinkUsed.style.display = "none";
  arrowButton.style.display = "none";
  thirdFish.addEventListener("animationend", () => {
    thirdFish.classList.remove("move-in");
  }, { once: true });
}

// starter runde 4 og gør de rigtige elementer synlige
function startRound4() {
  hideAllRounds();
  fourthFish.style.display = "block";
  fourthFish.classList.add("move-in");
  document.querySelector(".paint-buttons-4").style.display = "flex";
  lightPurpleUsed.style.display = "none";
  mediumLightUsed.style.display = "none";
  mediumPurpleUsed.style.display = "none";
  darkPurpleUsed.style.display = "none";
  arrowButton.style.display = "none";
  fourthFish.addEventListener("animationend", () => {
    fourthFish.classList.remove("move-in");
  }, { once: true });
}

// funktion til at spille malelyden
function playPaintSound() {
  paintSound.currentTime = 0; 
  paintSound.play();
}

function playStarSound() {
  setTimeout(() => {
    starSound.currentTime = 0; 
    starSound.play();
  }, 500);
}

// Runde 1
//event listener for runde 1, når man klikker på orange knappen
orangeButton.addEventListener("click", () => {
  playPaintSound();
  if (orangeUsed.style.display === "block") {
    orangeUsed.style.display = "none";
    arrowButton.style.display = "none";
  } else {
    orangeUsed.style.display = "block";
    arrowButton.style.display = "block";
  }
});

//jeg laver en funktion som tjekker at alle paint knapper er tjekket af før min arrow knap bliver vist. 
function checkAllButtonsClicked() {
  const allVisible =
    orangeUsed.style.display === "block" 

  if (allVisible) {
    arrowButton.style.display = "block";
  } else {
    arrowButton.style.display = "none";
  }
}



// Runde 2
lightBlueButton.addEventListener("click", () => {
  playPaintSound();
  lightBlueUsed.style.display = lightBlueUsed.style.display === "block" ? "none" : "block";
  checkRound2Buttons();
});

darkBlueButton.addEventListener("click", () => {
  playPaintSound();
  darkBlueUsed.style.display = darkBlueUsed.style.display === "block" ? "none" : "block";
  checkRound2Buttons();
});

function checkRound2Buttons() {
  const allVisible =
    lightBlueUsed.style.display === "block" &&
    darkBlueUsed.style.display === "block";

  if (allVisible) {
    arrowButton.style.display = "block";
  } else {
    arrowButton.style.display = "none";
  }
}



// Runde 3
pinkButton.addEventListener("click", () => {
  playPaintSound();
  pinkUsed.style.display = pinkUsed.style.display === "block" ? "none" : "block";
  checkRound3Buttons();
});

blueButton.addEventListener("click", () => {
  playPaintSound();
  blueUsed.style.display = blueUsed.style.display === "block" ? "none" : "block";
  checkRound3Buttons();
});

darkPinkButton.addEventListener("click", () => {
  playPaintSound();
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
  playPaintSound();
  lightPurpleUsed.style.display = lightPurpleUsed.style.display === "block" ? "none" : "block";
  checkRound4Buttons();
});

mediumLightButton.addEventListener("click", () => {
  playPaintSound();
  mediumLightUsed.style.display = mediumLightUsed.style.display === "block" ? "none" : "block";
  checkRound4Buttons();
});

mediumPurpleButton.addEventListener("click", () => {
  playPaintSound();
  mediumPurpleUsed.style.display = mediumPurpleUsed.style.display === "block" ? "none" : "block";
  checkRound4Buttons();
});

darkPurpleButton.addEventListener("click", () => {
  playPaintSound();
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



// hvis man klikker på arrowknappen, svømmer den færdig farvet fisk væk og næste runde starter
// jeg bruger getComputedStyle fordi ellers ville min fisk uden farve ikke svømme ud af billdet. dette er fordi fish.style.display kigger efter inline styling og det er fisken uden farve ikke
let currentRound = 1;

arrowButton.addEventListener("click", () => {
 if (currentRound === 4) {
  wonSound.currentTime = 0;
    wonSound.play(); 
  setTimeout(() => {
    lastStarSound.currentTime = 0;
    lastStarSound.play();

    // Når lyden er færdig, vent 1,5 sekund og skift til forsiden
    lastStarSound.addEventListener("ended", () => {
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500); 
    }, { once: true });

  }, 2500);
} else {
  playStarSound();
}
  arrowButton.style.display = "none";

  if (currentRound === 1) {
    firstFish.classList.add("move-right");
    orangeUsed.classList.add("move-right");
    firstFish.addEventListener("animationend", () => {
      firstFish.classList.remove("move-right");
      orangeUsed.classList.remove("move-right");
      yellowStar1.classList.add("plain-star"); 
      yellowStar1.style.display = "block";
      plainStar1.replaceWith(yellowStar1);
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
      yellowStar2.classList.add("plain-star-2"); 
      yellowStar2.style.display = "block";
      plainStar2.replaceWith(yellowStar2);
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
      yellowStar3.classList.add("plain-star-3"); 
      yellowStar3.style.display = "block";
      plainStar3.replaceWith(yellowStar3);
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

        // Skjul alle plain stars, ellers blev de i toppen
        [plainStar1, plainStar2, plainStar3, plainStar4].forEach(star => {
            star.style.display = "none";
        });

        [yellowStar1, yellowStar2, yellowStar3, yellowStar4].forEach(star => {
            star.classList.add("final-stars");
            document.body.appendChild(star); 
            star.style.display = "block";
        });

        aquarist.style.display = "block";
        hideAllRounds();
        arrowButton.style.display = "none";

        setTimeout(() => {
            speechBobbel.style.display = "block";
        }, 1000);
    }, { once: true });
}
});


//Her får jeg min back arrow til at virke og fører til forsiden
backButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
