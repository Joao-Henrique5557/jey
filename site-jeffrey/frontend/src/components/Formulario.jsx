import Input from "./Input"
import Btn from "./Btn"

const Formulario = (tipo) => {
    if(tipo.procedimento === "login"){
        return <div id="formulario">
            <h1>Jeffrey</h1>
            <Input label="E-mail" />
            <Input label="Senha" />
            <Btn />
        </div>
    } else if(tipo.procedimento === "cadastro"){
        return <div id="formulario">
            <h1>Jeffrey</h1>
            <Input label="Nome" />
            <Input label="E-mail" />
            <Input label="Senha" />
            <Btn />
        </div>
    }
}

export default Formulario