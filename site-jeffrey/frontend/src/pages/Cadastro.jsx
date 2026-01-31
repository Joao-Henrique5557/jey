import Formulario from "../components/Formulario"
import { useState } from "react";
import '../styles/login.css'
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
    const [dark, setDark] = useState(false);
    const navigate = useNavigate();

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
        <span className="material-symbols-outlined themeLogin" onClick={toggleTheme}>{!dark ? "dark_mode" : "light_mode"}</span>
        <Formulario procedimento="cadastro" />
        <p onClick={() => navigate("/")}>
            Já tem conta? Faça login
        </p>
    </div>
}

export default Cadastro