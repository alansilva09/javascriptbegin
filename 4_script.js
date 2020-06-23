let spaceshipName = prompt("Qual o nome da espaçonave?");

let oldCharacter = prompt("Qual a letra que você deseja substituir?");

let newCharacter = prompt("Por qual letra você quer substituí-la?");

let newSpaceshipName = ""

for (let pos = 0; pos < spaceshipName.length; pos++) {
  if (spaceshipName[pos] == oldCharacter) {
    newSpaceshipName += newCharacter
  } else {
    newSpaceshipName += spaceshipName[pos]
  }
}

alert("O novo nome da sua espaçonave é: " + newSpaceshipName + ".")