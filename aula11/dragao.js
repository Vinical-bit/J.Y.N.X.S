// Pegamos a referência do elemento uma única vez e guardamos na variável,
// em vez de usar document.querySelector toda hora (mais performático)
const dragao = document.getElementById("dragao")

// Posição ATUAL do dragão na tela (onde ele está desenhado agora)
let posX = window.innerWidth / 2
let posY = window.innerHeight / 2

// Posição ALVO (onde o mouse está). O dragão vai perseguir esse ponto
// aos poucos, em vez de teleportar pra lá -- isso é o que cria o efeito
// de "seguir com atraso" em vez de grudar no cursor
let alvoX = posX
let alvoY = posY

// Sempre que o mouse se move, só atualizamos o ALVO.
// Quem realmente move o dragão é o loop de animação lá embaixo
window.addEventListener("mousemove", (evento) => {
    alvoX = evento.clientX
    alvoY = evento.clientY
})

function animar() {
    // "fator" controla a velocidade com que o dragão alcança o mouse.
    // Quanto mais perto de 1, mais rápido/colado; mais perto de 0, mais preguiçoso.
    // Essa técnica se chama "interpolação linear" (lerp)
    const fator = 0.08

    // A cada frame, a posição atual anda uma fração da distância
    // que falta até o alvo -- por isso o movimento fica suave
    const diferencaX = alvoX - posX
    const diferencaY = alvoY - posY

    posX += diferencaX * fator
    posY += diferencaY * fator

    // Calculamos o ângulo do movimento com atan2 para o dragão "olhar"
    // pra direção que ele está indo, em vez de ficar sempre com a mesma cara
    const angulo = Math.atan2(diferencaY, diferencaX) * (180 / Math.PI)

    // Só giramos o dragão se ele realmente estiver se movendo,
    // senão com diferenca quase 0 o ângulo fica instável (tremendo)
    const distancia = Math.sqrt(diferencaX * diferencaX + diferencaY * diferencaY)
    const rotacao = distancia > 1 ? angulo : 0

    // translate posiciona o dragão e rotate gira ele na direção do movimento.
    // "+ 90deg" é só um ajuste porque o emoji 🐉 já nasce "olhando" de lado,
    // então sem esse ajuste ele apontaria pro lado errado
    dragao.style.transform =
        `translate(-50%, -50%) translate(${posX}px, ${posY}px) rotate(${rotacao + 90}deg)`

    // requestAnimationFrame chama animar() de novo antes do próximo repaint
    // da tela (~60x por segundo). É melhor que setInterval porque o navegador
    // sincroniza com a taxa de atualização real da tela, economizando recursos
    requestAnimationFrame(animar)
}

// Dispara o loop de animação pela primeira vez
animar()
