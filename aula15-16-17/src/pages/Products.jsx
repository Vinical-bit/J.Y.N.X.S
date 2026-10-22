
import Card from '../components/Card/Card'
import Header from '../components/Header/Header'

import { useEffect, useState } from 'react'
import axios from "axios"

function Products() {
    const [products, setProducts] = useState([])

    const getProduct = async () => {
        let response = await axios.get('https://6a884c6e7b483fa21fe8e72e.mockapi.io/Produtos')
        console.log(response.data)
        setProducts(response.data)
    }

    const postProduto = async () => {
        let nome = document.getElementById('nomeProduto').value
        let descricao = document.getElementById('descricaoProduto').value
        let preco = document.getElementById('precoProduto').value

        let data = {
            nome: nome,
            descricao: descricao,
            preco: preco 
        }

        let response = await axios.post("https://6a884c6e7b483fa21fe8e72e.mockapi.io/Produtos", data)

        getProduct()
    }

    const delProduto = async (id) => {
        await axios.delete("https://6a884c6e7b483fa21fe8e72e.mockapi.io/Produtos/" + id)
        getProduct()
    }

    const alterProduto = async (id) => {
        let novoNome = document.getElementById('novoProduto').value
        let novoDescricao = document.getElementById('novoDescricao').value
        let novoPreco = document.getElementById('novoPreco').value

        let data = {
            nome: novoNome,
            descricao: novoDescricao,
            preco: novoPreco
        }

        await axios.delete("https://6a884c6e7b483fa21fe8e72e.mockapi.io/Produtos/" + id, data)
        getProduct()
    }

    useEffect ( ()=>{
        getProduct()
    }, [])

    return(
        <>
            <Header />
            <input type="text" id='nomeProduto' />
            <input type="text" id='descricaoProduto' />
            <input type="text" id='precoProduto' />
            <button onClick={postProduto}> Salvar </button>
            <div>
                {
                    products.length == 0 ? <h2> Vazio </h2>
                    :
                    products.map(produtos => (
                        <Card
                            key = {produtos.id}
                            titulo = {produtos.nome}
                            valor = {produtos.preco}
                            descricao = {produtos.descricao}
                            del = { () => delProduto(produtos.id)}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Products