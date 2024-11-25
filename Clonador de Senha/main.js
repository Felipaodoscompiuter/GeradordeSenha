const numeroSenha = document.querySelector('.parametro-senha-texto'); 
const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = "QWERTYUIOPASDFGHJKLZXCVBNMÇ";

let tamanhoSenha = 4;
numeroSenha.textContent= tamanhoSenha;
const botoes = document.querySelectorAll('.parametro-senha-botao');

botoes[0].onclick = diminuirTamanho;
botoes[1].onclick = aumentarTamanho;
geraSenha();

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

function geraSenha(){
    let senha="";
    for (let i=0; i<tamanhoSenha; i++){
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha=senha=senha+letrasMaiusculas[numeroAleatorio];

}
campoSenha.value=senha;
}