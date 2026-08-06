// tem que pegar o valor do input e adicionar a lista de itens

function add(){
    let text = document.querySelector('#itemInput').value // pega o valor do input
    document.querySelector('#listaItens').innerHTML += `
    <li>${text}</li>
    `
} // pega o valor do input e adiciona na lista de itens

function clearAll(){
    document.querySelector('#listaItens').innerHTML = ''
}