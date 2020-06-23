let spaceshipNames = ["Elemental", "Darwin", "Ártemis", "Supernova"]

let removedSpaceships = spaceshipNames.splice(1, 2, "Deméter", "Puller", "Golias")
// vai retirar no array o item 1 e 2 itens no total, contando com ele, em sequência.

console.log(spaceshipNames) // vai mostrar ["Elemental", "Deméter", "Puller", "Golias", "Supernova"]

console.log(removedSpaceships) // como foi declarada como variável, vai retornar os itens excluídos e mostrar no console ["Darwin", "Ártemis"]

// também pode apenas remover itens, sem adicionar nada:

let spaceshipNames = ["Elemental", "Darwin", "Ártemis", "Supernova"]

let removedSpaceships = spaceshipNames.splice(1, 2)

console.log(spaceshipNames) // vai mostrar ["Elemental", "Supernova"]

console.log(removedSpaceships) // vai mostrar ["Darwin", "Ártemis"]

// SLICE

let spaceshipNames = ["Elemental", "Darwin", "Ártemis", "Supernova"]

let extractedNames = spaceshipNames.slice(1, 3)

console.log(extractedNames) // vai mostrar ["Darwin", "Ártemis"] pois pegou do array os itens a partir da posição, até o item antes da posição 3 (o 3 não entra!).

console.log(spaceshipNames) // vai continuar mostrando o array completo. O slice não muda o array original