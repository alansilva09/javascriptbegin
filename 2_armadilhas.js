let spacialStation = {
  name: "Fox", // correto
  platformsQuantity: 10, // correto
  "new name": "Estelar", // sem padronização
  true: false, // sem padronização
  2: "Descoberta" // sem padronização
}

console.log(spacialStation["new name"]) // vai funcionar assim, mas não é recomendado usar como identificador strings, booleanos ou number

