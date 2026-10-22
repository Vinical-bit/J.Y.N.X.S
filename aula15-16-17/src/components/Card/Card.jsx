

function Card(props){
    return (
        <div>
            <h4>{props.titulo}</h4>
            <img src={props.img_prod} alt={props.titulo} />
            <p>{props.descricao}</p>
            <p>{props.valor}</p>
            <button>Comprar</button>
            <button onClick={props.del}>Remover</button>
        </div>
    )
}

export default Card