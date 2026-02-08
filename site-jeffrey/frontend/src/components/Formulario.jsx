import Input from "./Input";
import "../styles/components/formulario.css";

const Formulario = (props) => {
    if(props.tipo === "login"){
        return <form className="formulario">
            <h1>Jeffrey - Login</h1>
            <Input label="E-mail" />
            <Input label="Senha" />
            <button className="btn">Fazer login</button>
        </form>

    } else if(props.tipo === "cadastro"){
        return <form className="formulario">
            <h1>Jeffrey - Cadastro</h1>
            <Input label="Nome" />
            <Input label="E-mail" />
            <Input label="Senha" />
            <button className="btn">Cadastrar</button>
        </form>
    }
}

export default Formulario;