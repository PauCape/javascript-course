
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

    console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);

}

buildDeck();