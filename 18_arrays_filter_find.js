let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

let with7Chars = hitchedSpaceships.filter(element => { return element.length >= 7 })

console.log(with7Chars) // vai mostrar os itens com 7 ou mais caracteres

// FIND

let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

let with7Chars = hitchedSpaceships.filter(element => { return element.length >= 7 })

console.log(with7Chars) // vai retornar o primeiro elemento que bate com a função. Ou seja, "Deméter"