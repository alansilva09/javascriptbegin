let spaceship = {
  name: prompt("Qual o nome da nave?"),
  type: prompt("Qual o tipo da nave?"),
  velocity: 0,
  maxVelocity: Number(prompt("Qual a velocidade máxima da nave?")),
  increaseVelocity: function (acceleration) {
    this.velocity += acceleration
  }
}

let accStop = Number(prompt("Deseja acelerar ou parar a nave?\n1 - Acelerar\n2 - Parar"))

while (accStop != 2) {
  if (accStop == 1) {
    let acceleration = Number(prompt("Quanto deseja acelerar a nave?"))
    if (spaceship.velocity + acceleration > spaceship.maxVelocity) {
      alert("Velocidade máxima atingida!")
    } else {
      spaceship.increaseVelocity(acceleration)
    }
  } else if (accStop == 2) {
    alert("Nome da espaçonave: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade atual: " + spaceship.velocity)
  } else {
    alert("Comando inválido!")
  }
  accStop = Number(prompt("Deseja acelerar ou parar a nave?\n1 - Acelerar\n2 - Parar"))
}

