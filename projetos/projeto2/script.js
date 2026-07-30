function getWord() {
    let wordValue = document.querySelector('#textoInput').value

    document.querySelector('#textoPreview').textContent = wordValue

    console.log(wordValue)
    console.log(wordValue.length)
    
    document.querySelector('#charCount').textContent = 'CARACTERES: ' + wordValue.length

}