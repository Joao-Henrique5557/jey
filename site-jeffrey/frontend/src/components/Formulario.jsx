import Input from "./Input";
import Btn from "./Btn";

const Formulario = (tipo) => {
    if(tipo.procedimento === "login"){
        return <div className="formulario">
            <h1>Jeffrey - Login</h1>
            <Input label="E-mail" />
            <Input label="Senha" />
            <Btn />
        </div>
    } else if(tipo.procedimento === "cadastro"){
        return <div className="formulario">
            <h1>Jeffrey - Cadastro</h1>
            <Input label="Nome" />
            <Input label="E-mail" />
            <Input label="Senha" />
            <Btn />
        </div>
    }
}

export default Formulario;