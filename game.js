let jogador1 = localStorage.getItem("j1");
let jogador2 = localStorage.getItem("j2");

let pontosj1 = 0;
let pontosj2 = 0;

document.getElementById("nomeJogador1").innerHTML = jogador1 + " : ";

document.getElementById("nomeJogador1").innerHTML = jogador1 + " : ";

document.getElementById("pontosJogador1").innerHTML = pontosj1
document.getElementById("pontosJogador2").innerHTML = pontosj2

document.getElementById("pergunta").innerHTML = "Turno de Pergunta - " + jogador1
document.getElementById("resposta").innerHTML = "Turno de Resposta - " + jogador2

function enviar() {
    numero1 = document.getElementById("n1").value;
    numero2 = document.getElementById("n2").value;
    gabarito = parse = parseInt(numero1) * parseInt(numero2)

    questao = "<h4>" + numero1 + " X " + numero2 + "</h4>";
    input_resposta = "<br>Resposta: <input type='number' id='resp'>";
    botao_verif = "<br><br><button onclick='verificar()'>Verificar</button>";

    linha = questao + imput_resposta + botao_verif;
    document.getElementById("output").innerHTML = linha;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}

quemtaperguntando = "jogador1";
quemtarespondendo = "jogador2";

function verificar() {
    resposta_dada = document.getElementById("resp").value;
    if (resposta_dada == gabarito) {
        if (quemtaperguntando == "jogador1") {
            pontosj1 = pontosj1 + 1;
            document.getElementById("pontosJogador1").innerHTML = pontosj1
        } else {
            pontosj2 = pontosj2 + 1;
            document.getElementById("pontosJogador2").innerHTML = pontosj2
        }
    }
    if (quemtaperguntando == "jogador1") {
        quemtaperguntando = "jogador2";
        document.getElementById("pergunta").innerHTML = "Turno de pergunta - " + jogador2
    }
    else {
        quemtaperguntando = "jogador1";
        document.getElementById("pergunta").innerHTML = "Turno de pergunta - " + jogador1
    }
    if (quemtarespondendo == "jogador1") {
        quemtarespondendo = "jogador2";
        document.getElementById("resposta").innerHTML = "Turno de pergunta - " + jogador2
    }
    else {
        quemtaperguntando = "jogador1";
        document.getElementById("resposta").innerHTML = "Turno de pergunta - " + jogador1
    }
}