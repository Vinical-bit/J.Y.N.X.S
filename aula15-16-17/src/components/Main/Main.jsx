
// hooks: são funções especiais do React que permitem que você "ligue" o estado e outras funcionalidades do React a partir de componentes funcionais. Antes dos hooks, apenas os componentes de classe podiam ter estado e ciclo de vida. Com os hooks, você pode usar estado, efeitos colaterais e outras funcionalidades do React em componentes funcionais.
import { useState } from "react"; // importando o hook useState do React

function Main() {

    //script
    const [nome, setNome] = useState("Vinical");
    //     var    função     estado inicial
    
    // setNome("Vinical"); // atualizando o estado
    
    const [bom, setBom] = useState("bom");

const trocaNome = () => {
    if(nome === "Vinical"){
        setNome("jujuba");
    }
    else{
        setNome("Vinical");
    }
}
const trocaBom = () => {
    bom === "bom" ? setBom("BomBom") : setBom("bom");
}

const [text, setText] = useState("");

const showText = (e) =>
{
    setText(e.target.value)
}

const [number,setNumber] = useState(0)

const add = () => {
    setNumber(number + 1)
}
const reset = () => {
    setNumber(0)
}
const less = () => {
    setNumber(number - 1)
}



    return(
        <>
            <div>
                <h2>Nome atual: {nome} </h2>
                <button onClick={trocaNome}>Troca nome</button>

                <h2>Nome atual: {bom} </h2>
                <button onClick={trocaBom}>Troca estilo</button>

                <hr />

                <div>
                    <input type="text" onInput={showText}/>
                    <p>{text}</p>
                </div>

                <hr />

                <div>
                    <p>Contador : {number}</p>
                    <button onClick={less}> -1</button>
                    <button onClick={reset}>Reset</button>
                    <button onClick={add}>+1</button>
                </div>
            </div>

        </>
    )
}

export default Main