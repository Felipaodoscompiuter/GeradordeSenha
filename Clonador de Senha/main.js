const numeroSenha = document.querySelector('.parametro-senha-texto');
let tamanhoSenha = 4;
numeroSenha.textContent= tamanhoSenha;
const botoes = document.querySelectorAll('.parametro-senha-botao');

botoes[0].onclick = diminuirTamanho;
botoes[1].onclick = aumentarTamanho;

function diminuirTamanho(){
    if (tamanhoSenha>3){
    tamanhoSenha= tamanhoSenha -1
    numeroSenha.textContent= tamanhoSenha;
    }
}

function aumentarTamanho(){
    if (tamanhoSenha<9){
    tamanhoSenha=tamanhoSenha +1;
    numeroSenha.textContent= tamanhoSenha; 
    }
}


