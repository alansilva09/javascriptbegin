let warpCount = 0 // por enquanto a nave não possui nenhuma dobra

let chosenOption = ""

let spaceship = prompt("Qual o nome da espaçonave?")

chosenOption = prompt("Deseja entrar em dobra espacial?\n1 - Sim\n2 - Não")

while (chosenOption == "1") {
  warpCount += 1
  chosenOption = prompt("Deseja realizar a próxima dobra?\n1 - Sim\n2 - Não")
}

alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpCount)