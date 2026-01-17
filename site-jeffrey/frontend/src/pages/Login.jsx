import Formulario from "../components/Formulario"
import { useState } from "react";

const Login = () => {
    const [theme, setTheme] = useState("light_mode");

    return <div id="login">
        

        <Formulario procedimento="login" />
    </div>
}


export default Login