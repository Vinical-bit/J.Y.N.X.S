let objeto = {
    key: "sla vinical",
    kelly: "jjjj",
}

let list = "647647467476"
let lista = ["one", "two", "tree"]

console.log(list.length)
console.log(list[0])
console.log(list.slice(0, 5))

let removidos = lista.splice(1, 1, "TWO")
console.log(lista)     // ["one", "TWO", "tree"]
console.log(removidos) // ["two"]

let persona = [
    {
        nome: "Vinical",
        idade: 19
    },
    {
        nome: "Rodrigo",
        idade: 15
    },
    {
        nome: "Fabio",
        idade: 50
    },
    {
        nome: "Renato",
        idade: 42
    }
]

for (let i = 0; i < persona.length; i++){
    console.log(i, persona[i].nome)
}