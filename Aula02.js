/** cria uma variavel que recebe e converte os dados do teclado */
const teclado = require('prompt-sync')({sigint:true});
/** Recebe os dados do teclado */
let controle = parseInt(teclado("Digite a opção: "));

switch(controle){
    case 1:
        console.log("Você digitou 1");
        break;
    case 2:
        console.log("Você digitou 2");
        break;
    case 3:
        console.log("Você digitou 3");
        break;
    case 4:
        console.log("Você digitou 4");
        break;
    case 5:
        console.log("Você digitou 5");
        break;
    default:
        console.log("DEFAULT");
}
