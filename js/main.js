function clicou() {
    document.getElementById("agradecimento").innerHTML = "<strong>Obrigado por clicar</strong>";
}

function redirecionar() {
    //window.open Abre em outra janela
    window.open("http://www.google.com")
        //window.location.href abre ne mesma janela
    window.location.href = "http://www.google.com";

}

function trocar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado!!!"
}

function voltar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Passe o mouse aqui."
}