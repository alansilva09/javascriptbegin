alert("Bem-vindo! A seguir pediremos que informe alguns dados!");

let name = prompt("Qual é seu nome?");

let age = prompt("Qual sua idade?");

let ageConfirmation = confirm("Sua idade é " + age + " anos?");

alert("Seu nome é " + name + "\nTem " + age + " anos." + "\nIdade confirmada: " + ageConfirmation);
