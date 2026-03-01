const Artigo = () => {
    return (
        <div className="artigo">
            <div className="info_user_artigo">
                <img src="../../public/perfil_padrao.jpg" alt="erro" />
                <p>erro</p>
            </div>
            <img src="" alt="thumbnail_artigo" />
            <div className="main_artigo">
                <div className="reagir_artigo">
                    <span material-symbols-outlined>chat</span>
                    <span material-symbols-outlined>edit</span>
                    <span material-symbols-outlined>favorite</span>

                    <span material-symbols-outlined>shield</span>            
                </div>
                <div className="conteudo_artigo">
                    <p>Descrição</p>
                    <p>Adicionar Comentario</p>
                </div>
            </div>
        </div>
    )
}

export default Artigo;