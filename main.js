const botoes = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; j++){
    botoes[i].onclick = function (){
        botoes[i].classList.add("ativo")
    }
}