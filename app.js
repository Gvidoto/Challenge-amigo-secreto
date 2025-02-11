//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaNomes = []; 

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo) { 
        listaNomes.push(amigo); 
        atualizarListaAmigos();
        limparCampo();
    } else {
        alert('Por favor, insira um nome.');
    }
} 

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < listaNomes.length; i++) {
        let criarLista = document.createElement('li');
        criarLista.textContent = listaNomes[i]; 
        listaAmigos.appendChild(criarLista); 
    }
}

function limparCampo() {
    let campoAmigo = document.getElementById('amigo');
    campoAmigo.value = '';
}

function sortearAmigo(){
    let campoAmigoSorteado = document.getElementById('resultado');

    if (listaNomes == ''){
        alert('Adicione nomes a lista!');
    } else {
        let amigoAleatorio = parseInt(Math.random() * listaNomes.length);
        campoAmigoSorteado.innerHTML = listaNomes[amigoAleatorio];
    }
}

 
  
        
    



