/** cria uma variavel que recebe e converte os dados do teclado */
const teclado = require('prompt-sync')({sigint:true});
/** Recebe os dados do teclado */
let controle = parseInt(teclado("Digite a opção: "));

for(let i=0;i<=controle;i++){
    console.log(i);
}