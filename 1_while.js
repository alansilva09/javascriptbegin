let velocity = 50
let accelaration = 5

while (velocity <= 100) {
  console.log("Acelerando: Estamos a " + velocity + "km/s")
  velocity += acceleration // velocity = velocity + acceleration / é necessário incrementar, senão entra em looping eterno
}

//

let constellation = "Andromeda"
let position = 0
let constellationLength = constellation.length

while (position < constellationLength) {
  if (constellation[position] == "a" || constellation[position] == "A") {
    console.log(position)
  }
  position += 1 // incrementar a posição até o fim da string
}

// Neste caso ele mostrará a posição do A e do a (0 e 8)