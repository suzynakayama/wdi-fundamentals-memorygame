//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);

const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

let cardOne = cards[0];

cardsInPlay.push(cardOne);

let cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
console.log(cardsInPlay);

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}

/*Write */