const data = require("../database/data")
let { decks, flashcards } = data

// Create - Flashcard
function createFlashcard(pergunta, resposta, idBaralho) {
    if (!pergunta || !resposta) return console.log("❌ Pergunta ou resposta vazia")

    const baralhoExiste = decks.some(d => d.id === idBaralho)
    if (!baralhoExiste) return console.log("❌ Baralho não encontrado")

    const newCard = { id: ++data.idCard, pergunta, resposta, idBaralho }
    flashcards.push(newCard)
    console.log("✅ Flashcard criado:", newCard)
    return newCard
}

// Read - Flashcards
function getFlashcards() {
    console.log("📖 Lista de flashcards:", flashcards)
    return flashcards
}

// Read - Flashcards por baralho
function getFlashcardsByDeck(idBaralho) {
    const result = flashcards.filter(c => c.idBaralho === idBaralho)
    console.log(`📖 Flashcards do Baralho ${idBaralho}:`, result)
    return result
}

// Update - Flashcard
function updateFlashcard(id, pergunta, resposta, idBaralho) {
    const cardIndex = flashcards.findIndex(c => c.id === id)
    if (cardIndex === -1) return console.log("❌ Flashcard não encontrado")
    if (!pergunta || !resposta) return console.log("❌ Pergunta ou resposta vazia")

    const baralhoExiste = decks.some(d => d.id === idBaralho)
    if (!baralhoExiste) return console.log("❌ Baralho não encontrado")

    flashcards[cardIndex] = { id, pergunta, resposta, idBaralho }
    console.log("✏️ Flashcard atualizado:", flashcards[cardIndex])
    return flashcards[cardIndex]
}

// Delete - Flashcard
function deleteFlashcard(id) {
    const cardIndex = flashcards.findIndex(c => c.id === id)
    if (cardIndex === -1) return console.log("❌ Flashcard não encontrado")

    console.log("🗑️ Flashcard deletado:", flashcards[cardIndex])
    flashcards.splice(cardIndex, 1)
    return true
}

module.exports = {
    createFlashcard,
    getFlashcards,
    getFlashcardsByDeck,
    updateFlashcard,
    deleteFlashcard
}