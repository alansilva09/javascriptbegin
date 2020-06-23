let spaceship = "Elemental"
let velocity = 20

console.log(spaceship.length == 9 && velocity > 15) // TRUE e TRUE = TRUE

console.log(velocity < 10 && velocity < 19) // V e F = FALSE

console.log(velocity < 17 && spaceship == "Elemental") // F e V = FALSE

console.log(spaceship == "Golias" && velocity > 21) // F e F = FALSE