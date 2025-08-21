const { createDeck, getDecks, updateDeck, deleteDeck } = require("./utils/deck")
const { createFlashcard, getFlashcards, getFlashcardsByDeck, updateFlashcard, deleteFlashcard } = require("./utils/flashcard")
const { searchFlashcardsByQuestion, searchFlashcardsByDeck } = require("./utils/search")

// ============================
// Exemplo de uso
// ============================

// Criar baralhos
createDeck("JavaScript Básico")
createDeck("História")

// Criar flashcards
createFlashcard("O que é uma variável?", "Espaço de memória para armazenar valores.", 1)
createFlashcard("Quem descobriu o Brasil?", "Pedro Álvares Cabral em 1500.", 2)

// Listar
getDecks()
getFlashcards()

// Atualizar
updateDeck(1, "JavaScript Avançado")
updateFlashcard(1, "O que é uma constante?", "Espaço de memória para valores imutáveis.", 1)

// Buscar
searchFlashcardsByQuestion("variável")
searchFlashcardsByDeck(1)

// Deletar
deleteFlashcard(2)
deleteDeck(1)

getDecks()
getFlashcards()