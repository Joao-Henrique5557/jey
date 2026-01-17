import Input from "./Input"
import Btn from "./Btn"

const Formulario = ({procedimento}) => {
    if(procedimento === "login"){
        return <div id="formulario">
            <h1>Jeffrey</h1>
            <Input label="E-mail" />
            <Input label="Senha" />
            <Btn />

            <a href="">Não tem  uma conta? clique aqui!</a>
        </div>
    } else if(procedimento === "cadastro"){
        return <div id="formulario">
            <h1>Jeffrey</h1>
            <Input label="Nome" />
            <Input label="E-mail" />
            <Input label="Senha" />
            <Btn />

            <a href="">Já tem  uma conta? clique aqui!</a>
        </div>
    }
}

export default Formulario