/* Desenvolva seu código abaixo */
/*"Jogador 1 venceu!", "Jogador 2 venceu!" ou "Empate!". */
function playRockPaperScissor(player1, player2){
    let resultado = "";

    if (player1 == "Papel" && player2 == "Pedra"){
        resultado = "Jogador 1 venceu!";

    } else if (player1 == "Papel" && player2 == "Tesoura"){
       resultado = "Jogador 2 venceu!";

    } else if (player1 == "Papel" && player2 == "Papel"){
        resultado = "Empate!";

    } else if (player1 == "Tesoura" && player2 == "Pedra"){
        resultado = "Jogador 2 venceu!";

    } else if (player1 == "Tesoura" && player2 == "Tesoura"){
        resultado = "Empate!";

    } else if (player1 == "Tesoura" && player2 == "Papel"){
        resultado = "Jogador 1 venceu!";

    } else if (player1 == "Pedra" && player2 == "Papel"){
        resultado = "Jogador 2 venceu!";

    } else if (player1 == "Pedra" && player2 == "Tesoura"){
        resultado = "Jogador 1 venceu!";

    } else {
        resultado = "Empate!";
    }

      return resultado;   

} 

console.log(playRockPaperScissor("Tesoura","Tesoura"));
