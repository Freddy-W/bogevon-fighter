const startButton = document.querySelector("#start")
const intro = document.querySelector(".intro")
const game = document.querySelector(".game")

const confetti = document.querySelector(".win")
const body = document.querySelector("body")

const catPixel = document.querySelector("#catpixel")
const batPixel = document.querySelector("#batpixel")
const fishPixel = document.querySelector("#fishpixel")

const hit = document.querySelector("#hit")
const kick = document.querySelector("#kick")
const scream = document.querySelector("#scream")

const characterImage = document.querySelector("#bat")

const screamNoise = new Audio("audio/scream.mp3")
const kickNoise = new Audio("audio/kick.mp3")
const hitNoise = new Audio("audio/hit.mp3")
const winNoise = new Audio("audio/win.mp3")
const loseNoise = new Audio("audio/lose.mp3")

const sentence = document.querySelector("h1")

let foe = document.querySelector("#foe")

let hitMiss = document.querySelector("h2")
let characterChoice = "bat";

function startGame() {
    intro.style.display = "none"
    game.style.display = "flex"
}

function chooseCharacter(character) {
    characterChoice = character;
    characterImage.src = "images/"+ characterChoice + ".png";
}

addEventListener('click', startGame)

catPixel.addEventListener("click", function() {
    chooseCharacter("cat");
});

batPixel.addEventListener("click", function() {
    chooseCharacter("bat");
});

fishPixel.addEventListener("click", function() {
    chooseCharacter("fish");
});

//https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984
function hitFoe() {
    foehealth.value -= 10
    hitNoise.play()
    characterImage.src = "images/"+ characterChoice + "hit.png";
}

function kickFoe() {
    foehealth.value -= 20
    kickNoise.play()
    characterImage.src = "images/"+ characterChoice + "kick.png";
}

function screamFoe() {
    foehealth.value -= 5
    screamNoise.play()
    characterImage.src = "images/"+ characterChoice + "scream.png";
}

function hitOrNot() {
    let randomNumber = Math.random() *3
    randomNumber = Math.round(randomNumber)
    if (randomNumber == 1) {
        userhealth.value -= 20
        foehealth.value += 20
        hitMiss.style.display = "block"
        hitMiss.textContent = "Miss"
        hitMiss.style.color = "red"
        foe.src = "images/foeattack.png"
    }
    else if (foehealth.value == 0) {
        foehealth.value -=20
        hitMiss.style.display = "block"
        hitMiss.textContent = "Winner!"
        hitMiss.style.color = "black"
        foe.src = "images/foehurt.png"
        confetti.style.display = "block"
        winNoise.play()
    }
    else if (userhealth.value == 0) {
        hitMiss.style.display = "block"
        hitMiss.textContent = "Loser :("
        hitMiss.style.color = "black"
        foe.src = "images/foe.png"
        body.style.backgroundImage = "none"
        loseNoise.play()
    }
    else {
        userhealth.value += 1
        hitMiss.style.display = "block"
        hitMiss.textContent = "Hit"
        hitMiss.style.color = "green"
        foe.src = "images/foehurt.png"
    }
}

hit.addEventListener('click', () => {
    hitFoe()
    hitOrNot()})
kick.addEventListener('click', () => {
    kickFoe()
    hitOrNot()})
scream.addEventListener('click', () => {
    screamFoe()
    hitOrNot()})

function sentenceChanged() {
    sentence.textContent = "I call it Bogévon. Which is completely different."
}

setTimeout(() => {sentenceChanged()}, 5000)