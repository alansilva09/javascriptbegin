let velocity = 50
let acceleration = 5

do {
  console.log("Acelerando: estamos a " + velocity + "km/s")
  velocity += acceleration
} while (velocity <= 100)

//

let spaceshipName = "Supernova"

for (let i = 0 < spaceshipName.length; i++) {
  if (spaceshipName[i] == "o") {
    break
  }
  console.log(spaceshipName[i])
}