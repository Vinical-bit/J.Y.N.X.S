// let pessoa = {
//     nome: "nome da pessoa",
//     idade:"idade da pessoa",
//     cpf:11111111111,
//     nacionalidade: "nacionalidadde da pessoa"
// }

// function listpessoa(pessoa){
//     return `${pessoa.nome}` `${pessoa.idade}` - `${pessoa.cpf}` - `${pessoa.nacionalidade}`;
// }

// let pessoa1 = {
//     nome: "vinical",
//     idade:"19",
//     cpf:11111111111,
//     nacionalidade: "recifense"
// }
// let pessoa2 = {
//     nome: "Gabriel",
//     idade:"18",
//     cpf:11111111111,
//     nacionalidade: "Recifence"
// }
// let pessoa3 = {
//     nome: "Ana",
//     idade:"17",
//     cpf:11111111111,
//     nacionalidade: "paulista"
// }

// let pessoas = [pessoa1, pessoa2, pessoa3]

// pessoas.forEach(function(pessoa){
    //     console.log(listpessoa(pessoa))
    // })

    nome = input ("qual nome você quer buscar? ")
    
    function nbusca(nome){
        for (let i = 0; i < pessoa.length; i++){
            if(pessoa[i].nome == nome){
                console.log(pessoa[i].nome)
            }
        }
    }

let pessoa = [
    {
        nome: "vinical",
        idade: 19,
        cpf: "1111111111"
    },
    {
        nome: "gabriel",
        idade: 19,
        cpf: "1111111111"
    },
    {
        nome: "guilherme",
        idade: 19,
        cpf: "1111111111"
    }
]

nbusca("vinical")

// for (let i = 0; i < pessoa.length; i++){
//     if(pessoa[i].nome == "vinical"){
//         console.log(pessoa[i].nome)
//     }
// }


