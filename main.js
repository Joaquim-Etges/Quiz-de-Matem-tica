function login() {
    let nomejogador1 = document.getElementById("jogador1").value;
    let nomejogador2 = document.getElementById("jogador2").value;

    localStorage.setItem("j1", nomejogador1);
    localStorage.setItem("j1", nomejogador2);

    window.location = "game.html";

}