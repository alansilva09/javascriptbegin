let distanceInLY = prompt("Qual a distância em anos luz?");

let chosenOption = prompt("Qual operação você deseja realizar?\n\n1 - Parsec (PC)\n2 - Unidade Astronômica (AU)\n3 - Quilômetros (KM)\n");

let chosenUnity

let convertedDistance

switch (chosenOption) {
  case "1":
    chosenUnity = "Parsec (PC)"
    convertedDistance = distanceInLY * 0.306601;
    break
  case "2":
    chosenUnity = "Unidade Astronômica (AU)"
    convertedDistance = distanceInLY * 63241.1;
    break
  case "3":
    chosenUnity = "Quilômetros (KM)"
    convertedDistance = distanceInLY * Math.pow(10, 12);
    break
  default:
    chosenUnity = "Unidade não identificada."
    convertedDistance = "Conversão fora do escopo."
}

alert("Distância em anos-luz: " + distanceInLY + "\nConversão desejada: " + chosenUnity + "\nDistância convertida: " + convertedDistance + " " + chosenUnity)