let spaceshipNames = ["Supernova", 7, true]

console.log(spaceshipNames[1]) // vai mostrar o 7

//

let hitchedSpaceships = new Array("Supernova", "Elemental", "Helmet", "Colossus")

console.log(hitchedSpaceships[2]) // funciona igual, trasnforma os itens em lista tbm

//

let hitchedSpaceships = new Array(5)

console.log(hitchedSpaceships) // IMPORTANTE! Neste caso ele nao vai mostrar o 5, e sim criar uma lista com 5 posições undefined. ENTÃO É USADO APENAS PRA CRIAR ARRAYS VAZIOS COM QUANTIDADE DETERMINADA DE "POSIÇÕES".

// ADICIONAR UM NOVO ITEM NO FINAL UM ARRAY (PUSH)

let hitchedSpaceships = ["Colossus", "Elemental", "Helmet"]

hitchedSpaceships.push("Supernova")

console.log(hitchedSpaceships) // vai colocar Supernova no fim do array

// ADICIONAR UM NOVO ITEM NO INÍCIO DE UM ARRAY (UNSHIFT)

hitchedSpaceships.unshift()

console.log(hitchedSpaceships)

// REMOVER O ÚLTIMO ITEM DO ARRAY (POP)

hitchedSpaceships.pop() // não precisa de parametro pois irá remover o último item

// se quiser retornar o último elemento, podemos fazer assim:

let removedSpaceship = hitchedSpaceships.pop()

console.log(removedSpaceship) // vai isolar a última string, tornar ela uma nova variável e mostrar ela na tela

// REMOVER O PRIMEIRO ITEM DO ARRAY (SHIFT)

let removedSpaceship = hitchedSpaceships.shift()

console.log(removedSpaceship)

// QUANTIDADE DE ITENS NO ARRAY:

console.log(hitchedSpaceships.length)

// MOSTRAR O ÍNDICE DE UM ITEM DO ARRAY:

let hitchedSpaceships = ["Colossus", "Elemental", "Helmet"]

let elementalPosition = hitchedSpaceships.indexOf("Elemental")

console.log(elementalPosition) // vai mostrar 1, que é a posição de Elemental no array
// caso coloque o nome de item que nao exista, ele vai responder com -1