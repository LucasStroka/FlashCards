let decks = []
let flashcards = []
let idDeck = 0
let idCard = 0; 

function generateDeckId() {
    return ++idDeck
}


module.exports = {
    decks,
    flashcards,
    idCard,
    idDeck,
    generateDeckId
}