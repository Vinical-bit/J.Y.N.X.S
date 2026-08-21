import './style.css'

function Card() {
    return (
        <div className="container">
            <div className="pokebola">
                <h2>Qual Você prefere?</h2>
                <p className="escolha">Escolha uma das opções abaixo</p>
                <div className="chose">
                    <img src="" alt="" />
                    <label htmlFor="op1">Jujuba</label>
                    <input type="radio" id="op1" name="name" value="jujuba"  />
                </div>
                <div className="chose">
                    <img src="https://wallpapers.com/images/hd/charmander-fire-type-pokemon-806h2dppwu1dhx59.jpg" alt="charmander" className='img'/>
                    <label htmlFor="op2">Charmander</label>
                    <input type="radio" name="pokemon" id="op2" value="charmander" />
                </div>
                <div className="chose">
                    <img src="https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-HD-336x279.png" alt="bulbassauro"className='img' />
                    <label htmlFor="op3">Bulbassauro</label>
                    <input type="radio" name="pokemon" id="op3" value="bulbassauro" />
                </div>
                <div className="chose">
                    <figure><img src="https://th.bing.com/th/id/R.61d90c5b604cf29aca80a5e497ff3781?rik=mbu3hsrIBKTcLQ&riu=http%3a%2f%2fvignette4.wikia.nocookie.net%2fpokemontowerdefensethree%2fimages%2ff%2ff3%2fSquirtle.jpg%2frevision%2flatest%3fcb%3d20160806214440&ehk=fNAdNNVQBuAxi3ieu4Q1X8WVXjdzEpna4WgM3MaLPRA%3d&risl=&pid=ImgRaw&r=0" alt="squirtle" className='img' />
                    <caption>Pokemon</caption>
                    </figure>
                    <label htmlFor="op4">Squirtle</label>
                    <input type="radio" name="pokemon" id="op4" value="squirtle" />
                </div>
            </div>
        </div>
    )
}

export default Card
