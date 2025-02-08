//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = []; 

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo) { 
        nomes.push(amigo); 
        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = nomes;
        limparCampo();
    } else {
        alert('Por favor, insira um nome.');
    }
} 

function limparCampo(){
    amigo = document.getElementById('amigo');
    amigo.value = '';
}
 
  
        
    



