let spaceship = "Supernova";
console.log(spaceship); // spaceship recebeu a string e mostrou na tela

spaceship = "Helmet";
console.log(spaceship); // assim adicionamos um novo valor a variavel sem precisar 
                        // colocar let novamente.

//

const squad = "Estelar";
console.log(squad); // mesma coisa, recebeu a string e mostrou na tela

squad = "Espacial";
console.log(squad); // não é possível e ocorre erro. CONST vem de CONSTANTE,
                    // portanto ela só pode ter um único valor atribuído.
                    // É uma variável que nunca vai mudar.

//

var velocity = 80;
console.log(velocity);

velocity = 25;
console.log(velocity); // parecido com o let, será explicada diferença mais pra frente.

//

let noValue;
console.log(noValue); // vai mostrar undefined, pois ainda não tem nenhum valor.

let departureConfirmation = confirm("Nave pronta para decolar.");
console.log(departureConfirmation); // aparecerá a opção de confirmar, com OK e CANCELAR.
// O OK retorna a variável como TRUE e o Cancelar como FALSE

let pilot = prompt("Qual seu nome?");
console.log(pilot); // Ele faz a pergunta, o usário digita no input e o valor digitado
                    // se torna o valor da variável. (se clicar OK)
                    // Se clicar CANCELAR, o console retorna NULL

//Como escrer nome de variáveis com mais de uma palavra:

let mySpaceshipName = "Apollo";
// isso se chama CAMELCASE.
