let spaceship = {
  name: "Fenix",
  crewQuantity: 7,
  type: "Batalha"
}

console.log(spaceship) // vai exibir o bloco inteiro identificado como um objeto

// para ver uma chave específica do objeto

console.log(spaceship.type) //ou:
console.log(spaceship["type"])

// para adicionar uma propriedade:

spaceship.isHitched = false // ou:
spaceship["shieldLevel"] = 100

console.log(spaceship["isHitched"])
console.log(spaceship.shieldLevel)

// não faz muita diferença usar colchetes ou ponto, pelo menos não por agora.

// O objeto também pode ser criado vazio:

let spaceship = {}
console.log(spaceship) // vai mostrar Object {}

// ou fazer exatamente igual a no array:

let spaceship = new Object()
