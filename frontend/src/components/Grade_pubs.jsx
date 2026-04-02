import Artigo from "./Artigo";
import '../styles/components/grade_pubs.css';

const Grade_pubs = () => {
    return (
        <div id="grade_pubs">
            <Artigo nome={"John Doe"} desc={"Artigo de exemplo"} thunb={"/jey/linux.png"} />
        </div>
    )
}

export default Grade_pubs;