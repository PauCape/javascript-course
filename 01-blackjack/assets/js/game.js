
let deck = [];
const cardTypes = ['C', 'D', 'H', 'S'];
const specialCards = ['A', 'J', 'Q', 'K'];

const btnCard = document.querySelector('#btnCard');
const btnNewGame = document.querySelector('#btnNewGame');
const btnStop = document.querySelector('#btnStop');
const playerPointsHtml = document.querySelector('#playerPoints');
const computerPointsHtml = document.querySelector('#computerPoints');
const playerCards = document.querySelector('#player-cards')
const computerCards = document.querySelector('#computer-cards')

let playerPoints = 0;
let computerPoints = 0;

const buildDeck = () => {

    for (let index = 2; index <= 10; index++) {
        for (const type of cardTypes) {
            deck.push(index + type)
        }
    }

    for (const special of specialCards) {
        for (const type of cardTypes) {
            deck.push(special + type)
        }
    }

    deck = _.shuffle(deck);
}

const takeCard = () => {

    if (deck.length === 0) {
        throw 'There are not cards in deck' 
    }

    const card = deck.pop();
    return card;
}

const cardValue = (card) => {

    const value = card.substring(0, card.length - 1);

    let points = 0;

    if (isNaN(value)) {

        if (value === 'A') {
            points = 11;
        } else {
            points = 10;
        }
        
    } else {
        points = value * 1;
    }

    return points;
}

// Events

btnCard.addEventListener('click', () => {
    
    const card = takeCard();
    
    playerPoints = playerPoints + cardValue(card);

    playerPointsHtml.innerText = playerPoints;

    

});


buildDeck();