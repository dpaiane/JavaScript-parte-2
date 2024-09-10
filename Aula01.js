/** cria uma variavel que recebe e converte os dados do teclado */
const teclado = require('prompt-sync')({sigint:true});
/** Recebe os dados do teclado */
let num1 = parseFloat(teclado("Digite a nota 1: "));
let num2 = parseFloat(teclado("Digite a nota 2: "));
/** calcula a media aritmética */
let Result = (num1 + num2) / 2;
/** Imprime a media */
console.log(Result);
if(Result >= 7){
    /** se a media for maior que 7 */
    console.log("Aprovado");
}
else if(Result == 0){
    /** se a medio for zero */
    console.log("BIZONHOOOO");
}
else{
    /** para qualquer outra nota abaixo de 7 */
    console.log("Reprovado");
}
