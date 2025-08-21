// importa os arrays e o contador
const data = require("../database/data")
let { decks, flashcards, generateDeckId } = data

// C - Create
function createDeck(titulo) {
    if (!titulo) {
        console.log("❌ Título vazio")
        return null
    }

    const newDeck = {
        id: generateDeckId(),
        titulo
    }

    decks.push(newDeck)
    console.log("✅ Baralho criado:", newDeck)
    return newDeck
}

// Read - Baralhos
function getDecks() {
    console.log("📚 Lista de baralhos:")
    console.log(decks)
    return decks
}

// Update - Baralho
function updateDeck(id, titulo) {
    const deckIndex = decks.findIndex(d => d.id === id)
    if (deckIndex === -1) {
        console.log("❌ Baralho não encontrado")
        return null
    }

    if (!titulo) {
        console.log("❌ Título vazio")
        return null
    }

    decks[deckIndex].titulo = titulo
    console.log("✏️ Baralho atualizado:", decks[deckIndex])
    return decks[deckIndex]
}

// Delete - Baralho
function deleteDeck(id) {
    const deckIndex = decks.findIndex(d => d.id === id)
    if (deckIndex === -1) {
        console.log("❌ Baralho não encontrado")
        return null
    }

    console.log("🗑️ Baralho deletado:", decks[deckIndex])
    decks.splice(deckIndex, 1)

    // Apaga também os flashcards desse baralho
    for (let i = flashcards.length - 1; i >= 0; i--) {
        if (flashcards[i].idBaralho === id) {
            console.log("🗑️ Flashcard deletado:", flashcards[i])
            flashcards.splice(i, 1)
        }
    }
    return true
}

module.exports = { 
    createDeck, 
    getDecks, 
    updateDeck, 
    deleteDeck 
}
