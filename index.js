let player = {
    name: "Per",
    chips: 145
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el"); //precisa especificar o css selector dentro do parametro como exemplo # para Id ou para . como class
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got BlackJack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }    
    messageEl.textContent = message;
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * (13)) + 1;
    
    if (randomCard === 1) {
        return 11;
    } else if (randomCard > 10) {
        return 10;
    } else { 
        return randomCard;
    }
    
}
