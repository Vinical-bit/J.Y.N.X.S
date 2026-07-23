let nota1 = Math.ceil(Math.random() * (1000 - 1))
let nota2 = Math.ceil(Math.random() * (1000 - 1))
function som(){
    console.log(nota1,"+", nota2)
    let soma = nota1 + nota2
    // return alert('Conta finalizada')
    console.log("=", soma)
}

som()
function media(notaa1, notaa2, notaa3, aluno){

    let med = (notaa1 + notaa2 + notaa3) / 3

    console.log(med.toFixed(2))

    if(!aluno){
        return console.log("Aluno não informado")
    }

    if (med >= 7) {
        return console.log(aluno + ": Aprovado com a media : " + med.toFixed(2) + " (●'◡'●)")
    }
    return console.log(aluno + ": Reprovado com a media : " + med.toFixed(2) + " (╥﹏╥)")

}

let aluno = [
    {
        nome: "Vinical",
        notaa1: Math.ceil(Math.random() * (10 - 0)),
        notaa2: Math.ceil(Math.random() * (10 - 0)),
        notaa3: Math.ceil(Math.random() * (10 - 0)),
    },
    {
        nome: "Rodrigo",
        notaa1: Math.ceil(Math.random() * (10 - 0)),
        notaa2: Math.ceil(Math.random() * (10 - 0)),
        notaa3: Math.ceil(Math.random() * (10 - 0)),
    },
    {
        nome: "Matheus",
        notaa1: Math.ceil(Math.random() * (10 - 0)),
        notaa2: Math.ceil(Math.random() * (10 - 0)),
        notaa3: Math.ceil(Math.random() * (10 - 0)),
    }
]



for (let i = 0; i < aluno.length; i++){
    media(aluno[i].notaa1, aluno[i].notaa2, aluno[i].notaa3, aluno[i].nome)
}
media(Math.ceil(Math.random() * (10 - 0)), Math.ceil(Math.random() * (10 - 0)), Math.ceil(Math.random() * (10 - 0)), "vinical")
