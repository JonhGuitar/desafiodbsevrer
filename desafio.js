const readline = require('readline-sync');
const Forca = require('./forca');
let vidas = 6
const validarEtapa = require('./validar-etapa');
let letrasChutadas = [];
//colocar estados de perder e ganhar



let buscarEstado= ("Perdeu", "Ganhou","aguardando chute")
const palavraSecreta = ("abacaxi") ;
const jogo = new Forca(palavraSecreta);

while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {
    const chute = readline.question("Aguardando chute: \n");
    jogo.chutar(chute);
    console.log(jogo.buscarDadosDoJogo());
    
}
let length = palavraSecreta.length

//array de controle

//funçao chute usando prompt
var chute = prompt("insira uma letra");
let arrayAbacaxi= ['a', 'b', 'c', 'x', 'i'];


//verificaçao dos caracteres inseridos pelo prompt



console.log("você " + jogo.buscarEstado());
if(vidas = 0){ 
    
    
    
}


