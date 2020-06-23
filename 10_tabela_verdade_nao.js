let spaceship = "Elemental"
let velocity = 20

console.log(!(velocity > 19)) // NÃO VERDADEIRO = FALSO. ELE INVERTE

console.log(!(spaceship == "Golias")) // Não FALSO = VERDADEIRO

console.log(!(velocity > 25) && spaceship == "Elemental" || (velocity - 3 == 17
  && spaceship.length + 1 > 15))

// !(velocity > 25) && spaceship == "Elemental" || (velocity - 3 == 17 && spaceship.length + 1 > 15)
// !FALSE && TRUE || TRUE && FALSE
// !FALSE || FALSE
// TRUE || FALSE
// TRUE