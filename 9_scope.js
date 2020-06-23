function setSpaceshipDetails() {
  let velocity = 50
  if (velocity == 50) {
    velocity = 60
    var spaceshipName = "Elemental"
    let spaceshipType = "Discovery"
  }

  console.log(velocity)
  console.log(spaceshipName)
  console.log(spaceshipType)
}

setSpaceshipDetails()

// o var leva a variável para o escopo da função, ou seja, é mais "abrangente" que o let
// o let funciona apenas dentro do escopo do if

function setSpaceshipDetails() {
  console.log(spaceshipName)
  console.log(spaceshipType)
  var spaceshipName = "Elemental"
  let spaceshipType = "Discovery"
  console.log(spaceshipName)
  console.log(spaceshipType)
}

setSpaceshipDetails()

// neste caso o segundo console.log não vai funcionar pois o spaceshipType só foi declarado abaixo com let, portando nsó funciona após ser declarado.