let spaceship = {
  name: "Deméter",
  type: "Extração",
  maxCrew: 20,
  turnOn: function () {
    alert("Preparando a propulsão")
    alert("Ligando computador de bordo")
    console.log(this.name) // vai mostrar o atributo name deste objeto
  }
}

spaceship.turnOn() // vai chamar o turnOn que tem a funçao a ser executada

// Criar propriedade fora do objeto é permitido:

spaceship.velocity = 0
spaceship.speedUp = function (spaceshipToSpeedUp, acceleration) {
  spaceshipToSpeedUp.velocity += acceleration
}

console.log(spaceship)

spaceship.speedUp(spaceship, 10)

console.log(spaceship)

// um jeito mais fácil de chamar a variável na função:

spaceship.velocity = 0
spaceship.speedUp = function (acceleration) {
  this.velocity += acceleration
}

console.log(spaceship)

spaceship.speedUp(10)

console.log(spaceship)