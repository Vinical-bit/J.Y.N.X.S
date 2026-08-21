// URL da API mockapi para produtos
const url = 'https://6a884c6e7b483fa21fe8e72e.mockapi.io/Produtos'

// Métodos HTTP: GET, POST, PUT e DELETE
// - buscar: read (GET)
// - criar: create (POST)
// - atualizar: update (PUT)
// - deletar: delete (DELETE)

// fetch(url, { config }) faz a requisição HTTP




// ==========================================
// Consulta 
// ==========================================

// Função assíncrona para buscar produtos da API
async function buscarProdutos() {
 
    // Faz requisição GET para obter os produtos
    const response = await fetch(url)
    // Converte a resposta em JSON
    let data = await response.json() // .json() converte a resposta em JSON

    // Itera sobre cada produto retornado
    for (let i = 0; i < data.length; i++) {

        // Armazena o produto atual
        let produto = data[i]

        // Exibe o produto no console
        console.log(produto)

        // Template HTML para criar o card do produto
        let template =  `
        <div class="product-card">
            <div class="product-image product-image-orange"></div>
            <h2>${produto.nome}</h2>
            <p class="product-description">${produto.descricao}</p>
            <p class="product-price">R$ ${produto.preco}</p>  
            <div class="card-actions">
            <label for="modal-editar" class="btn-small" onclick="abrirModalEditar('${produto.id}')">Editar</label>
            <button type="button" class="btn-small btn-danger" onclick="deletarProduto('${produto.id}')">Remover</button>
            </div>
        </div>
        `

        // Adiciona o template ao elemento com id 'lista'
        document.querySelector('#lista').innerHTML += template // += adiciona o template ao conteúdo existente e o innerHTML substitui o conteúdo do elemento com id 'lista' pelo template gerado
    }

}

// Chama a função para buscar produtos ao carregar a página
buscarProdutos()




// ==========================================
// Criação 
// ==========================================

// Função assíncrona para criar um novo produto
async function criarProduto() {
    
    // Obtém os valores dos inputs do formulário
    let nome = document.querySelector('#nome').value
    let valor = document.querySelector('#preco').value
    let descicao = document.querySelector('#descricao').value

    // Cria um objeto com os dados do novo produto
    let data = {
        nome: nome,
        descricao: descicao,
        preco: valor
    }

    // Faz requisição POST para criar o produto na API
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, // Define o tipo de conteúdo como JSON
        body: JSON.stringify(data) // Converte o objeto data em JSON para enviar na requisição
    }) 

    // Recarrega a página para exibir o novo produto
    window.location.reload()

}





// ==========================================
// Deletar 
// ==========================================

// Função assíncrona para deletar um produto
async function deletarProduto(id) {

    // Faz requisição DELETE para remover o produto da API
    const response = await fetch(url + '/' + id , {
        method: 'DELETE'
    })
    
    // Recarrega a página para atualizar a lista
    window.location.reload()
}




// ==========================================
// Atualização  ( Desafio )
async function atualizarProduto(id, data) {
    // Obtém os valores dos inputs do formulário
    let id = document.querySelector('#id').value
    
    let nome = document.querySelector('#nome').value
    let valor = document.querySelector('#preco').value
    let descicao = document.querySelector('#descricao').value

    // Cria um objeto com os dados do novo produto
    let data = {
        nome: nome,
        descricao: descicao,
        preco: valor
    }

    const response = await fetch(url + '/' + id,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)  
    })
    window.location.reload()
}

function abrirModalEditar(id) {
    // Objeto data é criado com os valores dos inputs do formulário
    document.querySelector('#editar-id').value = id
}
// ==========================================
// para atualizar é semelhante a função de criação e de deletar, onde
// você passa qual o registro que atualizar e os dados para colocar no lugar.