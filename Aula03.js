/** cria uma variavel que recebe e converte os dados do teclado */
const teclado = require('prompt-sync')({sigint:true});
/** Recebe os dados do teclado */
let Condicao = parseInt(teclado("Digite a condição: "));
let Cont = 0;
/** enquanto a condição for verdadeira ele fica executando o loop */
/**
while(Condicao < 10){
    Cont++;
    //console.log(Cont);
    Condicao++;
    //console.log(Condicao);
    console.log(Cont);
} */
do{
    Cont++;
    console.log(Cont);
}while(Cont < 10)
    