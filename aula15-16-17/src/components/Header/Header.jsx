import perfil from '../../assets/perfil.jpeg'
import { Link } from 'react-router-dom'
import style from './header.module.css'

function Header() {
    return (
        <header>
            <section className={style.foto}>
                <img src={perfil} alt="" /> 
            </section>

            <nav>
                <ul>
                    <li> <Link to={'/'}> Home </Link> </li>
                    <li> <Link to={'/products'} > Produtos </Link> </li>
                    <li> <Link to={'/sobre'}></Link> Sobre </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header // aqui estou chamando o componente Header para ser usado em outro arquivo
//a img esta entre {} porque é uma variavel em js