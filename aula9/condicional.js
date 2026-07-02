// ==============================================================================//
// ==============  Aula 2 - Condicionais e Estruturas de Controle ============== //
// ==============================================================================//


// ============================================
// 1. CONDICIONAIS IF, ELSE IF E ELSE
// ============================================
// Estrutura de decisão para verificar se um número é positivo, negativo ou zero

let name2 = "Vinical";
let nome = "Vinical";

if (name2 == nome){
    console.log("TRUE");
}
else{
    console.log("FALSE");
}



// ============================================
// 2. SINTAXE DO IF, ELSE IF E ELSE
// ============================================
// - IF: Verifica se uma condição é verdadeira e executa um bloco de código
// - ELSE: Executa um bloco de código se a condição do IF for falsa
// - ELSE IF: Verifica uma nova condição se a condição do IF anterior for falsa

let n = 10;

if (n % 2 == 0) {
    console.log("Par");
}
else if(n % 2 == 1) {
    console.log("Impar");
}

// ============================================
// Simples if
//    if (condição) {
//     // código a ser executado se a condição for verdadeira
// }  

// ============================================
// if else
// if (condição) {
//     // código a ser executado se a condição for verdadeira
// } else {
//     // código a ser executado se a condição for falsa
// }

// ============================================
// if else if
// if (condição1) {
//     // código a ser executado se a condição1 for verdadeira
// } else if (condição2) {
//     // código a ser executado se a condição2 for verdadeira
// } else {
//     // código a ser executado se nenhuma das condições anteriores for verdadeira
// }

// ============================================
// Comparadores de condicional
// >  (maior que)
// <  (menor que)
// >= (maior ou igual a)
// <= (menor ou igual a)
// == (igual a)
// != (diferente de)
// === (estritamente igual a)
// !== (estritamente diferente de)







// ============================================
// 3. DESAFIO - VERIFICAR SE O NOME É "GABRIEL"
// ============================================
// Objetivo: Verificar se o nome digitado é "Gabriel" e exibir uma mensagem personalizada

let name1 = "Gabriel"

if (name1 == "Gabriel")
{
    console.log(name1.toUpperCase() + ": true");
    console.log(`Seu nome é ${name1}`)
}



// ============================================
// 4. DESAFIO - VERIFICAR SE O NÚMERO É PAR OU ÍMPAR
// ============================================
// Objetivo: Verificar se um número é par ou ímpar e exibir uma mensagem correspondente

let number = Math.ceil(Math.random() * (10 - 0));

if (number % 2 == 0)
{
    console.log(number + " É Par")
}
else
{
    console.log(number + " É impar")
}


// ============================================
// 5. DESAFIO - VERIFICAR SE A PESSOA É MAIOR DE IDADE
// ============================================
// Objetivo: Verificar se a idade digitada é maior ou igual a 18 anos e exibir uma mensagem correspondente

let age = 19

if (age < 18)
{
    console.log("É menor de idade")
}
else
{
    console.log ("É maior de idade")
}

let age1 = Math.ceil(Math.random() * (10 - 0));

age1 > 17 ? console.log("maior de idade " + age1) : console.log("menor de idade " + age1)


// ============================================
// 6. DESAFIO - VERIFICAR SE A MEDIA DE 3 NOTAS É APROVADA
// ============================================
// Objetivo: Calcular a média de 3 notas e verificar se o aluno foi aprovado (média >= 6)

let n1 = Math.ceil(Math.random() * (10 - 0));
let n2 = Math.ceil(Math.random() * (10 - 0));
let n3 = Math.ceil(Math.random() * (10 - 0));
let m = (n1 + n2 + n3)/3

if (m > 6 && m <= 10)
    {
        console.log("Aluno aprovado com media: " + m)
    }
    
    else if (m > 3 && m < 7)
        {
            console.log ("Recuperação com media: " + m + "OBS: Vai estudar vagabundo") 
        }
        
        else if (m < 4)
        {
            console.log("Reprovado com media " + m)
        }

        else
        {
            console.log("Tentativa de hackear o sistema " + m)
        }
        
        // ============================================
        // 7. DESAFIO - VERIFICAR SE O ALUNO PASSOU NA PROVA
        // ============================================
        // Objetivo: Verificar se a nota do aluno é maior ou igual a 6 para determinar se ele passou ou não
        
        let prova =  Math.ceil(Math.random() * (10 - 0));

        if (prova > 6 && prova <= 10)
        {
            console.log(`Passou com nota : ${prova}`)
        }

        else
        {
            console.log(`Não passou com nota : ${prova}`)
        }



