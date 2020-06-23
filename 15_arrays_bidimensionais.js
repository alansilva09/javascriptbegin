// São arrays dentro de um outro array.

let hitchedSpaceships = [["Elemental", 7], ["Helmet", 13], ["Golias", 5], ["Supernova", 10]]

console.log(hitchedSpaceships[0]) // vai mostrar ["Elemental", 7]

// Adicionar um novo array no final:

let hitchedSpaceships = [["Elemental", 7], ["Helmet", 13], ["Golias", 5], ["Supernova", 10]]

hitchedSpaceships.push(["Colossus", 8])

console.log(hitchedSpaceships[0]) // vai mostrar [["Elemental", 7], ["Helmet", 13], ["Golias", 5], ["Supernova", 10], ["Colossus", 8]]

// para mostrar um item especifico:

let hitchedSpaceships = [["Elemental", 7], ["Helmet", 13], ["Golias", 5], ["Supernova", 10]]

console.log(hitchedSpaceships[3][0]) // vai mostrar "Supernova"

// ele pode ter mais dimensões:

let hitchedSpaceships = [["Elemental", 7], ["Helmet", 13], ["Golias", 5], ["Supernova", [true, false]]]

console.log(hitchedSpaceships[3][1][0]) // vai mostrar true