import Input from "./Input";
import { useNavigate } from "react-router-dom";

const Formulario = (props) => {
    if(props.tipo === "login"){
        return <form className="formulario">
            <h1>Jeffrey - Login</h1>
            <Input label="E-mail" />
            <Input label="Senha" />
            <Btn />
        </form>

    } else if(props.tipo === "cadastro"){
        return <form className="formulario">
            <h1>Jeffrey - Cadastro</h1>
            <Input label="Nome" />
            <Input label="E-mail" />
            <Input label="Senha" />
            <Btn />
        </form>
    }
}

export default Formulario;