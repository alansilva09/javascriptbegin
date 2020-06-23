var terra = "Planeta Terra"[2];
console.log(terra); // mostra a letra na posição 2 (0, 1, 2)

var terra = "Planeta Terra".length;
console.log(terra); // mostra quantidade de caracteres

var terra = "Planeta " + "Terra"[3];
console.log(terra); // concatena "Planeta " e a letra no índice 3 da palavra "Terra"

var terra = ("Planeta " + "Terra")[3];
console.log(terra); // concatena "Planeta " e "Terra" e só depois encontra a letra na posição 3 da frase formada

var terra = "Eu vivo na Terra há " + 30 + " anos";
console.log(terra); //ele une string + number + string e tranforma tudo em uma única STRING.

console.info("Bem vindo a Nave Elemental") // mudar a cor da caixa da frase

console.warn // aviso amarelo

console.error // erro vermelho

alert("Bem vindo!") // cria uma caixa de alerta na tela com o texto e um OK

confirm("Deseja prosseguir?") // tbm cria uma caixa de alerta, porém dá opções de OK e CANCEL

prompt("Qual seu nome?") // abre um campo de input, com opção de OK e CANCEL

