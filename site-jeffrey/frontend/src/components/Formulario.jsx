import Input from "./Input";
import { useNavigate } from "react-router-dom";

const Formulario = (props) => {
    const navigate = useNavigate();
    if(props.tipo === "login"){
        return <div className="formulario">
            <h1>Jeffrey - Login</h1>
            <Input label="E-mail" />
            <Input label="Senha" />
            <button onClick={() =>{navigate("/feed")}} className="btn">Login</button>
        </div>
    } else if(props.tipo === "cadastro"){
        return <div className="formulario">
            <h1>Jeffrey - Cadastro</h1>
            <Input label="Nome" />
            <Input label="E-mail" />
            <Input label="Senha" />
            <button className="btn">Cadastrar</button>
        </div>
    }
}

export default Formulario;