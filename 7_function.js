function greetPilot() {
  alert("Olá, piloto!")
}

greetPilot()

// Com parametros:

function speedUp(velocity, acceleration) {
  let newVelocity = velocity + acceleration
  console.log("Nova velocidade: " + newVelocity)
}

speedUp(60, 10)

//

function greetPilot(name, message) {
  alert(message + ", " + name)
}

greetPilot("John Mars", "Seja bem-vindo")

// Com parametro padrão:

function greetPilot(name, message = "Olá") {
  alert(message + ", " + name)
}

greetPilot("John Mars") // vai exibir "Olá, John Mars"

// armadilhas:

function greetPilot(name, message = "Olá") {
  alert(message + ", " + name)
}

greetPilot() // vai exibir "Olá, undefined"

//

function speedUp(velocity, unit = "km/s", accleration) {
  let newVelocity = velocity + accleration
  alert("Nova velocidade: " + newVelocity + unit)
}

speedUp(50, "mi/s", 20) // vai retornar normal e substituir o km/s por mi/s
//armadilha:
speedUp(50, 20) // vai atribuir 20 para unit e calculará errado no let. O programa vai retornar um NaN = NOT A NUMBER

// A SOLUÇÃO É PASSAR O PARAMETRO PADRAO PARA O FINAL DA FUNÇÃO, POIS O MESMO NÃO TERÁ PADRAO NOVO DEFINIDO.