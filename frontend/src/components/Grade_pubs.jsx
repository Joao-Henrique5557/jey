import Artigo from "./Artigo";
import '../styles/components/grade_pubs.css';
import artigos from "../../../../logica-de-desenvolvimento/frontend/artigos_exemplos.js";

const Grade_pubs = () => {
    return (
        <div id="grade_pubs">
            <Artigo nome={artigos.nome} desc={artigos.titulo} thunb={"/jey/linux.png"} />
        </div>
    )
}

export default Grade_pubs;