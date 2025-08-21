const { flashcards } = require("../database/data")

// Busca por pergunta
function searchFlashcardsByQuestion(pergunta) {
    const result = flashcards.filter(c =>
        c.pergunta.toLowerCase().includes(pergunta.toLowerCase())
    )
    console.log("🔎 Busca por pergunta:", result)
    return result
}

// Busca por baralho
function searchFlashcardsByDeck(idBaralho) {
    const result = flashcards.filter(c => c.idBaralho === idBaralho)
    console.log("🔎 Busca por baralho:", result)
    return result
}

module.exports = { searchFlashcardsByQuestion, searchFlashcardsByDeck }
