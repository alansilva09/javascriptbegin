let velocity = 80

switch(velocity * 2) {
  case 100:
    console.log("Sua velocidade é 100km/s")
    break
  case 160:
    console.log("Sua velocidade é 160km/s")
    break
  default:
    console.log("Velocidade não identificada")
}

// COM STRING

let spaceship = "Elemental"

switch(spaceship) {
  case "Golias":
    console.log("Nave mais resistente.")
    break
  case "Raptor":
    console.log("Nave mais rápida.")
    break
  case "Enterprise":
    console.log("Nave a Frota Estelar")
    break
  default:
    console.log("Nave comum.")
}

// o que diferencia ele do IF

let velocity = 90

switch(velocity) {
  case 80:
  case 90:
  case 100:
    console.log("Velocidade aceitável.")
    break
  case 110:
    console.log("Velocidade alta, mas aceitável.")
    break
  default:
    console.log("Velocidade não identificada.")
}

//

let spaceship = "Elemental"

switch(spaceship) {
  case "Golias":
    console.log("Nave mais resistente.")
  case "Elemental":
    console.log("Nave com melhor armamento.")
  case "Helmet":
    console.log("Rápida ativação de escudo.")
  case "Frontier":
    console.log("Nave de infantaria.")
    break
  case "Enterprise":
    console.log("Nave a frota estelar")
  default:
    console.log("Não conheço a nave.")
} // ele vai mostrar no console o Elemental, o Helmet e o Frontier, pq só para no break.