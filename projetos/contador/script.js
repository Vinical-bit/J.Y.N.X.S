// quando clicar em +1 o contador deve aumentar em 1
let contador = 0;
document.querySelector('#aumentar').addEventListener('click',
    function() {
        contador++// aumenta o contador em 1
        document.querySelector('#contadorValor').textContent = contador
    })

document.querySelector('#resetar').addEventListener('click', 
    function(){
        contador = 0
        exibir.textContent = contador
    })

    function diminuir(){
        contador-- // diminuir o contador em 1
        exibir.textContent = contador
    }

