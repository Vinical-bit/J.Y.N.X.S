import "./detalhes.css"

function Detalhes() {
    return(
        <section id="detalhes">
        <article id="Skills">
            <h2><i className="fa-solid fa-brain"></i>Minhas Skills</h2>
            <div id="skill-container">
                <div className="item">
                    <div className="info">
                        <span className="name">
                            <i className="fa-solid fa-code"></i> HTML5
                        </span>
                        <span className="porcent">
                            80%
                        </span>
                    </div>
                    <div className="barra">
                        <div className="progresso" style={{ width: "80%" }}></div>
                    </div>
                </div>

                <div className="item">
                    <div className="info">
                        <span className="name">
                            <i className="fa-solid fa-code"></i>CSS3
                        </span>
                        <span className="porcent">
                            70%
                        </span>
                    </div>
                    <div className="barra">
                        <div className="progresso" style={{ width: "70%" }}></div>
                    </div>
                </div>

                <div className="item">
                    <div className="info">
                        <span className="name">
                            <i className="fa-solid fa-code"></i>  javaScript
                        </span>
                        <span className="porcent">
                            5%
                        </span>
                    </div>
                    <div className="barra">
                        <div className="progresso" style={{ width: "5%" }}></div>
                    </div>
                </div>

                <div className="item">
                    <div className="info">
                        <span className="name">
                            <i className="fa-solid fa-fingerprint"></i> Comunicação
                        </span>
                        <span className="porcent">
                            100%
                        </span>
                    </div>
                    <div className="barra">
                        <div className="progresso" style={{ width: "100%" }}></div>
                    </div>
                </div>

                <div className="item">
                    <div className="info">
                        <span className="name">
                            <i className="fa-solid fa-fingerprint"></i> Liderança
                        </span>
                        <span className="porcent">
                            90%
                        </span>
                    </div>
                    <div className="barra">
                        <div className="progresso" style={{ width: "90%" }}></div>
                    </div>
                </div>

                <div className="item">
                    <div className="info">
                        <span className="name">
                            <i className="fa-solid fa-fingerprint"></i> Trabalho em equipe
                        </span>
                        <span className="porcent">
                            90%
                        </span>
                    </div>
                    <div className="barra">
                        <div className="progresso" style={{ width: "90%" }}></div>
                    </div>
                </div>

                <div className="item">
                    <div className="info">
                        <span className="name">
                            <i className="fa-solid fa-fingerprint"></i> Adaptalidade
                        </span>
                        <span className="porcent">
                            100%
                        </span>
                    </div>
                    <div className="barra">
                        <div className="progresso" style={{ width: "100%" }}></div>
                    </div>
                </div>

                <div className="item">
                    <div className="info">
                        <span className="name">
                            <i className="fa-solid fa-fingerprint"></i> Diciplina
                        </span>
                        <span className="porcent">
                            100%
                        </span>
                    </div>
                    <div className="barra">
                        <div className="progresso" style={{ width: "100%" }}></div>
                    </div>
                </div>

            </div>
        </article>

        <article id="Formacao">
            <h2><i className="fa-solid fa-graduation-cap"></i>Formação</h2>

            <div id="formacao-container">
                <div className="cursos">
                    <p className="periodo">2023 - 2025</p>
                    <h3 className="instituicao">Colegio Motivo/GGE/Objetivo</h3>
                    <p className="titulacao">Ensino medio</p>
                </div>

                <div className="cursos">
                    <p className="periodo">2025</p>
                    <h3 className="instituicao">Curso em video</h3>
                    <p className="titulacao">Algoritmos e Lógica de Programação</p>
                </div>

                <div className="cursos">
                    <p className="periodo">2025</p>
                    <h3 className="instituicao">Curso em video</h3>
                    <p className="titulacao">Curso HTML5 e CSS3: módulos 1 a 5</p>
                </div>
            </div>

        </article>

        <article id="projetos">
            <h2><i className="fa-solid fa-chart-gantt"></i> Projetos</h2>

            <div id="projeto-container">
                <div className="projeto">
                    <img src="../assets/perfil.jpeg" alt="" className="foto" />
                    <div className="projeto-info">
                        <div className="priodo">2026</div>
                        <div className="titulo">
                            <h3>Projeto de site informativo</h3>
                            <p>Projeto criado para treinar conteudos e imagens dinâmicas.</p>
                        </div>
                        <details className="descricao">
                            <summary>Saiba mais...</summary>
                            <p>Projeto de desenvolvimento de um site informativo sobre o sistema operacional Android, utilizando HTML5 e CSS3. O foco foi aplicar conceitos fundamentais de estrutura semântica, hierarquia de conteúdo e estilização moderna.</p>
                            <br />
                            <p>Durante o desenvolvimento foram utilizados recursos como cores personalizadas, tipografia web, imagens responsivas e organização de layout, criando uma página visualmente agradável e bem estruturada. O projeto também reforçou boas práticas de organização de código e separação entre estrutura (HTML) e estilo (CSS).</p>
                            <a href="https://vinical-bit.github.io/site-desafio/site.html" target="_blank" className="pj"><i className="fa-solid fa-person-walking-dashed-line-arrow-right"></i>Acesse aqui</a>
                    </details>
                    </div>
                </div>

                <div className="projeto">
                    <img src="../assets/perfil.jpeg" alt="" className="foto" />
                    <div className="projeto-info">
                        <div className="priodo">2026</div>
                        <div className="titulo">
                            <h3>Projeto Cordel</h3>
                            <p>Projeto feito para treinar efeito paralax em imagens.</p>
                        </div>
                        <details className="descricao">
                            <summary>Saiba mais...</summary>
                            <p>Criação de uma página inspirada na literatura de cordel, combinando elementos tradicionais com técnicas modernas de desenvolvimento web.</p>
                            <br />
                            <p>O projeto utilizou HTML5 e CSS3, com foco em efeitos de paralaxe, imagens de fundo fixas e tipografia estilizada, proporcionando uma experiência visual diferenciada durante a leitura. Esse exercício ajudou a aprofundar conhecimentos sobre estilização avançada e composição visual de páginas web.</p>
                            <a href="https://vinical-bit.github.io/HTML5-E-CSS3-curso-em-video/cordel/cordel.html" target="_blank" className="pj"><i className="fa-solid fa-person-walking-dashed-line-arrow-right"></i>Acesse aqui</a>
                        </details>
                    </div>
                </div>

                <div className="projeto">
                    <img src="../assets/perfil.jpeg" alt="" className="foto" id="df" />
                    <div className="projeto-info">
                        <div className="priodo">2026</div>
                        <div className="titulo">
                            <h3>Projeto iphone</h3>
                            <p>Projeto feito para treinar posicionamento de imagens e iframes.</p>
                        </div>
                        <details className="descricao">
                            <summary>Saiba mais...</summary>
                            <p>Desenvolvimento de uma interface que simula o acesso a diferentes redes sociais através de um layout interativo. O projeto foi construído com HTML5 e CSS3, explorando conceitos como iframes, navegação por links e organização visual da interface.</p>
                            <br />
                            <p>O objetivo foi praticar a integração entre páginas e a criação de uma experiência de navegação simples e funcional, além de trabalhar posicionamento de elementos e estilização de botões interativos.</p>
                            <a href="https://vinical-bit.github.io/Projeto-iphone/Iphone.html" target="_blank" className="pj"><i className="fa-solid fa-person-walking-dashed-line-arrow-right"></i>Acesse aqui</a>
                        </details>
                    </div>
                </div>

                <div className="projeto">
                    <img src="../assets/perfil.jpeg" alt="" className="foto" />
                    <div className="projeto-info">
                        <div className="priodo">2026</div>
                        <div className="titulo">
                            <h3>Projeto Tela de Login</h3>
                            <p>Projeto feito para treinar formularios e media queries.</p>
                        </div>
                        <details className="descricao">
                            <summary>Saiba mais...</summary>
                            <p>Desenvolvimento de uma interface de login responsiva, aplicando conceitos de formulários em HTML5 e estilização com CSS3.</p>
                            <br />
                            <p>Foram utilizados elementos como inputs personalizados, organização de campos, responsividade e design moderno, com o objetivo de criar uma interface simples, intuitiva e visualmente agradável. O projeto reforçou conhecimentos sobre estrutura de formulários e design de interfaces para usuários.</p>
                            <a href="https://vinical-bit.github.io/tela-login/login.html" target="_blank" className="pj"><i className="fa-solid fa-person-walking-dashed-line-arrow-right"></i>Acesse aqui</a>
                        </details>
                    </div>
                </div>
            </div>
        </article>

    </section>
    )
}

export default Detalhes
