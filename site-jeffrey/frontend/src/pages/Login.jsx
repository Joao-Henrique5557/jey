import Formulario from "../components/Formulario"
import { useState } from "react";
import '../styles/login.css'
import { Link } from "react-router-dom";

const Login = () => {
    const [dark, setDark] = useState(false);

    const toggleTheme = () => {
        if (dark === false) {
            document.documentElement.classList.add("dark");
            setDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setDark(false);
        }
    }

    return <div id="login">
        <span className="material-symbols-outlined" onClick={toggleTheme}>{!dark ? "dark_mode" : "light_mode"}</span>
        <Formulario procedimento="login" />
        <Link to="/cadastro">
            Não tem conta? Cadastre-se
        </Link>
    </div>
}

export default Login