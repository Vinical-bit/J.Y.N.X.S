// Objeto "livro" - serve de modelo para os livros que vamos criar depois.
// Cada livro tem 4 propriedades: titulo, autor, ano e paginas.
let livro = {
    titulo: "Livro Exemplo",
    autor: "Autor Exemplo",
    ano: 2000,
    paginas: 100
};

// Função que recebe um objeto "livro" como parâmetro
// e devolve (return) uma string já formatada e pronta para exibir.
function formatarLivro(livro) {
    // Template string (usa crases ``) permite misturar texto fixo
    // com valores de variáveis usando ${...}
    return `${livro.titulo} (${livro.ano}) - ${livro.autor} - ${livro.paginas} páginas`;
}

// Criamos 3 livros diferentes, cada um é um objeto independente
// com a mesma estrutura do objeto "livro" acima.
let livro1 = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 2000,
    paginas: 310
};

let livro2 = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    ano: 1997,
    paginas: 223
};

let livro3 = {
    titulo: "1984",
    autor: "George Orwell",
    ano: 1949,
    paginas: 328
};

// Guardamos os 3 livros dentro de um array,
// isso facilita percorrer todos eles com um laço (for/forEach) depois.
let livros = [livro1, livro2, livro3];

// forEach percorre cada item do array "livros" um por um.
// Para cada "l" (um livro), chamamos a função formatarLivro
// e imprimimos o resultado no console.
livros.forEach(function (l) {
    console.log(formatarLivro(l));
});
