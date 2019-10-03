//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);

const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    } 
}

function flipCard(cardId) {
    if (cardsInPlay.length === 2) {
   checkForMatch();
}
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
}

flipCard(0);
flipCard(2);


/*Comment*/