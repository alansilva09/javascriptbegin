let spaceship = "Helmet"
let newSpaceship = ""

for (let i = 0; i < spaceship.length; i++) { //a variável i começa em 0, enquanto i for menor que a largura da varável spaceship, ela vai incrementar. o i++ equivale a i = i + 1
  console.log(spaceship[i]) // vai mostrar a letra em cada posição do i
}

//

let spaceship = "Helmet"
let newSpaceship = ""

for (let i = 0; i < spaceship.length; i++) {
  if (spaceship[i] == "e") {
    newSpaceship += "a"
  } else {
    newSpaceship += spaceship[i]
  }
}

console.log(newSpaceship)

// Aqui ele substituiu os "e" por "a" e mostrou no console a nova palavra. HALMAT.