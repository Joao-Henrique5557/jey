import "../styles/components/artigo.css";

const Artigo = ({nome="erro", desc="erro", thunb}) => {
    return (
        <div id="artigo">
            <div className="info_user_artigo">
                <img  id="img_user" src="/jey/perfil_padrao.jpg" alt="erro" />
                <p>{nome}</p>
            </div>
            {thunb !== undefined && (
                <img id="img_artigo" src={thunb} alt="thumbnail_artigo" />
            )}
        
            <div className="main_artigo">
                <div className="reagir_artigo">
                    <span className="material-symbols-outlined">chat</span>
                    <span className="material-symbols-outlined">edit</span>
                    <span className="material-symbols-outlined">favorite</span>

                    <span className="material-symbols-outlined" id="salvar">shield</span>            
                </div>
                <div className="conteudo_artigo">
                    <p>{nome}: {desc}</p>
                    <p id="comentarios">Adicionar Comentario...</p>
                </div>
            </div>
        </div>
    )
}

export default Artigo;