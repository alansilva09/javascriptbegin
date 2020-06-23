let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fênix", "Puller"]

hitchedSpaceships.forEach(function (currentSpaceship, index) {
  console.log("Nave: " + currentSpaceship + "\nÍndice: " + index)
})
// para cada item da lista ele pega o nome e a posição e mostra no console

// MAP:

let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fênix", "Puller"]

let upcasedSpaceships = hitchedSpaceships.map(function (currentSpaceship) {
  let upcased = currentSpaceship.toUpperCase()
  return upcased
})

console.log(upcasedSpaceships) // vai mostrar o array inteiro, porém com todas as letras maiusculas