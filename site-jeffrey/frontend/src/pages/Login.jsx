import Formulario from "../components/Formulario"
import { useState } from "react";
import '../styles/login.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
    // Variaveis

    const [dark, setDark] = useState(false);
    const navigate = useNavigate();

    // funções
    
    const toggleTheme = () => {
        if (dark === false) {
            document.documentElement.classList.add("dark");
            setDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setDark(false);
        }
    }

    // Return

    return <div id="login">
        <span className="material-symbols-outlined themeLogin" onClick={toggleTheme}>
            {!dark ? "dark_mode" : "light_mode"}
        </span>
        <Formulario tipo="login" />
        <p onClick={() => navigate("/cadastro")}>Não tem conta? Cadastre-se</p>
    </div>
}

export default Login