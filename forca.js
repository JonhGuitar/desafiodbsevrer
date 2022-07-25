const palavrahidden = ['_1','_2','_1','_3','_1','_4','_5'];
class Forca { 

  chutar(letra) {var chute = prompt("insira uma letra");
  letrasChutadas.push(chute)
  if(chute == 'a','b','c','x','i'){
    palavra.push(chute)
  }
  if (chute != 'a' && 'b' && 'c' && 'x' && 'i') {
    vidas  -1 } 
    if(chute == a ){
    const newhidden = palavrahidden.map(element => {
      if (element === '_1') {
        return 'a';
        
      }
    
      return element;
    }) }
    if (chute == 'b'){
    const newhidden2 = palavrahidden.map ( element => {
      if (element === '_2') {
        return 'b';
        
      }
    
      return element;
    }) }
    if(chute == 'c'){
    const newhidden3 = palavrahidden.map (element => {
      if (element === '_3') {
        return 'c';
        
      }
    
      return element;
    }) }
    if(chute == 'x'){
    const newhidden4 = palavrahidden.map (element => {
      if (element === '_4') {
        return 'x';
        
      }
    
      return element;
    }) }
    if(chute == 'i'){
    const newhidden5 = palavrahidden.map (element => {
      if (element === '_5') {
        return 'i';
        
      }
    
      return element;
    }) }
     }

  buscarEstado() {
    if(vidas < 1){
      
     return "voce perdeu"; }
    else if (palavra='abacaxi') {
      return "voce ganhou,parabéns!!"
      
    } }// Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: [], // Deve conter todas as letras chutadas
          vidas: 6, // Quantidade de vidas restantes
          palavra: [] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

  


module.exports = Forca;




