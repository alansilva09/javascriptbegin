let velocity = 90

if(velocity < 100) {
  console.log("Estamos numa velocidade aceitável.")
} else {
  if(velocity <= 100) {
    console.log("Cuidado! Próximo a velocidade de risco!")
  } else {
    console.log("Velocidade de risco!")
  }
}

// Código mais enxuto:

if(velocity < 100) {
  console.log("Estamos numa velocidade aceitável.")
} else if(velocity <= 100) {
    console.log("Cuidado! Próximo a velocidade de risco!")
} else {
  console.log("Velocidade de risco!")
}

// IF de uma linha

(velocity > 100) ? console.log("Velocidade maior do que 100.") : console.log("Velocidade menor do que 100.")
// Deve-se utilizar somente em casos simples, senão o código fica dificil de ler
