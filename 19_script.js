// Exercício ARRAY BIDIMENSIONAL (naves engatadas numa estação espacial)

const hitchedSpaceships = [["Fenix", 8, true], ["Golias", 10, true], ["Helmet", 5, false], ["Elemental", 3, true], ["Darwin", 15, false]]
// Nome da nave / quantidade de tripulantes / processo de engate concluído?

// A plataforma de engate que a nave está parada é o índice da nove no array "pai" + 1

// 1 - Filtrar o nome das naves que tem mais de 9 tripulantes:

let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
  return spaceship[1] > 9 // vai pegar todos os tripulants nos subarrays e retornar os c/ + de 9
}).map(spaceship => {
  return spaceship[0] // agora vai retornar todos os nomes das espaçonaves já filtradas
})

// 2 - Informar o número da plataforma em que está a primeira nave que ainda está com o engate pendente

let onGoingHitchPlatform = hitchedSpaceships.findIndex(spaceship => {
  return spaceship[2] == false
})

// 3 - Destacar o nome de todas as naves colocando-as em caixa alta

let upcasedSpaceships = hitchedSpaceships.map(spaceship => {
  return spaceship[0].toUpperCase()
})

// 4 - Exibir um alerta  com tudo:

let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
message += "\nPlataforma com processo de engate: " + (onGoingHitchPlatform + 1) // pq começa do 0
message += "\nEspaçonaves destacadas: " + upcasedSpaceships.join(", ")

alert(message)
