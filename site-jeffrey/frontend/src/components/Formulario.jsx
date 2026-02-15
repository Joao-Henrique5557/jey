import Input from "./Input";
import "../styles/components/formulario.css";

const Formulario = ({tipo}) => {
    if(tipo === "login"){
        return (
            <form className="formulario">
                <h1>Jey - Login</h1>
                <Input label="E-mail" />
                <Input label="Senha" />
                <button className="btn">Fazer login</button>
            </form>
        )
    } else if(tipo === "cadastro"){
        return (
            <form className="formulario">
                <h1>Jey - Cadastro</h1>
                <Input label="Nome" />
                <Input label="E-mail" />
                <Input label="Senha" />
                <button className="btn">Cadastrar</button>
            </form>
        )
    }
}

export default Formulario;