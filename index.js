let currentHomeScore = 0
let currentGuestScore = 0

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

homeScore.textContent = currentHomeScore
guestScore.textContent = currentGuestScore



function plus1Home(){
    currentHomeScore += 1;
    homeScore.textContent = currentHomeScore

}

function plus2Home(){
    currentHomeScore += 2;
    homeScore.textContent = currentHomeScore;

}

function plus3Home(){
    currentHomeScore += 3;
    homeScore.textContent = currentHomeScore;

}

function plus1Guest(){
    currentGuestScore += 1;
    guestScore.textContent = currentGuestScore;
}

function plus2Guest(){
    currentGuestScore += 2;
    guestScore.textContent = currentGuestScore;
}

function plus3Guest(){
    currentGuestScore += 3;
    guestScore.textContent = currentGuestScore;    
}

function reset(){
    currentHomeScore = 0;
    currentGuestScore = 0;
    homeScore.textContent = currentHomeScore;
    guestScore.textContent = currentGuestScore;
}