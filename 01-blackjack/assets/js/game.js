
let deck = [];
const cardTypes = ['C', 'D', 'H', 'S'];
const specialCards = ['A', 'J', 'Q', 'K'];

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
    
}

buildDeck();