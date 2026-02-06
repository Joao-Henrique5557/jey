import Input from "./Input";
import Btn from "./Btn";

const Formulario = (tipo) => {
    if(tipo.procedimento === "login"){
        return <form className="formulario">
            <h1>Jeffrey - Login</h1>
            <Input label="E-mail" />
            <Input label="Senha" />
            <Btn />
        </form>

    } else if(tipo.procedimento === "cadastro"){
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