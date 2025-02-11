//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = []; 

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo) { 
        nomes.push(amigo); 
        atualizarListaAmigos();
        limparCampo();
    } else {
        alert('Por favor, insira um nome.');
    }
} 

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < nomes.length; i++) {
        let criarLista = document.createElement('li');
        criarLista.textContent = nomes[i]; 
        listaAmigos.appendChild(criarLista); 
    }
}

function limparCampo() {
    let campoAmigo = document.getElementById('amigo');
    campoAmigo.value = '';
}


 
  
        
    



