// ARRAY DENTRO DE UM OBJETO

let spaceship = { // criamos o objeto
  name: "Supernova",
  type: "Batalha",
  crew: ["Capitão Silva", "Ana Julia", "Thiago"] // adicionamos um array nele
}

spaceship.crew.push("Tenente Fernanda") // acessamos o objeto, entramos no item crew, e com o push adicionamos "Tenente Fernanda" no fim do array.

console.log(spaceship) // mostra o objeto completo já com o array atualizado com o novo nome

// OBJETOS DENTRO DE UM ARRAY

let spaceships = [ // criamos o array
  { name: "Elemental", crewQuantity: 10 }, // incluímos 3 objetos com suas caracteristicas
  { name: "Colossus", crewQuantity: 8 },
  { name: "Helmet", crewQuantity: 15 }
]

console.log(spaceships[0].name) // vai mostrar o NAME do objeto na posição 0 (primeira)

//
spaceships.forEach(spaceship => {
  alert(spaceship.name + " tem " + spaceship.crewQuantity + " tripulantes.")
})

// objeto dentro de objeto:

let spaceship = {
  name: "Golias",
  maxCrew: 20,
  captain: {
    name: "Hugo Trent",
    age: 37
  }
}

console.log(spaceship.captain.name)